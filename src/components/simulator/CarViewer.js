import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { interiorVisibility } from './tint';

// Car model: "2024 Tesla Model 3" by RBLXSupercars (CC BY 4.0), with the
// brand emblems and lettering removed and the file compressed for the web.
const MODEL_URL = `${process.env.PUBLIC_URL}/simulator/car.glb`;

// Material and part names in the model file. One glass material is shared
// with the headlight and taillight lenses, so windows are picked by part:
// the door windows and the glazing (windshield, roof and rear window).
const PAINT_MATERIAL = 'Geohoodsub00021Mtl';
const GLASS_MATERIALS = new Set(['Geoextwindow0021Mtl', 'Geodoorl2sub31Mtl', 'Geodoorr2sub31Mtl']);
const WINDOW_PARTS = /^(door-|glazing)/;

// Pearl white paint.
const PAINT = new THREE.MeshPhysicalMaterial({
  color: 0xf4f5f7,
  metalness: 0.05,
  roughness: 0.3,
  clearcoat: 1,
  clearcoatRoughness: 0.03,
});

// Soft dark blob under the car, so it sits on the studio floor.
function makeFloorShadow(width, length) {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(0,0,0,0.85)');
  g.addColorStop(0.55, 'rgba(0,0,0,0.5)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(width * 1.5, length * 1.3),
    new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(canvas), transparent: true, depthWrite: false }),
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 0.002;
  return mesh;
}

// Shown in place of the car when the browser can't run 3D. The rest of the
// page keeps working.
export function Unsupported() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-ink-700 px-6 text-center">
      <p className="m-0 text-base font-semibold text-white">The 3D preview can&rsquo;t run in this browser</p>
      <p className="m-0 max-w-md text-sm leading-relaxed text-fg-muted">
        This usually means hardware (graphics) acceleration is turned off. Turn it on in your browser&rsquo;s
        settings and reload the page, or try another browser.
      </p>
    </div>
  );
}

/**
 * Live 3D car in a studio. Drag to rotate, scroll or pinch to zoom. Every
 * window shows the film shade `vlt` (null = no tint).
 */
function CarViewer({ vlt }) {
  const mountRef = useRef(null);
  const glassRef = useRef([]);
  const vltRef = useRef(vlt);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  // True when the browser can't run 3D (e.g. hardware acceleration is off).
  const [unsupported, setUnsupported] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
        // Refuse slow software rendering (what browsers fall back to when
        // hardware acceleration is off) instead of freezing the page.
        failIfMajorPerformanceCaveat: true,
      });
    } catch (e) {
      setUnsupported(true);
      return undefined;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.touchAction = 'none';
    // The graphics driver can drop the 3D context at any time (e.g. GPU reset).
    const onContextLost = (e) => {
      e.preventDefault();
      setUnsupported(true);
    };
    renderer.domElement.addEventListener('webglcontextlost', onContextLost);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envMap;

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 200);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.maxPolarAngle = Math.PI * 0.47;
    controls.minPolarAngle = Math.PI * 0.2;
    controls.addEventListener('start', () => {
      controls.autoRotate = false;
    });

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      fit();
    };

    // Distance that keeps the whole car in view at the current aspect ratio
    // (phones are narrow, so the camera has to sit further back).
    let carRadius = 0;
    const fit = () => {
      if (!carRadius) return;
      const halfH = THREE.MathUtils.degToRad(camera.fov / 2);
      const halfW = Math.atan(Math.tan(halfH) * camera.aspect);
      const distance = Math.max(carRadius * 2.9, (carRadius * 1.15) / Math.tan(halfW));
      controls.minDistance = distance * 0.55;
      controls.maxDistance = distance * 1.4;
      const offset = camera.position.clone().sub(controls.target).setLength(distance);
      camera.position.copy(controls.target).add(offset);
      controls.update();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();

    let frame;
    let disposed = false;
    const loop = () => {
      frame = requestAnimationFrame(loop);
      controls.update();
      renderer.render(scene, camera);
    };
    loop();

    // One shared glass material for every window, so a shade change is a
    // single update. It is a dark see-through layer: its opacity is how much
    // of the cabin the film hides. Cheaper than true refraction, which
    // matters on phones.
    const glass = new THREE.MeshPhysicalMaterial({
      color: 0x07090c,
      transparent: true,
      roughness: 0.05,
      metalness: 0,
      // The glass needs its own copy of the studio reflections: three.js
      // ignores envMapIntensity for materials that only use the scene's.
      // Kept low so the studio lights don't glare off the windows.
      envMap,
      envMapIntensity: 0.35,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    glass.opacity = 1 - interiorVisibility(vltRef.current);
    glassRef.current = [glass];

    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load(
      MODEL_URL,
      (gltf) => {
        if (disposed) return;
        const car = gltf.scene;
        car.traverse((obj) => {
          if (!obj.isMesh) return;
          const name = obj.material.name;
          if (name === PAINT_MATERIAL) obj.material = PAINT;
          else if (GLASS_MATERIALS.has(name) && WINDOW_PARTS.test(obj.name)) obj.material = glass;
        });

        // Centre the car on the floor and frame it.
        const box = new THREE.Box3().setFromObject(car);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        car.position.sub(new THREE.Vector3(center.x, box.min.y, center.z));
        scene.add(car);
        scene.add(makeFloorShadow(size.x, size.z));

        // Start at a front three-quarter view, a little above window height.
        carRadius = Math.max(size.x, size.z) * 0.5;
        controls.target.set(0, size.y * 0.38, 0);
        camera.position.set(carRadius * 1.8, size.y * 1.05, carRadius * 2.26);
        fit();
        setReady(true);
      },
      (e) => e.total && setProgress(Math.round((e.loaded / e.total) * 100)),
      () => setError(true),
    );

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.dispose();
      envMap.dispose();
      pmrem.dispose();
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry.dispose();
          (Array.isArray(obj.material) ? obj.material : [obj.material]).forEach((m) => m.dispose());
        }
      });
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
    // The scene is built once; shade changes are applied by the effect below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    vltRef.current = vlt;
    glassRef.current.forEach((m) => {
      m.opacity = 1 - interiorVisibility(vlt);
    });
  }, [vlt]);

  return (
    <div className="relative h-full w-full">
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />
      {unsupported ? (
        <Unsupported />
      ) : !ready && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm text-fg-muted">
          {error ? (
            'The 3D car could not be loaded. Please refresh the page.'
          ) : (
            <>
              <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
                <div className="h-full bg-brand transition-[width]" style={{ width: `${progress}%` }} />
              </div>
              Loading car&hellip; {progress}%
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default CarViewer;

import React from 'react';
import logo from '../../assets/logo-mark.png';

/**
 * HeroBackdrop — full-bleed scenery behind the hero copy.
 *
 * With no `photo`, it draws a minimal studio in CSS: dark shop wall with
 * garage-door panels, ceiling LED strips, the OJ logo lit as a wall sign,
 * and a glossy floor. Pass `photo` (an imported image) to use a real
 * photograph instead; the same overlays keep the copy on the left readable.
 */

const PANE_COLS = 5;
const PANE_ROWS = 3;
// Panes that read as faintly lit from inside, like the mockup's windows.
const LIT_PANES = new Set([1, 3, 6, 8, 12]);

function StudioScene() {
  return (
    <>
      {/* Back wall */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #0B1119 0%, #080C12 55%, #05070A 100%)' }}
      />

      {/* Garage-door / window panes on the right wall */}
      <div
        className="absolute right-[4%] top-[9%] hidden h-[48%] w-[58%] gap-[6px] sm:grid"
        style={{
          gridTemplateColumns: `repeat(${PANE_COLS}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${PANE_ROWS}, minmax(0, 1fr))`,
          maskImage: 'linear-gradient(90deg, transparent 0%, #000 35%, #000 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 35%, #000 100%)',
        }}
      >
        {Array.from({ length: PANE_COLS * PANE_ROWS }, (_, i) => (
          <div
            key={i}
            className="border border-white/[0.05]"
            style={{
              background: LIT_PANES.has(i)
                ? 'linear-gradient(180deg, rgba(160,200,240,0.10), rgba(40,60,80,0.10))'
                : 'linear-gradient(180deg, rgba(120,150,180,0.035), rgba(10,15,20,0.2))',
            }}
          />
        ))}
      </div>

      {/* Ceiling LED strips */}
      {[
        { left: '38%', width: '16%' },
        { left: '58%', width: '16%' },
        { left: '78%', width: '16%' },
      ].map((bar) => (
        <div
          key={bar.left}
          className="absolute top-[4%] hidden h-[3px] rounded-full bg-white/80 lg:block"
          style={{ ...bar, boxShadow: '0 0 14px 2px rgba(190,225,255,0.55), 0 0 60px 8px rgba(120,180,255,0.18)' }}
        />
      ))}

      {/* Lit wall sign */}
      <img
        src={logo}
        alt=""
        className="absolute right-[7%] top-[15%] hidden w-[15%] max-w-[260px] opacity-90 lg:block"
        style={{ filter: 'drop-shadow(0 0 10px rgba(30,158,255,0.75)) drop-shadow(0 0 40px rgba(30,158,255,0.35))' }}
      />

      {/* Floor: horizon line + glossy fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-[38%]"
        style={{
          background: 'linear-gradient(180deg, #0D131B 0%, #080C11 45%, #05070A 100%)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      />
      {/* Light strips reflected in the floor */}
      <div
        className="absolute inset-x-0 bottom-0 hidden h-[38%] lg:block"
        style={{
          background:
            'radial-gradient(40% 18% at 70% 12%, rgba(150,200,255,0.08), transparent 70%)',
        }}
      />
    </>
  );
}

function HeroBackdrop({ photo }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {photo ? (
        <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover object-right" />
      ) : (
        <StudioScene />
      )}

      {/* Blue key light around the car */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(45% 40% at 72% 58%, rgba(30,158,255,0.13), transparent 70%)' }}
      />
      {/* Keep the copy side dark and readable */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            'linear-gradient(90deg, #05070A 0%, rgba(5,7,10,0.92) 28%, rgba(5,7,10,0.45) 52%, rgba(5,7,10,0) 72%)',
        }}
      />
      <div className="absolute inset-0 bg-ink/60 lg:hidden" />
      {/* Blend into the trust bar and page below */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/4"
        style={{ background: 'linear-gradient(0deg, #05070A 0%, rgba(5,7,10,0) 100%)' }}
      />
    </div>
  );
}

export default HeroBackdrop;

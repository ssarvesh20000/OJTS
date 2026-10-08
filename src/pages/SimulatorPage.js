import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/layout/Section';
import ErrorBoundary from '../components/layout/ErrorBoundary';
import CarViewer, { Unsupported } from '../components/simulator/CarViewer';
import { SHADES, WINDOW_ZONES, swatchColor } from '../components/simulator/tint';
import { usePageTitle } from '../components/layout/RouteEffects';

// Studio backdrop behind the transparent 3D canvas.
const STUDIO_BG = {
  background:
    'radial-gradient(120% 90% at 50% 35%, #2a3442 0%, #161d27 45%, #0a0e14 80%), #0a0e14',
};

// Starting setup: a common install (35% on the sides and rear), with the
// windshield and sunroof left as they come.
const DEFAULT_SHADES = { front: 35, rear: 35, back: 35, windshield: null, roof: null };

const shadeFor = (vlt) => SHADES.find((s) => s.vlt === vlt);

function SimulatorPage() {
  usePageTitle('BetaSim');
  const [shades, setShades] = useState(DEFAULT_SHADES);
  const [zoneId, setZoneId] = useState('front');
  const zone = WINDOW_ZONES.find((z) => z.id === zoneId);
  const vlt = shades[zoneId];
  const shade = shadeFor(vlt);
  const allSame = WINDOW_ZONES.every((z) => shades[z.id] === vlt);

  const setZoneShade = (value) => setShades((prev) => ({ ...prev, [zoneId]: value }));
  const applyToAll = () => setShades(Object.fromEntries(WINDOW_ZONES.map((z) => [z.id, vlt])));

  return (
    <>
      <PageHeader compact eyebrow="Tint Simulator (Beta)" title="BetaSim">
        Choose a window, then pick its shade. Drag the car to turn it, and scroll or pinch to zoom.
      </PageHeader>

      <Section spacing="compact">
        <div className="overflow-hidden rounded-card border border-white/10 bg-ink-700 shadow-card">
          <div className="relative h-[340px] sm:h-[460px] lg:h-[520px]" style={STUDIO_BG}>
            <ErrorBoundary fallback={<Unsupported />}>
              <CarViewer shades={shades} />
            </ErrorBoundary>
            <p className="pointer-events-none absolute bottom-3 left-1/2 m-0 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-black/40 px-3 py-1.5 text-xs text-white/70">
              <FontAwesomeIcon icon={faHand} /> Drag to rotate
            </p>
          </div>

          <div className="border-t border-white/10 p-5 sm:p-6">
            <h2 className="m-0 text-sm font-bold uppercase tracking-[0.18em] text-brand">Window Tint</h2>

            {/* Window zones, each showing its current shade */}
            <div role="tablist" aria-label="Window" className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {WINDOW_ZONES.map((z) => {
                const active = z.id === zoneId;
                const current = shadeFor(shades[z.id]);
                return (
                  <button
                    key={z.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setZoneId(z.id)}
                    className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition ${
                      active ? 'border-brand bg-brand/10' : 'border-white/10 bg-ink-800 hover:border-white/30'
                    }`}
                  >
                    <span
                      aria-hidden
                      className="block h-6 w-6 shrink-0 rounded-full border border-white/20"
                      style={{ background: swatchColor(shades[z.id]) }}
                    />
                    <span className="min-w-0">
                      <span className={`block truncate text-sm font-semibold ${active ? 'text-white' : 'text-white/85'}`}>{z.short}</span>
                      <span className="block text-xs text-fg-muted">{current.vlt == null ? 'No tint' : `${current.label} VLT`}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="m-0 text-sm text-fg-muted">
                <span className="font-semibold text-white">
                  {zone.label}: {shade.vlt == null ? 'No tint' : `${shade.label} VLT`}
                </span>
                {' '}&middot; {shade.note}
              </p>
              {!allSame && (
                <button
                  type="button"
                  onClick={applyToAll}
                  className="self-start bg-transparent p-0 text-sm font-semibold text-brand hover:text-brand-300 sm:self-auto"
                >
                  Use {shade.vlt == null ? 'no tint' : shade.label} on all windows
                </button>
              )}
            </div>

            <div role="radiogroup" aria-label={`${zone.label} shade`} className="mt-4 flex flex-wrap gap-x-4 gap-y-4 sm:gap-x-6">
              {SHADES.map((s) => {
                const selected = s.vlt === vlt;
                return (
                  <button
                    key={s.label}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setZoneShade(s.vlt)}
                    className="group flex w-14 flex-col items-center gap-2 bg-transparent p-0 text-xs font-semibold text-white/80"
                  >
                    <span
                      className={`block h-11 w-11 rounded-full border transition ${
                        selected ? 'border-brand ring-2 ring-brand ring-offset-2 ring-offset-ink-700' : 'border-white/20 group-hover:border-white/50'
                      }`}
                      style={{ background: swatchColor(s.vlt) }}
                    />
                    <span className={selected ? 'text-white' : ''}>{s.label}</span>
                  </button>
                );
              })}
            </div>
            <p className="m-0 mt-5 text-xs text-fg-subtle">
              Shades are approximate and vary with screen and lighting. VLT is the share of light the film lets
              through, so a lower number is darker.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

export default SimulatorPage;

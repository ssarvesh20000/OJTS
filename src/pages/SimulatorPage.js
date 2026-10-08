import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/layout/Section';
import ErrorBoundary from '../components/layout/ErrorBoundary';
import CarViewer, { Unsupported } from '../components/simulator/CarViewer';
import { SHADES, swatchColor } from '../components/simulator/tint';
import { usePageTitle } from '../components/layout/RouteEffects';

// Studio backdrop behind the transparent 3D canvas.
const STUDIO_BG = {
  background:
    'radial-gradient(120% 90% at 50% 35%, #2a3442 0%, #161d27 45%, #0a0e14 80%), #0a0e14',
};

function SimulatorPage() {
  usePageTitle('BetaSim');
  const [vlt, setVlt] = useState(35);
  const shade = SHADES.find((s) => s.vlt === vlt);

  return (
    <>
      <PageHeader compact eyebrow="Tint Simulator (Beta)" title="BetaSim">
        Pick a shade to see how dark it looks. Drag the car to turn it, and scroll or pinch to zoom.
      </PageHeader>

      <Section spacing="compact">
        <div className="overflow-hidden rounded-card border border-white/10 bg-ink-700 shadow-card">
          <div className="relative h-[340px] sm:h-[460px] lg:h-[520px]" style={STUDIO_BG}>
            <ErrorBoundary fallback={<Unsupported />}>
              <CarViewer vlt={vlt} />
            </ErrorBoundary>
            <p className="pointer-events-none absolute bottom-3 left-1/2 m-0 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-black/40 px-3 py-1.5 text-xs text-white/70">
              <FontAwesomeIcon icon={faHand} /> Drag to rotate
            </p>
          </div>

          <div className="border-t border-white/10 p-5 sm:p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="m-0 text-sm font-bold uppercase tracking-[0.18em] text-brand">Window Tint</h2>
              <p className="m-0 text-sm text-fg-muted">
                <span className="font-semibold text-white">{shade.vlt == null ? 'No tint' : `${shade.label} VLT`}</span>
                {' '}&middot; {shade.note}
              </p>
            </div>

            <div role="radiogroup" aria-label="Tint shade" className="mt-5 flex flex-wrap gap-x-4 gap-y-4 sm:gap-x-6">
              {SHADES.map((s) => {
                const selected = s.vlt === vlt;
                return (
                  <button
                    key={s.label}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setVlt(s.vlt)}
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
            {/* Required credit for the CC BY 4.0 car model */}
            <p className="m-0 mt-2 text-[11px] text-fg-subtle">
              3D car model by{' '}
              <a href="https://sketchfab.com/RBLXSupercars" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                RBLXSupercars
              </a>
              , licensed under{' '}
              <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                CC BY 4.0
              </a>
              . Modified: badges removed, paint and glass restyled.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

export default SimulatorPage;

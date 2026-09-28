import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import Container from '../layout/Container';

/* Line-art step icons drawn to match the mockup's thin blue outline style. */
const iconProps = {
  viewBox: '0 0 64 64',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'h-9 w-9 sm:h-10 sm:w-10',
  'aria-hidden': true,
};

function BrokenGlassIcon() {
  return (
    <svg {...iconProps}>
      <path d="M8 10h34l14 14v30H8z" />
      <path d="M20 10l6 14-10 8 12 6-4 16" />
      <path d="M26 24l12-4 6 10-8 6 10 10" />
      <path d="M44 6l4 6 6-2-2 6 6 4" />
    </svg>
  );
}

function NewWindowIcon() {
  return (
    <svg {...iconProps}>
      <path d="M14 8h40l-4 48H10z" />
      <path d="M34 8l-2 48" />
      <path d="M12 32h40" />
    </svg>
  );
}

function ReTintIcon() {
  return (
    <svg {...iconProps}>
      <path d="M10 56l6-28h36l-6 28z" />
      <path d="M22 44l8-8M30 48l12-12" />
      <path d="M40 8l14 14-6 6-14-14z" />
      <path d="M36 22l-6 8" />
    </svg>
  );
}

const STEPS = [
  { label: 'Break\u2011In', icon: <BrokenGlassIcon /> }, // non-breaking hyphen
  { label: 'Window Replaced', icon: <NewWindowIcon /> },
  { label: 'OJ Re\u2011Tints It', icon: <ReTintIcon /> },
];

function StepArrow() {
  return <FontAwesomeIcon icon={faArrowRight} className="shrink-0 text-sm text-brand/80" aria-hidden />;
}

/**
 * NoFaultWarranty — condensed, high-emphasis bar directly under the hero (the
 * trust bar follows it), so the warranty is part of the first screen.
 * Brand-blue border and glow set it apart from the neutral trust bar below.
 */
function NoFaultWarranty() {
  return (
    <section id="warranty" className="w-full m-0 bg-ink p-0 scroll-mt-24">
      <Container>
        <div className="relative z-10 -mt-6 overflow-hidden rounded-card border border-brand/50 bg-ink-700 shadow-glow">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(30,158,255,0.16) 0%, rgba(30,158,255,0.05) 45%, rgba(30,158,255,0) 70%)',
            }}
          />

          <div className="relative grid items-center gap-6 p-5 sm:p-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-10 lg:px-8 lg:py-4">
            {/* What it is */}
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faShieldHalved} className="shrink-0 text-4xl text-brand" />
              <div>
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                  The OJ No-Fault Warranty&trade;
                </p>
                <h2 className="m-0 mt-1 font-display text-xl font-extrabold uppercase leading-tight text-white sm:text-2xl lg:whitespace-nowrap lg:text-xl xl:text-2xl">
                  We&rsquo;ve got your tint covered.
                </h2>
                <p className="m-0 mt-1 text-sm leading-snug text-fg-muted">
                  Glass broken and replaced? We re-tint the new glass free.
                </p>
              </div>
            </div>

            {/* How it works */}
            <ol className="m-0 flex list-none items-center justify-between gap-2 p-0 sm:gap-4">
              {STEPS.map((step, i) => (
                <React.Fragment key={step.label}>
                  <li className="flex max-w-[6.5rem] flex-col items-center gap-2 text-center text-brand xl:max-w-none">
                    {step.icon}
                    <span className="text-[10px] font-bold uppercase leading-tight tracking-wide text-white sm:text-[11px] xl:whitespace-nowrap">
                      {step.label}
                    </span>
                  </li>
                  <li aria-hidden className="flex items-center">
                    <StepArrow />
                  </li>
                </React.Fragment>
              ))}
              {/* Outcome, repeated large on desktop in the right column */}
              <li className="flex flex-col items-center gap-2 text-center lg:hidden">
                <span className="font-display text-3xl font-extrabold leading-none text-brand">$0</span>
                <span className="text-[10px] font-bold uppercase tracking-wide text-white">Tint Charge</span>
              </li>
            </ol>

            {/* The payoff */}
            <div className="hidden items-center gap-5 lg:flex">
              <div className="text-center">
                <p className="m-0 font-display text-5xl font-extrabold leading-none text-brand">$0</p>
                <p className="m-0 mt-1 max-w-[7rem] text-[11px] font-bold uppercase leading-tight tracking-wide text-white xl:max-w-none xl:whitespace-nowrap">
                  Additional Tint Charge
                </p>
                <p className="m-0 mt-1 text-[10px] text-fg-subtle 2xl:hidden">Subject to warranty terms.</p>
              </div>
              <div className="hidden h-12 w-px bg-white/10 2xl:block" aria-hidden />
              <div className="hidden 2xl:block">
                <HashLink
                  to="/#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand hover:text-brand-300"
                >
                  Warranty Details <FontAwesomeIcon icon={faArrowRight} />
                </HashLink>
                <p className="m-0 mt-1 text-[11px] text-fg-subtle">Subject to warranty terms.</p>
              </div>
            </div>
            <p className="m-0 text-center text-[11px] text-fg-subtle lg:hidden">
              Subject to warranty terms.{' '}
              <HashLink to="/#contact" className="font-semibold text-brand">
                Warranty details
              </HashLink>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default NoFaultWarranty;

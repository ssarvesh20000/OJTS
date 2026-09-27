import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Section from '../layout/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

/* Line-art step icons drawn to match the mockup's thin blue outline style. */
const iconProps = {
  viewBox: '0 0 64 64',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'h-14 w-14 sm:h-16 sm:w-16',
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
  { label: 'Break-In', icon: <BrokenGlassIcon /> },
  { label: 'Window Replaced', icon: <NewWindowIcon /> },
  { label: 'OJ Re-Tints It', icon: <ReTintIcon /> },
  {
    label: 'No Additional Tint Charge',
    icon: (
      <span className="flex h-14 items-center font-display text-5xl font-extrabold text-brand sm:h-16">
        $0
      </span>
    ),
  },
];

function StepArrow() {
  return (
    <FontAwesomeIcon
      icon={faArrowRight}
      className="hidden shrink-0 text-lg text-brand sm:block"
      aria-hidden
    />
  );
}

function NoFaultWarranty() {
  return (
    <Section id="warranty" spacing="compact">
      <div className="rounded-card border border-white/10 bg-ink-800 p-6 shadow-card sm:p-10">
        <SectionHeading
          eyebrow={<>The OJ No-Fault Warranty&trade;</>}
          title="We've got your tint covered."
        />

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          {/* Explainer */}
          <div className="text-center lg:text-left">
            <p className="m-0 text-base leading-relaxed text-white/85">
              If your tinted window is damaged and the glass needs to be replaced, we will
              re-tint the replacement glass at no additional charge.
            </p>
            <p className="m-0 mt-3 text-xs text-fg-subtle">Subject to warranty terms.</p>
            <Button to="/#contact" variant="outline" size="sm" className="mt-6 text-xs">
              Learn More About Our Warranties <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </div>

          {/* How it works */}
          <ol className="m-0 grid list-none grid-cols-2 gap-8 p-0 sm:flex sm:items-start sm:justify-between sm:gap-3">
            {STEPS.map((step, i) => (
              <React.Fragment key={step.label}>
                <li className="flex flex-col items-center gap-3 text-center sm:flex-1">
                  <span className="text-brand">{step.icon}</span>
                  <span className="max-w-[9rem] text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
                    {step.label}
                  </span>
                </li>
                {i < STEPS.length - 1 && (
                  <li aria-hidden className="hidden sm:flex sm:h-16 sm:items-center">
                    <StepArrow />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

export default NoFaultWarranty;

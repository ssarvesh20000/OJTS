import React from 'react';

/**
 * SectionHeading — small blue eyebrow over an uppercase display title.
 *
 * The mockup repeats this pairing on every section, so it lives here to
 * keep sizes and tracking identical everywhere.
 *
 * Props:
 *   eyebrow   — small blue label above the title (optional)
 *   title     — main heading text
 *   align     — 'center' | 'left'
 *   as        — heading level (default 'h2')
 */
function SectionHeading({ eyebrow, title, align = 'center', as: Tag = 'h2', className = '' }) {
  const alignment = align === 'left' ? 'text-left' : 'text-center';
  return (
    <div className={`${alignment} ${className}`}>
      {eyebrow && (
        <p className="m-0 mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          {eyebrow}
        </p>
      )}
      <Tag className="m-0 font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
        {title}
      </Tag>
    </div>
  );
}

export default SectionHeading;

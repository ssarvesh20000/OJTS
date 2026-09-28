import React from 'react';
import Container from '../layout/Container';

/**
 * PageHeader — the opening band of every page other than home: eyebrow,
 * title and an optional intro line, over a soft brand glow.
 */
function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="relative w-full m-0 overflow-hidden border-b border-white/10 bg-ink px-0 pb-10 pt-12 sm:pb-14 sm:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(900px 300px at 20% 0%, rgba(30,158,255,0.14), transparent 70%)' }}
      />
      <Container className="relative">
        {eyebrow && (
          <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        )}
        <h1 className="m-0 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {children && <p className="m-0 mt-4 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">{children}</p>}
      </Container>
    </section>
  );
}

export default PageHeader;

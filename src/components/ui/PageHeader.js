import React from "react";
import Container from "../layout/Container";

/**
 * PageHeader — the opening band of every page other than home: eyebrow,
 * title and an optional intro line, over a soft brand glow. `compact`
 * trims its padding for pages meant to fit one screen; `action` puts a
 * button beside the title on desktop.
 */
function PageHeader({ eyebrow, title, compact = false, action, children }) {
  return (
    <section
      className={`relative w-full m-0 overflow-hidden border-b border-white/10 bg-ink px-0 ${
        compact
          ? // Fixed band height on desktop so every page's header bar matches,
            // whatever it holds (intro line, button, or just the title).
            "pb-6 pt-8 sm:pb-8 sm:pt-10 lg:flex lg:h-[13.5rem] lg:items-center lg:py-0 short:h-[11.5rem]"
          : "pb-10 pt-12 sm:pb-14 sm:pt-16"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 300px at 20% 0%, rgba(30,158,255,0.14), transparent 70%)",
        }}
      />
      <Container className="relative flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          {eyebrow && (
            <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              {eyebrow}
            </p>
          )}
          <h1
            className={`m-0 font-display font-extrabold uppercase leading-[1.05] tracking-tight text-white ${
              compact
                ? "text-3xl sm:text-4xl lg:text-[2rem] 2xl:text-4xl"
                : "text-4xl sm:text-5xl"
            }`}
          >
            {title}
          </h1>
          {children && (
            <p
              className={`m-0 mt-3 text-base leading-relaxed text-fg-muted sm:text-lg ${compact ? "max-w-4xl short:mt-2" : "mt-4 max-w-2xl"}`}
            >
              {children}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </Container>
    </section>
  );
}

export default PageHeader;

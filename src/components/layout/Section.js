import React from 'react';
import Container from './Container';

/**
 * Section — vertical rhythm + optional background, wrapping a Container.
 *
 * Replaces the old pattern of empty <div style={{height:'40px'}}/> spacers:
 * spacing lives here on a consistent scale instead of being sprinkled
 * inline per component.
 *
 * Props:
 *   id         — anchor target for hash-link navigation
 *   bg         — 'base' (page) | 'panel' (slightly lifted) | 'none'
 *   spacing    — 'default' | 'compact' | 'none' (vertical padding)
 *   container  — false to render children full-bleed (no inner Container)
 *   containerSize — forwarded to Container ('default' | 'narrow' | 'full')
 *   className  — extra classes on the <section>
 */
const BG = {
  base: 'bg-ink',
  panel: 'bg-ink-700',
  none: '',
};

const SPACING = {
  default: 'py-16 sm:py-20 lg:py-24',
  compact: 'py-10 sm:py-12',
  none: '',
};

function Section({
  id,
  bg = 'base',
  spacing = 'default',
  container = true,
  containerSize = 'default',
  className = '',
  children,
  ...rest
}) {
  const inner = container ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <section
      id={id}
      // w-full / m-0 / px-0 override the legacy global `section {}` rule in
      // index.css (width:75%, margin-bottom:250px, padding:40px) so new
      // sections are full-bleed and spaced only by this component.
      className={`w-full m-0 px-0 scroll-mt-24 ${BG[bg] ?? BG.base} ${SPACING[spacing] ?? SPACING.default} ${className}`}
      {...rest}
    >
      {inner}
    </section>
  );
}

export default Section;

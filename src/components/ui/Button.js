import React from 'react';
import { HashLink } from 'react-router-hash-link';

/**
 * Button — one styled control used across the site.
 *
 * Renders as a HashLink (`to`), a plain anchor (`href`), or a <button>.
 * Variants/sizes are the only knobs so CTAs stay visually consistent.
 */
const VARIANTS = {
  primary:
    'bg-brand text-white hover:bg-brand-600 shadow-[0_6px_20px_rgba(30,158,255,0.35)]',
  outline:
    'border border-white/25 text-white hover:border-brand hover:text-brand bg-white/0',
  ghost: 'text-white/80 hover:text-white',
};

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-4 text-base',
};

function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  children,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold uppercase tracking-wide transition-colors duration-200 ${
    VARIANTS[variant] ?? VARIANTS.primary
  } ${SIZES[size] ?? SIZES.md} ${className}`;

  if (to) {
    return (
      <HashLink to={to} className={classes} {...rest}>
        {children}
      </HashLink>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;

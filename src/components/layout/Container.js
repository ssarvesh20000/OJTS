import React from 'react';

/**
 * Container — centers content and caps its width.
 *
 * The single place page width + horizontal gutters are defined, so every
 * section lines up on the same vertical edges without repeating values.
 *
 * Props:
 *   as       — element/component to render (default 'div')
 *   size     — 'default' (1600px) | 'narrow' (~768px) | 'full'
 *   className— extra Tailwind classes to merge
 */
const SIZES = {
  default: 'max-w-content',
  narrow: 'max-w-3xl',
  full: 'max-w-none',
};

function Container({ as: Tag = 'div', size = 'default', className = '', children, ...rest }) {
  return (
    <Tag className={`mx-auto w-full px-5 sm:px-6 lg:px-10 xl:px-16 ${SIZES[size] || SIZES.default} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export default Container;

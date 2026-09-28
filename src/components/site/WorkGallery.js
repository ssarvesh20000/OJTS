import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import Section from '../layout/Section';
import { GALLERY, tintSummary } from '../../data/gallery';

function vehicleName(item) {
  return `${item.make} ${item.model}`;
}

/** Full-screen view of one install; Esc closes, arrow keys step through. */
function Lightbox({ index, onClose, onStep }) {
  const item = GALLERY[index];
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    document.addEventListener('keydown', onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, onStep]);

  const navBtn =
    'flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-white hover:border-brand hover:text-brand';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={vehicleName(item)}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative flex w-full max-w-5xl items-center gap-3" onClick={(e) => e.stopPropagation()}>
        <button type="button" className={`${navBtn} hidden sm:flex`} onClick={() => onStep(-1)} aria-label="Previous install">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <figure className="m-0 min-w-0 flex-1">
          <img
            src={item.src}
            alt={`${vehicleName(item)} with window tint by OJ Tint Studio`}
            className="mx-auto max-h-[75vh] w-auto rounded-card object-contain"
          />
          <figcaption className="mt-4 flex items-center justify-between gap-4">
            <div>
              <p className="m-0 font-display text-lg font-bold uppercase text-white">{vehicleName(item)}</p>
              <p className="m-0 text-sm text-fg-muted">{tintSummary(item)}</p>
            </div>
            <div className="flex gap-2 sm:hidden">
              <button type="button" className={navBtn} onClick={() => onStep(-1)} aria-label="Previous install">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button type="button" className={navBtn} onClick={() => onStep(1)} aria-label="Next install">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </figcaption>
        </figure>

        <button type="button" className={`${navBtn} hidden sm:flex`} onClick={() => onStep(1)} aria-label="Next install">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-2 right-0 flex h-11 w-11 items-center justify-center rounded-full text-2xl text-white hover:text-brand sm:-right-2 sm:-top-14"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}

function WorkGallery() {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir) => setOpen((i) => (i === null ? i : (i + dir + GALLERY.length) % GALLERY.length)),
    []
  );

  return (
    <Section spacing="compact">
      <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {GALLERY.map((item, i) => (
          <li key={`${vehicleName(item)}-${i}`}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-card border border-white/10 bg-ink-700 text-left transition-colors hover:border-brand/60"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={`${vehicleName(item)} with window tint by OJ Tint Studio`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3 sm:p-4">
                <p className="m-0 font-display text-sm font-bold uppercase text-white sm:text-base">{vehicleName(item)}</p>
                <p className="m-0 mt-1 text-xs text-fg-muted">{tintSummary(item)}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {open !== null && <Lightbox index={open} onClose={close} onStep={step} />}
    </Section>
  );
}

export default WorkGallery;

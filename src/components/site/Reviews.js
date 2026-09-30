import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faYelp } from '@fortawesome/free-brands-svg-icons';
import Section from '../layout/Section';
import SectionHeading from '../ui/SectionHeading';
import { SOCIALS } from './contactInfo';
import logo from '../../assets/logo-mark.png';

const MAPS_URL = 'https://www.google.com/maps/place/1580+Oakland+Rd+%23C109,+San+Jose,+CA+95131';

// Review platforms shown side by side. Set `rating` (e.g. 5.0) to show the
// stars; while it is null the card shows just the platform and a link.
const PLATFORMS = [
  {
    name: 'Google',
    url: 'https://www.google.com/maps/search/?api=1&query=OJ+Tint+Studio+San+Jose',
    rating: 5.0,
    thumbnail: <GoogleG />,
  },
  {
    name: 'Yelp',
    url: SOCIALS.find((s) => s.label === 'Yelp').href,
    rating: 5.0,
    thumbnail: <YelpMark />,
  },
];

// Paste a real customer review here (copied from Google or Yelp, with the
// reviewer's first name + last initial) to show it as a pull quote under
// the platform cards.
const FEATURED_REVIEW = null; // e.g. { quote: '...', author: 'First L.', source: 'Google' }

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

function YelpMark() {
  return <FontAwesomeIcon icon={faYelp} className="text-5xl text-[#FF1A1A]" aria-hidden />;
}

function Stars({ rating }) {
  const full = Math.round(rating);
  return (
    <p className="m-0 text-xl tracking-widest" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      <span className="text-brand">{'★'.repeat(full)}</span>
      <span className="text-white/20">{'★'.repeat(5 - full)}</span>
    </p>
  );
}

function PlatformCard({ platform }) {
  const hasStats = platform.rating != null;
  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-5 border-b border-white/10 p-6 no-underline transition-colors hover:bg-white/[0.03] lg:border-b-0 lg:border-r"
    >
      {/* Thumbnail */}
      <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
        {platform.thumbnail}
      </span>
      <span className="min-w-0">
        {hasStats ? (
          <>
            <Stars rating={platform.rating} />
            <span className="mt-1 block text-sm text-white">
              {platform.rating.toFixed(1)} on {platform.name}
            </span>
          </>
        ) : (
          <>
            <span className="block text-base font-semibold text-white">Reviewed on {platform.name}</span>
            <span className="block text-sm text-fg-muted">See what customers are saying.</span>
          </>
        )}
        <span className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand group-hover:text-brand-300">
          Read our {platform.name} reviews <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </span>
    </a>
  );
}

function Reviews() {
  return (
    <Section id="reviews" spacing="compact">
      <SectionHeading eyebrow="Reviews" title="What our customers say" align="left" />
      <p className="m-0 mb-6 mt-3 text-base text-fg-muted">
        See why Bay Area drivers trust OJ Tint Studio with their vehicles.
      </p>

      <div className="grid overflow-hidden rounded-card border border-white/10 bg-ink-700 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,20rem)]">
        {PLATFORMS.map((platform) => (
          <PlatformCard key={platform.name} platform={platform} />
        ))}

        {/* Studio panel (stand-in for a shop photo) */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex min-h-[9rem] flex-col items-center justify-center gap-3 overflow-hidden bg-ink-900 p-6 text-center no-underline"
        >
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: 'radial-gradient(260px 120px at 70% 40%, rgba(30,158,255,0.22), transparent 70%)' }}
          />
          <img src={logo} alt="OJ Tint Studio" className="relative h-14 w-auto" />
          <p className="relative m-0 flex items-center gap-2 text-xs text-fg-muted">
            <FontAwesomeIcon icon={faLocationDot} className="text-brand" />
            1580 Oakland Rd #C109, San Jose
          </p>
        </a>
      </div>

      {FEATURED_REVIEW && (
        <figure className="m-0 mt-6 rounded-card border border-white/10 bg-ink-700 p-6 lg:px-10">
          <blockquote className="m-0 text-base leading-relaxed text-white/90 sm:text-lg">
            &ldquo;{FEATURED_REVIEW.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-sm text-fg-muted">
            &ndash; {FEATURED_REVIEW.author}
            {FEATURED_REVIEW.source && `, via ${FEATURED_REVIEW.source}`}
          </figcaption>
        </figure>
      )}
    </Section>
  );
}

export default Reviews;

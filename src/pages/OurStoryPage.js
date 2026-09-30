import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faClock, faLocationDot, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import { CONTACT } from '../components/site/contactInfo';
import { usePageTitle } from '../components/layout/RouteEffects';

const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`;

// Story copy provided by the shop. Business hours are still to be decided:
// fill in HOURS when ready; the card shows a call-to-book note until then.
const HOURS = null; // e.g. [{ days: 'Mon–Fri', time: '9am–6pm' }, …]

// Warranty copy split into short points so it scans quickly beside the story.
const WARRANTY_POINTS = [
  'Every tint job comes with our standard warranty.',
  'Car broken into and a window replaced? We re-tint the new one for free.',
  'Getting broken into is bad enough. You shouldn\u2019t pay for tint twice.',
];

function Highlight({ children }) {
  return <strong className="font-bold text-brand">{children}</strong>;
}

function OurStoryPage() {
  usePageTitle('Our Story');
  return (
    <>
      <PageHeader eyebrow="Our Story" title="OJ Tint Studio" />

      <Section spacing="compact">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">
          <div className="space-y-5 text-lg leading-relaxed text-white/85">
            <p className="m-0">
              We opened OJ Tint Studio in <Highlight>2020</Highlight>, in the middle of COVID. It was a
              risky time to start a business, but it worked out, and we&rsquo;re proud of what it&rsquo;s
              become.
            </p>
            <p className="m-0">
              Since then we&rsquo;ve tinted over <Highlight>7,000 vehicles</Highlight>. Daily drivers,
              work trucks, SUVs, high-end cars, you name it, we&rsquo;ve probably had it in the shop.
            </p>
            <p className="m-0">
              We take our time on every car. That means clean edges, no bubbles or dust, good film, and
              making sure you&rsquo;re happy with it before you leave.
            </p>
          </div>

          <aside className="relative self-start overflow-hidden rounded-card border border-brand/50 bg-ink-700 p-6 shadow-glow sm:p-7">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(30,158,255,0.14) 0%, rgba(30,158,255,0) 60%)' }}
            />
            <div className="relative">
              <h2 className="m-0 flex items-center gap-3 font-display text-xl font-extrabold uppercase text-white">
                <FontAwesomeIcon icon={faShieldHalved} className="text-2xl text-brand" /> Our Warranty
              </h2>
              <ul className="m-0 mt-5 list-none space-y-4 p-0">
                {WARRANTY_POINTS.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-snug text-white/85">
                    <FontAwesomeIcon icon={faCircleCheck} className="mt-1 shrink-0 text-brand" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <p className="m-0 mt-12 text-center text-lg font-semibold text-white">
          Thanks to everyone who&rsquo;s brought their car to us over the years. We couldn&rsquo;t have
          done it without you.
        </p>
      </Section>

      <Section spacing="compact">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          <div className="flex flex-col gap-6">
            <div className="rounded-card border border-white/10 bg-ink-700 p-6">
              <h2 className="m-0 flex items-center gap-3 font-display text-lg font-bold uppercase text-white">
                <FontAwesomeIcon icon={faClock} className="text-brand" /> Business Hours
              </h2>
              {HOURS ? (
                <dl className="m-0 mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
                  {HOURS.map((h) => (
                    <React.Fragment key={h.days}>
                      <dt className="text-fg-muted">{h.days}</dt>
                      <dd className="m-0 text-white">{h.time}</dd>
                    </React.Fragment>
                  ))}
                </dl>
              ) : (
                <p className="m-0 mt-4 text-sm leading-relaxed text-fg-muted">
                  Hours coming soon. Call{' '}
                  <a href={CONTACT.phoneHref} className="font-semibold text-brand">
                    {CONTACT.phone}
                  </a>{' '}
                  to book a time.
                </p>
              )}
            </div>

            <div className="rounded-card border border-white/10 bg-ink-700 p-6">
              <h2 className="m-0 flex items-center gap-3 font-display text-lg font-bold uppercase text-white">
                <FontAwesomeIcon icon={faLocationDot} className="text-brand" /> Location
              </h2>
              <p className="m-0 mt-4 text-sm leading-relaxed text-white/85">{CONTACT.address}</p>
              <p className="m-0 mt-1 text-sm text-fg-muted">Proudly serving the Bay Area.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" variant="outline" size="sm">
                  Get Directions
                </Button>
                <Button to="/contact" variant="primary" size="sm">
                  Get Your Quote
                </Button>
              </div>
            </div>
          </div>

          <div className="min-h-[20rem] overflow-hidden rounded-card border border-white/10 bg-ink-700">
            <iframe
              title="Map to OJ Tint Studio"
              src={MAP_EMBED}
              className="h-full min-h-[20rem] w-full border-0 grayscale-[40%] invert-[90%] hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  );
}

export default OurStoryPage;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import { CONTACT } from '../components/site/contactInfo';
import { usePageTitle } from '../components/layout/RouteEffects';

const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`;

// Story copy provided by the shop. Business hours are still to be decided:
// fill in HOURS when ready; the card shows a call-to-book note until then.
const HOURS = null;

const STATS = [
  { value: '2020', label: 'Opened' },
  { value: '7,000+', label: 'Vehicles tinted' },
  { value: '$0', label: 'Re-tint after a break-in' },
]; // e.g. [{ days: 'Mon–Fri', time: '9am–6pm' }, …]

function OurStoryPage() {
  usePageTitle('Our Story');
  return (
    <>
      <PageHeader eyebrow="Our Story" title="OJ Tint Studio" />

      <Section spacing="compact">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          <div className="space-y-5 text-lg leading-relaxed text-white/85">
            <p className="m-0">
              We opened OJ Tint Studio in 2020, in the middle of COVID. It was a risky time to start a
              business, but it worked out, and we&rsquo;re proud of what it&rsquo;s become.
            </p>
            <p className="m-0">
              Since then we&rsquo;ve tinted over 7,000 vehicles. Daily drivers, work trucks, SUVs,
              high-end cars, you name it, we&rsquo;ve probably had it in the shop.
            </p>
            <p className="m-0">
              We take our time on every car. That means clean edges, no bubbles or dust, good film, and
              making sure you&rsquo;re happy with it before you leave.
            </p>
          </div>

          <dl className="m-0 grid grid-cols-1 gap-4 self-start sm:grid-cols-3 lg:grid-cols-1">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-card border border-white/10 bg-ink-700 p-5">
                <dd className="m-0 font-display text-3xl font-extrabold text-brand sm:text-4xl">{s.value}</dd>
                <dt className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-fg-muted">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-card border border-brand/50 bg-ink-700 p-6 shadow-glow sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(30,158,255,0.14) 0%, rgba(30,158,255,0) 60%)' }}
          />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
            <FontAwesomeIcon icon={faShieldHalved} className="text-4xl text-brand" />
            <div className="max-w-3xl">
              <h2 className="m-0 font-display text-2xl font-extrabold uppercase text-white">Our Warranty</h2>
              <p className="m-0 mt-3 text-lg leading-relaxed text-white/85">
                Every tint job comes with our standard warranty. On top of that, if someone breaks into
                your car and you have to replace a window, we&rsquo;ll re-tint the new one for free.
                Getting your car broken into is bad enough, and you shouldn&rsquo;t have to pay for tint
                twice because of it.
              </p>
            </div>
          </div>
        </div>

        <p className="m-0 mt-10 text-center text-lg font-semibold text-white">
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

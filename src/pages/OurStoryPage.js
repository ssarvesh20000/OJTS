import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import { CONTACT } from '../components/site/contactInfo';
import { usePageTitle } from '../components/layout/RouteEffects';
import storyPhoto from '../assets/story-install.webp';

const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`;

// Story copy provided by the shop. Business hours are still to be decided:
// fill in HOURS when ready; the card shows a call-to-book note until then.
const HOURS = null; // e.g. [{ days: 'Mon–Fri', time: '9am–6pm' }, …]

function Highlight({ children }) {
  return <strong className="font-bold text-brand">{children}</strong>;
}

function OurStoryPage() {
  usePageTitle('Our Story');
  return (
    <>
      <PageHeader eyebrow="Our Story" title="OJ Tint Studio" />

      <Section spacing="compact">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
          <article className="space-y-5 text-lg leading-relaxed text-white/85">
            <h2 className="m-0 font-display text-2xl font-extrabold uppercase text-white">About OJ Tint Studio</h2>
            <p className="m-0">
              We opened in <Highlight>2020</Highlight>, right in the middle of COVID. It started as a
              small shop, and it&rsquo;s grown into something we&rsquo;re really proud of.
            </p>
            <p className="m-0">
              Since then we&rsquo;ve tinted over <Highlight>7,000 vehicles</Highlight>. Everyday cars,
              trucks, SUVs, high-end stuff &ndash; we&rsquo;ve pretty much seen it all come through the
              door.
            </p>
            <p className="m-0">
              We don&rsquo;t just throw tint on and send you off. We take our time, keep the work clean,
              use good film, and make sure you&rsquo;re happy with it before you drive away.
            </p>

            <h2 className="m-0 pt-4 font-display text-2xl font-extrabold uppercase text-white">
              What makes us different
            </h2>
            <p className="m-0">
              Our warranty. Every job is covered by our regular warranty, and we go one step further: if
              your car gets broken into and the window has to be replaced, we&rsquo;ll re-tint it for
              free.
            </p>
            <p className="m-0">
              Stuff happens. You shouldn&rsquo;t have to pay twice for something that wasn&rsquo;t your
              fault.
            </p>
            <p className="m-0">
              After 7,000+ cars, what we&rsquo;re going for hasn&rsquo;t changed: do good work, take care
              of people, and stand behind it.
            </p>
            <p className="m-0 font-semibold text-white">
              Thanks to everyone who&rsquo;s trusted us with their car over the years. We wouldn&rsquo;t
              be here without you.
            </p>
          </article>

          <img
            src={storyPhoto}
            alt="OJ Tint Studio installer applying window film in the shop"
            className="w-full rounded-card border border-white/10 object-cover shadow-card lg:sticky lg:top-28 lg:max-h-[calc(100svh-9rem)]"
          />
        </div>
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

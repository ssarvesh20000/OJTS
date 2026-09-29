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
const HOURS = null; // e.g. [{ days: 'Mon–Fri', time: '9am–6pm' }, …]

function OurStoryPage() {
  usePageTitle('Our Story');
  return (
    <>
      <PageHeader eyebrow="Our Story" title="OJ Tint Studio">
        OJ Tint Studio started in 2020, right in the middle of COVID. What started as a small
        business has grown into something we&rsquo;re really proud of.
      </PageHeader>

      <Section spacing="compact">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16">
          <div className="space-y-5 text-lg leading-relaxed text-white/85">
            <p className="m-0">
              Since then, we&rsquo;ve tinted over 7,000 vehicles and have worked on just about every
              type of vehicle you can think of &mdash; from everyday cars and trucks to high-end
              vehicles, SUVs, and everything in between.
            </p>
            <p className="m-0">
              For us, it&rsquo;s not just about putting tint on a window and sending you on your way.
              We care about doing clean work, using quality film, and making sure you&rsquo;re happy
              with the finished product.
            </p>
          </div>

          <dl className="m-0 grid grid-cols-2 gap-4 self-start">
            <div className="rounded-card border border-white/10 bg-ink-700 p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-muted">Since</dt>
              <dd className="m-0 mt-1 font-display text-4xl font-extrabold text-brand">2020</dd>
            </div>
            <div className="rounded-card border border-white/10 bg-ink-700 p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-muted">Vehicles tinted</dt>
              <dd className="m-0 mt-1 font-display text-4xl font-extrabold text-brand">7,000+</dd>
            </div>
          </dl>
        </div>

        {/* The warranty is the headline difference, so it gets the brand treatment */}
        <div className="relative mt-12 overflow-hidden rounded-card border border-brand/50 bg-ink-700 p-6 shadow-glow sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(30,158,255,0.14) 0%, rgba(30,158,255,0) 60%)' }}
          />
          <div className="relative grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-10">
            <FontAwesomeIcon icon={faShieldHalved} className="text-5xl text-brand" />
            <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-white/85">
              <h2 className="m-0 font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                What Makes Us Different?
              </h2>
              <p className="m-0">
                One of the biggest things that sets OJ Tint Studio apart is our warranty.
              </p>
              <p className="m-0">
                We stand behind our work with our regular warranty, but we also go a step further. If
                your vehicle is broken into and the window needs to be replaced, we don&rsquo;t charge
                you to have that window re-tinted.
              </p>
              <p className="m-0">
                We know accidents happen, and the last thing we want is for you to have to pay twice
                for something that wasn&rsquo;t your fault.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4 text-center text-lg leading-relaxed text-white/85">
          <p className="m-0">
            After 7,000+ vehicles, we&rsquo;ve seen just about everything. Our goal is simple: do good
            work, take care of our customers, and stand behind what we do.
          </p>
          <p className="m-0 font-semibold text-white">
            Thank you to everyone who has trusted OJ Tint Studio with their vehicle over the years. We
            wouldn&rsquo;t be here without you.
          </p>
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

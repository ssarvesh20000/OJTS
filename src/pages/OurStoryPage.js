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

      <Section spacing="compact" className="relative overflow-hidden">
        {/* Desktop: unframed photo on the right, fading into the story text like
            the home hero. Darkened so the bright shop doesn't wash out the fade. */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] lg:block">
          <img
            src={storyPhoto}
            alt=""
            className="h-full w-full object-cover object-[40%_50%] brightness-[0.72]"
            style={{
              maskImage:
                'linear-gradient(90deg, transparent 0%, #000 40%), linear-gradient(180deg, transparent 0%, #000 12%, #000 85%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(90deg, transparent 0%, #000 40%), linear-gradient(180deg, transparent 0%, #000 12%, #000 85%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in',
            }}
          />
        </div>
        <div className="relative grid items-start gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
          <article className="space-y-5 text-lg leading-relaxed text-white/85">
            <h2 className="m-0 font-display text-2xl font-extrabold uppercase text-white">About OJ Tint Studio</h2>
            <p className="m-0">
              OJ Tint Studio started in <Highlight>2020</Highlight>, right in the middle of COVID. What
              started as a small business has grown into something we&rsquo;re really proud of.
            </p>
            <p className="m-0">
              Since then, we&rsquo;ve tinted over <Highlight>7,000 vehicles</Highlight> and have worked on
              just about every type of vehicle you can think of &mdash; from everyday cars and trucks to
              high-end vehicles, SUVs, and everything in between.
            </p>
            <p className="m-0">
              For us, it&rsquo;s not just about putting tint on a window and sending you on your way. We
              care about doing clean work, using quality film, and making sure you&rsquo;re happy with the
              finished product.
            </p>

            <h2 className="m-0 pt-4 font-display text-2xl font-extrabold uppercase text-white">
              What Makes Us Different?
            </h2>
            <p className="m-0">One of the biggest things that sets OJ Tint Studio apart is our warranty.</p>
            <p className="m-0">
              We stand behind our work with our regular warranty, but we also go a step further. If your
              vehicle is broken into and the window needs to be replaced, we don&rsquo;t charge you to have
              that window re-tinted.
            </p>
            <p className="m-0">
              We know accidents happen, and the last thing we want is for you to have to pay twice for
              something that wasn&rsquo;t your fault.
            </p>
            <p className="m-0">
              After 7,000+ vehicles, we&rsquo;ve seen just about everything. Our goal is simple: do good
              work, take care of our customers, and stand behind what we do.
            </p>
            <p className="m-0 font-semibold text-white">
              Thank you to everyone who has trusted OJ Tint Studio with their vehicle over the years. We
              wouldn&rsquo;t be here without you.
            </p>
          </article>

          {/* Phones/tablets: photo below the text, fading in at top and bottom */}
          <img
            src={storyPhoto}
            alt="OJ Tint Studio installer applying window film in the shop"
            className="w-full brightness-[0.85] lg:hidden"
            style={{
              maskImage: 'linear-gradient(180deg, transparent 0%, #000 12%, #000 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, #000 12%, #000 85%, transparent 100%)',
            }}
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

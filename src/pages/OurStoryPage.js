import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import { CONTACT } from "../components/site/contactInfo";
import { usePageTitle } from "../components/layout/RouteEffects";
import storyPhoto from "../assets/story-install.webp";

const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`;

// Story copy provided by the shop.
// HOURS shows in the Business Hours card (set to null for a call-to-book note).
const HOURS = [
  { days: 'Tuesday – Saturday', time: '10 AM – 6 PM' },
  { days: 'Sunday – Monday', time: 'Closed' },
];

function Highlight({ children }) {
  return <strong className="font-bold text-brand">{children}</strong>;
}

function OurStoryPage() {
  usePageTitle("Our Story");
  return (
    <>
      {/* Desktop: header + story fill the screen below the nav, so the whole
          story and photo are visible on arrival. */}
      <div className="flex flex-col lg:min-h-[calc(100svh-5rem)]">
        <PageHeader compact eyebrow="Our Story" title="Who we are!">
          Our business hours and location are further down this page.
        </PageHeader>

        <Section
          spacing="none"
          className="relative flex-1 overflow-hidden py-10 lg:flex lg:items-center lg:py-8"
        >
          {/* Desktop: unframed photo on the right, fading into the story text like
            the home hero. It fills the section's height, cropping mostly from
            the ceiling so the installer stays in frame. Darkened so the bright
            shop doesn't wash out the fade. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] lg:block"
          >
            <img
              src={storyPhoto}
              alt=""
              className="h-full w-full object-cover object-[50%_70%] brightness-[0.7]"
              style={{
                maskImage:
                  "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.35) 25%, #000 55%), linear-gradient(180deg, transparent 0%, #000 8%, #000 90%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.35) 25%, #000 55%), linear-gradient(180deg, transparent 0%, #000 8%, #000 90%, transparent 100%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            />
          </div>
          <div className="relative grid w-full items-start gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
            <article className="space-y-5 text-lg leading-relaxed text-white/85 short:space-y-3 short:text-base">
            <h2 className="m-0 font-display text-2xl font-extrabold uppercase text-white">About OJ Tint Studio</h2>
            <p className="m-0 font-semibold text-white">
              What started in <Highlight>2019</Highlight> as a simple passion for cars has grown into
              something much bigger.
            </p>
            <p className="m-0">
              OJ Tint Studio began during COVID as a hobby&mdash;just a genuine love for cars and the
              satisfaction of making them look and feel better. What we didn&rsquo;t know then was that
              this passion would eventually become a full-service tint studio proudly serving car
              enthusiasts and everyday drivers throughout the Bay Area.
            </p>
            <p className="m-0">
              Today, we&rsquo;ve tinted <Highlight>7,000+ vehicles</Highlight>, from daily drivers to some
              of the most special cars our customers own. No matter the make, model, or vehicle, our
              approach remains the same: quality work, attention to detail, and treating every car as if
              it were our own.
            </p>
            <p className="m-0">
              We believe a great tint job is more than just applying film. It&rsquo;s about precision,
              patience, and taking pride in every detail. Every vehicle is thoroughly inspected before it
              leaves our studio because we want our customers to leave knowing their car was taken care
              of the right way.
            </p>
            <p className="m-0">
              We stand behind our craftsmanship with a lifetime, no-fault warranty, because we believe our
              customers should feel just as confident in our work as we do.
            </p>
            <p className="m-0">
              After 7,000+ cars, one thing hasn&rsquo;t changed: we still care about every car that comes
              through our doors.
            </p>
            <p className="m-0 font-semibold text-white">
              Whether you&rsquo;re protecting your daily driver, upgrading the look of your car, or
              finishing off a vehicle you&rsquo;ve put your heart into, you can expect the same level of
              care, precision, and attention to detail every time.
            </p>
          </article>

            {/* Phones/tablets: photo below the text, fading in at top and bottom */}
            <img
              src={storyPhoto}
              alt="OJ Tint Studio installer applying window film in the shop"
              className="w-full brightness-[0.85] lg:hidden"
              style={{
                maskImage:
                  "linear-gradient(180deg, transparent 0%, #000 6%, #000 94%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, transparent 0%, #000 6%, #000 94%, transparent 100%)",
              }}
            />
          </div>
        </Section>
      </div>

      <Section spacing="compact">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          <div className="flex flex-col gap-6">
            <div className="rounded-card border border-white/10 bg-ink-700 p-6">
              <h2 className="m-0 flex items-center gap-3 font-display text-lg font-bold uppercase text-white">
                <FontAwesomeIcon icon={faClock} className="text-brand" />{" "}
                Business Hours
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
                  Hours coming soon. Call{" "}
                  <a
                    href={CONTACT.phoneHref}
                    className="font-semibold text-brand"
                  >
                    {CONTACT.phone}
                  </a>{" "}
                  to book a time.
                </p>
              )}
            </div>

            <div className="rounded-card border border-white/10 bg-ink-700 p-6">
              <h2 className="m-0 flex items-center gap-3 font-display text-lg font-bold uppercase text-white">
                <FontAwesomeIcon icon={faLocationDot} className="text-brand" />{" "}
                Location
              </h2>
              <p className="m-0 mt-4 text-sm leading-relaxed text-white/85">
                {CONTACT.address}
              </p>
              <p className="m-0 mt-1 text-sm text-fg-muted">
                Proudly serving the Bay Area.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                >
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

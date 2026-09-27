import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Section from '../layout/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import carImage from '../../assets/tint images/car-black Background Removed.png';

// Starting prices are the figures from the design mockup — confirm with the
// shop before launch.
const FILMS = [
  {
    tier: 'Good',
    name: 'XPEL Prime CS',
    blurb: 'Great performance and value with excellent heat rejection and UV protection.',
    features: ['Blocks up to 99% UV rays', 'Great heat rejection', 'Reduces glare', "Manufacturer's Warranty"],
    tagline: 'Great Value',
    price: 199,
  },
  {
    tier: 'Better',
    name: 'XPEL Ceramic',
    blurb: 'Advanced ceramic technology for maximum comfort and clarity.',
    features: [
      'Superior heat rejection',
      'Blocks up to 99% UV rays',
      'Reduces glare',
      'Non-metallic, no signal interference',
      "Manufacturer's Warranty",
    ],
    tagline: 'Best Balance',
    price: 299,
    featured: true,
  },
  {
    tier: 'Best',
    name: 'XPEL XR Plus',
    blurb: 'Our top-of-the-line film with maximum heat rejection.',
    features: ['Maximum heat rejection', 'Blocks up to 99% UV rays', 'Reduces glare', 'Clearer view', "Manufacturer's Warranty"],
    tagline: 'Ultimate Performance',
    price: 399,
  },
];

function FilmCard({ film }) {
  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-card border bg-ink-700 ${
        film.featured ? 'border-brand shadow-glow' : 'border-brand/40'
      }`}
    >
      {film.featured && (
        <span className="absolute right-4 top-4 z-10 rounded bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          Most Popular
        </span>
      )}

      <div className="relative flex flex-1 flex-col p-6 pb-0">
        <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-brand">{film.tier}</p>
        <h3 className="m-0 mt-2 font-display text-2xl font-extrabold uppercase text-white">{film.name}</h3>
        <p className="m-0 mt-3 max-w-[15rem] text-sm leading-relaxed text-fg-muted">{film.blurb}</p>
        <ul className="m-0 mt-5 list-none space-y-2 p-0">
          {film.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-white/85">
              <FontAwesomeIcon icon={faCircleCheck} className="text-brand" />
              {feature}
            </li>
          ))}
        </ul>

        {/* One car cropped from the two-car shot, bleeding off the right edge */}
        <div aria-hidden className="relative -mr-6 mt-auto h-32 overflow-hidden pt-4">
          <img
            src={carImage}
            alt=""
            className="absolute -right-10 bottom-0 h-40 w-auto max-w-none opacity-90"
            style={{
              maskImage: 'linear-gradient(to right, transparent 52%, #000 64%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 52%, #000 64%)',
            }}
          />
        </div>
      </div>

      <div className="relative flex items-center justify-between gap-3 border-t border-white/10 bg-ink-800 px-6 py-4">
        <span className="text-xs font-bold uppercase tracking-wide text-white">{film.tagline}</span>
        <span className="flex shrink-0 items-baseline gap-2 whitespace-nowrap">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-fg-muted">Starting at</span>
          <span className="font-display text-2xl font-extrabold text-brand">${film.price}</span>
        </span>
      </div>
    </article>
  );
}

function FilmTiers() {
  return (
    <Section id="films" spacing="compact">
      <SectionHeading eyebrow="Premium XPEL Window Films" title="Choose the perfect film for your vehicle" />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {FILMS.map((film) => (
          <FilmCard key={film.name} film={film} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button to="/#contact" variant="outline" size="sm" className="border-brand/60 text-brand">
          Compare All Films <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>
    </Section>
  );
}

export default FilmTiers;

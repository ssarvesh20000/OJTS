import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Section from '../layout/Section';
import Container from '../layout/Container';

const FILMS = [
  {
    tier: 'Good',
    name: 'XPEL Prime CS',
    blurb: 'Great performance and value with excellent heat rejection and UV protection.',
    features: ['Blocks up to 99% UV rays', 'Great heat rejection', 'Reduces glare', "Manufacturer's Warranty"],
    tagline: 'Great Value',
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
    featured: true,
  },
  {
    tier: 'Best',
    name: 'XPEL XR Plus',
    blurb: 'Our top-of-the-line film with maximum heat rejection.',
    features: ['Maximum heat rejection', 'Blocks up to 99% UV rays', 'Reduces glare', 'Clearer view', "Manufacturer's Warranty"],
    tagline: 'Ultimate Performance',
  },
];

function FilmCard({ film }) {
  return (
    <article
      className={`relative flex flex-col rounded-card border bg-ink-700 p-6 lg:p-7 short:py-5 ${
        film.featured ? 'border-brand shadow-glow' : 'border-brand/40'
      }`}
    >
      {film.featured && (
        <span className="absolute -top-3 right-6 rounded bg-brand px-3 py-1.5 text-xs font-bold uppercase leading-none tracking-wide text-white shadow-glow">
          Most Popular
        </span>
      )}

      <p className="m-0 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
        {film.tier} <span className="text-fg-subtle">&middot; {film.tagline}</span>
      </p>
      <h3 className="m-0 mt-2 font-display text-3xl font-extrabold uppercase text-white">{film.name}</h3>
      <p className="m-0 mt-3 text-base leading-relaxed text-fg-muted lg:text-lg">{film.blurb}</p>
      <ul className="m-0 mt-5 list-none space-y-2.5 p-0 short:mt-4 short:space-y-2">
        {film.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-base text-white/90 lg:text-[17px]">
            <FontAwesomeIcon icon={faCircleCheck} className="text-brand" />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}

function FilmTiers() {
  return (
    // Grows to fill the space the services page leaves between its header and
    // the benefits strip, so the cards stretch and the footer stays below.
    <Section id="films" spacing="none" container={false} className="flex flex-1 flex-col py-8 lg:py-7 short:py-5">
      <Container className="flex flex-1 flex-col">
        <div className="grid flex-1 gap-6 md:grid-cols-3">
          {FILMS.map((film) => (
            <FilmCard key={film.name} film={film} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default FilmTiers;

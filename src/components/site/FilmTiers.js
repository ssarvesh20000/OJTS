import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Section from '../layout/Section';

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
      className={`relative flex flex-col rounded-card border bg-ink-700 p-5 lg:p-6 ${
        film.featured ? 'border-brand shadow-glow' : 'border-brand/40'
      }`}
    >
      {film.featured && (
        <span className="absolute -top-3 right-5 rounded bg-brand px-3 py-1 text-[11px] font-bold uppercase leading-none tracking-wide text-white shadow-glow">
          Most Popular
        </span>
      )}

      <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        {film.tier} <span className="text-fg-subtle">&middot; {film.tagline}</span>
      </p>
      <h3 className="m-0 mt-2 font-display text-2xl font-extrabold uppercase text-white">{film.name}</h3>
      <p className="m-0 mt-2 text-sm leading-relaxed text-fg-muted">{film.blurb}</p>
      <ul className="m-0 mt-4 list-none space-y-1.5 p-0">
        {film.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-white/85">
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
    <Section id="films" spacing="none" className="py-8 lg:py-6">
      <div className="grid gap-5 md:grid-cols-3">
        {FILMS.map((film) => (
          <FilmCard key={film.name} film={film} />
        ))}
      </div>
    </Section>
  );
}

export default FilmTiers;

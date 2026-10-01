import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Section from '../layout/Section';
import Container from '../layout/Container';

// Features are listed in the same order on every card (UV, heat, glare,
// card-specific extras, warranty) so the tiers compare line by line.
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
      'Blocks up to 99% UV rays',
      'Superior heat rejection',
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
    features: ['Blocks up to 99% UV rays', 'Maximum heat rejection', 'Reduces glare', 'Clearer view', "Manufacturer's Warranty"],
    tagline: 'Ultimate Performance',
  },
];

function FilmCard({ film }) {
  return (
    <article
      className={`relative flex flex-col rounded-card border bg-ink-700 p-6 mid:py-5 short:py-3 ${
        film.featured ? 'border-brand shadow-glow' : 'border-brand/40'
      }`}
    >
      {film.featured && (
        <span className="absolute -top-3 right-6 rounded bg-brand px-3 py-1.5 text-xs font-bold uppercase leading-none tracking-wide text-white shadow-glow">
          Most Popular
        </span>
      )}

      <p className="m-0 text-[13px] font-semibold uppercase tracking-[0.18em] text-brand">
        {film.tier} <span className="text-fg-subtle">&middot; {film.tagline}</span>
      </p>
      <h3 className="m-0 mt-2 font-display text-[1.625rem] font-extrabold uppercase leading-tight text-white">{film.name}</h3>
      <p className="m-0 mt-2 text-[15px] leading-relaxed text-fg-muted short:leading-snug">{film.blurb}</p>
      <ul className="m-0 mb-6 mt-5 list-none space-y-2.5 p-0 mid:mb-3 mid:mt-3 mid:space-y-2 short:mb-3 short:mt-2 short:space-y-1.5">
        {film.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-base text-white/90 xl:text-[17px] short:text-[15px]">
            <FontAwesomeIcon icon={faCircleCheck} className="text-brand" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Pinned to the card's bottom edge, so the stretched cards stay aligned */}
      <Link
        to="/contact"
        className="mt-auto inline-flex items-center gap-2 border-t border-white/10 pt-4 text-sm mid:pt-3 short:pt-3 font-semibold uppercase tracking-wide text-brand hover:text-brand-300"
      >
        Get a quote for {film.name} <FontAwesomeIcon icon={faArrowRight} />
      </Link>
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

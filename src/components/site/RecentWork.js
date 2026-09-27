import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Section from '../layout/Section';
import Button from '../ui/Button';
import teslaY from '../../assets/carGal/tesla-y.png';
import bmwM3 from '../../assets/carGal/bmwm3.png';
import corvette from '../../assets/carGal/blackc8.png';
import tacoma from '../../assets/carGal/tacoma.png';

// Real installs from the gallery. `film` is optional — add the XPEL line
// used on each job to show it under the vehicle name.
const INSTALLS = [
  { src: teslaY, vehicle: 'Tesla Model Y', front: '30%', rear: '5%' },
  { src: bmwM3, vehicle: 'BMW M3', front: '20%', rear: '20%' },
  { src: corvette, vehicle: 'Corvette C8 Z06', front: '30%', rear: '30%' },
  { src: tacoma, vehicle: 'Toyota Tacoma', front: '20%', rear: '20%' },
];

function tintSummary({ front, rear }) {
  return front === rear ? `${front} All Around` : `${front} Front • ${rear} Rear`;
}

function RecentWork() {
  return (
    <Section id="work" spacing="compact">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="m-0 font-display text-xl font-extrabold uppercase tracking-wide text-brand sm:text-2xl">
          Our Recent Installations
        </h2>
        <Button to="/gallery" variant="outline" size="sm" className="border-brand/60 text-xs text-brand">
          View Full Gallery <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {INSTALLS.map((item) => (
          <article
            key={item.vehicle}
            className="group overflow-hidden rounded-card border border-white/10 bg-ink-700"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.src}
                alt={`${item.vehicle} with window tint by OJ Tint Studio`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-3 sm:p-4">
              <h3 className="m-0 font-display text-sm font-bold uppercase text-white sm:text-base">{item.vehicle}</h3>
              {item.film && (
                <p className="m-0 mt-1 text-xs font-semibold uppercase tracking-wide text-brand">{item.film}</p>
              )}
              <p className="m-0 mt-1 text-xs text-fg-muted">{tintSummary(item)}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default RecentWork;

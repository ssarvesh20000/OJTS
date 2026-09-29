import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTemperatureLow,
  faShieldHalved,
  faEye,
  faGem,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import Section from '../layout/Section';

const BENEFITS = [
  { icon: faTemperatureLow, title: 'Keep Your Vehicle Cooler', body: 'Blocks heat for a more comfortable cabin.' },
  { icon: faShieldHalved, title: 'Protect Your Interior', body: 'Blocks up to 99% of harmful UV rays.' },
  { icon: faEye, title: 'Reduce Glare', body: 'Enhanced visibility for safer driving.' },
  { icon: faGem, title: 'Enhance Appearance', body: 'A sleek look that elevates your vehicle.' },
  { icon: faCircleCheck, title: 'Lifetime Warranty', body: 'We stand behind our work for as long as you own it.' },
];

function Benefits() {
  return (
    <Section id="services" spacing="none" className="border-t border-white/10 py-8 lg:pb-12 lg:pt-7 short:pb-8 short:pt-4">
      <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {BENEFITS.map((b) => (
          <li key={b.title} className="flex items-start gap-3">
            <FontAwesomeIcon icon={b.icon} className="mt-0.5 w-7 shrink-0 text-2xl text-brand" />
            <div>
              <h3 className="m-0 text-[13px] font-bold uppercase tracking-wide text-white">{b.title}</h3>
              <p className="m-0 mt-1 text-[13px] leading-snug text-fg-muted">{b.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Benefits;

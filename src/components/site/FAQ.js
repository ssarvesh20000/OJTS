import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import Section from '../layout/Section';
import SectionHeading from '../ui/SectionHeading';

// Answers provided by the shop.
const FAQS = [
  {
    q: 'What does the warranty entail?',
    a: 'Our warranty covers any peeling, bubbling or fading. We are also the only shop that will re-tint a window that was broken into at no charge.',
  },
  {
    q: 'How many days do I wait to roll down my windows?',
    a: '2–3 days, depending on the weather.',
  },
  {
    q: 'Does the tint go on the outside or inside?',
    a: 'Tint goes on the inside of the window.',
  },
  {
    q: 'Can I get a car wash after tint service?',
    a: 'Yes. You can get a car wash anytime after your service, since the tint goes on the inside of the glass.',
  },
  {
    q: 'How long will you need my car for?',
    a: 'It depends on the car and the work being done, but it takes 1–3 hours at most.',
  },
  {
    q: 'Is there a waiting area at your shop?',
    a: 'Yes. We have a lobby with Wi-Fi, snacks, drinks and a TV.',
  },
];

function FAQ() {
  return (
    <Section id="faq" spacing="compact">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
        <div>
          <SectionHeading eyebrow="FAQ" title="Tint questions, answered." align="left" />
          <p className="m-0 mt-4 max-w-sm text-base leading-relaxed text-fg-muted">
            Don&rsquo;t see your question? We&rsquo;re happy to help.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand hover:text-brand-300"
          >
            Contact us <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <div className="divide-y divide-white/10 rounded-card border border-white/10 bg-ink-700">
          {FAQS.map((item) => (
            <details key={item.q} className="group px-5 sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-semibold text-white marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="text-base sm:text-lg">{item.q}</span>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="shrink-0 text-brand transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="m-0 pb-5 pr-8 text-base leading-relaxed text-fg-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default FAQ;

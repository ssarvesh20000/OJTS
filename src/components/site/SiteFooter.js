import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYelp } from '@fortawesome/free-brands-svg-icons';
import Container from '../layout/Container';
import logo from '../../assets/logo-mark.png';
import xpel from '../../assets/xpelwhite.webp';
import { CONTACT, SOCIALS } from './contactInfo';

const SOCIAL_ICONS = { Instagram: faInstagram, Facebook: faFacebook, Yelp: faYelp };

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Reviews', to: '/#reviews' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Get a Quote', to: '/contact' },
];

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink-800 text-sm">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img src={logo} alt="OJ Tint Studio" className="h-14 w-auto" />
            <p className="m-0 mt-4 max-w-sm leading-relaxed text-fg-muted">
              Premium automotive window tinting in San Jose since 2020. Authorized XPEL dealer serving
              the Bay Area.
            </p>
            <img src={xpel} alt="XPEL Authorized Dealer" className="mt-5 h-5 w-auto opacity-80" />
          </div>

          <nav aria-label="Footer">
            <h3 className="m-0 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand">Explore</h3>
            <ul className="m-0 list-none space-y-2 p-0">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <HashLink to={l.to} className="text-white/75 hover:text-brand">
                    {l.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="m-0 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand">Visit Us</h3>
            <address className="space-y-2 not-italic text-white/75">
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-brand">
                {CONTACT.address}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="block hover:text-brand">
                {CONTACT.email}
              </a>
              <a href={CONTACT.phoneHref} className="block hover:text-brand">
                {CONTACT.phone}
              </a>
            </address>
            <div className="mt-5 flex gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-xl text-white/70 hover:text-brand"
                >
                  <FontAwesomeIcon icon={SOCIAL_ICONS[s.label]} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-fg-subtle">
          &copy; {new Date().getFullYear()} OJ Tint Studio. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default SiteFooter;

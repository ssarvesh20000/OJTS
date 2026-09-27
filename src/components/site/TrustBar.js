import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faShieldHalved,
  faLock,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import Container from '../layout/Container';
import xpel from '../../assets/xpelwhite.webp';

function Item({ children }) {
  return (
    <div className="flex items-center gap-3 px-2 py-4 text-left">{children}</div>
  );
}

function TrustBar() {
  return (
    <section className="w-full m-0 p-0 bg-ink">
      <Container>
        <div className="relative z-10 -mt-6 rounded-card border border-white/10 bg-ink-600 px-4 shadow-card sm:px-8">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
            {/* Rating */}
            <Item>
              <FontAwesomeIcon icon={faStar} className="text-3xl text-brand" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">5.0</span>
                  <span className="text-brand">★★★★★</span>
                </div>
                <p className="m-0 text-xs text-fg-muted">200+ 5-Star Reviews</p>
              </div>
            </Item>

            {/* XPEL dealer */}
            <Item>
              <img src={xpel} alt="XPEL" className="h-6 w-auto" />
              <p className="m-0 text-xs text-fg-muted">Authorized Dealer</p>
            </Item>

            {/* Lifetime warranty */}
            <Item>
              <FontAwesomeIcon icon={faShieldHalved} className="text-2xl text-brand" />
              <div>
                <p className="m-0 text-sm font-bold uppercase leading-tight text-white">
                  Lifetime Warranty
                </p>
                <p className="m-0 text-xs text-fg-muted">On All Installations</p>
              </div>
            </Item>

            {/* No-fault warranty */}
            <Item>
              <FontAwesomeIcon icon={faLock} className="text-2xl text-brand" />
              <div>
                <p className="m-0 text-sm font-bold uppercase leading-tight text-white">
                  No-Fault Warranty
                </p>
                <p className="m-0 text-xs text-fg-muted">
                  We re-tint your replacement window at no cost.
                </p>
              </div>
            </Item>

            {/* Location */}
            <Item>
              <FontAwesomeIcon icon={faLocationDot} className="text-2xl text-brand" />
              <div>
                <p className="m-0 text-sm font-bold uppercase leading-tight text-white">
                  San Jose, CA
                </p>
                <p className="m-0 text-xs text-fg-muted">Proudly Serving the Bay Area</p>
              </div>
            </Item>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TrustBar;

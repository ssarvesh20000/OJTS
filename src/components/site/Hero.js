import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Container from '../layout/Container';
import Button from '../ui/Button';
import heroPhoto from '../../assets/hero-install.webp';

const HERO_ALT = 'OJ Tint Studio installer applying window film inside a car with red racing seats';

// The photo is portrait, so it is framed beside the copy rather than used as a
// full-bleed background; object-position keeps the installer and red seat in
// view whatever the frame's shape.
const PHOTO_FOCUS = 'object-[55%_55%]';

function Hero() {
  return (
    <section
      id="home"
      // On desktop the hero fills the screen minus the sticky nav (5rem), the
      // no-fault warranty bar that overlaps its bottom edge, and the trust bar
      // below it with their gaps (~14rem together), so both bars sit in the
      // first screen.
      className="relative w-full m-0 p-0 overflow-hidden bg-ink lg:flex lg:min-h-[calc(100svh-19rem)] lg:items-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(900px 500px at 78% 45%, rgba(30,158,255,0.12), transparent 65%)' }}
      />

      <Container className="relative w-full">
        <div className="grid items-center gap-10 pb-10 pt-10 sm:pt-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12 lg:pb-12 lg:pt-6">
          <div className="relative z-10 text-center lg:text-left">
            <p className="m-0 mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              San Jose&rsquo;s Premier
            </p>
            <h1 className="m-0 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl lg:whitespace-nowrap lg:text-[3.5rem] xl:text-[4.25rem]">
              Premium
              <br />
              Window Tinting.
              <br />
              <span className="text-brand">Done Right.</span>
            </h1>
            <div aria-hidden className="mx-auto mt-7 h-0.5 w-36 bg-brand lg:mx-0" />
            <p className="mx-auto mb-0 mt-6 max-w-md text-base leading-relaxed text-white/85 lg:mx-0 lg:max-w-lg lg:text-lg">
              Professional installation. Premium XPEL films. Lifetime warranty. No-Fault Warranty.
              Unmatched quality.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row lg:justify-start">
              <Button to="/contact" variant="primary" size="lg" className="sm:px-8">
                Get Your Quote <FontAwesomeIcon icon={faArrowRight} />
              </Button>
              <Button to="/gallery" variant="outline" size="lg" className="border-brand/60 sm:px-8">
                View Our Work <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </div>

          {/* Photo frame: sized from the screen height on desktop so the
              first-screen layout holds; a 4:5 crop on smaller screens. */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-white/10 shadow-card sm:aspect-[4/3] lg:aspect-auto lg:h-[calc(100svh-23rem)] lg:min-h-[20rem]">
            <img src={heroPhoto} alt={HERO_ALT} className={`absolute inset-0 h-full w-full object-cover ${PHOTO_FOCUS}`} />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(5,7,10,0) 55%, rgba(5,7,10,0.45) 100%)' }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;

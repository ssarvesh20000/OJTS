import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Container from '../layout/Container';
import Button from '../ui/Button';
import heroPhoto from '../../assets/hero-install.webp';

const HERO_ALT = 'OJ Tint Studio installer applying window film inside a car with red racing seats';

// Where the photo is cropped from: keeps the installer and red seat in view.
const PHOTO_FOCUS = 'object-[55%_58%]';

// Desktop: fades the photo's left edge into the copy and softens top/bottom.
const desktopFade = {
  maskImage:
    'linear-gradient(90deg, transparent 0%, #000 35%), linear-gradient(180deg, transparent 0%, #000 12%, #000 80%, transparent 100%)',
  WebkitMaskImage:
    'linear-gradient(90deg, transparent 0%, #000 35%), linear-gradient(180deg, transparent 0%, #000 12%, #000 80%, transparent 100%)',
  maskComposite: 'intersect',
  WebkitMaskComposite: 'source-in',
};

// Phones/tablets: the photo sits below the buttons, fading in at top and bottom.
const mobileFade = {
  maskImage: 'linear-gradient(180deg, transparent 0%, #000 15%, #000 80%, transparent 100%)',
  WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, #000 15%, #000 80%, transparent 100%)',
};

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
      {/* Desktop: unframed photo filling the right side, fading into the page */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <img src={heroPhoto} alt="" className={`h-full w-full object-cover ${PHOTO_FOCUS}`} style={desktopFade} />
      </div>

      <Container className="relative w-full">
        <div className="grid items-center gap-10 pb-10 pt-10 sm:pt-14 lg:gap-12 lg:pb-12 lg:pt-6">
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

          <img
            src={heroPhoto}
            alt={HERO_ALT}
            className={`-mx-5 block aspect-[4/5] w-[calc(100%+2.5rem)] max-w-none object-cover sm:-mx-6 sm:aspect-[4/3] sm:w-[calc(100%+3rem)] lg:hidden ${PHOTO_FOCUS}`}
            style={mobileFade}
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;

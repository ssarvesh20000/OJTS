import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Container from '../layout/Container';
import Button from '../ui/Button';
import heroPhoto from '../../assets/hero-tesla.webp';

const HERO_ALT = 'Black Tesla Model 3 with tinted windows outside the OJ Tint Studio shop at night';

// Feathers the photo's left, top and bottom edges into the page background,
// so it reads as one scene with the dark hero instead of a boxed image.
const featherMask = {
  maskImage:
    'linear-gradient(90deg, transparent 0%, #000 24%), linear-gradient(180deg, transparent 0%, #000 12%, #000 84%, transparent 100%)',
  WebkitMaskImage:
    'linear-gradient(90deg, transparent 0%, #000 24%), linear-gradient(180deg, transparent 0%, #000 12%, #000 84%, transparent 100%)',
  maskComposite: 'intersect',
  WebkitMaskComposite: 'source-in',
};

function Hero() {
  return (
    <section
      id="home"
      // On desktop the hero fills the screen minus the sticky nav (5rem) and the
      // part of the trust bar below it (~5.25rem), so the trust bar sits at the
      // bottom of the first screen.
      className="relative w-full m-0 p-0 overflow-hidden bg-ink lg:flex lg:min-h-[calc(100svh-10.25rem)] lg:items-center"
    >
      {/* Desktop: photo fills the right side of the hero behind the copy */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <img
          src={heroPhoto}
          alt=""
          className="absolute bottom-[4%] right-0 w-[72%] max-w-[1500px]"
          style={featherMask}
        />
        {/* Keeps the copy readable where it overlaps the building */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, #05070A 0%, rgba(5,7,10,0.9) 24%, rgba(5,7,10,0.45) 38%, rgba(5,7,10,0) 52%)',
          }}
        />
      </div>

      <Container className="relative w-full">
        <div className="pb-10 pt-10 sm:pt-14 lg:max-w-[40rem] lg:pb-14 lg:pt-6">
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
              <Button to="/#contact" variant="primary" size="lg" className="sm:px-8">
                Get Your Quote <FontAwesomeIcon icon={faArrowRight} />
              </Button>
              <Button to="/#work" variant="outline" size="lg" className="border-brand/60 sm:px-8">
                View Our Work <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </div>

          {/* Mobile/tablet: photo sits below the copy */}
          <img
            src={heroPhoto}
            alt={HERO_ALT}
            className="-mx-5 mt-10 block w-[calc(100%+2.5rem)] max-w-none sm:-mx-6 sm:w-[calc(100%+3rem)] lg:hidden"
            style={{
              maskImage: 'linear-gradient(180deg, transparent 0%, #000 14%, #000 82%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, #000 14%, #000 82%, transparent 100%)',
            }}
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Container from '../layout/Container';
import Button from '../ui/Button';
import HeroBackdrop from './HeroBackdrop';
import heroCar from '../../assets/hero-car.png';

// To use a real photo as the hero background instead of the drawn studio
// scene, import it here, e.g.
//   import heroPhoto from '../../assets/hero-photo.jpg';
// and set HERO_PHOTO = heroPhoto. Best results: a wide (2400px+) dark shot
// with the car on the right half. The cutout car is hidden while a photo
// is set, since the photo brings its own car.
const HERO_PHOTO = null;

function Hero() {
  return (
    <section
      id="home"
      // On desktop the hero fills the screen minus the sticky nav (5rem) and the
      // part of the trust bar below it (~5.25rem), so the trust bar sits at the
      // bottom of the first screen.
      className="relative w-full m-0 p-0 overflow-hidden bg-ink lg:flex lg:min-h-[calc(100svh-10.25rem)] lg:items-center"
    >
      <HeroBackdrop photo={HERO_PHOTO} />

      <Container className="relative w-full">
        <div className="grid items-center gap-8 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-4 lg:pb-14 lg:pt-6">
          {/* Copy */}
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
            <p className="mx-auto mb-0 mt-6 max-w-md text-base leading-relaxed lg:max-w-lg lg:text-lg text-white/85 lg:mx-0">
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

          {/* Visual: car on the studio floor with a soft reflection */}
          {!HERO_PHOTO && (
            <div className="relative mx-auto w-full max-w-xl lg:-mr-[14%] lg:mt-40 lg:w-[128%] lg:max-w-none xl:-mr-[18%]">
              {/* Contact shadow under the tires */}
              <div
                aria-hidden
                className="absolute inset-x-[6%] bottom-[-4%] h-[14%] rounded-[50%] bg-black/80 blur-xl"
              />
              <img
                src={heroCar}
                alt="Black BMW M3s with premium window tint by OJ Tint Studio"
                className="relative block w-full"
              />
              {/* Floor reflection */}
              <img
                src={heroCar}
                alt=""
                aria-hidden
                className="pointer-events-none absolute left-0 top-full block w-full -scale-y-100 opacity-25"
                style={{
                  maskImage: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 45%)',
                  WebkitMaskImage: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 45%)',
                }}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default Hero;

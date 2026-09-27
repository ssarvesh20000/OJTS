import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Container from '../layout/Container';
import Button from '../ui/Button';
import heroCar from '../../assets/tint images/car-black Background Removed.png';

function Hero() {
  return (
    <section
      id="home"
      className="relative w-full m-0 p-0 overflow-hidden bg-ink"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 500px at 75% 30%, rgba(30,158,255,0.14), transparent 60%)',
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-8 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-4 lg:pb-24 lg:pt-16">
          {/* Copy */}
          <div className="relative z-10 text-center lg:text-left">
            <p className="m-0 mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              San Jose&rsquo;s Premier
            </p>
            <h1 className="m-0 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl lg:whitespace-nowrap xl:text-[3.5rem]">
              Premium
              <br />
              Window Tinting.
              <br />
              <span className="text-brand">Done Right.</span>
            </h1>
            <div aria-hidden className="mx-auto mt-6 h-0.5 w-32 bg-brand lg:mx-0" />
            <p className="mx-auto mb-0 mt-6 max-w-md text-base leading-relaxed text-white/85 lg:mx-0">
              Professional installation. Premium XPEL films. Lifetime warranty. No-Fault Warranty.
              Unmatched quality.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row lg:justify-start">
              <Button to="/#contact" variant="primary" size="md" className="sm:px-8">
                Get Your Quote <FontAwesomeIcon icon={faArrowRight} />
              </Button>
              <Button to="/#work" variant="outline" size="md" className="border-brand/60 sm:px-8">
                View Our Work <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </div>

          {/* Visual: sized past its column so the car reads large and bleeds right */}
          <div className="relative lg:-ml-10 lg:-mr-10 xl:-mr-16">
            <img
              src={heroCar}
              alt="Black BMW M3s with premium window tint by OJ Tint Studio"
              className="w-full drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)] lg:w-[112%] lg:max-w-none"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;

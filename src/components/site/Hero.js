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
        <div className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:py-28">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              San Jose&rsquo;s Premier
            </p>
            <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Premium
              <br />
              Window Tinting.
              <br />
              <span className="text-brand">Done Right.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-fg-muted lg:mx-0">
              Professional installation. Premium XPEL films. Lifetime warranty.
              No-Fault Warranty. Unmatched quality.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row lg:justify-start">
              <Button to="/#contact" variant="primary" size="lg">
                Get Your Quote <FontAwesomeIcon icon={faArrowRight} />
              </Button>
              <Button to="/#work" variant="outline" size="lg">
                View Our Work <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <img
              src={heroCar}
              alt="Black BMW M3 with premium window tint by OJ Tint Studio"
              className="w-full drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;

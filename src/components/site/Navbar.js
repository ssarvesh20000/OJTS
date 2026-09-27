import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo-mark.png';
import Container from '../layout/Container';
import Button from '../ui/Button';

const NAV_LINKS = [
  { label: 'Services', to: '/#services' },
  { label: 'XPEL Films', to: '/#films' },
  { label: 'Our Work', to: '/#work' },
  { label: 'About', to: '/#about' },
  { label: 'Reviews', to: '/#reviews' },
  { label: 'Contact', to: '/#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-ink/90 backdrop-blur border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <HashLink to="/#" className="flex items-center" onClick={close}>
            <img src={logo} alt="OJ Tint Studio" className="h-11 w-auto sm:h-12" />
          </HashLink>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 xl:gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <HashLink
                key={link.label}
                to={link.to}
                className="text-[13px] font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-brand"
              >
                {link.label}
              </HashLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/#contact" variant="outline" size="sm">
              Get Your Quote
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="text-2xl text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur lg:hidden">
          <Container>
            <nav className="flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <HashLink
                  key={link.label}
                  to={link.to}
                  onClick={close}
                  className="py-3 text-sm font-medium uppercase tracking-wide text-white/85 hover:text-brand"
                >
                  {link.label}
                </HashLink>
              ))}
              <Button to="/#contact" variant="primary" size="md" className="mt-3 w-full" onClick={close}>
                Get Your Quote <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Navbar;

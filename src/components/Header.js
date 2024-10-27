import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.webp';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './nav-and-icon.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const updateView = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setIsMenuOpen(false); // Close menu on larger screens
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  return (
    <header style={headerStyle}>
      <img src={logo} alt="OJ TINT STUDIO" style={logoStyle} />

      {/* Hamburger button only visible in mobile view */}
      {isMobile && (
        <button onClick={toggleMenu} className="hamburger" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} style={hamburgerIconStyle} />
        </button>
      )}

      {/* Navigation links and social icons for laptop mode */}
      {!isMobile && (
        <>
          <nav className="nav-links">
            <HashLink to="/#" className="link">Home</HashLink>
            <HashLink to="/#small-gallery" className="link">Gallery</HashLink>
            <HashLink to="/#services" className="link">Services</HashLink>
            <HashLink to="/#quote" className="link">Simulator</HashLink>
            <HashLink to="/#contact" className="link">Contact</HashLink>
          </nav>

          <div className="social-icons">
            <a href="https://www.yelp.com/biz/oj-tint-studio-san-jose-2" target="_blank" rel="noopener noreferrer" className="icon" id="yelp">
              <FontAwesomeIcon icon={faYelp} />
            </a>
            <a href="https://www.instagram.com/ojtintstudio/" target="_blank" rel="noopener noreferrer" className="icon" id="ig">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/ojtintstudio/" target="_blank" rel="noopener noreferrer" className="icon" id="fb">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </>
      )}

      {/* Compact Overlay for Mobile */}
      {isMenuOpen && isMobile && (
        <div className="compact-overlay">
          <nav className="hamburger-nav">
            <HashLink to="/#" className="hamburger-link" onClick={toggleMenu}>Home</HashLink>
            <HashLink to="/#small-gallery" className="hamburger-link" onClick={toggleMenu}>Gallery</HashLink>
            <HashLink to="/#services" className="hamburger-link" onClick={toggleMenu}>Services</HashLink>
            <HashLink to="/#quote" className="hamburger-link" onClick={toggleMenu}>Simulator</HashLink>
            <HashLink to="/#contact" className="hamburger-link" onClick={toggleMenu}>Contact</HashLink>
            <div className="hamburger-social-icons">
              <a href="https://www.yelp.com/biz/oj-tint-studio-san-jose-2" target="_blank" rel="noopener noreferrer" className="hamburger-icon" id="yelp">
                <FontAwesomeIcon icon={faYelp} />
              </a>
              <a href="https://www.instagram.com/ojtintstudio/" target="_blank" rel="noopener noreferrer" className="hamburger-icon" id="ig">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/ojtintstudio/" target="_blank" rel="noopener noreferrer" className="hamburger-icon" id="fb">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

const headerStyle = {
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'black',
  color: '#fff',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  height: 'auto',
};

const logoStyle = {
  height: '75px',
  width: 'auto',
  marginRight: '20px',
};

const hamburgerIconStyle = {
  fontSize: '30px',
  color: '#fff',
};

export default Header;

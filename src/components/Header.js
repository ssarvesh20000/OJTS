import React, { useState } from 'react';
import logo from '../assets/logo.webp';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './nav-and-icon.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={headerStyle}>
      <img src={logo} alt="OJ TINT STUDIO" style={logoStyle} />

      {/* Hamburger button */}
      <button onClick={toggleMenu} className="hamburger" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} style={hamburgerIconStyle} />
      </button>

      {/* Navigation links and social icons - always visible in laptop mode */}
      <nav id="nav" style={{ ...navStyle, display: isMenuOpen || window.innerWidth > 768 ? 'flex' : 'none' }}>
        <HashLink to="/#" className='link'>Home</HashLink>
        <HashLink to="/#small-gallery" className='link'>Gallery</HashLink>
        <HashLink to="/#services" className='link'>Services</HashLink>
        <HashLink to="/#quote" className='link'>Simulator</HashLink>
        <HashLink to="/#contact" className='link'>Contact</HashLink>
      </nav>

      <div style={{ ...socialIconsStyle, display: isMenuOpen || window.innerWidth > 768 ? 'flex' : 'none' }}>
        <a href="https://www.yelp.com/biz/oj-tint-studio-san-jose-2" target="_blank" rel="noopener noreferrer" className='icon' id="yelp">
          <FontAwesomeIcon icon={faYelp} />
        </a>
        <a href="https://www.instagram.com/ojtintstudio/" target="_blank" rel="noopener noreferrer" className='icon' id="ig">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/ojtintstudio/" target="_blank" rel="noopener noreferrer" className='icon' id="fb">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
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

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
};

const socialIconsStyle = {
  display: 'flex',
  gap: '20px',
  marginLeft: '50px',
};

const hamburgerIconStyle = {
  fontSize: '30px',
  color: '#fff',
};

export default Header;

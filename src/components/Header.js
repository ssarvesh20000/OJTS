import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';

function Header() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Handlers to apply hover effect
  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>OJ TINT STUDIO</h1>
      <nav id="nav" style={navStyle}>
        <HashLink to="/#" style={navLinkStyle}>Home</HashLink>
        <HashLink to="/#services" style={navLinkStyle}>Services</HashLink>
        <HashLink to="/#small-gallery" style={navLinkStyle}>Gallery</HashLink>
        <HashLink to="/#quote" style={navLinkStyle}>Quote</HashLink>
        <HashLink to="/#contact" style={navLinkStyle}>Contact</HashLink>
      </nav>

      <div style={socialIconsStyle}>
        <a
          href="https://www.yelp.com/biz/oj-tint-studio-san-jose-2"
          target="_blank"
          rel="noopener noreferrer"
          style={hoveredIcon === 'yelp' ? { ...yelpStyle, ...iconHoverStyle } : yelpStyle}
          onMouseEnter={() => handleMouseEnter('yelp')}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faYelp} />
        </a>

        <a
          href="https://www.instagram.com/ojtintstudio/"
          target="_blank"
          rel="noopener noreferrer"
          style={hoveredIcon === 'instagram' ? { ...instaStyle, ...iconHoverStyle } : instaStyle}
          onMouseEnter={() => handleMouseEnter('instagram')}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://www.facebook.com/ojtintstudio/"
          target="_blank"
          rel="noopener noreferrer"
          style={hoveredIcon === 'facebook' ? { ...facebookStyle, ...iconHoverStyle } : facebookStyle}
          onMouseEnter={() => handleMouseEnter('facebook')}
          onMouseLeave={handleMouseLeave}
        >
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
  backgroundColor: '#111',
  color: '#fff',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

const titleStyle = {
  marginBottom: '10px',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px', // Space between the links
  marginBottom: '0px',
};

const navLinkStyle = {
  color: '#00aaff',
  textDecoration: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const socialIconsStyle = {
  display: 'flex',
  gap: '20px', // Space between icons
};

const facebookStyle = {
  fontSize: '24px',
  color: '#1877F2',
  textDecoration: 'none',
};

const instaStyle = {
  fontSize: '24px',
  color: '#E4405F',
  textDecoration: 'none',
};

const yelpStyle = {
  fontSize: '24px',
  color: '#D32323',
  textDecoration: 'none',
};

const iconHoverStyle = {
  color: 'purple', // Color to change when hovered
};

export default Header;
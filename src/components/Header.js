import React, { useState } from 'react';
import logo from '../assets/logo.webp';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';

function Header() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);


  // Handlers to apply hover effect
  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <header style={headerStyle}>
      <img src={logo} alt="OJ TINT STUDIO" style={logoStyle} />
      <nav id="nav" style={navStyle}>
      <HashLink 
  to="/#" 
  style={hoveredLink === 'home' ? { ...navLinkStyle, ...navLinkHoverStyle } : navLinkStyle} 
  onMouseEnter={() => setHoveredLink('home')} 
  onMouseLeave={() => setHoveredLink(null)}
>
  Home
</HashLink>

<HashLink 
  to="/#services" 
  style={hoveredLink === 'services' ? { ...navLinkStyle, ...navLinkHoverStyle } : navLinkStyle} 
  onMouseEnter={() => setHoveredLink('services')} 
  onMouseLeave={() => setHoveredLink(null)}
>
  Services
</HashLink>

<HashLink 
  to="/#small-gallery" 
  style={hoveredLink === 'gallery' ? { ...navLinkStyle, ...navLinkHoverStyle } : navLinkStyle} 
  onMouseEnter={() => setHoveredLink('gallery')} 
  onMouseLeave={() => setHoveredLink(null)}
>
  Gallery
</HashLink>

<HashLink 
  to="/#quote" 
  style={hoveredLink === 'quote' ? { ...navLinkStyle, ...navLinkHoverStyle } : navLinkStyle} 
  onMouseEnter={() => setHoveredLink('quote')} 
  onMouseLeave={() => setHoveredLink(null)}
>
  Quote
</HashLink>

<HashLink 
  to="/#contact" 
  style={hoveredLink === 'contact' ? { ...navLinkStyle, ...navLinkHoverStyle } : navLinkStyle} 
  onMouseEnter={() => setHoveredLink('contact')} 
  onMouseLeave={() => setHoveredLink(null)}
>
  Contact
</HashLink>

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
  backgroundColor: 'rgba(17, 17, 17, 0.2)',
  color: '#fff',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  backdropFilter: 'blur(7px)', // Adds a blur effect
};

const logoStyle = {
  height: '50px', // Adjust the height to fit your header
  width: 'auto',
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

const navLinkHoverStyle = {
  color: '#add8e6', // Light blue color on hover
  transition: 'color 0.3s ease', // Smooth transition for the color change
};


export default Header;
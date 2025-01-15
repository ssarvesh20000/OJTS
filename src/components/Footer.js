import { height } from '@mui/system';
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.webp';

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer style={isMobile ? mobileFooterStyle : footerStyle}>
      {isMobile ? (
        // Mobile Layout
        <>
          <img src={logo} alt="OJ TINT STUDIO" style={mobileLogoStyle} />
          <p>
            <a 
              href="https://www.google.com/maps/place/1580+Oakland+Rd+%23C109,+San+Jose,+CA+95131" 
              target="_blank" 
              rel="noopener noreferrer"
              style={linkStyle}
            >
              OJ Tint Studio, 1580 Oakland Rd #C109, San Jose, CA 95131
            </a>
          </p>
          <p>
            <a href="mailto:ojtintstudio@gmail.com" style={linkStyle}>
              ojtintstudio@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+15106761517" style={linkStyle}>
              1 (510)-676-1517
            </a>
          </p>
          <p>
            <a 
              href="https://www.instagram.com/ojtintstudio/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Instagram
            </a>
          </p>
          <p>
            <a 
              href="https://www.facebook.com/ojtintstudio/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Facebook
            </a>
          </p>
          <p>
            <a 
              href="https://www.yelp.com/biz/oj-tint-studio-san-jose-2" 
              target="_blank" 
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Yelp
            </a>
          </p>
        </>
      ) : (
        // Desktop Layout


          <div style={infoContainerStyle}>
            <div style={contactInfoStyle}>
              <p style={p_style}>
                <a 
                  href="https://www.google.com/maps/place/1580+Oakland+Rd+%23C109,+San+Jose,+CA+95131" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  1580 Oakland Rd #C109, San Jose, CA 95131
                </a>
              </p>
              <p style={p_style}>ojtintstudio@gmail.com</p>
              <p style={p_style}>1 (510)-676-1517</p>
            </div>
            <div style={logoContainerStyle}>
            <img src={logo} alt="OJ TINT STUDIO" style={logoStyle} />
            </div>
          </div>
      )}
      {/* Always display this at the bottom */}
      <p style={{ marginTop: '20px' }}>© 2025 Tinting Services. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

// Inline styles for mobile and desktop layouts
const footerStyle = {
  padding: '20px',
  backgroundColor: '#111',
  color: '#fff',
  textAlign: 'center',
};

const mobileFooterStyle = {
  padding: '10px',
  backgroundColor: '#111',
  color: '#fff',
  textAlign: 'center',
};

// const p_style = {
//   lineHeight: 
// }

const footerContainerStyle = {
  display: 'flex',
  justifyContent: 'center', // Center content for landscape mode
  alignItems: 'center',
  flexDirection: 'row',
  gap: '20px',
};

const p_style = {
  lineHeight: 1.1,
}
const logoContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px',
};

const logoStyle = {
  height: '80px', // Larger logo for desktop
  width: 'auto',
};

const mobileLogoStyle = {
  height: '150px', // Smaller logo for mobile
  width: 'auto',
};

const infoContainerStyle = {
  display: 'flex',
  flexDirection: 'column', // Stack vertically for clarity
  alignItems: 'center',
};

const contactInfoStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center', // Center align for consistency
};

const linkStyle = {
  color: '#0088cc',
  textDecoration: 'none',
};

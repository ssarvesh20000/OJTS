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
        <div style={footerContainerStyle}>
          <div style={logoContainerStyle}>
            <img src={logo} alt="OJ TINT STUDIO" style={logoStyle} />
          </div>

          <div style={infoContainerStyle}>
            <div style={contactInfoStyle}>
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
            </div>

            <div style={socialLinksStyle}>
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
            </div>
          </div>
        </div>
      )}
      {/* Always display this at the bottom */}
      <p style={{ marginTop: '20px' }}>© 2024 Tinting Services. All rights reserved.</p>
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

const footerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '30px',
};

const logoContainerStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px',
};

const logoStyle = {
  height: '280px', // Larger logo for desktop
  width: 'auto',
};

const mobileLogoStyle = {
  height: '150px', // Smaller logo for mobile
  width: 'auto',
};

const infoContainerStyle = {
  flex: '2',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '50px',
  paddingLeft: '30px',
};

const contactInfoStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
};

const socialLinksStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  marginLeft: '0',
};

const linkStyle = {
  color: '#0088cc',
  textDecoration: 'none',
};

import React from 'react';
import logo from '../assets/logo.webp';

function Footer() {
  return (
    <footer style={{ padding: '10px', backgroundColor: '#111', color: '#fff', textAlign: 'center' }}>
      
      <img src={logo} alt="OJ TINT STUDIO" style={logoStyle} />

      {/* Address as a Google Maps link */}
      <p>
        <a 
          href="https://www.google.com/maps/place/1580+Oakland+Rd+%23C109,+San+Jose,+CA+95131" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#0088cc'}}
        >
          OJ Tint Studio, 1580 Oakland Rd #C109, San Jose, CA 95131
        </a>
      </p>

      {/* Email as a mailto link */}
      <p>
        <a 
          href="mailto:ojtintstudio@gmail.com" 
          style={{ color: '#0088cc'}}
        >
          ojtintstudio@gmail.com
        </a>
      </p>

      {/* Phone number as a tel link */}
      <p>
        <a 
          href="tel:+15106761517" 
          style={{ color: '#0088cc'}}
        >
          1 (510)-676-1517
        </a>
      </p>

      <p>© 2024 Tinting Services. All rights reserved.</p>

      
    </footer>

  );
}

export default Footer;

const logoStyle = {
  height: '150px', // Adjust the height to fit your header
  width: 'auto',
};

//, textDecoration: 'underline' 
//style={{ color: '#0088cc'}}
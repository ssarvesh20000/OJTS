import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '10px', backgroundColor: '#111', color: '#fff', textAlign: 'center' }}>
      <p>© 2024 Tinting Services. All rights reserved.</p>
      
      {/* Address as a Google Maps link */}
      <p>
        <a 
          href="https://www.google.com/maps/place/1580+Oakland+Rd+%23C109,+San+Jose,+CA+95131" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#0088cc', textDecoration: 'underline' }}
        >
          OJ Tint Studio, 1580 Oakland Rd #C109, San Jose, CA 95131
        </a>
      </p>

      {/* Email as a mailto link */}
      <p>
        <a 
          href="mailto:ojtintstudio@gmail.com" 
          style={{ color: '#0088cc', textDecoration: 'underline' }}
        >
          ojtintstudio@gmail.com
        </a>
      </p>

      {/* Phone number as a tel link */}
      <p>
        <a 
          href="tel:+15106761517" 
          style={{ color: '#0088cc', textDecoration: 'underline' }}
        >
          1 (510)-676-1517
        </a>
      </p>
    </footer>
  );
}

export default Footer;

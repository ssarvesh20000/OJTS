import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactIcons() {
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  const iconContainerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end', // Align items to the right so text appears on the left
    gap: '15px', // Increase spacing between icons
    zIndex: 1000,
  };

  const iconStyle = {
    backgroundColor: '#000', // Black background
    padding: '15px', // Make icons slightly larger
    borderRadius: '50%',
    color: '#00aaff', // Blue icons
    fontSize: '24px', // Icon size
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center', // Align icon with text
    position: 'relative', // Ensure text can be positioned next to icon
  };

  const iconHoverStyle = {
    backgroundColor: '#000', // Black background on hover
    color: '#00aaff', // Blue icon color on hover
  };

  const textStyle = {
    fontSize: '16px', // Change font size
    fontFamily: 'Arial, sans-serif', // Set desired font family
    fontWeight: 'bold', // Optional: make the text bold
    marginRight: '10px', // Space between the text and the icon
    color: '#00aaff', // Blue text color
    transition: 'opacity 0.3s ease, transform 0.3s ease', // Smooth transition for text and sliding
    position: 'absolute',
    right: '100%', // Make sure the text appears to the left of the icon
    opacity: 0, // Initially hidden
    transform: 'translateX(10px)', // Move text slightly to the right, initially off-screen
    whiteSpace: 'nowrap', // Prevents text from wrapping into multiple lines
  };

  const textVisibleStyle = {
    opacity: 1, // Show the text when hovered
    transform: 'translateX(0)', // Move text back to its original position
  };

  return (
    <div style={iconContainerStyle}>
      {/* Phone Icon */}
      <div
        style={isPhoneHovered ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
        onMouseEnter={() => setIsPhoneHovered(true)}
        onMouseLeave={() => setIsPhoneHovered(false)}
      >
        <a
          href="tel:+15106761517"
          style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
        >
          <span
            style={isPhoneHovered ? { ...textStyle, ...textVisibleStyle, textDecoration: 'underline' } : textStyle}
          >
            +1(510)-676-1517
          </span>
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
  
      {/* Email Icon */}
      <div
        style={isEmailHovered ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
        onMouseEnter={() => setIsEmailHovered(true)}
        onMouseLeave={() => setIsEmailHovered(false)}
      >
        <a
          href="mailto:ojtintstudio@gmail.com"
          style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
        >
          <span
            style={isEmailHovered ? { ...textStyle, ...textVisibleStyle, textDecoration: 'underline' } : textStyle}
          >
            ojtintstudio@gmail.com
          </span>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
  
}

export default ContactIcons;

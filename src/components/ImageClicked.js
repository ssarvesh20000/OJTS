import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './img-close.css'; // Import the CSS file

function ImageClicked({ isOpen, onClose, image, make, model, f_tint, b_tint }) {
  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={popupStyle}>
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <img src={image} alt={model} style={enlargedImageStyle} />
        <div style={detailsStyle}>
          <p><strong>Make:</strong> {make}</p>
          <p><strong>Model:</strong> {model}</p>
          <p><strong>Front Tint:</strong> {f_tint}</p>
          <p><strong>Back Tint:</strong> {b_tint}</p>
        </div>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};

const popupStyle = {
  backgroundColor: 'lightblack',
  padding: '20px',
  borderRadius: '8px',
  position: 'relative',
  textAlign: 'center',
  maxWidth: '40%',          // Ensure the popup doesn't exceed 90% of the viewport width
  maxHeight: '100%'         // Ensure the popup doesn't exceed 90% of the viewport height
  //overflow: 'auto',         // Allow scrolling if content overflows
};

const enlargedImageStyle = {
  width: '80%',
  margin: '10px 0',
};

const detailsStyle = {
  marginTop: '10px',
};

export default ImageClicked;
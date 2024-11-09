import React, { useState } from 'react';
import './Quote.css';
import carImage from '../assets/tint images/car-black Background Removed.png'; // Base car image

import tintFront5 from '../assets/tint images/car-front-05.png'; // Front tint image
import tintFront20 from '../assets/tint images/car-front-20.avif';
import tintFront35 from '../assets/tint images/car-front-35.png';
import tintFront50 from '../assets/tint images/car-front-50.png';

import tintSide5 from '../assets/tint images/car-sides-05.png';   // Side tint image
import tintSide20 from '../assets/tint images/car-sides-20.png';
import tintSide35 from '../assets/tint images/car-sides-35.png';
import tintSide50 from '../assets/tint images/car-sides-50.avif';

import tintBack5 from '../assets/tint images/car-back-05.png';   // Back tint image
import tintBack20 from '../assets/tint images/car-back-20.avif';
import tintBack35 from '../assets/tint images/car-back-35.png';
import tintBack50 from '../assets/tint images/car-back-50.avif';

import windshield50 from '../assets/tint images/car-windshield-50.png'; // windshield

function Quote() {
  const [formData, setFormData] = useState({
    type: 'sedan',
    front_windshield_tint: 100,  // Start with no tint
    front_window_tint: 100,
    back_windshield_tint: 100,
    back_window_tint: 100,
  });

  // Handle tint selection through buttons
  const handleTintChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // Mapping button selections to the correct image paths, returning null for 100% (no tint)
  const getFrontTintImage = (tintValue) => {
    if (tintValue === 100) return null; // No tint
    switch (tintValue) {
      case 5: return tintFront5;
      case 20: return tintFront20;
      case 35: return tintFront35;
      case 50: return tintFront50;
      default: return null;
    }
  };

  const getSideTintImage = (tintValue) => {
    if (tintValue === 100) return null; // No tint
    switch (tintValue) {
      case 5: return tintSide5;
      case 20: return tintSide20;
      case 35: return tintSide35;
      case 50: return tintSide50;
      default: return null;
    }
  };

  const getBackTintImage = (tintValue) => {
    if (tintValue === 100) return null; // No tint
    switch (tintValue) {
      case 5: return tintBack5;
      case 20: return tintBack20;
      case 35: return tintBack35;
      case 50: return tintBack50;
      default: return null;
    }
  };

  const getWindshieldTintImage = (tintValue) => {
    if (tintValue === 100) return null; // No tint
    switch (tintValue) {
      case 50: return windshield50;
      default: return null;
    }
  };

  return (
    <section id="quote" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', scrollMarginTop: '100px' }}>
      {/* Title */}
      <h2>Simulator</h2>
      <div style={{ height: '40px' }}></div> {/* This adds the empty space */}

      {/* Car Preview */}
      <div style={{ width: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <img 
          src={carImage} 
          alt="Car Preview" 
          style={{
            width: '100%',
            height: 'auto',
            marginTop: '20px',
          }} 
        />
        {/* Overlay images for tints, if present */}
        {getWindshieldTintImage(formData.front_windshield_tint) && (
          <img 
            src={getWindshieldTintImage(formData.front_windshield_tint)}  
            alt="Front Windshield Tint" 
            style={{
              position: 'absolute',
              top: '0%', 
              left: '-0.20%',
              width: '100%', 
              height: 'auto',
              zIndex: 2,
              marginTop: '20px',
            }} 
          />
        )}
        {getFrontTintImage(formData.front_window_tint) && (
          <img 
            src={getFrontTintImage(formData.front_window_tint)}  
            alt="Front Tint" 
            style={{
              position: 'absolute',
              top: '0%', 
              left: '-0.03%',
              width: '100%', 
              height: 'auto',
              zIndex: 2,
              marginTop: '20px',
            }} 
          />
        )}
        {getSideTintImage(formData.back_window_tint) && (
          <img 
            src={getSideTintImage(formData.back_window_tint)}  
            alt="Side Tint" 
            style={{
              position: 'absolute',
              top: '0%', 
              left: '-0.05%',
              width: '100%', 
              height: 'auto',
              zIndex: 2,
              marginTop: '20px',
            }} 
          />
        )}
        {getBackTintImage(formData.back_windshield_tint) && (
          <img 
            src={getBackTintImage(formData.back_windshield_tint)}  
            alt="Back Tint" 
            style={{
              position: 'absolute',
              top: '0%', 
              left: '-0.1%',
              width: '100%', 
              height: 'auto',
              zIndex: 2,
              marginTop: '20px',
            }} 
          />
        )}
      </div>

      {/* Button Form - Below Car */}
      <div style={{ width: '75%', marginTop: '-20px', display: 'flex', justifyContent: 'space-between', zIndex: 3 }}>
        {/* Left side buttons */}
        <div style={{ width: '48%' }}>
          <div style={{ marginBottom: '15px'}}>
            <label>Front Windshield Tint:</label>
            <div className="button-group">
              { [50, 100].map(value => (
                <button 
                  key={value} 
                  type="button"
                  style={buttonStyle(formData.front_windshield_tint === value)}
                  onClick={() => handleTintChange('front_windshield_tint', value)}
                >
                  {value === 100 ? 'None' : `${value}%`}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '15px'}}>
            <label>Front Side Window Tint:</label>
            <div className="button-group">
              { [5, 20, 35, 50, 100].map(value => (
                <button 
                  key={value} 
                  type="button"
                  style={buttonStyle(formData.front_window_tint === value)}
                  onClick={() => handleTintChange('front_window_tint', value)}
                >
                  {value === 100 ? 'None' : `${value}%`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right side buttons */}
        <div style={{ width: '48%' }}>
          <div style={{ marginBottom: '15px'}}>
            <label>Back Windshield Tint:</label>
            <div className="button-group">
              { [5, 20, 35, 50, 100].map(value => (
                <button 
                  key={value} 
                  type="button"
                  style={buttonStyle(formData.back_windshield_tint === value)}
                  onClick={() => handleTintChange('back_windshield_tint', value)}
                >
                  {value === 100 ? 'None' : `${value}%`}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '15px'}}>
            <label>Back Side Window Tint:</label>
            <div className="button-group">
              { [5, 20, 35, 50, 100].map(value => (
                <button 
                  key={value} 
                  type="button"
                  style={buttonStyle(formData.back_window_tint === value)}
                  onClick={() => handleTintChange('back_window_tint', value)}
                >
                  {value === 100 ? 'None' : `${value}%`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const buttonStyle = (isSelected) => ({
  margin: '3px',
  width: '50px', // Ensure width and height are equal for a circular shape
  height: '50px',
  backgroundColor: isSelected ? '#007BFF' : '#cdf3fb',
  color: isSelected ? '#000' : '#000',
  border: '2px solid #fff',
  borderRadius: '50%', // This makes the button circular
  cursor: 'pointer',
  display: 'flex', // Ensure content is centered
  alignItems: 'center',
  justifyContent: 'center',
});

export default Quote;

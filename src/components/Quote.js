import React, { useState } from 'react';
import carImage from '../assets/tint images/car-black Background Removed.png'; // Base car image

import tintFront5 from '../assets/tint images/car-front-05.png'; // Front tint image
import tintFront20 from '../assets/tint images/car-front-20.avif';
import tintFront35 from '../assets/tint images/car-front-35.png';
import tintFront50 from '../assets/tint images/car-front-50.png';
import tintFront70 from '../assets/tint images/car-front-70.avif';

import tintSide5 from '../assets/tint images/car-sides-05.png';   // Side tint image
import tintSide20 from '../assets/tint images/car-sides-20.png';
import tintSide35 from '../assets/tint images/car-sides-35.png';
import tintSide50 from '../assets/tint images/car-sides-50.avif';
import tintSide70 from '../assets/tint images/car-sides-70.avif';   

import tintBack5 from '../assets/tint images/car-back-05.png';   // Back tint image
import tintBack20 from '../assets/tint images/car-back-20.avif';
import tintBack35 from '../assets/tint images/car-back-35.png';
import tintBack50 from '../assets/tint images/car-back-50.avif';
import tintBack70 from '../assets/tint images/car-back-70.avif';   

import windshield50 from '../assets/tint images/car-windshield-50.png'; //windshield
import windshield70 from '../assets/tint images/car-windshield-70.png';
import windshield80 from '../assets/tint images/car-windshield-80.avif';

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
      case 70: return tintFront70;
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
      case 70: return tintSide70;
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
      case 70: return tintBack70;
      default: return null;
    }
  };

  const getWindshieldTintImage = (tintValue) => {
    if (tintValue === 100) return null; // No tint
    switch (tintValue) {
      case 35: return windshield50;
      case 50: return windshield70;
      case 70: return windshield80;
      default: return null;
    }
  };

  return (
    <section id="quote" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', scrollMarginTop: '100px' }}>
      {/* Button Form - Left */}
      <div style={{ width: '20%', marginRight: '20px' }}>
        <h2>Tinting Simulator</h2>
        <form>
          <div>
            <label>Front Windshield Tint:</label>
            <div style={buttonGroupStyle}>
              { [35, 50, 70, 100].map(value => (
                <button 
                  key={value} 
                  type="button"
                  style={buttonStyle(formData.front_windshield_tint === value)}
                  onClick={() => handleTintChange('front_windshield_tint', value)}
                >
                  {value}%
                </button>
              ))}
            </div>
          </div>

          <div>
            <label>Front Side Window Tint:</label>
            <div style={buttonGroupStyle}>
              { [5, 20, 35, 50, 70, 100].map(value => (
                <button 
                  key={value} 
                  type="button"
                  style={buttonStyle(formData.front_window_tint === value)}
                  onClick={() => handleTintChange('front_window_tint', value)}
                >
                  {value}%
                </button>
              ))}
            </div>
          </div>

          <div>
            <label>Back Windshield Tint:</label>
            <div style={buttonGroupStyle}>
              { [5, 20, 35, 50, 70, 100].map(value => (
                <button 
                  key={value} 
                  type="button"
                  style={buttonStyle(formData.back_windshield_tint === value)}
                  onClick={() => handleTintChange('back_windshield_tint', value)}
                >
                  {value}%
                </button>
              ))}
            </div>
          </div>

          <div>
            <label>Back Side Window Tint:</label>
            <div style={buttonGroupStyle}>
              { [5, 20, 35, 50, 70, 100].map(value => (
                <button 
                  key={value} 
                  type="button"
                  style={buttonStyle(formData.back_window_tint === value)}
                  onClick={() => handleTintChange('back_window_tint', value)}
                >
                  {value}%
                </button>
              ))}
            </div>
          </div>
        </form>
      </div>

      {/* Car Preview - Right */}
      <div style={{ width: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <img 
          src={carImage} 
          alt="Car Preview" 
          style={{
            width: '100%',
            height: 'auto',
          }} 
        />
        {/* Overlay images for tints, if present */}
        {getWindshieldTintImage(formData.front_windshield_tint) && (
          <img 
            src={getWindshieldTintImage(formData.front_windshield_tint)}  
            alt="Front Windshield Tint" 
            style={{
              position: 'absolute',
              top: '26.45%', 
              left: '-0.17%',
              width: '100%', 
              height: 'auto',
            }} 
          />
        )}
        {getFrontTintImage(formData.front_window_tint) && (
          <img 
            src={getFrontTintImage(formData.front_window_tint)}  
            alt="Front Tint" 
            style={{
              position: 'absolute',
              top: '26.4%', 
              left: '-0.05%',
              width: '100%', 
              height: 'auto',
            }} 
          />
        )}
        {getSideTintImage(formData.back_window_tint) && (
          <img 
            src={getSideTintImage(formData.back_window_tint)}  
            alt="Side Tint" 
            style={{
              position: 'absolute',
              top: '26.5%', 
              left: '-0.05%',
              width: '100%', 
              height: 'auto',
            }} 
          />
        )}
        {getBackTintImage(formData.back_windshield_tint) && (
          <img 
            src={getBackTintImage(formData.back_windshield_tint)}  
            alt="Back Tint" 
            style={{
              position: 'absolute',
              top: '26.4%', 
              left: '-0.05%',
              width: '100%', 
              height: 'auto',
            }} 
          />
        )}
      </div>
    </section>
  );
}

const buttonStyle = (isSelected) => ({
  margin: '5px',
  padding: '10px 20px',
  backgroundColor: isSelected ? '#007BFF' : '#f0f0f0',
  color: isSelected ? '#fff' : '#000',
  border: '1px solid #ccc',
  borderRadius: '5px',
  cursor: 'pointer',
});

const buttonGroupStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

export default Quote;

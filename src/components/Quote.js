import React, { useState } from 'react';
import carImage from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-black Background Removed.png'; // Base car image

import tintFront5 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-front-05.png'; // Front tint image
import tintFront20 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-front-20.avif';
import tintFront35 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-front-35.png';
import tintFront50 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-front-50.png';
import tintFront70 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-front-70.avif';

import tintSide5 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-sides-05.png';   // Side tint image
import tintSide20 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-sides-20.png';
import tintSide35 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-sides-35.png';
import tintSide50 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-sides-50.avif';
import tintSide70 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-sides-70.avif';   

import tintBack5 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-back-05.png';   // Back tint image
import tintBack20 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-back-20.avif';
import tintBack35 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-back-35.png';
import tintBack50 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-back-50.avif';
import tintBack70 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-back-70.avif';   

import windshield50 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-windshield-50.png'; //windshield
import windshield70 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-windshield-70.png';
import windshield80 from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-windshield-80.avif';

function Quote() {
  const [formData, setFormData] = useState({
    type: 'sedan',
    front_windshield_tint: 100,  // Start with no tint
    front_window_tint: 100,
    back_windshield_tint: 100,
    back_window_tint: 100,
    sunroof_tint: 100,
  });

  // Arrays with allowed values for sliders
  const allowedWindshieldValues = [50, 70, 80, 100];
  const allowedOtherValues = [5, 20, 35, 50, 70, 100];

  // Helper function to snap to closest value
  const snapToClosestValue = (value, allowedValues) => {
    return allowedValues.reduce((prev, curr) => 
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
  };

  // Mapping slider values to the correct image paths, returning null for 100% (no tint)
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
      case 50: return windshield50;
      case 70: return windshield70;
      case 80: return windshield80;
      default: return null;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let snappedValue;

    // Determine which tint slider is being changed and apply snapping logic
    if (name === 'front_windshield_tint') {
      snappedValue = snapToClosestValue(parseInt(value), allowedWindshieldValues);
    } else {
      snappedValue = snapToClosestValue(parseInt(value), allowedOtherValues);
    }

    setFormData({ ...formData, [name]: snappedValue });
  };

  return (
    <section id="quote" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', scrollMarginTop: '100px' }}>
      {/* Slider Form - Left */}
      <div style={{ width: '20%', marginRight: '20px' }}>
        <h2>Get Pricing</h2>
        <form>
          <div>
            <label>Front Windshield Tint:</label>
            <input
              type="range"
              min="50"
              max="100"
              step="1"
              name="front_windshield_tint"
              value={formData.front_windshield_tint}
              onChange={handleChange}
            />
            <span>{formData.front_windshield_tint}%</span>
          </div>

          <div>
            <label>Front Window Tint:</label>
            <input
              type="range"
              min="5"
              max="100"
              step="1"
              name="front_window_tint"
              value={formData.front_window_tint}
              onChange={handleChange}
            />
            <span>{formData.front_window_tint}%</span>
          </div>

          <div>
            <label>Back Windshield Tint:</label>
            <input
              type="range"
              min="5"
              max="100"
              step="1"
              name="back_windshield_tint"
              value={formData.back_windshield_tint}
              onChange={handleChange}
            />
            <span>{formData.back_windshield_tint}%</span>
          </div>

          <div>
            <label>Back Window Tint:</label>
            <input
              type="range"
              min="5"
              max="100"
              step="1"
              name="back_window_tint"
              value={formData.back_window_tint}
              onChange={handleChange}
            />
            <span>{formData.back_window_tint}%</span>
          </div>

          <div>
            <label>Sunroof Tint:</label>
            <input
              type="range"
              min="5"
              max="100"
              step="1"
              name="sunroof_tint"
              value={formData.sunroof_tint}
              onChange={handleChange}
            />
            <span>{formData.sunroof_tint}%</span>
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
            src={getWindshieldTintImage(formData.front_windshield_tint)}  // dynamically switch based on slider
            alt="Front Windshield Tint" 
            style={{
              position: 'absolute',
              top: '10%', // Lowered position to align with car window
              left: '0%',
              width: '100%', 
              height: 'auto',
            }} 
          />
        )}
        {getFrontTintImage(formData.front_window_tint) && (
          <img 
            src={getFrontTintImage(formData.front_window_tint)}  // dynamically switch based on slider
            alt="Front Tint" 
            style={{
              position: 'absolute',
              top: '10%', // Lowered position to align with car window
              left: '0%',
              width: '100%', 
              height: 'auto',
            }} 
          />
        )}
        {getSideTintImage(formData.back_window_tint) && (
          <img 
            src={getSideTintImage(formData.back_window_tint)}  // dynamically switch based on slider
            alt="Side Tint" 
            style={{
              position: 'absolute',
              top: '10%', // Lowered position to align with car window
              left: '0%',
              width: '100%', 
              height: 'auto',
            }} 
          />
        )}
        {getBackTintImage(formData.back_windshield_tint) && (
          <img 
            src={getBackTintImage(formData.back_windshield_tint)}  // dynamically switch based on slider
            alt="Back Tint" 
            style={{
              position: 'absolute',
              top: '10%', // Lowered position to align with car window
              left: '0%',
              width: '100%', 
              height: 'auto',
            }} 
          />
        )}
      </div>
    </section>
  );
}

export default Quote;

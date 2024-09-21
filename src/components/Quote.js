import React, { useState } from 'react';
import carImage from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-black.jpg'; // Base car image
import tintFront from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-front-05.png'; // Front tint image
import tintSide from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-sides-05.png';   // Side tint image
import tintBack from '/Users/sarvesh/sarvystuff/portfolio/OJTSreact/OJTS/src/assets/tint images/car-back-05.png';   // Back tint image

function Quote() {
  const [formData, setFormData] = useState({
    type: 'sedan',
    front_windshield_tint: 70,
    front_window_tint: 70,
    back_windshield_tint: 70,
    back_window_tint: 70,
    sunroof_tint: 70,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseInt(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="quote" style={{ padding: '20px', scrollMarginTop: '100px' }}>
      <h2>Get Pricing</h2>
      
      {/* Car Preview */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', position: 'relative' }}>
        {/* Base Car Image */}
        <img 
          src={carImage} 
          alt="Car Preview" 
          style={{
            width: '500px',
            height: 'auto',
          }} 
        />
        
        {/* Front Window Tint */}
        <img 
          src={tintFront} 
          alt="Front Tint" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '500px',
            height: 'auto',
            opacity: formData.front_window_tint / 100,  // Adjust opacity based on tint level
          }} 
        />

        {/* Side Window Tint */}
        <img 
          src={tintSide} 
          alt="Side Tint" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '500px',
            height: 'auto',
            opacity: formData.front_window_tint / 100,  // Adjust opacity based on tint level
          }} 
        />

        {/* Back Window Tint */}
        <img 
          src={tintBack} 
          alt="Back Tint" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '500px',
            height: 'auto',
            opacity: formData.back_window_tint / 100,  // Adjust opacity based on tint level
          }} 
        />
      </div>

      <form onSubmit={handleSubmit}>


        {/* Front Windshield Tint */}
        <div>
          <label>Front Windshield Tint:</label>
          <input
            type="range"
            min="5"
            max="100"
            step="5"
            name="front_windshield_tint"
            value={formData.front_windshield_tint}
            onChange={handleChange}
          />
          <span>{formData.front_windshield_tint}%</span>
        </div>

        {/* Front Window Tint */}
        <div>
          <label>Front Window Tint:</label>
          <input
            type="range"
            min="5"
            max="100"
            step="5"
            name="front_window_tint"
            value={formData.front_window_tint}
            onChange={handleChange}
          />
          <span>{formData.front_window_tint}%</span>
        </div>

        {/* Back Windshield Tint */}
        <div>
          <label>Back Windshield Tint:</label>
          <input
            type="range"
            min="5"
            max="100"
            step="5"
            name="back_windshield_tint"
            value={formData.back_windshield_tint}
            onChange={handleChange}
          />
          <span>{formData.back_windshield_tint}%</span>
        </div>

        {/* Back Window Tint */}
        <div>
          <label>Back Window Tint:</label>
          <input
            type="range"
            min="5"
            max="100"
            step="5"
            name="back_window_tint"
            value={formData.back_window_tint}
            onChange={handleChange}
          />
          <span>{formData.back_window_tint}%</span>
        </div>

        {/* Sunroof Tint */}
        <div>
          <label>Sunroof Tint:</label>
          <input
            type="range"
            min="5"
            max="100"
            step="5"
            name="sunroof_tint"
            value={formData.sunroof_tint}
            onChange={handleChange}
          />
          <span>{formData.sunroof_tint}%</span>
        </div>

        <button type="submit">Calculate</button>
      </form>
    </section>
  );
}

export default Quote;

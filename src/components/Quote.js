import React, { useState } from 'react';

function Quote() {
  const [formData, setFormData] = useState({
    type: 'sedan',  // default to 'sedan'
    make: '',
    model: '',
    plate_num: '',
    front_windshield_tint: 0,
    front_window_tint: 0,
    back_windshield_tint: 0,
    back_window_tint: 0,
    sunroof_tint: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="quote" style={{ padding: '20px', scrollMarginTop: '100px' }}>
      <h2>Get Pricing</h2>
      <form onSubmit={handleSubmit}>
        {/* Car Type Dropdown */}
        <div>
          <label>Car Type:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="truck">Truck</option>
            <option value="sedan">Sedan</option>
            <option value="SUV">SUV</option>
          </select>
        </div>

        {/* Front Windshield Tint Slider */}
        <div>
          <label>Front Windshield Tint Percentage:</label>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            name="front_windshield_tint"
            value={formData.front_windshield_tint}
            onChange={handleChange}
          />
          <span>{formData.front_windshield_tint}%</span>
        </div>

        {/* Front Window Tint Slider */}
        <div>
          <label>Front Window Tint Percentage:</label>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            name="front_window_tint"
            value={formData.front_window_tint}
            onChange={handleChange}
          />
          <span>{formData.front_window_tint}%</span>
        </div>

        {/* Back Windshield Tint Slider */}
        <div>
          <label>Back Windshield Tint Percentage:</label>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            name="back_windshield_tint"
            value={formData.back_windshield_tint}
            onChange={handleChange}
          />
          <span>{formData.back_windshield_tint}%</span>
        </div>

        {/* Back Window Tint Slider */}
        <div>
          <label>Back Window Tint Percentage:</label>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            name="back_window_tint"
            value={formData.back_window_tint}
            onChange={handleChange}
          />
          <span>{formData.back_window_tint}%</span>
        </div>

        <div>
          <label>Sunroof Tint Percentage:</label>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            name="sunroof_tint"
            value={formData.sunroof_tint}
            onChange={handleChange}
          />
          <span>{formData.sunroof_tint}%</span>
        </div>


        <h3 style={{ marginTop: '30px' }}>Calculated Price: </h3>
        <button type="submit">Calculate</button>
      </form>

    </section>
  );
}

export default Quote;


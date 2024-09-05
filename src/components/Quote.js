import React, { useState } from 'react';


function Quote() {

  const [formData, setFormData] = useState({
    make: '',
    model: '',
    plate_num: '',
    front_tint: '',
    back_tint: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };



  return (
    <section id="quote" style={{ padding: '20px', scrollMarginTop: '100px' }}>
      <h2>Get Pricing</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Car Make:</label>
          <input
            type="text"
            name="make"
            value={formData.make}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Car Model:</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>License Plate Number:</label>
          <input
            type="text"
            name="plate_num"
            value={formData.plate_num}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Front Tint Percentage:</label>
          <input
            type="number"
            min="1"
            max="100"
            name="front_tint"
            value={formData.front_tint}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Back Tint Percentage:</label>
          <input
            type="number"
            min="1"
            max="100"
            name="back_tint"
            value={formData.back_tint}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Calculate</button>
      </form>

      <h3 style= {{ marginTop: '30px' }}>Calculated Price: </h3>
    </section>
  );
}

export default Quote;

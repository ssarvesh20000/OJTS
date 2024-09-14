import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
    <section id="contact" style={{ padding: '20px', scrollMarginTop: '100px' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

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
            value={formData.make}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={formData.make}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;

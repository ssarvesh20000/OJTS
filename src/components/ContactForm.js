import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const form = useRef();
  const [submissionMessage, setSubmissionMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9v8bv8k', 'template_xp8se1b', form.current, 'iEPd4ZUZDvveGMX7H')
      .then((result) => {
          console.log(result.text);
          const name = e.target.name.value;
          //const year = e.target.year.value; //REMOVE
          const make = e.target.make.value; //combine year & model
          //const model = e.target.model.value; //REMOVE
          //get rid of year&model
          //setSubmissionMessage(`Message from ${name} successfully submitted (${year} ${make} ${model})`);
          setSubmissionMessage(`Message from ${name} successfully submitted (${make})`);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setSubmissionMessage('Message submission unsuccessful :(');
      });
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={{ height: '50px' }}></div> {/* This adds the empty space */}
      <h2 style={headerStyle}>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} style={formStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Name:</label>
          <input type="text" name="name" style={inputStyle} required />
        </div>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Email:</label>
          <input type="email" name="email" style={inputStyle} required />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Phone Number:</label>
          <input type="text" name="number" style={inputStyle} />
        </div>
{/* get rid of 'model' & 'year' and combine it to 'make'*/}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Vehicle Make, Model, & Year:</label>
          <input type="text" name="make" style={inputStyle} required />
        </div>
{/*
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Car Model:</label>
          <input type="text" name="model" style={inputStyle} required />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Year:</label>
          <input type="text" name="year" style={inputStyle} required />
        </div>
*/}       
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Message:</label>
          <textarea name="message" style={textareaStyle} required />
        </div>

        <button type="submit" style={buttonStyle}>Submit</button>

        {submissionMessage && <p style={messageStyle}>{submissionMessage}</p>}
      </form>
    </section>
  );
}

// Styles
const sectionStyle = {
  padding: '20px',
  maxWidth: '600px', // Set a max width to make the form compact
  margin: '0 auto',
  backgroundColor: '#000', // Black background
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Add a subtle shadow for depth
};

const headerStyle = {
  color: '#00aaff', // Blue accent for the header adgkjq'dwgvALKDFJADJK
  textAlign: 'center',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px', // Add space between the form fields
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  marginBottom: '5px',
  color: '#fff', // White text for labels
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #333', // Darker border for inputs
  backgroundColor: '#222', // Dark input fields
  color: '#fff', // White text
  outline: 'none',
  fontSize: '14px',
};

const textareaStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #333',
  backgroundColor: '#222',
  color: '#fff',
  outline: 'none',
  fontSize: '14px',
  minHeight: '100px', // Adjust the height for the message textarea
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007BFF', // Blue button background
  color: '#fff', // White text
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  alignSelf: 'center', // Center the button
  marginTop: '20px',
};

const messageStyle = {
  color: '#00FF00', // Success message in green
  marginTop: '10px',
  textAlign: 'center',
};

export default ContactForm;

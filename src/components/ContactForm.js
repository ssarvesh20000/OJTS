import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const form = useRef();
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isError, setIsError] = useState(false); // Track whether the message is an error

  const sendEmail = (e) => {
    e.preventDefault();

    // Extract and preprocess phone number
    let number = e.target.number.value.trim();
    number = number.replace(/\D/g, ''); // Remove all non-digit characters

    // Ensure it's a 10-digit US phone number (optionally handle leading '1')
    if (number.length === 11 && number.startsWith('1')) {
      number = number.slice(1); // Remove the leading '1'
    }

    if (number.length !== 10) {
      setSubmissionMessage('Phone number must be a valid 10-digit number.');
      setIsError(true); // Mark as error
      return; // Stop form submission if the phone number is invalid
    }

    emailjs.sendForm('service_9v8bv8k', 'template_xp8se1b', form.current, 'iEPd4ZUZDvveGMX7H')
      .then((result) => {
        console.log(result.text);
        const name = e.target.name.value;
        const make = e.target.make.value;
        setSubmissionMessage(`Message from ${name} successfully submitted (${make}).`);
        setIsError(false); // Mark as success
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        setSubmissionMessage('Message submission unsuccessful :(');
        setIsError(true); // Mark as error
      });
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={{ height: '70px' }}></div> {/* This adds the empty space */}
      <h2 style={headerStyle}>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} style={formStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Name:</label>
          <input type="text" name="name" style={inputStyle} placeholder={'required'} required />
        </div>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Email:</label>
          <input type="email" name="email" style={inputStyle} placeholder={'required'} required />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Phone Number:</label>
          <input type="tel" name="number" style={inputStyle} placeholder={'required'} required />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Vehicle Make, Model, & Year:</label>
          <input type="text" name="make" style={inputStyle} placeholder={'required'} required />
        </div>
       
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Message:</label>
          <textarea name="message" style={textareaStyle} placeholder={'required'} required />
        </div>

        {submissionMessage && (
          <p style={{ ...messageStyle, color: isError ? 'red' : 'green' }}>
            {submissionMessage}
          </p>
        )}

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </section>
  );
}

// Styles
const sectionStyle = {
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#000',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
};

const headerStyle = {
  color: '#00aaff',
  textAlign: 'center',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  marginBottom: '5px',
  color: '#fff',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #333',
  backgroundColor: '#222',
  color: '#fff',
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
  minHeight: '100px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  alignSelf: 'center',
  marginTop: '20px',
};

const messageStyle = {
  marginTop: '10px',
  textAlign: 'center',
};

export default ContactForm;

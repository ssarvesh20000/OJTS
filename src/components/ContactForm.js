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
          // Show success message using form data
          const name = e.target.name.value;
          const year = e.target.year.value;
          const make = e.target.make.value;
          const model = e.target.model.value;
          setSubmissionMessage(`Message from ${name} successfully submitted (${year} ${make} ${model})`);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          // Show error message
          setSubmissionMessage('Message submission unsuccessful :(');
      });

    // Optionally reset the form after submission
  };

  return (
    <section id="contact" style={{ padding: '20px', scrollMarginTop: '100px' }}>
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>

        <div>
          <label>Phone Number:</label>
          <input type="text" name="number" />
        </div>

        <div>
          <label>Car Make:</label>
          <input type="text" name="make" required />
        </div>

        <div>
          <label>Car Model:</label>
          <input type="text" name="model" required />
        </div>

        <div>
          <label>Year:</label>
          <input type="text" name="year" required />
        </div>
        
        <div>
          <label>Message:</label>
          <textarea name="message" required />
        </div>

        <button type="submit">Submit</button>

        {/* Show submission message after form is submitted */}
        {submissionMessage && <p>{submissionMessage}</p>}
      </form>
    </section>
  );
}

export default ContactForm;



import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../styles/Contact.scss';

function Contact() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Number: '',
    Company: '',
    Message: '',
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), formData);
      setSubmitStatus("✅ Message sent successfully!");
      setFormData({ Name: '', Email: '', Number: '', Company: '', Message: '' });
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setSubmitStatus("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="ContactPart">
      <h1>Contact Us</h1>
      <h3>We'd love to hear from you. Fill in your details and we'll get back to you shortly.</h3>

      <div className="ContactContainer">
        <form onSubmit={handleSubmit}>
          <label>Name
            <input type="text" name="Name" value={formData.Name} onChange={handleChange} required />
          </label>

          <label>Email
            <input type="email" name="Email" value={formData.Email} onChange={handleChange} required />
          </label>

          <label>Phone Number
            <input type="tel" name="Number" value={formData.Number} onChange={handleChange} required />
          </label>

          <label>Company Name
            <input type="text" name="Company" value={formData.Company} onChange={handleChange} />
          </label>

          <label>Message
            <textarea name="Message" rows="4" value={formData.Message} onChange={handleChange}></textarea>
          </label>

          <div className="MyBtn">
            <button type="submit">Submit</button>
          </div>
        </form>
        {submitStatus && <p>{submitStatus}</p>}
      </div>
    </div>
  );
}

export default Contact;

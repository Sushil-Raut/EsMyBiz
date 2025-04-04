import React from 'react';
// import '../styles/Contact.scss';

function Contact() {
  return (
    <div className="MainContainer">
      <h1>Contact Us</h1>
      <h2>We'd love to hear from you. Fill in your details and we'll get back to you shortly.</h2>
      
      <div className="ContactContainer">
        <form action="">
          <label htmlFor="Name">Name
            <div>
              <input type="text" id="Name" name="Name" required />
            </div>
          </label>

          <label htmlFor="Email">Email
            <div>
              <input type="email" id="Email" name="Email" required />
            </div>
          </label>

          <label htmlFor="Number">Phone Number
            <div>
              <input type="tel" id="Number" name="Number" required />
            </div>
          </label>

          <label htmlFor="Company">Company Name
            <div>
              <input type="text" id="Company" name="Company" />
            </div>
          </label>

          <label htmlFor="Message">Message
            <div>
              <textarea id="Message" name="Message" rows="4"></textarea>
            </div>
          </label>

          <div className="MyBtn">
            <button type="submit">Submit</button>
          </div>       
        </form>
      </div>
    </div>
  );
}

export default Contact;

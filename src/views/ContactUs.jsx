import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us-container">
      <h2>Contact Us</h2>
      
      <form className="contact-form">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Type your message" rows="4" required></textarea>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
};

export default ContactUs;

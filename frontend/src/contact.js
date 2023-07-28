import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>Have a question, feedback, or need assistance? Reach out to us using the contact details or the form below, and our friendly team will be happy to assist you.</p>
      <div className="contact-info">
        <div>
          <h3>Phone</h3>
          <p>+1 123-456-7890</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>info@example.com</p>
        </div>
        <div>
          <h3>Address</h3>
          <p>123 Main St, City, Country</p>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

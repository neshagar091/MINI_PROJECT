import React, { useState } from 'react';
import './feedback.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Feedback() {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState('');
  const [email, setEmail] = useState();
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted!');
    console.log('Name:', name);
    // console.log('Email:', email);
    console.log('Feedback:', feedback);
  };

  return (
    <div className="feedback">
      <h2>Feedback Form</h2>
      <p>We would love to hear your feedback! {name} Please fill out the form below.</p>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;

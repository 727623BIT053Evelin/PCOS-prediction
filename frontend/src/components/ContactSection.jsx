import React, { useState } from 'react';

const pastelGradient = {
  background: 'linear-gradient(135deg, #f3e7fa 0%, #ffe5ee 100%)'
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error('Network response was not ok');
      setSubmitted(true);
    } catch (err) {
      setError('Failed to submit: ' + err.message);
    }
  };

 if (submitted) {
  return (
    <div
      className="bg-white rounded-4 shadow p-4 mb-4 d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: '250px' }}
    >
      <h3 style={{ color: '#2a254d', fontWeight: 'bold', marginBottom: '15px' }}>
        Thank you for contacting us.
      </h3>
      <p style={{ color: '#6c3beb', fontSize: '1.2rem', textAlign: 'center' }}>
        We will get back to you soon.
      </p>
      <button
        className="btn mt-4"
        style={{ backgroundColor: '#a259e8', border: 'none', color: 'white', minWidth: '150px' }}
        onClick={() => setSubmitted(false)}
      >
        Send Another Message
      </button>
    </div>
  );
}

  return (
    <div className="container py-5">
      <div style={pastelGradient} className="rounded-4 p-5 mb-4 text-center shadow-sm">
        <h1 style={{ color: '#2a254d', fontWeight: 'bold', fontSize: '2rem' }}>Contact Us</h1>
      </div>
      <div className="bg-white rounded-4 shadow p-4 mb-4">
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              rows="5"
              name="message"
              className="form-control"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{ backgroundColor: '#a259e8', border: 'none', color: 'white' }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

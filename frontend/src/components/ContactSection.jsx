import React, { useState } from 'react';

const pastelGradient = {
  background: 'linear-gradient(135deg, #f3e7fa 0%, #ffe5ee 100%)'
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add actual form submit logic here
    setSubmitted(true);
  };

  return (
    <div className="container py-5">
      <div style={pastelGradient} className="rounded-4 p-5 mb-5 text-center shadow-sm">
        <h1 style={{ color: '#2a254d', fontWeight: 'bold', fontSize: '2rem' }}>Contact Us</h1>
      </div>

      <div className="bg-white rounded-4 shadow p-4 mb-4">
        <div className="mb-4">
          <div className="d-flex align-items-center gap-3 mb-2" style={{ color: '#6c3beb' }}>
            <span role="img" aria-label="Mail" style={{ fontSize: '1.5rem' }}>📧</span>
            <a href="mailto:support@pcoscare.org" style={{ color: '#6c3beb', textDecoration: 'none' }}>
              support@pcoscare.org
            </a>
          </div>
          <div className="d-flex align-items-center gap-3 mb-2" style={{ color: '#6c3beb' }}>
            <span role="img" aria-label="Phone" style={{ fontSize: '1.5rem' }}>📞</span>
            <span>+91 98765 43210</span>
          </div>
          <div className="d-flex align-items-center gap-3" style={{ color: '#6c3beb' }}>
            <span role="img" aria-label="Location" style={{ fontSize: '1.5rem' }}>📍</span>
            <span>Tiruppur, Tamil Nadu</span>
          </div>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn w-100"
              style={{ background: '#a259e8', border: 'none', color: 'white' }}
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="alert alert-success text-center" role="alert">
            Thank you for contacting us. We will get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
}

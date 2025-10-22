import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#232933',
        color: '#bfc6d2',
        padding: '3rem 0 1rem 0',
        marginTop: '3rem'
      }}
    >
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-2">
              <span style={{fontSize: '2rem', color: '#ae57e9', marginRight: '0.75rem'}}>♡</span>
              <span className="fs-4 fw-bold" style={{color: 'white'}}>PCOS Care</span>
            </div>
            <div>Empowering women with knowledge, support, and resources for managing PCOS.</div>
          </div>
          <div className="col-lg-2 mb-4 mb-lg-0">
            <div className="fw-semibold text-white mb-2">Quick Links</div>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="link-light text-decoration-none">About PCOS</a></li>
              <li><a href="#" className="link-light text-decoration-none">Self-Assessment</a></li>
              <li><a href="#" className="link-light text-decoration-none">Lifestyle Tips</a></li>
              <li><a href="#" className="link-light text-decoration-none">Community</a></li>
            </ul>
          </div>
          <div className="col-lg-3 mb-4 mb-lg-0">
            <div className="fw-semibold text-white mb-2">Resources</div>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="link-light text-decoration-none">Research Articles</a></li>
              <li><a href="#" className="link-light text-decoration-none">Success Stories</a></li>
              <li><a href="#" className="link-light text-decoration-none">FAQs</a></li>
              <li><a href="#" className="link-light text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <div className="fw-semibold text-white mb-2">Contact</div>
            <ul className="list-unstyled mb-0">
              <li>support@pcoscare.org</li>
              <li>+91 98765 43210</li>
              <li>Tiruppur, Tamil Nadu</li>
            </ul>
          </div>
        </div>
        <hr style={{ borderColor: '#333b47' }} />
        <div className="text-center text-secondary small pt-3 pb-1">
          © 2025 PCOS Care. All rights reserved. This website provides information for educational purposes only
          and is not a substitute for professional medical advice.
        </div>
      </div>
    </footer>
  );
}

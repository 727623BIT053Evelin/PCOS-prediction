import React, { useState } from 'react';

const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About PCOS' },
  { id: 'assessment', label: 'Self-Assessment' },
  { id: 'lifestyle', label: 'Lifestyle Tips' },
  { id: 'consultation', label: 'Expert Help' },
  { id: 'community', label: 'Community' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ activeSection, setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
      style={{
        borderBottom: '2px solid #f3e7fa',
        minHeight: '60px',
      }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo and Brand */}
        <div className="d-flex align-items-center gap-3">
          <span style={{ fontSize: '2rem', color: '#ae57e9' }}>♡</span>
          <div>
            <span className="fw-bold" style={{ fontSize: '1.6rem', color: '#273048' }}>PCOS Care</span>
            <div style={{ fontSize: '0.95rem', color: '#939cad' }}>Empowering Women's Health</div>
          </div>
        </div>

        {/* Hamburger icon for mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navigation.map(({ id, label }) => (
              <li key={id} className="nav-item">
                <button
                  className={`nav-link btn btn-link ${activeSection === id ? 'active fw-bold' : ''}`}
                  style={{ color: '#273048', fontSize: '1.1rem' }}
                  onClick={() => {
                    setActiveSection(id);
                    setMenuOpen(false);
                  }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

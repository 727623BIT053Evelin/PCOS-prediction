import React from 'react';

// Custom style objects for gradients/backgrounds
const heroGradient = {
  background: 'linear-gradient(135deg, #f3e7fa 0%, #ffe5ee 100%)'
};

const awarenessGradient = {
  background: 'linear-gradient(90deg, #c56cd6 0%, #ffb6c1 100%)',
  color: 'white'
};

export default function HomeSection({ setActiveSection }) {
  return (
    <div className="container py-5">

      {/* HERO SECTION */}
      <div
        className="rounded-4 p-5 mb-4"
        style={{ ...heroGradient, minHeight: '340px', boxShadow: '0 2px 16px #f3e7fa' }}
      >
        <h1 className="fw-bold mb-3" style={{ fontSize: '2.2rem', color: '#2a254d' }}>
          Empower Your Health,<br />
          <span style={{ color: '#a259e8' }}>Embrace Your Journey</span>
        </h1>
        <p className="lead mb-4" style={{ color: '#42404b' }}>
          You are not alone in your PCOS journey. Join our supportive community dedicated to awareness,
          education, and empowerment for women navigating life with PCOS.
        </p>
        <div className="d-flex flex-wrap mb-2 gap-3">
          <button
            onClick={() => setActiveSection('about')}
            className="btn btn-primary btn-lg rounded-pill px-4"
            style={{ background: '#a259e8', border: 'none' }}
          >
            Learn More <span className="ms-2">&#8594;</span>
          </button>
         <button
          onClick={() => setActiveSection('assessment')}
          className="btn btn-outline-primary btn-lg rounded-pill px-4 custom-outline-purple"
          style={{ borderColor: '#a259e8', color: '#a259e8' }}
        >
          Take Self-Assessment
        </button>
        </div>
      </div>

      {/* WHAT IS PCOS SECTION */}
      <div className="rounded-4 bg-white shadow p-4 mb-4">
        <h2 className="fw-bold mb-3" style={{ fontSize: '1.6rem', color: '#2a254d' }}>What is PCOS?</h2>
        <p className="mb-2" style={{ fontSize: '1.05rem', color: '#474564' }}>
          Polycystic Ovary Syndrome (PCOS) is a hormonal condition affecting 1 in 10 women of reproductive age.
          It impacts ovulation, metabolism, and can affect multiple aspects of health.
        </p>
        <p className="mb-0" style={{ fontSize: '1.05rem', color: '#474564' }}>
          While PCOS is a chronic condition, it can be effectively managed with lifestyle changes, medical treatment, and support.
        </p>
      </div>

      {/* FEATURE CARDS GRID */}
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div style={{ background: '#ffe4ef' }} className="rounded-4 p-4 text-center h-100">
            <div style={{ fontSize: '2.5rem', color: '#bb1d69', marginBottom: '0.5rem' }}>♡</div>
            <div className="fw-bold text-danger mb-2">1 in 10 Women</div>
          </div>
        </div>
        <div className="col-md-6">
          <div style={{ background: '#f0e6ff' }} className="rounded-4 p-4 text-center h-100">
            <div style={{ fontSize: '2.5rem', color: '#8b50e3', marginBottom: '0.5rem' }}>👥</div>
            <div className="fw-bold mb-2" style={{ color: '#6c3beb' }}>Community Support</div>
          </div>
        </div>
        <div className="col-md-6">
          <div style={{ background: '#e4f0ff' }} className="rounded-4 p-4 text-center h-100">
            <div style={{ fontSize: '2.5rem', color: '#3392d6', marginBottom: '0.5rem' }}>↗</div>
            <div className="fw-bold text-info mb-2">Manageable</div>
          </div>
        </div>
        <div className="col-md-6">
          <div style={{ background: '#fff7d6' }} className="rounded-4 p-4 text-center h-100">
            <div style={{ fontSize: '2.5rem', color: '#cca00a', marginBottom: '0.5rem' }}>⭐</div>
            <div className="fw-bold text-warning mb-2">You Matter</div>
          </div>
        </div>
      </div>

      {/* PCOS Awareness Gradient Section */}
      <div className="rounded-4 p-5 text-center mb-2" style={awarenessGradient}>
        <h3 className="fw-bold mb-4" style={{ fontSize: '1.6rem' }}>PCOS Awareness</h3>
        <div className="row justify-content-center">
          <div className="col-12 mb-2">
            <div style={{ fontSize: '2.3rem', fontWeight: 'bold' }}>70%</div>
            <div>Women undiagnosed</div>
          </div>
          <div className="col-12">
            <div style={{ fontSize: '2.3rem', fontWeight: 'bold' }}>50%</div>
            <div>Can manage with lifestyle</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

const pastelGradient = {
  background: 'linear-gradient(135deg, #f3e7fa 0%, #ffe5ee 100%)'
};

export default function Consultationsection() {
  return (
    <div className="container py-5">
      <div style={pastelGradient} className="rounded-4 p-5 mb-5 text-center shadow-sm">
        <h1 className="fw-bold mb-3" style={{ fontSize: '2rem', color: '#2a254d' }}>
          <span>Expert Help &amp; <span style={{ color: '#a259e8' }}>Consultation</span></span>
        </h1>
        <p className="lead" style={{ color: '#42404b' }}>
          Connect with certified gynecologists, endocrinologists, and nutritionists specializing in PCOS management.
        </p>
      </div>

      <div className="bg-white rounded-4 shadow p-4 mb-4">
        <h2 className="h4 mb-4" style={{ color: '#a259e8' }}>Find a Specialist</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="location" className="form-label" style={{ color: '#4b467e' }}>
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="City or Zip Code"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="specialty" className="form-label" style={{ color: '#4b467e' }}>
              Specialty
            </label>
            <select id="specialty" name="specialty" className="form-select">
              <option>Gynecologist</option>
              <option>Endocrinologist</option>
              <option>Nutritionist</option>
              <option>Therapist</option>
            </select>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn w-100"
              style={{ background: '#a259e8', border: 'none', color: 'white' }}
            >
              Search Experts
            </button>
          </div>
        </form>
      </div>

      <div
        className="alert text-center"
        role="alert"
        style={{ background: '#f6e4fb', color: '#7d57a2', borderRadius: '1rem' }}
      >
        Note: This is for informational purposes only. Always consult your healthcare provider before starting any new treatment.
      </div>
    </div>
  );
}

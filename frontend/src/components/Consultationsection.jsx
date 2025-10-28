import React, { useState } from 'react';

const pastelGradient = {
  background: 'linear-gradient(135deg, #f3e7fa 0%, #ffe5ee 100%)'
};

const dummyDoctors = [
  {
    name: 'Dr. Priya Sharma',
    specialty: 'Gynecologist',
    phone: '+91 98765 11223',
    hospital: 'Sunrise Women’s Hospital',
    location: 'Chennai'
  },
  {
    name: 'Dr. Nikhil Rao',
    specialty: 'Endocrinologist',
    phone: '+91 98456 44322',
    hospital: 'City Endocrine Center',
    location: 'Bangalore'
  },
  {
    name: 'Dr. Meera Joshi',
    specialty: 'Nutritionist',
    phone: '+91 97111 22557',
    hospital: 'NutriLife Clinic',
    location: 'Hyderabad'
  },
  {
    name: 'Dr. Arun Kumar',
    specialty: 'Therapist',
    phone: '+91 97978 90012',
    hospital: 'HealthyMind Therapy',
    location: 'Coimbatore'
  },
  {
    name: 'Dr. Kavitha V.',
    specialty: 'Gynecologist',
    phone: '+91 96789 22233',
    hospital: 'Lotus Hospital',
    location: 'Coimbatore'
  },
  {
    name: 'Dr. Rohit Patil',
    specialty: 'Endocrinologist',
    phone: '+91 98234 10092',
    hospital: 'Apollo Specialty Hospitals',
    location: 'Tiruppur'
  },
  {
    name: 'Dr. Sushma Raj',
    specialty: 'Nutritionist',
    phone: '+91 97543 67812',
    hospital: 'Green Leaf Nutrition',
    location: 'Salem'
  },
  {
    name: 'Dr. Salma Noor',
    specialty: 'Therapist',
    phone: '+91 93672 88211',
    hospital: 'MindCare Wellness',
    location: 'Chennai'
  }
];

export default function Consultationsection() {
  const [showDoctors, setShowDoctors] = useState(false);
  const [appointmentStates, setAppointmentStates] = useState({});
  const [modal, setModal] = useState({ open: false, doctorIdx: null, email: '' });
  const [lastBookedIdx, setLastBookedIdx] = useState(null); // New: track last booked doctor

  const handleSearch = (e) => {
    e.preventDefault();
    setShowDoctors(true);
    setLastBookedIdx(null); // Reset confirmation highlights on new search
  };

  const handleBookClick = (idx) => {
    setModal({ open: true, doctorIdx: idx, email: '' });
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    const { doctorIdx, email } = modal;
    setAppointmentStates(prev => ({
      ...prev,
      [doctorIdx]: { status: 'requested', email }
    }));
    setModal({ open: false, doctorIdx: null, email: '' });
    setLastBookedIdx(doctorIdx); // Show confirmation only for this doctor
  };

  return (
    <div className="container py-5">
      {/* Top section */}
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
        <form className="row g-3" onSubmit={handleSearch}>
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

      {/* Doctor cards */}
      {showDoctors && (
        <div className="mb-4">
          <h3 className="mb-3" style={{ color: '#a259e8' }}>Available Doctors</h3>
          {dummyDoctors.map((doc, idx) => {
            const appt = appointmentStates[idx];
            return (
              <div key={idx} className="card mb-3 p-3 shadow-sm" style={{ borderRadius: "1rem" }}>
                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between">
                  <div>
                    <h5 className="mb-1" style={{ color: '#4b467e' }}>
                      {doc.name} <span className="badge bg-light text-secondary ms-2">{doc.specialty}</span>
                    </h5>
                    <div style={{ color: "#7d57a2" }}>Phone: {doc.phone}</div>
                    <div style={{ color: "#7d57a2" }}>Hospital: {doc.hospital}</div>
                    <div style={{ color: "#7d57a2" }}>Location: {doc.location}</div>
                  </div>
                  {/* Booking Button + status */}
                  {!appt && (
                    <button
                      className="btn mt-3 mt-md-0"
                      style={{ background: '#a259e8', color: 'white', border: 'none' }}
                      onClick={() => handleBookClick(idx)}
                    >
                      Book Appointment
                    </button>
                  )}
                  {appt?.status === 'requested' && (
                    <button
                      className="btn btn-warning mt-3 mt-md-0 text-white"
                      style={{ border: 'none', cursor:'default' }}
                      disabled
                    >
                      Requested
                    </button>
                  )}
                </div>
                {/* Confirmation message: only show below this doctor card */}
                {appt?.status === 'requested' && lastBookedIdx === idx && (
                  <div className="alert alert-success mt-3 mb-0 py-2 text-center" role="alert" style={{ fontSize: '1rem' }}>
                    Your request has been received. You will receive appointment details later through your email.
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Modal for email entry */}
      {modal.open && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.3)', zIndex: 9999
          }}
        >
          <form className="bg-white p-4 rounded-3" style={{ minWidth: 320 }} onSubmit={handleModalSubmit}>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Enter your email to request booking</label>
              <input
                id="emailInput"
                className="form-control"
                type="email"
                required
                value={modal.email}
                onChange={e => setModal(m => ({ ...m, email: e.target.value }))}
                placeholder="your@email.com"
              />
            </div>
            <button className="btn btn-primary me-2" type="submit">Submit</button>
            <button className="btn btn-secondary" type="button" onClick={() => setModal({ open: false, doctorIdx: null, email: '' })}>Cancel</button>
          </form>
        </div>
      )}

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







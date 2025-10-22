import React from 'react';

// Pastel gradient background style
const pastelGradient = {
  background: 'linear-gradient(135deg, #f3e7fa 0%, #ffe5ee 100%)'
};

const tips = [
  { title: 'Healthy Diet', desc: 'Focus on whole foods, low glycemic index carbs, and reduce processed sugars.', icon: '🍏', color: '#ae57e9' },
  { title: 'Exercise Regularly', desc: 'Aim for at least 150 minutes of moderate activity per week like walking, cycling or swimming.', icon: '🚴‍♀️', color: '#bb1d69' },
  { title: 'Manage Stress', desc: 'Practices like mindfulness, yoga, or meditation can help balance hormones and improve symptoms.', icon: '🧘', color: '#c56cd6' },
];

export default function LifestyleSection() {
  return (
    <div className="container py-5">
      <div style={pastelGradient} className="rounded-4 p-5 mb-5 text-center shadow-sm">
        <h1 className="fw-bold mb-3" style={{ color: '#2a254d' }}>
          Lifestyle & Tips for PCOS
        </h1>
        <p className="lead" style={{ color: '#42404b' }}>
          Simple lifestyle changes can make a big impact on managing PCOS symptoms and improving overall health.
        </p>
      </div>

      <div className="row g-4">
        {tips.map(({ title, desc, icon, color }, index) => (
          <div key={index} className="col-md-4">
            <div
              className="rounded-4 p-4 h-100 d-flex flex-column align-items-center text-center"
              style={{ background: '#fff', boxShadow: '0 2px 16px #ece5f8' }}
            >
              <div className="mb-3" style={{ fontSize: '3rem', color }}>
                {icon}
              </div>
              <h3 className="fw-semibold mb-2" style={{ color: '#a259e8' }}>{title}</h3>
              <p style={{ color: '#55505a' }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-4 shadow-sm p-4 mt-5">
        <h3 className="fw-bold mb-3" style={{ color: '#a259e8' }}>Additional Tips</h3>
        <ul className="ps-4" style={{ color: '#55505a', listStyleType: 'disc' }}>
          <li>Get enough sleep to regulate hormones and reduce stress.</li>
          <li>Limit caffeine and alcohol consumption.</li>
          <li>Stay hydrated and avoid sugary drinks.</li>
          <li>Consider supplements like Vitamin D, Omega-3, and Inositol after consulting your doctor.</li>
          <li>Regular medical check-ups and monitoring.</li>
        </ul>
      </div>
    </div>
  );
}

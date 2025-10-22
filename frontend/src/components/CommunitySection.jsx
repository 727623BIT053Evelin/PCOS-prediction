import React from 'react';

// Pastel purple background style for section heading
const pastelGradient = {
  background: 'linear-gradient(135deg, #f3e7fa 0%, #ffe5ee 100%)'
};

const communityHighlights = [
  {
    title: 'Discussion Forums',
    desc: 'Engage with other women, share your experiences and get advice.',
    icon: '💬',
    color: '#bb1d69',
  },
  {
    title: 'Events & Webinars',
    desc: 'Attend virtual events with experts and community members.',
    icon: '🎥',
    color: '#ae57e9',
  },
  {
    title: 'Success Stories',
    desc: 'Be inspired by stories from women who have managed PCOS effectively.',
    icon: '🌟',
    color: '#c56cd6',
  },
];

export default function CommunitySection() {
  return (
    <div className="container py-5">
      <div style={pastelGradient} className="rounded-4 p-5 shadow mb-5 text-center">
        <h1 className="fw-bold mb-3" style={{ fontSize: '2rem', color: '#2a254d' }}>
          Community & Support
        </h1>
        <p className="lead" style={{ color: '#42404b' }}>
          Build connections, find emotional support, and share resources in our PCOS community.
        </p>
      </div>

      <div className="row g-4">
        {communityHighlights.map(({ title, desc, icon, color }, i) => (
          <div key={i} className="col-md-4">
            <div
              className="rounded-4 p-4 h-100"
              style={{
                background: '#fff',
                boxShadow: '0 2px 16px #ece5f8',
                textAlign: 'center',
              }}
            >
              <span
                className="d-block mb-3"
                style={{ fontSize: '3rem', color }}
                aria-label={title}
                role="img"
              >
                {icon}
              </span>
              <h2 className="h5 fw-bold mb-3" style={{ color: '#a259e8' }}>
                {title}
              </h2>
              <p style={{ color: '#55505a' }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

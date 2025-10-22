import React from 'react';

export default function Aboutsection() {
  const symptoms = [
    { title: 'Irregular Periods', desc: 'Fewer than 8 periods per year or cycles longer than 35 days', icon: '📅', color: '#bb1d69' },
    { title: 'Excess Hair Growth', desc: 'Unwanted facial or body hair (hirsutism)', icon: '🧔', color: '#ae57e9' },
    { title: 'Weight Changes', desc: 'Weight gain or difficulty losing weight', icon: '⚖️', color: '#f08080' },
    { title: 'Acne & Skin Issues', desc: 'Adult acne, oily skin, or dark patches', icon: '🌼', color: '#c56cd6' },
    { title: 'Hair Thinning', desc: 'Thinning hair on the scalp', icon: '💇', color: '#8b50e3' },
    { title: 'Fertility Challenges', desc: 'Difficulty getting pregnant due to irregular ovulation', icon: '👶', color: '#a259e8' },
  ];

  const causes = [
    { title: 'Genetic Factors', desc: 'PCOS often runs in families, suggesting a genetic component.', icon: '🧬', color: '#ae57e9' },
    { title: 'Insulin Resistance', desc: 'Many women with PCOS have insulin resistance, leading to higher insulin levels.', icon: '🩸', color: '#bb1d69' },
    { title: 'Hormonal Imbalance', desc: 'Elevated levels of androgens (male hormones) interfere with ovulation.', icon: '⚗️', color: '#c56cd6' },
    { title: 'Inflammation', desc: 'Low-grade inflammation may stimulate polycystic ovaries to produce androgens.', icon: '🌡️', color: '#f08080' },
  ];

  const pastelGradient = {
    background: 'linear-gradient(135deg, #f3e7fa 0%, #ffe5ee 100%)'
  };

  // Card style for all white cards
  const cardStyle = {
    background: '#fff',
    borderRadius: '1.5rem',
    boxShadow: '0 2px 16px #ececec',
  };

  // Heading style
  const headingStyle = { color: '#a259e8', fontWeight: 700, fontSize: '1.6rem' };

  return (
    <div className="container py-5">
      {/* Understanding PCOS THEME HERO */}
      <div
        className="rounded-4 p-5 mb-4"
        style={{
          background: 'linear-gradient(135deg, #f3e7fa 0%, #ffe5ee 100%)',
          boxShadow: '0 2px 16px #f3e7fa'
        }}
      >
        <h1 className="fw-bold mb-3" style={{ fontSize: '2.2rem', color: '#2a254d' }}>
          <span>Understanding <span style={{ color: '#a259e8' }}>PCOS</span></span>
        </h1>
        <p className="lead" style={{ color: '#42404b', fontWeight: 500 }}>
          Knowledge is power.<br />
          Learn about PCOS symptoms, causes, and treatment options.
        </p>
     </div>


      {/* Symptoms Section */}
      <div style={cardStyle} className="p-4 mb-5">
        <h2 className="h4 mb-4" style={headingStyle}>Common Symptoms</h2>
        <div className="row g-4">
          {symptoms.map((symptom, index) => (
            <div key={index} className="col-md-4">
              <div className="d-flex flex-column align-items-center justify-content-center p-3 h-100" style={{ borderRadius: '1rem', background: '#f9f4fb', boxShadow: '0 1px 6px #ede0f5' }}>
                <span style={{ fontSize: '2.2rem', color: symptom.color, marginBottom: '0.5rem' }}>{symptom.icon}</span>
                <h5 className="fw-bold mb-1" style={{ color: '#a259e8' }}>{symptom.title}</h5>
                <p className="mb-0 text-secondary">{symptom.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Causes Section */}
      <div style={{...cardStyle, background: '#f9f4fb'}} className="p-4 mb-5">
        <h2 className="h4 mb-4" style={headingStyle}>What Causes PCOS?</h2>
        <div className="row g-3">
          {causes.map((cause, idx) => (
            <div key={idx} className="col-md-6">
              <div className="d-flex align-items-center bg-white rounded-4 p-3 shadow-sm mb-3" style={{minHeight: '90px'}}>
                <span style={{ fontSize: '2rem', color: cause.color, marginRight: '1rem' }}>{cause.icon}</span>
                <div>
                  <h5 className="fw-bold mb-1" style={{ color: '#a259e8' }}>{cause.title}</h5>
                  <p className="mb-0 text-secondary">{cause.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Treatment & Management Section */}
      <div style={cardStyle} className="p-4">
        <h2 className="h4 mb-4" style={headingStyle}>Treatment & Management</h2>
        <div className="row g-3">
          <div className="col-md-6" style={{ borderLeft: '4px solid #a259e8', paddingLeft: '1rem' }}>
            <h5 className="fw-bold mb-3" style={{color:'#ae57e9'}}>Lifestyle Changes</h5>
            <ul className="list-unstyled">
              <li>Balanced, low-glycemic diet</li>
              <li>Regular physical activity</li>
              <li>Weight management</li>
              <li>Stress reduction techniques</li>
            </ul>
          </div>
          <div className="col-md-6" style={{ borderLeft: '4px solid #f08080', paddingLeft: '1rem' }}>
            <h5 className="fw-bold mb-3" style={{color:'#f08080'}}>Medical Treatment</h5>
            <ul className="list-unstyled">
              <li>Birth control pills for menstrual regulation</li>
              <li>Metformin for insulin resistance</li>
              <li>Fertility medications if needed</li>
              <li>Anti-androgen medications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

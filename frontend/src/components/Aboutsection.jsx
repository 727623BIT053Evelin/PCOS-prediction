import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aboutsection() {
  useEffect(() => {
    AOS.init({ duration: 850, once: true });
  }, []);

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

  const cardStyle = {
    background: '#fff',
    borderRadius: '1.5rem',
    boxShadow: '0 2px 16px #ececec',
  };

  const headingStyle = { color: '#a259e8', fontWeight: 700, fontSize: '1.6rem' };

  // New: Quick Facts & Encouragement
  const factsBar = (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: '1.5rem', margin: '2rem 0 2.3rem 0',
      background: "linear-gradient(90deg,#f8eaff 60%,#fef5ff)",
      borderRadius: "1.17rem", boxShadow: "0 1px 10px #f3e7fa",
      padding: "1rem 2rem"
    }} data-aos="fade-up">
      <div style={{flex:1, minWidth:210}}>
        <b style={{color:'#a259e8', fontSize: '1.22rem'}}>💡 70% undiagnosed</b>
        <div style={{fontSize:'1.01rem'}}>PCOS is often missed. Early awareness and action matter!</div>
      </div>
      <div style={{flex:1, minWidth:210}}>
        <b style={{color:'#a259e8', fontSize: '1.22rem'}}>🩺 5-10% weight loss</b>
        <div style={{fontSize:'1.01rem'}}>can restart cycles and reduce risk for many women.</div>
      </div>
      <div style={{flex:1, minWidth:210}}>
        <b style={{color:'#a259e8', fontSize: '1.22rem'}}>🌱 Small habits, big change</b>
        <div style={{fontSize:'1.01rem'}}>Start with manageable healthy steps—progress adds up.</div>
      </div>
    </div>
  );

  // New: Animated Motivation Banner
  const motivationBlock = (
    <div style={{
      background:"linear-gradient(90deg,#f3e7fa 60%,#ffdefa)",
      padding:"1.15rem 2rem",
      borderRadius:"1rem",
      color:"#552e93",
      fontWeight:600,
      maxWidth:700,
      textAlign:"center",
      margin:"2rem auto"
    }} data-aos="zoom-in">
      🌸 You are not alone! Many women manage PCOS holistically—every small habit helps.
    </div>
  );

  // New: Animated Risk Callout
  const riskBlock = (
    <div style={{
      background: "#fff9e6",
      borderLeft: "6px solid #f2cd6f",
      padding: "1.2rem 2rem",
      borderRadius: "1rem",
      margin: "2.2rem 0 2.4rem 0",
      boxShadow: "0 2px 14px #f5e6b8",
      color:"#946300"
    }} data-aos="fade-right">
      <b style={{color:"#a259e8", fontSize:"1.08rem"}}>⚠️ Why pay attention?</b>
      <ul style={{margin:'6px 0 0 1.2rem', fontSize:"1.07rem"}}>
        <li>Untreated PCOS can lead to diabetes, heart disease, infertility, and endometrial cancer.</li>
        <li>Managing PCOS today improves daily energy and confidence for tomorrow.</li>
      </ul>
    </div>
  );

  // New: FAQ expandable block
  const faqBlock = (
    <div style={{
      background:"#faf8fd", borderRadius:"1.17rem", boxShadow:"0 1px 10px #ececec",
      maxWidth:800, margin:"2.7rem auto 1.4rem auto", padding:"1.18rem 2rem"
    }} data-aos="fade-down">
      <h4 style={{color:'#a259e8', fontWeight:700}}>PCOS FAQ</h4>
      <details style={{marginTop: "1rem", color:"#42326E"}}>
        <summary style={{fontWeight:600, cursor:'pointer'}}>Can women with PCOS get pregnant?</summary>
        <div style={{marginTop:"0.6rem"}}>Yes—with support and managing symptoms, many women with PCOS do conceive successfully. Early cycle tracking and care helps.</div>
      </details>
      <details style={{marginTop: "0.9rem", color:"#42326E"}}>
        <summary style={{fontWeight:600, cursor:'pointer'}}>Is hypothyroidism linked to PCOS?</summary>
        <div style={{marginTop:"0.6rem"}}>Up to 30% with PCOS may also have hypothyroidism—ask your doctor about annual thyroid checks.</div>
      </details>
      <details style={{marginTop: "0.9rem", color:"#42326E"}}>
        <summary style={{fontWeight:600, cursor:'pointer'}}>How can I track improvement?</summary>
        <div style={{marginTop:"0.6rem"}}>Keep a journal or use an app to monitor periods, symptoms, and mental wellness. Small changes often show in 3-6 months.</div>
      </details>
    </div>
  );

  return (
    <div className="container py-5">
      {/* Understanding PCOS THEME HERO */}
      <div
        className="rounded-4 p-5 mb-4"
        style={{
          background: pastelGradient.background,
          boxShadow: '0 2px 16px #f3e7fa'
        }}
        data-aos="fade-down"
      >
        <h1 className="fw-bold mb-3" style={{ fontSize: '2.2rem', color: '#2a254d' }}>
          <span>Understanding <span style={{ color: '#a259e8' }}>PCOS</span></span>
        </h1>
        <p className="lead" style={{ color: '#42404b', fontWeight: 500 }}>
          Knowledge is power.<br />
          Learn about PCOS symptoms, causes, risks, and treatment options.
        </p>
      </div>

      {/* Quick Facts */}
      {factsBar}

      {/* Symptoms Section */}
      <div style={cardStyle} className="p-4 mb-5" data-aos="fade-up">
        <h2 className="h4 mb-4" style={headingStyle}>Common Symptoms</h2>
        <div className="row g-4">
          {symptoms.map((symptom, index) => (
            <div key={index} className="col-md-4">
              <div className="d-flex flex-column align-items-center justify-content-center p-3 h-100" style={{ borderRadius: '1rem', background: '#f9f4fb', boxShadow: '0 1px 6px #ede0f5', transition:'transform 0.25s' }}
              data-aos="zoom-in-up" data-aos-delay={index * 110}>
                <span style={{ fontSize: '2.2rem', color: symptom.color, marginBottom: '0.5rem' }}>{symptom.icon}</span>
                <h5 className="fw-bold mb-1" style={{ color: '#a259e8' }}>{symptom.title}</h5>
                <p className="mb-0 text-secondary">{symptom.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Causes Section */}
      <div style={{...cardStyle, background: '#f9f4fb'}} className="p-4 mb-5" data-aos="fade-right">
        <h2 className="h4 mb-4" style={headingStyle}>What Causes PCOS?</h2>
        <div className="row g-3">
          {causes.map((cause, idx) => (
            <div key={idx} className="col-md-6">
              <div className="d-flex align-items-center bg-white rounded-4 p-3 shadow-sm mb-3" style={{minHeight: '90px'}}
                data-aos="fade-left" data-aos-delay={idx*90}>
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

      {/* Risk Awareness */}
      {riskBlock}

      {/* Treatment & Management Section */}
      <div style={cardStyle} className="p-4 mb-5" data-aos="fade-up">
        <h2 className="h4 mb-4" style={headingStyle}>Treatment & Management</h2>
        <div className="row g-3">
          <div className="col-md-6" style={{ borderLeft: '4px solid #a259e8', paddingLeft: '1rem' }}>
            <h5 className="fw-bold mb-3" style={{color:'#ae57e9'}}>Lifestyle Changes</h5>
            <ul className="list-unstyled">
              <li>Low-glycemic, high-fiber diet</li>
              <li>Consistent regular exercise</li>
              <li>Weight management</li>
              <li>Stress reduction techniques</li>
              <li>7–8 hrs quality sleep</li>
            </ul>
          </div>
          <div className="col-md-6" style={{ borderLeft: '4px solid #f08080', paddingLeft: '1rem' }}>
            <h5 className="fw-bold mb-3" style={{color:'#f08080'}}>Medical Treatment</h5>
            <ul className="list-unstyled">
              <li>Birth control pills for cycles</li>
              <li>Metformin for insulin resistance</li>
              <li>Fertility medications if needed</li>
              <li>Anti-androgen medications</li>
              <li>Thyroid and vitamin checks</li>
            </ul>
          </div>
        </div>
      </div>

      {motivationBlock}

      {faqBlock}
    </div>
  );
}

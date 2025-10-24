import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Pastel gradient background style
const pastelGradient = {
  background: 'linear-gradient(135deg, #f3e7fa 0%, #ffe5ee 100%)'
};

const tips = [
  { title: 'Healthy Diet', desc: 'Eat whole grains, high-fiber veggies, lean proteins, and healthy fats. Go easy on sugar, white bread, and fried food.', icon: '🍏', color: '#ae57e9' },
  { title: 'Regular Exercise', desc: 'Aim for 150+ minutes of moderate activity per week. Try fast walking, swimming, cycling, or dance – consistency is key!', icon: '🚴‍♀️', color: '#bb1d69' },
  { title: 'Stress Management', desc: 'Yoga, meditation, or just a mindful walk outdoors can lower androgen levels and symptoms.', icon: '🧘', color: '#c56cd6' },
];

const pcos_facts = [
  { icon: "🌸", text: "PCOS affects 1 in 5 women in India, but up to 70% go undiagnosed."},
  { icon: "🏥", text: "Early lifestyle changes can restore hormone balance and prevent long-term risks like diabetes."},
  { icon: "🩺", text: "Even 5-10% weight loss can restart regular cycles for many women with PCOS."},
];

const advancedTips = [
  "Track your periods and symptoms in a journal/app to understand your cycle patterns.",
  "Prioritize 7-9 hours of restful sleep per night for hormonal harmony.",
  "Limit processed foods, sweetened drinks, and high-fructose corn syrup.",
  "Talk to your doctor before trying supplements like Myo-inositol, Vitamin D, or Omega-3.",
  "Build a support system of peers or a PCOS community for shared motivation."
];

const riskFacts = [
  "PCOS raises risk for diabetes, high blood pressure, and endometrial cancer.",
  "Untreated symptoms can lead to irregular periods, infertility, acne, and excess hair growth.",
  "Mental health matters: PCOS is linked to higher risk of anxiety and depression. Manage stress and seek support."
];

export default function LifestyleSection() {
  useEffect(() => {
    AOS.init({ duration: 850, once: true });
  }, []);

  return (
    <div className="container py-5">

      {/* HEADER HERO */}
      <div style={pastelGradient} className="rounded-4 p-5 mb-5 text-center shadow-sm" data-aos="fade-down">
        <h1 className="fw-bold mb-3" style={{ color: '#2a254d', fontSize: "2.4rem" }}>
          Lifestyle &amp; Tips for PCOS
        </h1>
        <p className="lead" style={{ color: '#42404b', fontSize: "1.17rem" }}>
          Consistent daily choices—diet, activity, and self-care—are proven to prevent, reduce, and even reverse PCOS symptoms for many women.
        </p>
      </div>

      {/* FACTS & STATS BAR */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.4rem",
        margin: "2.5rem 0 2.5rem 0",
        background: "linear-gradient(90deg,#f8eaff 60%,#fef5ff)",
        borderRadius: "1.2rem",
        boxShadow: "0 1px 10px #f3e7fa",
        padding: "1.3rem 2.1rem",
        fontWeight: 500,
        alignItems: "center"
      }} data-aos="fade-up">
        {pcos_facts.map(({ icon, text }, idx) => (
          <div key={idx} style={{flex:"1 1 180px", minWidth:"180px", fontSize:"1.02rem"}}>
            <span style={{fontSize:"1.35em", color:"#a259e8"}}>{icon}</span> {text}
          </div>
        ))}
      </div>

      {/* ANIMATED TIPS CARDS */}
      <div className="row g-4 mb-5">
        {tips.map(({ title, desc, icon, color }, index) => (
          <div key={index} className="col-md-4">
            <div
              className="rounded-4 p-4 h-100 d-flex flex-column align-items-center text-center"
              style={{ background: '#fff', boxShadow: '0 2px 16px #ece5f8', border: `2px solid ${color}22`, transition: "transform 0.3s" }}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1.0)"}
            >
              <div className="mb-3" style={{ fontSize: '3rem', color }}>
                {icon}
              </div>
              <h3 className="fw-semibold mb-2" style={{ color: '#a259e8' }}>{title}</h3>
              <p style={{ color: '#55505a', fontSize:"1.03rem" }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ANIMATED RISKS BLOCK */}
      <div
        style={{
          background: "#fff9e6",
          borderLeft: "6px solid #f2cd6f",
          padding: "1.2rem 2rem",
          borderRadius: "0.95rem",
          margin: "2.2rem 0 2.4rem 0",
          boxShadow: "0 2px 14px #f5e6b8",
          color:"#946300"
        }}
        data-aos="fade-right"
      >
        <b style={{color:"#a259e8", fontSize:"1.13rem"}}>⚠️ Why act now?</b>
        <ul style={{margin:'6px 0 0 1.2rem', fontSize:"1.07rem"}}>
          {riskFacts.map((risk, idx) => (<li key={idx}>{risk}</li>))}
        </ul>
      </div>

      {/* ADVANCED TIPS BOX */}
      <div className="bg-white rounded-4 shadow-sm p-4 mb-4" data-aos="fade-left">
        <h3 className="fw-bold mb-3" style={{ color: '#a259e8' }}>Advanced PCOS Self-Care Tips</h3>
        <ul className="ps-4" style={{ color: '#55505a', listStyleType: 'disc', fontSize:"1.03rem"}}>
          {advancedTips.map((tip, idx) => (<li key={idx}>{tip}</li>))}
        </ul>
      </div>

      {/* INSPIRATION/MOTIVATION QUOTE */}
      <div style={{
        background:"linear-gradient(90deg,#f3e7fa 60%,#ffdefa)",
        padding:"1.1rem 2rem",
        borderRadius:"0.9rem",
        color:"#552e93",
        fontWeight: 500,
        maxWidth:620,
        textAlign:"center",
        margin:"2.5rem auto 0 auto",
        fontSize:"1.08rem"
      }} data-aos="zoom-in">
        🌱 Every healthy step—no matter how small—moves you closer to your goals. Your journey matters.
      </div>
    </div>
  );
}

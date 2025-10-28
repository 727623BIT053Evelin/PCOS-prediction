import React, { useState } from 'react';
import './HomeAnimations.css';
import ContactSection from './ContactSection';

const heroGradient = {
  background: 'linear-gradient(135deg, #f3e7fa 0%, #ffe5ee 100%)'
};

const awarenessGradient = {
  background: 'linear-gradient(90deg, #c56cd6 0%, #ffb6c1 100%)',
  color: 'white'
};

const keyFeatures = [
  {
    icon: '🌸',
    title: 'Personalized PCOS Assessment',
    desc: 'Quickly screen your risk and get tailored recommendations.'
  },
  {
    icon: '🤝',
    title: 'Community Support',
    desc: 'Join forums and groups to share stories and find encouragement.'
  },
  {
    icon: '📅',
    title: 'Book Expert Consultation',
    desc: 'Find gynecologists, nutritionists, and therapists instantly.'
  },
  {
    icon: '💬',
    title: '24/7 Care Guidance',
    desc: 'Get self-care resources and answers to your PCOS questions anytime.'
  }
];

export default function HomeSection({ setActiveSection }) {
  const [mood, setMood] = useState(null);

  return (
    <div className="container py-5">

      {/* HERO ANIMATED SECTION */}
      <div
        className="rounded-4 p-5 mb-4 hero-fade"
        style={{ ...heroGradient, minHeight: '340px', boxShadow: '0 2px 16px #f3e7fa' }}
      >
        <h1 className="fw-bold mb-3" style={{ fontSize: '2.3rem', color: '#2a254d' }}>
          Empower Your Health,
          <br />
          <span style={{ color: '#a259e8' }}>Embrace Your Journey</span>
        </h1>
        <p className="lead mb-4" style={{ color: '#42404b' }}>
          You are not alone in your PCOS journey. <b>Connect, learn, and take charge</b> with our warm, evidence-based resources and inclusive community.
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

      {/* KEY FEATURES SECTION */}
      <div className="row g-4 mb-4">
        {keyFeatures.map((feature, idx) => (
          <div key={idx} className="col-md-6 col-lg-3">
            <div className="rounded-4 p-4 h-100 text-center shadow-sm zoom-in" style={{ background: '#fff8fa' }}>
              <div style={{ fontSize: '2.6rem', marginBottom: '0.5rem' }}>{feature.icon}</div>
              <div className="fw-bold mb-2" style={{ color: '#a259e8', fontSize: '1.16rem' }}>{feature.title}</div>
              <div style={{ color: '#444', fontSize: '1rem' }}>{feature.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* MOOD/MOTIVATION WIDGET */}
      <div className="mb-4 px-2 text-center fade-in" style={{ maxWidth: 460, margin: '0 auto' }}>
        <div style={{ fontSize: '1.10rem', fontWeight: 600, color: '#a259e8', marginBottom: '.6em' }}>
          How are you feeling today?
        </div>
        <div className="d-flex justify-content-center gap-3 align-items-center">
          {['😊', '😐', '😢'].map((face, idx) => (
            <button key={idx}
              style={{
                fontSize: "2rem", border: "none", background: "#f3e7fa", borderRadius: "50%",
                boxShadow: mood === idx ? "0 0 0 3px #a259e8" : undefined,
                padding: "0.26em 0.32em", transition: "box-shadow 0.15s"
              }}
              aria-label={"mood"+idx}
              onClick={() => setMood(idx)}
            >{face}</button>
          ))}
        </div>
        <div style={{ color: "#474564", fontSize: "0.98rem", marginTop: "0.75em" }}>
          {mood === 0 && "Keep smiling! Even small wins deserve celebration 💜"}
          {mood === 1 && "You got this. A little action today makes tomorrow easier!"}
          {mood === 2 && "Be gentle with yourself. Support is always here, and better days are ahead."}
          {mood === null && "Small steps matter. Celebrate every win on your PCOS journey 💜"}
        </div>
      </div>

     {/* SUCCESS STORIES CAROUSEL */}
<div className="rounded-4 p-4 text-center mb-4 story-carousel gradient-light">
  <h4 className="mb-3" style={{ color: "#a259e8", fontWeight: 700 }}>Success Stories</h4>
  <div style={{
    display: "flex",
    overflowX: "auto",
    gap: 16,
    padding: 8,
    justifyContent: "center",
    scrollbarWidth: "thin"
  }}>
    {[
      {
        name: "Aarti, Chennai",
        quote: "Lifestyle tweaks changed my energy and confidence.",
        img: "https://images.pexels.com/photos/30355878/pexels-photo-30355878.jpeg?cs=srgb&dl=pexels-hoa-le-dinh-1615807371-30355878.jpg&fm=jpg"
      },
      {
        name: "Sophia, Mumbai",
        quote: "Community support made me feel less alone with PCOS!",
        img: "https://photosmint.com/wp-content/uploads/2025/03/Indian-Beauty-DP.jpeg"
      },
      {
        name: "Riya, Pune",
        quote: "Expert consultation gave me a real plan, not just Google info.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSniAKsCx15Sg-6O_G8yD1_YxABouF2ES5w&s"
      }
    ].map((story, idx) => (
      <div key={idx} style={{
        background: "#fff",
        boxShadow: "0 2px 12px #caaeff24",
        borderRadius: 18,
        padding: "1.2em 1em",
        minWidth: 260,
        maxWidth: 260,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <img
          src={story.img}
          alt={story.name}
          style={{
            borderRadius: "50%",
            width: 80,
            height: 80,
            objectFit: "cover",
            marginBottom: 12,
            border: "3px solid #a259e8"
          }}
        />
        <div style={{ fontSize: '1.05rem', color: "#7d57a2", fontStyle: "italic" }}>
          “{story.quote}”
        </div>
        <div style={{ fontWeight: 600, marginTop: "1em", color: "#a259e8" }}>
          {story.name}
        </div>
      </div>
    ))}
  </div>
</div>


      {/* ANIMATED PCOS AWARENESS SECTION */}
      <div className="rounded-4 p-5 text-center mb-2 rise-in" style={awarenessGradient}>
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

      {/* CONTACT INFO CARD - ALWAYS SHOWN */}
      <div className="text-center my-5">
        <div className="pcos-contact-card" style={{ margin: '0 auto' }}>
          <h4 style={{ color: '#7e47c5', fontWeight: 700, fontSize: '1.24rem' }}>Have Questions or Need Help?</h4>
          <div style={{ color: '#5e547e', fontSize: '1.03rem', marginBottom: 12 }}>
            We're here for you. Reach out anytime for support or feedback!
          </div>
          
          <div className="mt-3 mb-0 pt-2 pb-1"
            style={{
              background: '#fff',
              borderRadius: 12,
              fontSize: '1.01rem',
              color: '#4b467e',
              boxShadow: '0 2px 10px #f0e6ff44',
              padding: '0.83em 0.4em',
              maxWidth: 335,
              margin: '0.7em auto 0 auto'
            }}>
            <div className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ fontSize: '1.13rem' }}>📧</span>
              <b style={{ width: 63, display: 'inline-block' }}>Email:</b>
              <span>support@pcoscare.org</span>
            </div>
            <div className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ fontSize: '1.13rem' }}>📞</span>
              <b style={{ width: 63, display: 'inline-block' }}>Phone:</b>
              <span>+91 98765 43210</span>
            </div>
            <div className="mb-0" style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ fontSize: '1.13rem' }}>📍</span>
              <b style={{ width: 63, display: 'inline-block' }}>Location:</b>
              <span>Tiruppur, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>

      {/* FULL CONTACT FORM SECTION (imported) */}
      <div className="my-5">
        <ContactSection />
      </div>
    </div>
  );
}

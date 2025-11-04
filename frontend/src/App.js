import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutSection from './components/Aboutsection';
import AssessmentSection from './components/AssessmentSection';
import LifestyleSection from './components/LifestyleSection';
import ConsultationSection from './components/Consultationsection';
import CommunitySections from './components/CommunitySections';
import ContactSection from './components/ContactSection';
import Homesection from './components/HomeSection';
import ChatBot from './components/chatbot';
import AdminPage from './Admin/AdminPage'; // Your Admin page component

import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

function MainApp() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main style={{ paddingTop: '30px' }}>
        {activeSection === 'home' && <Homesection setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'assessment' && <AssessmentSection setActiveSection={setActiveSection} />}
        {activeSection === 'lifestyle' && <LifestyleSection />}
        {activeSection === 'consultation' && <ConsultationSection />}
        {activeSection === 'community' && <CommunitySections />}
        {activeSection === 'contact' && <ContactSection />}
      </main>

      <Footer />
      <ChatBot />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Admin page has its own route for URL /admin */}
        <Route path="/admin" element={<AdminPage />} />
        {/* All other pages managed by activeSection state */}
        <Route path="/*" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

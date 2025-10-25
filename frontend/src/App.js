import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSection from './components/Aboutsection';
import AssessmentSection from './components/AssessmentSection';
import LifestyleSection from './components/LifestyleSection';
import ConsultationSection from './components/Consultationsection';
import CommunitySection from './components/CommunitySection';
import ContactSection from './components/ContactSection';
import Homesection from './components/HomeSection';
import ChatBot from './components/chatbot'; // Add this import
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main style={{ minHeight: 'calc(100vh - 132px)' }}>
        {activeSection === 'home' && <Homesection setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'assessment' && <AssessmentSection setActiveSection={setActiveSection} />}
        {activeSection === 'lifestyle' && <LifestyleSection />}
        {activeSection === 'consultation' && <ConsultationSection />}
        {activeSection === 'community' && <CommunitySection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>

      <Footer />
      
      
      <ChatBot />
    </>
  );
}

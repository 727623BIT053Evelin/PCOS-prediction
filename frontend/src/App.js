// import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import AboutSection from './components/Aboutsection';
// import AssessmentSection from './components/AssessmentSection';
// import LifestyleSection from './components/LifestyleSection';
// import ConsultationSection from './components/Consultationsection';
// import CommunitySection from './components/CommunitySection';
// import ContactSection from './components/ContactSection';
// import Homesection from './components/HomeSection';
// import ChatBot from './components/chatbot';
// import AuthForm from './components/AuthForm';
// import 'aos/dist/aos.css';
// import AOS from 'aos';

// AOS.init();

// export default function App() {
//   const [activeSection, setActiveSection] = useState('home');

//   // const [user, setUser] = useState(null);
//   // const [token, setToken] = useState('');

//   // const [authMode, setAuthMode] = useState('');
//   // const [feed, setFeed] = useState([
//   //   // your initial posts data here or fetch from API
//   // ]);

//   // useEffect(() => {
//   //   const storedUser = localStorage.getItem('communityUser');
//   //   const storedToken = localStorage.getItem('communityToken');
//   //   if (storedUser && storedToken) {
//   //     setUser(JSON.parse(storedUser));
//   //     setToken(storedToken);
//   //   }
//   // }, []);

//   const onAuthSuccess = (userInfo, authToken) => {
//     setUser(userInfo);
//     setToken(authToken);
//     localStorage.setItem('communityUser', JSON.stringify(userInfo));
//     localStorage.setItem('communityToken', authToken);
//     setAuthMode('');
//     setActiveSection('community');
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setToken('');
//     localStorage.removeItem('communityUser');
//     localStorage.removeItem('communityToken');
//     setActiveSection('home');
//   };

//   // Define placeholder functions to pass to CommunitySection
//   const toggleLike = (postId) => {
//     // toggle like implementation
//   };
//   const handleComment = (postId, commentText) => {
//     // handle comment implementation
//   };
//   const toggleJoinGroup = (groupId) => {
//     // join/leave group implementation
//   };

//   return (
//     <>
//       <Header
//         activeSection={activeSection}
//         setActiveSection={setActiveSection}
//         user={user}
//         onLogout={handleLogout}
//         onLoginClick={() => setAuthMode('login')}
//         onSignupClick={() => setAuthMode('signup')}
//       />

//       <main style={{ paddingTop: '30px' }}>
//         {activeSection === 'home' && <Homesection setActiveSection={setActiveSection} />}
//         {activeSection === 'about' && <AboutSection />}
//         {activeSection === 'assessment' && <AssessmentSection setActiveSection={setActiveSection} />}
//         {activeSection === 'lifestyle' && <LifestyleSection />}
//         {activeSection === 'consultation' && <ConsultationSection />}
//         {activeSection === 'community' && (
//           <CommunitySection
//             user={user}
//             token={token}
//             feed={feed}
//             onLike={toggleLike}
//             onComment={handleComment}
//             onJoinGroup={toggleJoinGroup}
//             onJoinClick={() => setAuthMode('login')}
//           />
//         )}
//         {activeSection === 'contact' && <ContactSection />}
//       </main>

//       <Footer />
//       <ChatBot />

//       {authMode && (
//         <AuthForm mode={authMode} onAuth={onAuthSuccess} close={() => setAuthMode('')} />
//       )}
//     </>
//   );
// }


import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSection from './components/Aboutsection';
import AssessmentSection from './components/AssessmentSection';
import LifestyleSection from './components/LifestyleSection';
import ConsultationSection from './components/Consultationsection';
import CommunitySections from './components/CommunitySections';
import ContactSection from './components/ContactSection';
import Homesection from './components/HomeSection';
import ChatBot from './components/chatbot';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

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

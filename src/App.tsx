import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import ContactSection from './components/ContactSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';
import CyberRain from './components/CyberRain';
import GoToTopButton from './components/GoToTopButton';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Loading sequence with smooth transitions
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false); // Start fade out of loading screen
    }, 2400); // Reduced from 2600

    const contentTimer = setTimeout(() => {
      setShowContent(true); // Start fade in of main content
    }, 2800); // Reduced gap from 500ms to 400ms

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  // Prevent scrolling when loading
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : 'auto';
  }, [loading]);

  return (
    <>
      <LoadingScreen isVisible={loading} />
      
      <div className={`app ${showContent ? 'app-visible' : 'app-hidden'}`}>
        {showContent && <CyberRain />}

        <div
          className="cursor-trail"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        />

        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <Skills />
        <PortfolioSection />
        <ContactSection />
        <Footer />

        <GoToTopButton />
      </div>
    </>
  );
};

export default App;
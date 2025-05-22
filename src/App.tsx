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
import GoToTopButton from './components/GoToTopButton'; // Add this import
import './App.css';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app">
      <CyberRain />
      
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
      
      {/* Add the GoToTopButton here */}
      <GoToTopButton />
    </div>
  );
};

export default App;
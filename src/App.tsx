import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import ContactSection from './components/ContactSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';
import './App.css';

// Add Font Awesome import
import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="app">
      <div className="cursor-trail"></div>

      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <HeroSection />
      <AboutSection />
      <EducationSection />
      <Skills />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
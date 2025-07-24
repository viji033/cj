import React from 'react';
import GlitchText from './GlitchText';
import CtaButton from './CtaButton';
import './HeroSection.css';

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Replace with your actual resume URL
    const resumeUrl = '/assets/Vijay_resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Vijay_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero-section">
      <div className="background-layers">
        <div className="gradient-layer"></div>
        <div className="image-layer"></div>
        <div className="overlay-layer"></div>
      </div>
      
      <div className="content-container">
        <div className="content">
          <GlitchText 
            text="Vijayakumar" 
            className="heading"
          />
          <p className="subheading">
            Creative Full Stack Developer (MERN) passionate about building sleek, scalable web apps that blend performance with polished UI. Ready to code, create, and innovate.
          </p>
          <div className="button-group">
            <CtaButton href="#projects" color="pink">
              View Projects
            </CtaButton>
            <CtaButton 
              onClick={handleDownloadResume} 
              color="cyan"
            >
              Download Resume
            </CtaButton>
          </div>
        </div>
        
        <div className="avatar-container">
          <div className="avatar">
            <div className="avatar-pulse"></div>
            <img 
              src="/assets/cj.jpg" 
              alt="Cyberpunk Avatar" 
              className="avatar-image"
            />
            <div className="avatar-border"></div>
          </div>
        </div>
      </div>
      
      <ScrollDownIndicator />
    </section>
  );
};

const ScrollDownIndicator = () => (
  <div className="scroll-indicator">
    <a href="#about" className="scroll-link">
      <i className="fas fa-chevron-down"></i>
    </a>
  </div>
);

export default HeroSection;

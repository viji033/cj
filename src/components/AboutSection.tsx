import React from 'react';
import './AboutSection.css';

interface TechPillProps {
  tech: string;
}

const TechPill: React.FC<TechPillProps> = ({ tech }) => (
  <div className="tech-pill">{tech}</div>
);

interface AboutDetailsProps {
  technologies: string[];
}

const AboutDetails: React.FC<AboutDetailsProps> = ({ technologies }) => (
  <div className="details">
    <div className="terminal-text">
      <p className="terminal-line">
        <span className="prompt">$</span> Aspiring Full Stack Developer skilled in MERN stack.
      </p>
      <p className="terminal-line">
        <span className="prompt">$</span> Experienced in building ERP systems and dynamic web apps.
      </p>
      <p className="terminal-line">
        <span className="prompt">$</span> Passionate about creating responsive, user-friendly solutions.
      </p>
    </div>

    <div className="technologies">
      {technologies.map((tech) => (
        <TechPill key={tech} tech={tech} />
      ))}
    </div>
  </div>
);

const AboutImage: React.FC = () => (
  <div className="image-wrapper">
    <div className="image-container">
      <img
        src="/assets/mj.jpg" // Image from public folder
        alt="About Me"
        className="about-image"
      />
      <div className="terminal-label">
        <div className="terminal-light"></div>
        <span>FULLSTACK DEVELOPER</span>
      </div>
    </div>
  </div>
);

const AboutSection: React.FC = () => {
  const technologies = ["Html", "Css","Bootstrap", "JavaScript", "React", "Node.js", "Express.js", "MongoDB","Linux"];

  return (
    <section id="about" className="about-section">
      <div className="background-layer"></div>

      <div className="container">
        <div className="title-container">
          <h2 className="title">
            <span className="title-text">About Me</span>
          </h2>
        </div>

        <div className="about-content">
          <AboutImage />
          <AboutDetails technologies={technologies} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

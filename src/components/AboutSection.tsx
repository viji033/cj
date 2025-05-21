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
        src="https://readdy.ai/api/search-image?query=cyberpunk%20digital%20artist%20working%20on%20futuristic%20holographic%20interface%2C%20surrounded%20by%20neon%20lights%20and%20technology%2C%20dark%20atmospheric%20studio%20with%20glowing%20elements%2C%20high%20contrast%20digital%20art%20with%20electric%20blue%20and%20purple%20accents&width=800&height=600&seq=11&orientation=landscape"
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
  const technologies = ["Html", "Css", "Java Script", "React", "Node.js", "Express.js","MongoDB"];

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
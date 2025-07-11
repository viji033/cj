import React from "react";
import "./Skills.css";

// Import your images with the specified names
const frontendBg = "/assets/hi.jpg";     // placed in public/assets
const backendBg = "/assets/rj.jpg";
const databaseBg = "/assets/pj.jpg";

const skillData = [
  {
    title: "Front-End",
    icon: "🧩",
    color: "neon-blue",
    bgImage: frontendBg,
    skills: [
      { name: "HTML", level: 100 },
      { name: "CSS", level: 100 },
      { name: "BOOTSTRAP", level: 100 },
      { name: "REACT", level: 80 },
    ],
  },
  {
    title: "Back-End",
    icon: "🖥️",
    color: "neon-pink",
    bgImage: backendBg,
    skills: [
      { name: "NODE JS", level: 88 },
      { name: "EXPRESS", level: 92 },
      { name: "PYTHON", level: 80 },
    ],
  },
  {
    title: "DATA BASE",
    icon: "💾",
    color: "neon-green",
    bgImage: databaseBg,
    skills: [
      { name: "MONGODB", level: 85 },
      { name: "SQL", level: 70 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-text">Technical Skills</span>
          <span className="title-underline"></span>
        </h2>
      </div>
      <div className="skills-grid">
        {skillData.map((category, index) => (
          <div
            key={index}
            className="skill-container"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${category.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className={`skill-header ${category.color}`}>
              <span className="skill-icon">{category.icon}</span>
              <h3 className="white-text">{category.title}</h3>
            </div>
            <div className="skill-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className={`skill-level ${category.color}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className={`progress-fill ${category.color}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
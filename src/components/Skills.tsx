import React from "react";
import "./Skills.css";

// GIF icons for each skill
const skills = [
  { name: "HTML", icon: "/assets/html.gif" },
  { name: "CSS", icon: "/assets/css.gif" },
  { name: "BOOTSTRAP", icon: "/assets/bs.gif" },
  { name: "JAVASCRIPT", icon: "/assets/js.gif" },
  { name: "REACT", icon: "/assets/react.gif" },
  { name: "NODE JS", icon: "/assets/node.gif" },
  { name: "EXPRESS JS", icon: "/assets/ex.gif" },
  { name: "PYTHON", icon: "/assets/python.gif" },
  { name: "MONGODB", icon: "/assets/mdb.gif" },
  { name: "GIT", icon: "/assets/git.gif" },
  { name: "GITHUB", icon: "/assets/github.gif" },
  { name: "LINUX", icon: "/assets/linux.gif" },
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
      <div className="skills-grid-12">
        {skills.map((skill, index) => (
          <div key={index} className="gif-skill-item">
            <img src={skill.icon} alt={skill.name} className="skill-gif-large" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

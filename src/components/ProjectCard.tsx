import React from 'react';
import './ProjectCard.css';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  github: string;
}

interface ProjectCardProps {
  project: Project;
  activeProject: number | null;
  setActiveProject: (id: number | null) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  activeProject, 
  setActiveProject 
}) => {
  return (
    <div 
      className="project-card"
      onMouseEnter={() => setActiveProject(project.id)}
      onMouseLeave={() => setActiveProject(null)}
    >
      <div className="hover-overlay"></div>
      
      <div className="image-container">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-image"
        />

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon"
        >
          <img src="/assets/gj.svg" alt="GitHub" />
        </a>
      </div>
      
      <div className="project-info">
        <span className="category">{project.category}</span>
        <h3 className="title">{project.title}</h3>
        <div className="underline"></div>
      </div>
      
      <div className={`active-border ${activeProject === project.id ? 'active' : ''}`}></div>
    </div>
  );
};

export default ProjectCard;
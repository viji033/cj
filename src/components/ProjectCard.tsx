import React from 'react';
import './ProjectCard.css';

// ✅ Make sure Project type is defined or imported
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
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

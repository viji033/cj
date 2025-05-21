import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import CtaButton from './CtaButton';

import './PortfolioSection.css';

// Define the Project interface
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const PortfolioSection: React.FC = () => {
  // ✅ activeProject is now just the ID of the active project
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "ERP",
      category: "Web Design",
      image:
        "https://readdy.ai/api/search-image?query=cyberpunk%20user%20interface%20with%20neon%20blue%20holographic%20elements%2C%20dark%20background%20with%20circuit%20patterns%2C%20futuristic%20technology%20visualization%2C%20highly%20detailed%20digital%20art%20with%20glowing%20elements&width=600&height=600&seq=1&orientation=squarish",
    },
    
    {
      id: 5,
      title: "Portfolio",
      category: "Digital Art",
      image:
        "https://readdy.ai/api/search-image?query=surreal%20cyberpunk%20dreamscape%20with%20floating%20digital%20artifacts%20and%20glitching%20reality%2C%20neon%20colors%20against%20dark%20void%2C%20abstract%20technological%20elements%20with%20electric%20blue%20and%20hot%20pink%20accents%2C%20futuristic%20digital%20art&width=600&height=600&seq=5&orientation=squarish",
    },
    {
      id: 6,
      title: "Cyberpunk Portfolio",
      category: "Web Design",
      image:
        "https://readdy.ai/api/search-image?query=cyberpunk%20augmented%20reality%20interface%20with%20holographic%20elements%20overlaid%20on%20dark%20urban%20environment%2C%20futuristic%20HUD%20display%20with%20neon%20elements%2C%20digital%20art%20with%20glowing%20circuit%20patterns%20and%20data%20visualization&width=600&height=600&seq=6&orientation=squarish",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="background-layer"></div>

      <div className="container">
        <div className="section-header">
          <h2 className="title">My Portfolio</h2>
          <p className="description">
            Explore my cyberpunk-inspired digital creations spanning UI/UX design,
            3D modeling, and digital art.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />
          ))}
        </div>

        <div className="view-all">
          <CtaButton href="#portfolio" color="cyan">
            View All Projects
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

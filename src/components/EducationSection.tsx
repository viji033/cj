import React from 'react';
import './EducationSection.css';

const EducationSection: React.FC = () => {
  const educationData = [
    {
      year: '2024 - 2025',
      degree: 'Fullstack Developer Certification',
      institution: 'Mavepizon',
      description: 'Completed a 6-month hands-on internship focused on building responsive, dynamic web applications.Gained practical experience with the MERN stack (MongoDB, Express.js, React, Node.js) and collaborative agile development.',
      image: 'https://readdy.ai/api/search-image?query=futuristic%20UC%20Berkeley%20campus%20with%20cyberpunk%20aesthetic%2C%20high-tech%20educational%20environment%20with%20neon%20lighting%20and%20digital%20displays%2C%20modern%20architecture%20with%20advanced%20technology%20elements%2C%20evening%20scene%20with%20dramatic%20lighting%20highlighting%20the%20iconic%20buildings&width=120&height=120&seq=edu3&orientation=squarish'
    },
    {
      year: '2019 - 2023',
      degree: 'B.E. Computer Science Engineering',
      institution: 'VV College of Engineering',
      description: 'Pursued Computer Science Engineering, focusing on software development and system design.Passionate about creating innovative and scalable technology solutions.',
      image: 'https://readdy.ai/api/search-image?query=futuristic%20Stanford%20University%20campus%20with%20cyberpunk%20aesthetic%2C%20high-tech%20educational%20environment%20with%20neon%20lighting%20and%20digital%20displays%2C%20modern%20architecture%20with%20advanced%20technology%20elements%2C%20evening%20scene%20with%20dramatic%20lighting%20highlighting%20the%20iconic%20buildings&width=120&height=120&seq=edu2&orientation=squarish'
    },
    {
      year: '2018 - 2019',
      degree: 'HSC',
      institution: 'Govt Higher Secondary School, Kombankulam',
      description: 'Completed HSC with Bio-Maths focus, excelling in analytical and scientific thinking.Completed HSC with Bio-Maths focus, excelling in analytical and scientific thinking.',
      image: 'https://readdy.ai/api/search-image?query=futuristic%20Tokyo%20Institute%20of%20Technology%20campus%20with%20cyberpunk%20aesthetic%2C%20Japanese%20architectural%20elements%20with%20high-tech%20features%2C%20neon%20lighting%20and%20digital%20displays%2C%20evening%20scene%20in%20Tokyo%20with%20city%20lights%20in%20background%2C%20advanced%20educational%20environment&width=120&height=120&seq=edu4&orientation=squarish'
    },
    {
      year: '2016-2017',
      degree: 'SSLC',
      institution: 'Govt Higher Secondary School, Kombankulam',
      description: 'Achieved strong foundation in science and mathematics.Developed problem-solving skills and a passion for technology.',
      image: 'https://readdy.ai/api/search-image?query=futuristic%20Tokyo%20Institute%20of%20Technology%20campus%20with%20cyberpunk%20aesthetic%2C%20Japanese%20architectural%20elements%20with%20high-tech%20features%2C%20neon%20lighting%20and%20digital%20displays%2C%20evening%20scene%20in%20Tokyo%20with%20city%20lights%20in%20background%2C%20advanced%20educational%20environment&width=120&height=120&seq=edu4&orientation=squarish'
    }
  ];

  return (
    <div id="education" className="education-section">
      <div className="section-header">
        <div className="title-wrapper">
          <h2 className="section-title">
            <span className="title-text">Education & <span className="highlight">Experience</span></span>
            <span className="heading-underline"></span>
          </h2>
        </div>
        <p className="section-subtitle">My academic journey and professional development path</p>
      </div>
      
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            
            <div className="timeline-content">
              <div className="education-header">
                <div className="education-year">{edu.year}</div>
                <div className="education-image">
                  <img src={edu.image} alt={edu.institution} />
                </div>
              </div>
              
              <div className="education-details">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
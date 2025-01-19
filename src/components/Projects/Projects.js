// Projects.js
import React from 'react';
import './Projects.css';

function Projects({ transitionClass }) {
  const projects = [
    {
      name: "Portfolio Site",
      link: "https://www.linkedin.com/in/arghya-dip-paul-2668951b6",
      description: "A personal portfolio website showcasing skills and projects.",
    },
    {
      name: "Perfume Site",
      link: "https://www.linkedin.com/in/arghya-dip-paul-2668951b6",
      description: "An e-commerce platform for showcasing perfumes.",
    },
  ];

  return (
    <div className={`projects-page ${transitionClass}`}>
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

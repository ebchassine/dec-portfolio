import React from 'react';
import './Project.css';

function Project({ title, description, imageSrc, className = '' }) {
  return (
    <div className={`project-container group relative overflow-hidden rounded-lg ${className}`}>
      <div className="project-content bg-project-bg p-6 transition-all duration-300 ease-in-out animate-fade-in group-hover:bg-project-hover h-full flex flex-col">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
        <h3 className="text-xl font-bold mb-2 text-highlight">{title}</h3>
        <p className="text-text flex-grow">{description}</p>
      </div>
      <div className="project-feather absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}

export default Project;


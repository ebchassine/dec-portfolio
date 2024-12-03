import React, { useEffect, useState } from 'react';
import Section from './Section';
import Project from './Project';

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of project 1 and its key features.",
    imageSrc: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 2,
    title: "Project 2",
    description: "An overview of project 2 highlighting its unique aspects.",
    imageSrc: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 3,
    title: "Project 3",
    description: "Detailing the innovative approach taken in project 3.",
    imageSrc: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 4,
    title: "Project 4",
    description: "Exploring the challenges and solutions in project 4.",
    imageSrc: "/placeholder.svg?height=300&width=400"
  }
];

function MainContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay setting isLoaded to true to ensure initial render is complete
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-24">
      <Section title="About" id="about">
        <p className={`text-text transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          I'm a developer passionate about creating unique digital experiences.
          With expertise in web development and design, I bring creative ideas to life.
        </p>
      </Section>

      <Section title="Projects" id="projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
              style={{transitionDelay: `${(index + 1) * 200}ms`}}
            >
              <Project
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                className="aspect-square"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Contact" id="contact">
        <p className={`text-text transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '1000ms'}}>
          Get in touch at: <a href="mailto:your@email.com" className="text-highlight hover:underline">your@email.com</a>
        </p>
      </Section>
    </div>
  );
}

export default MainContent;


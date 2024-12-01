import React from 'react';

function MainContent() {
  return (
    <div className="space-y-12">
      <section id="about">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-primary/70">
          I'm a developer passionate about creating unique digital experiences.
          With expertise in web development and design, I bring creative ideas to life.
        </p>
      </section>
      <section id="projects">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        {[1, 2, 3].map((project) => (
          <div key={project} className="border border-primary/20 p-4 mb-4">
            <h3 className="text-xl font-bold mb-2">Project {project}</h3>
            <p className="text-primary/70">A brief description of the project and its key features.</p>
          </div>
        ))}
      </section>
      <section id="contact">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-primary/70">Get in touch at: your@email.com</p>
      </section>
    </div>
  );
}

export default MainContent;
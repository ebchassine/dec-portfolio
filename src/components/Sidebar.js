import React from 'react';

function Sidebar() {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Your Name</h2>
        <p className="text-sm text-primary/70">
          A creative developer focused on building unique digital experiences.
        </p>
      </div>
      <nav className="space-y-2 mb-8">
        <a href="#about" className="block text-primary hover:underline">About</a>
        <a href="#projects" className="block text-primary hover:underline">Projects</a>
        <a href="#contact" className="block text-primary hover:underline">Contact</a>
      </nav>
      <div className="mt-auto flex items-center">
        <div className="w-4 h-2 bg-primary rounded-sm mr-2"></div>
        <span className="text-xs text-primary/50">100%</span>
      </div>
    </div>
  );
}

export default Sidebar;
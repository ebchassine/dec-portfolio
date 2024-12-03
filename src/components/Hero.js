import React, { useEffect, useState } from 'react';
import { Linkedin, GitHub, Mail } from 'react-feather';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('email@gmail.com');
    alert('Email copied to clipboard!');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-header-secondary to-background p-8">
      <h1 className={`font-heading text-5xl font-bold mb-4 text-highlight transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        Name Placeholder
      </h1>
      <p className={`font-sans text-xl mb-8 text-text transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '200ms'}}>
        Some subtitle or something
      </p>
      <div className={`flex space-x-6 mb-8 transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '400ms'}}>
        <a href="https://www.linkedin.com/in/ethan-wong-chassine-1530b1270/" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-text hover:text-highlight transition-colors">
          <Linkedin size={24} aria-label="LinkedIn" />
        </a>
        <a href="https://github.com/ebchassine" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-text hover:text-highlight transition-colors">
          <GitHub size={24} aria-label="GitHub" />
        </a>
        <button onClick={handleEmailCopy} 
                className="text-text hover:text-highlight transition-colors focus:outline-none" 
                aria-label="Copy Email">
          <Mail size={24} />
        </button>
      </div>
    </div>
  );
}

export default Hero;


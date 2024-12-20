import React, { useRef, useEffect, useState } from 'react';

function Layout({ children, sidebar }) {
  const mainContentRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (mainContentRef.current) {
        setScrollY(mainContentRef.current.scrollTop);
      }
    };

    const mainContent = mainContentRef.current;
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (mainContent) {
        mainContent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 200);

  return (
    <div className="flex h-screen bg-background text-text font-mono">
      <div className="w-1/3 h-full bg-header-primary border-r border-highlight p-4 overflow-y-auto">
        {sidebar}
      </div>
      <div className="w-2/3 h-full overflow-y-auto" ref={mainContentRef}>
        <div className="sticky top-0 h-screen flex justify-center items-center z-10" style={{ opacity: heroOpacity }}>
          <div className="absolute inset-0 bg-header-secondary opacity-80"></div>
          <h1 className="text-5xl font-bold relative z-20 text-highlight">PORTFOLIO</h1>
        </div>
        <div className="relative z-20 bg-background p-8 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
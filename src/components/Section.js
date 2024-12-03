import React, { useEffect, useRef, useState } from 'react';

function Section({ title, id, children }) {
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      rootMargin: '-1px 0px 0px 0px',
      threshold: [1],
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        setIsSticky(!entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id={id} className="relative">
      <div
        ref={headerRef}
        className={`sticky top-0 left-0 right-0 bg-background z-10 transition-all duration-300 ${
          isSticky ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl font-bold font-heading text-header-primary py-4">
            {title}
          </h2>
        </div>
      </div>
      <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export default Section;


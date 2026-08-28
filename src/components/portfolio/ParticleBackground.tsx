import { useEffect, useRef } from 'react';

export const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Reduced from 50 → 20 particles — each is a GPU layer, fewer = less composite work
    const particleCount = 20;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = Math.random() * 3 + 5 + 's';
      fragment.appendChild(particle);
    }

    // Single DOM write via fragment — avoids 50 individual reflows
    containerRef.current.appendChild(fragment);
  }, []);

  return <div className="particles" id="particles" ref={containerRef} />;
};

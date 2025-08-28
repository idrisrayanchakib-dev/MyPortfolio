import { useEffect, useRef } from 'react';

export const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  if (!containerRef.current) return;

  const particleCount = 50;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%'; // <-- important
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = Math.random() * 3 + 5 + 's';
    containerRef.current.appendChild(particle);
  }
}, []);


  return <div className="particles" id="particles" ref={containerRef}></div>;
};

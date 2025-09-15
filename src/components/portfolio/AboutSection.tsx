import Computer from "@/components/canvas/Computer"
import { useEffect, useState } from 'react';

const typewriterTexts = [
  "Data & AI Software Engineer",
  "ML Problem Solver", 
  "Data Processing Enthusiast",
  "Building Intelligent Systems "
];

export const AboutSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 20; // ms per character
  const deletingSpeed = 25; // ms per character
  const pauseDelay = 1600; // pause after a full word

  useEffect(() => {
    const fullText = typewriterTexts[currentText];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseDelay);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentText((prev) => (prev + 1) % typewriterTexts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, displayText, isDeleting]);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center lg:scroll-mt-15 scroll-mt-16"
    >
      {/* Row 1: Text + Profile */}
      <div className="relative z-10 w-full px-6 flex flex-col lg:flex-row items-center justify-between mt-10 gap-12">
        
        {/* LEFT: About Text */}
        <div className="flex-1 w-full text-center lg:text-left lg:pl-5 lg:pb-10 md:pl-0">
          {/* Title */}
          <div className="md:pt-5 animate-scale-in">       
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="leading-normal ">About Me</span>
            </h1>
          </div>

          {/* Typewriter Effect */}
          <div className="flex items-center mb-6 lg:justify-start justify-center">
            <h2 className=" code-font font-normal lg:text-xl md:text-md text-lg text-gradient-primary mt-4" >
              <span id="typingText" className="typing-text">{displayText}</span>
            </h2>
          </div>

          {/* Body Text */}
          <p className="text-base sm:text-lg leading-relaxed sm:leading-loose max-w-full sm:max-w-none px-4 sm:px-0 text-justify sm:text-justify text-foreground/80">
            I'm a passionate Software Engineer and Data enthusiast, fascinated by the power of information and intelligent systems. 
            I love transforming raw data into actionable insights and building innovative applications that solve real-world problems. 
            My journey revolves around exploring the world of Machine Learning, Data Processing, and AI, while continuously challenging 
            myself to learn, create, and push the boundaries of technology. My ultimate goal is to design impactful solutions and carve a 
            space as a forward-thinking creator in the tech landscape.    
          </p>
        </div>

         <div className="flex-shrink-0 lg:mr-5 mt-6 
                w-[280px] h-[280px]   /* default mobile size */
                sm:w-[280px] sm:h-[280px] 
                md:w-[300px] md:h-[300px] 
                lg:w-[350px] lg:h-[350px]">
           <img 
           src="/Photo-Chakib.png" 
           alt="Profile" 
           className="w-full h-full object-cover rounded-full"
           />
        </div>

      </div>

      {/* Row 2: Computer */}
      <div className="w-full flex justify-center mt-6">
        <div className="w-full mt-5">
          <Computer />
        </div>
      </div>
    </section>
  );
};

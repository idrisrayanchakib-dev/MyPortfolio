import Computer from "@/components/canvas/Computer"
import { useEffect, useState } from 'react';


const typewriterTexts = [
  "Data & AI Software Engineer",
  "Machine Learning Problem Solver", 
  "Data Processing Enthusiast",
  "Building Intelligent Systems & Projects"
];


export const AboutSection = () => {

const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 50; // ms per character
  const deletingSpeed = 30 // ms per character
  const pauseDelay = 2000; // pause after a full word


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
      className="relative min-h-screen flex items-center justify-center lg:scroll-mt-15 scroll-mt-16"
    >

      {/* Content Wrapper */}
      <div className="relative z-10 w-full px-6  flex flex-col md:flex-none lg:flex-col justify-between items-center mt-10 gap-12">
        
        {/* LEFT: About Text */}
        <div className=" flex-1 md:text-center lg:text-center lg:pb-10 md:pl-0">
          {/* Title */}
          <div className="md:pt-5 animate-scale-in">       
              <h1 className="md:text-6xl md:text-center lg:text-center text-center font-bold text-5xl ">
                <span className="leading-normal">About Me </span>
              </h1>
                         
          </div>

         {/* Typewriter Effect */}
         <div className="flex items-center mb-6 justify-center ">
          <h2 className="code-font font-normal lg:text-xl md:text-md text-lg text-cyan-300 mt-4">
            <span id="typingText" className="typing-text">{displayText}</span>
          </h2>
        </div>

          {/* Body Text */}
          <p className="text-lg  max-w-3xl text-foreground/80 md:text-left lg:text-center leading-relaxed mt-8">
            I'm a passionate Software Engineer and Data enthusiast, fascinated by the power of information and intelligent systems. I love transforming raw data into actionable insights and building innovative applications that solve real-world problems. My journey revolves around exploring the world of Machine Learning, Data Processing, and AI, while continuously challenging myself to learn, create, and push the boundaries of technology. My ultimate goal is to design impactful solutions and carve a space as a forward-thinking creator in the tech landscape.    
          </p>

        </div>
         {/* RIGHT: Computer */}
           <div className="flex-1 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
           <Computer />
           </div>
         

      </div>
      

     </section>
  );
};
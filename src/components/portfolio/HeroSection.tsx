import { Button } from '@/components/ui/button';
import { MobileFab } from "@/components/portfolio/mobile-fab";
import { motion } from "framer-motion";

export const HeroSection = () => {

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="Home" className="relative min-h-screen flex flex-col">
      
      {/* Header / Navigation */}
     <div className="fixed top-4 inset-x-0 z-40 flex justify-center">
  <div className="px-32 md:px-32 py-3 rounded-3xl text-white shadow-glow backdrop-blur-sm flex items-center justify-center lg:justify-between w-auto md:w-auto lg:w-full max-w-6xl ">
    
    {/* Left side (Name) */}
    <span className="text-lg font-semibold whitespace-nowrap">
      Idris Rayan Chakib
    </span>
    
    {/* Right side (Navigation) */}
    <div className="hidden lg:flex items-center space-x-6 nav-links">
      <a href="#Home" className="text-foreground/80 hover:text-primary transition-colors animated-underline">Home</a>
      <a href="#about" className="text-foreground/80 hover:text-primary transition-colors animated-underline">About</a>
      <a href="#skill" className="text-foreground/80 hover:text-primary transition-colors animated-underline">Skills</a>
      <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors animated-underline">Projects</a>
      <a href="#experience" className="text-foreground/80 hover:text-primary transition-colors animated-underline">Experience</a>
    </div>
  </div>
</div>

      {/* Grid background */}
      <div className="absolute top-20 inset-0 bg-[linear-gradient(to_right,#1f1f1f,transparent_2px),linear-gradient(to_bottom,#1f1f1f,transparent_2px)] [background-size:60px_60px] animate-grid-glow mt-3" />

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center flex-1 relative z-30 px-4 text-center">
        
        <h1
          className="text-5xl md:text-6xl font-bold text-foreground/80 lg:leading-normal md:leading-normal leading-normal animate-slideDown mb-3"
        >
          <span>Turning Ideas into < br/> Scalable Code!</span> 
        </h1>

        {/* Action Button */}
        <div className="mt-12">
          <Button
            variant="customSecondary"
            className="text-base sm:text-lg px-6"
            onClick={() => scrollToSection("contact")}
          >
            <span className="text-muted-foreground font-medium">
              Let's Craft Tomorrow ⚡
            </span>
          </Button>
        </div>
      </div>

      <MobileFab />
    </section>
  );
};

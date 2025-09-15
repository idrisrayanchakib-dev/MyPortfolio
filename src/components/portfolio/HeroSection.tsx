import { Button } from '@/components/ui/button';
import { MobileFab } from "@/components/portfolio/mobile-fab";


export const HeroSection = () => {

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="Home" className="relative min-h-screen flex flex-col">
      
      {/* Header / Navigation */}
     <div className="fixed top-4 inset-x-0 z-40 flex justify-center">
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 rounded-3xl text-white shadow-glow backdrop-blur-sm flex items-center justify-center lg:justify-between ">
    
    {/* Left side (Name) */}
    <span className="text-lg font-semibold whitespace-nowrap">
      Idris Rayan Chakib
    </span>
    
    {/* Right side (Navigation) */}
    <div className="hidden lg:flex items-center space-x-6 nav-links">
      <a onClick={(e) => { e.preventDefault();scrollToSection("Home"); }} href="#Home" className="text-foreground/80 hover:text-primary transition-colors animated-underline cursor-pointer">Home</a>
      <a  onClick={(e) => { e.preventDefault();scrollToSection("about"); }} href="#about" className="text-foreground/80 hover:text-primary transition-colors animated-underline cursor-pointer">About</a>
      <a onClick={(e) => { e.preventDefault();scrollToSection("skill"); }} href="#skill" className="text-foreground/80 hover:text-primary transition-colors animated-underline cursor-pointer">Skills</a>
      <a onClick={(e) => { e.preventDefault();scrollToSection("projects"); }} href="#projects" className="text-foreground/80 hover:text-primary transition-colors animated-underline cursor-pointer">Projects</a>
      <a onClick={(e) => { e.preventDefault();scrollToSection("experience"); }} href="#experience" className="text-foreground/80 hover:text-primary transition-colors animated-underline cursor-pointer">Experience</a>
    </div>
  </div>
</div>

      {/* Grid background */}
      <div className="absolute top-20 inset-0 bg-[linear-gradient(to_right,#1f1f1f,transparent_2px),linear-gradient(to_bottom,#1f1f1f,transparent_2px)] [background-size:60px_60px] animate-grid-diagonal-br-tl mt-3" />

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center flex-1 relative z-30 px-4 text-center">
        
        <h1
          className="text-5xl md:text-6xl  text-foreground/80 lg:leading-normal md:leading-normal leading-normal mb-3"
        >
          <span className="font-semibold">Turning Ideas < br /> into Scalable <br /> Code!</span> 
        </h1>

        {/* Action Button */}
        <div className="mt-8">
          <Button
            variant="customSecondary"
            className="text-base sm:text-lg px-6"
            onClick={() => scrollToSection("contact")}
          >
            <span className="text-muted-foreground font-medium">
              Let's Code Future 🚀
            </span>
          </Button>
        </div>
      </div>

      <MobileFab />
    </section>
  );
};

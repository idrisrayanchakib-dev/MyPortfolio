import { Button } from '@/components/ui/button';
import { MobileFab } from "@/components/portfolio/mobile-fab";

export const HeroSection = () => {

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="Home" className="relative min-h-screen">
      
       {/* Mobile-only top blank surface to write on */}
     <div className="relative inset-x-0 top-0 lg:hidden h-20 z-40  flex items-center justify-center">
       <div className="px-10 py-2 rounded-3xl text-white shadow-glow backdrop-blur-xl fixed top-4  ">
         <span className="text-lg sm:text-lg  font-semibold">
         Idris Rayan Chakib
         </span>
       </div>

    </div>
       {/* Grid background */}
    <div className="absolute inset-x-0 top-20 lg:top-0 bottom-0
                  bg-[linear-gradient(to_right,#1f1f1f,transparent_2px),linear-gradient(to_bottom,#1f1f1f,transparent_2px)]
                  [background-size:50px_50px] animate-grid-glow "/>
      
     
      {/* Glass Navigation */}
      <nav className="nav-glass px-6 lg:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-between">

    {/* Desktop logo (hidden on mobile) */}
    <div className="hidden lg:block text-xl font-inter-tight font-bold logo">
      <span>idris@rayanchakib:~$</span>
    </div>
    
    {/* Desktop navigation */}
    <div className="hidden lg:flex items-center space-x-6 nav-links">
      <a href="#Home" className="text-foreground/80 hover:text-primary transition-colors animated-underline">Home</a>
      <a href="#about" className="text-foreground/80 hover:text-primary transition-colors animated-underline">About</a>
       <a href="#skill" className="text-foreground/80 hover:text-primary transition-colors animated-underline">Skills</a>
      <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors animated-underline">Projects</a>
      <a href="#experience" className="text-foreground/80 hover:text-primary transition-colors animated-underline">Experience</a>
    </div>
  </div>

</nav>

   {/* Spacer to account for the top strip on mobile */}
  <div className="h-20" aria-hidden="true" />


     {/* Hero Content */}
<div className="h-20 relative z-30 w-full px-6 " >
  
  <div className="item-center justify-center">
  
  {/* Main Heading */}
  <div className="animate-scale-in">
    <div>
    <h1 className=" text-5xl md:text-5xl md:text-center text-center lg:text-center font-bold lg:mt-20 md:mt-16 mt-10">
      <span className="leading-normal">Turning Ideas <br /> into Scalable <br />Code! </span>
    </h1>
    </div>
  </div>

  {/* Action Buttons */}
  <div className="flex flex-col gap-4  items-center animate-slide-in-left mt-10 " >
    <Button
      variant ="customSecondary"
      className=" text-base sm:text-lg  px-6 animate-btn-glow"
      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth"})}>
      <span className="text-muted-foreground font-mono">let's Craft Tomorrow⚡</span> 
      
    </Button>
  </div>
  </div>


</div>

    <MobileFab />
    </section>
  );
};

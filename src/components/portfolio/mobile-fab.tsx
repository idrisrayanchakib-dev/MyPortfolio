import { useState } from "react";
import { Plus, User, Folder, Wrench, Briefcase } from "lucide-react"; 
export const MobileFab = () => {
  const [open, setOpen] = useState(false);




  

  // Scroll helper
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // auto-close after click
  };

  return (
    <div className="lg:hidden fixed bottom-4 right-6 z-50">
      {/* Extra menu items */}
      <div
        className={`flex flex-col items-center mb-5 space-y-8 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        {/* About Me */}
        <button
          onClick={() => scrollTo("about")}
          className="flex items-center justify-center  text-white transition"
        >
          <User size={20} />
        </button>

        {/* My Skills */}
        <button
          onClick={() => scrollTo("skill")}
          className="flex items-center justify-center  text-white transition"
        >
          <Wrench size={20} />
        </button>

        
        {/* My Projects */}
        <button
          onClick={() => scrollTo("projects")}
          className="flex items-center justify-center  text-white   transition"
        >
          <Folder size={20} />
        </button>

        {/* My Experience */}
        <button
          onClick={() => scrollTo("experience")}
          className="flex items-center justify-center text-white transition"
        >
          <Briefcase size={20} />
        </button>
      </div>

      {/* Main Floating Action Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg transition"
         style={{ backgroundColor: "#1f51ff" }} 
      >
        <Plus
          className={`transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          size={28}
        />
      </button>
    </div>
  );
};

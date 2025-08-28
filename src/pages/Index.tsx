import { HeroSection } from '@/components/portfolio/HeroSection';
import { ProjectShowcase } from '@/components/portfolio/ProjectShowcase';
import { ExperienceTimeline } from '@/components/portfolio/ExperienceTimeline';
import {AboutSection} from "@/components/portfolio/AboutSection"
import { SkillSection} from '@/components/portfolio/SkillSection';
import { ContactSection } from "@/components/portfolio/ContactSection"

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/*Section*/}
      <HeroSection />
      <AboutSection/>
      <SkillSection />
      <ProjectShowcase />
      <ExperienceTimeline />
      <ContactSection />
    </div>
  );
};

export default Index;

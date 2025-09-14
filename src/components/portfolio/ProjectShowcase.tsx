import { useState, useRef } from 'react';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Play, Database, Brain, Code, Zap } from 'lucide-react';

const projectCategories = [
  { id: 'all', label: 'All Projects', icon: Code },
  { id: 'data', label: 'Data Engineering', icon: Database },
  { id: 'ml', label: 'Machine Learning', icon: Brain },
  { id: 'fullstack', label: 'Full-Stack Apps', icon: Zap },
];

const projects = [
  {
    id: 1,
    title: "Real-Time Data Pipeline Platform",
    category: "data",
    description: "Enterprise-grade streaming data processing system handling 10M+ events/hour with Apache Kafka, Spark, and real-time analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    techStack: ["Apache Kafka", "Spark", "Python", "Docker", "Kubernetes", "Redis"],
    metrics: { performance: "99.9% uptime", scale: "10M+ events/hour", impact: "40% cost reduction" },
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  
];

export const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCTA, setActiveCTA] = useState<string | null>(null);
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-24 px-6 mt-16 scroll-mt-16">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 ">
          <h2 className="text-5xl md:text-5xl font-bold mb-8 ">
            My projects
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "cyanGlow"}
                onClick={() => setActiveCategory(category.id)}
                className={`glass-card ${
                  activeCategory === category.id 
                    ? 'bg-gradient-primary text-primary-foreground' 
                    : 'hover-glow'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Button
                    size="sm"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glass-button"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>

              <CardHeader> 
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="glass-card">
                    {projectCategories.find(cat => cat.id === project.category)?.label}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="p-2 hover-glow">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2 hover-glow">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.techStack.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
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
  {
    id: 2,
    title: "AI-Powered Code Review Assistant",
    category: "ml",
    description: "Machine learning model that automatically reviews code quality, suggests improvements, and detects potential bugs using transformer architecture.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    techStack: ["PyTorch", "Transformers", "FastAPI", "React", "PostgreSQL", "Docker"],
    metrics: { accuracy: "94% bug detection", speed: "< 2s analysis", adoption: "500+ developers" },
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Distributed Microservices Platform",
    category: "fullstack",
    description: "Scalable e-commerce platform with microservices architecture, event sourcing, and advanced monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    techStack: ["Node.js", "React", "GraphQL", "MongoDB", "RabbitMQ", "Prometheus"],
    metrics: { users: "100K+ active users", performance: "< 200ms response", availability: "99.99% SLA" },
    demoUrl: "#",
    githubUrl: "#",
    featured: true
    
  },
  {
    id: 4,
    title: "Computer Vision Quality Control",
    category: "ml",
    description: "Deep learning system for automated quality inspection in manufacturing, reducing defect rates by 85%.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    techStack: ["TensorFlow", "OpenCV", "Python", "FastAPI", "PostgreSQL", "MLflow"],
    metrics: { accuracy: "98.5% detection", speed: "150ms per item", savings: "$2M annually" },
    demoUrl: "#",
    githubUrl: "#",
    
  },
  {
    id: 5,
    title: "Blockchain Analytics Dashboard",
    category: "data",
    description: "Real-time cryptocurrency transaction analysis platform with advanced visualizations and fraud detection.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    techStack: ["Web3.js", "D3.js", "React", "Node.js", "MongoDB", "Redis"],
    metrics: { transactions: "1M+ daily", networks: "15 blockchains", users: "50K+ analysts" },
    demoUrl: "#",
    githubUrl: "#",
    
  },
  {
    id: 6,
    title: "Cloud Infrastructure Orchestrator",
    category: "fullstack",
    description: "Infrastructure-as-code platform for automated cloud resource management across multiple providers.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    techStack: ["Terraform", "AWS", "React", "Go", "PostgreSQL", "Prometheus"],
    metrics: { resources: "10K+ managed", efficiency: "60% cost savings", reliability: "99.9% uptime" },
    demoUrl: "#",
    githubUrl: "#",
  }
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
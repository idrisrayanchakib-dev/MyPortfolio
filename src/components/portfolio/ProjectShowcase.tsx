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
    title: "Moogle Search Engine",
    category: "ml",
    description: "An intelligent search engine leveraging TF-IDF ranking, stemming & unstemming, and Bi-gram analysis for accurate document retrieval and relevance scoring.",
    image: "/moogle-cover.jpg",
    techStack: ["Python", "TF-IDF", "Stemming", "Bi-gram", "Flask", "HTML/CSS/JS", "Vercel"],
    metrics: { performance: "Fast retrieval", scale: "NLP-powered", impact: "Deployed on Vercel" },
    demoUrl: "https://moogle-search.vercel.app",
    githubUrl: "https://github.com/idrisrayanchakib-dev/moogle-search",
    featured: true
  },
  {
    id: 2,
    title: "Multi-Robot Autonomous Swarm Exploration",
    category: "ml",
    description: "Autonomous multi-robot swarm system using A* pathfinding with a Teacher-Student strategy powered by Deep Q-Network (DQN), imitation learning, and negative transfer learning for coordinated environment exploration.",
    image: "/swarm-cover.jpg",
    techStack: ["Python", "A* Algorithm", "DQN", "Imitation Learning", "Pygame", "Three.js", "Flask", "Render"],
    metrics: { performance: "Real-time coordination", scale: "Multi-agent swarm", impact: "2D & 3D simulation" },
    demoUrl: "https://intelligence-swarm-2d.onrender.com",
    githubUrl: "https://github.com/idrisrayanchakib-dev/intelligence-swarm-3D",
    featured: true
  },
  {
    id: 3,
    title: "NEXUS P2P: Distributed Consensus Engine",
    category: "fullstack",
    description: "An enterprise-grade serverless peer-to-peer messaging and consensus engine. Features Lamport logical clocks for causal ordering, PBKDF2HMAC zero-knowledge Fernet cryptography, UDP LAN auto-discovery, chunked binary file streaming (32 KB / SHA-256), and failover voting consensus.",
    image: "/nexus-p2p-cover.jpg",
    techStack: ["Python", "TCP/UDP Sockets", "Lamport Clocks", "PBKDF2HMAC", "Fernet Cryptography", "SQLite", "P2P Consensus", "Vercel"],
    metrics: { performance: "< 1ms Local Latency", scale: "100% Serverless Mesh", impact: "Zero-Knowledge E2EE" },
    demoUrl: "https://nexus-distributed-system.vercel.app",
    githubUrl: "https://github.com/idrisrayanchakib-dev/nexus-distributed-system",
    featured: true
  },
  {
  id: 4,
    title: "Fraud Monitoring Website with Machine Learning Solution",
    category: "fullstack",
    description: "A full-stack fraud monitoring dashboard built to detect SIM Box fraud in telecommunications. Combines a feedforward neural network trained on call detail records (CDRs) with a role-based React dashboard for real-time monitoring, MSISDN tracking, traffic analysis, and automated blocking of suspicious numbers.",
    image: "/fraud-monitoring-cover.jpg",
    techStack: ["React", "Vite", "Material UI", "React Router", "Node.js", "Express.js", "MySQL", "Python", "TensorFlow", "Vercel"],
    metrics: { performance: "Real-time fraud detection", scale: "Role-based access control", impact: "Automated SIM Box blocking" },
    demoUrl: "https://fraud-monitoring-webapp.vercel.app",
    githubUrl: "https://github.com/idrisrayanchakib-dev/Fraud-monitoring-webapp.git",
    featured: true
  },
  {
  id: 5,
    title: "NASA orrery web app",
    category: "fullstack",
    description: "An interactive 3D orrery that visualizes the solar system's planetary orbits and motion in real time, using accurate orbital mechanics to render an explorable model of the planets around the sun directly in the browser.",
    image: "/nasa-orrery-cover.jpg",
    techStack: ["Three.js", "X3DOM", "JavaScript", "HTML/CSS", "Vercel"],
    metrics: { performance: "Real-time 3D rendering", scale: "Full planetary system", impact: "Interactive orbital explorer" },
    demoUrl: "https://nasa-orrery-webapp.vercel.app",
    githubUrl: "https://github.com/idrisrayanchakib-dev/nasa-orrery-webapp.git",
    featured: true
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
                className={`glass-card ${activeCategory === category.id
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
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glass-button"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </a>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="glass-card">
                    {projectCategories.find(cat => cat.id === project.category)?.label}
                  </Badge>
                  <div className="flex space-x-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="p-2 hover-glow">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="p-2 hover-glow">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
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
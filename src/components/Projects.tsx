
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'frontend' | 'fullstack' | 'ghl';
};

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'fullstack' | 'ghl'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "A responsive dashboard for e-commerce analytics with real-time data visualization using React, TypeScript, and Recharts.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "frontend"
    },
    {
      id: 2,
      title: "Property Listing Platform",
      description: "A full-stack real estate platform with property listings, user authentication, and advanced filtering options.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "fullstack"
    },
    {
      id: 3,
      title: "GHL Marketing Automation",
      description: "Custom GoHighLevel automation solution for a digital marketing agency, increasing lead conversion by 40%.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["GHL", "JavaScript", "API Integration"],
      liveUrl: "https://example.com",
      category: "ghl"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "frontend"
    },
    {
      id: 5,
      title: "GHL Client Portal",
      description: "Custom client portal integrated with GoHighLevel to streamline client onboarding and communication.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["GHL", "JavaScript", "Webhooks"],
      liveUrl: "https://example.com",
      category: "ghl"
    },
    {
      id: 6,
      title: "Task Management App",
      description: "Full-stack task management application with user authentication, task assignment, and real-time updates.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "fullstack"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work across various domains, from frontend development to GoHighLevel implementations.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md bg-secondary p-1">
            <Button 
              variant={filter === 'all' ? 'default' : 'ghost'} 
              onClick={() => setFilter('all')}
              className="rounded-sm"
            >
              All
            </Button>
            <Button 
              variant={filter === 'frontend' ? 'default' : 'ghost'} 
              onClick={() => setFilter('frontend')}
              className="rounded-sm"
            >
              Frontend
            </Button>
            <Button 
              variant={filter === 'fullstack' ? 'default' : 'ghost'} 
              onClick={() => setFilter('fullstack')}
              className="rounded-sm"
            >
              Full Stack
            </Button>
            <Button 
              variant={filter === 'ghl' ? 'default' : 'ghost'} 
              onClick={() => setFilter('ghl')}
              className="rounded-sm"
            >
              GHL
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden bg-secondary border-none h-full flex flex-col transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium bg-accent px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                {project.liveUrl && (
                  <Button asChild variant="default" size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

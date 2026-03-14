
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
      id: 10,
      title: "Pop Prism Tetris",
      description: "A vibrant, browser-based Tetris game with colorful prismatic blocks and smooth gameplay mechanics built for the web.",
      image: "/project-images/tetris.png",
      tags: ["JavaScript", "Game", "Canvas", "Web App"],
      liveUrl: "https://pop-prism-tetris-play.vercel.app/",
      category: "frontend"
    },
    {
      id: 8,
      title: "AHA Innovations",
      description: "Business website for AHA Innovations showcasing services, brand positioning, and a polished professional web presence.",
      image: "/project-images/aha.png",
      tags: ["React", "Business Website", "Branding", "UI/UX"],
      liveUrl: "https://www.aha-innovations.com/",
      category: "frontend"
    },
    {
      id: 7,
      title: "SeePrompt",
      description: "Prompt intelligence dashboard for organizing, filtering, and scoring reusable AI prompts with a polished dark UI.",
      image: "/project-images/seeprompt.png",
      tags: ["React", "TypeScript", "Dashboard", "AI"],
      liveUrl: "https://seeprompt.vercel.app/",
      category: "fullstack"
    },
    {
      id: 9,
      title: "Daily Verse",
      description: "Inspirational daily scripture web app with serene visuals, rotating locations, and a clean reflective reading experience.",
      image: "/project-images/daily-verse.png",
      tags: ["React", "Vercel", "UI/UX", "Web App"],
      liveUrl: "https://daily-verse-unfolded.vercel.app/",
      category: "frontend"
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

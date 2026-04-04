
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
      id: 8,
      title: "AHA Innovations",
      description: "Business website for AHA Innovations showcasing services, brand positioning, and a polished professional web presence.",
      image: "/project-images/aha.png",
      tags: ["React", "Business Website", "Branding", "UI/UX"],
      liveUrl: "https://www.aha-innovations.com/",
      category: "frontend"
    },
    {
      id: 12,
      title: "Voyce.me",
      description: "A modern web platform focused on sharing voices, stories, and updates through a clean and engaging user experience.",
      image: "/project-images/voyceme.png",
      tags: ["React", "Web Platform", "UI/UX", "Frontend"],
      liveUrl: "https://www.voyce.me/",
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
      id: 19,
      title: "Sepoi-Sepoi",
      description: "Website development project for Sepoi-Sepoi featuring a visual-first presentation and branded hospitality-style content.",
      image: "/project-images/sepoi-sepoi.jpg",
      tags: ["Website Development", "Hospitality", "UI/UX", "Frontend"],
      liveUrl: "http://www.sepoi-sepoi.com/",
      category: "frontend"
    },
    {
      id: 18,
      title: "Villa Saan Phuket",
      description: "Luxury villa website built to highlight destination imagery, amenities, and an elegant booking-oriented experience.",
      image: "/project-images/villasaan.jpg",
      tags: ["Website Development", "Villa", "Branding", "Frontend"],
      liveUrl: "http://www.villasaanphuket.com/",
      category: "frontend"
    },
    {
      id: 17,
      title: "Amilla Beach Villa Residences",
      description: "Property-focused web experience designed to showcase premium residences through rich visuals and clear information flow.",
      image: "/project-images/amilla.jpg",
      tags: ["Website Development", "Real Estate", "Resort", "Frontend"],
      liveUrl: "http://www.amillabeachvillaresidences.com/",
      category: "frontend"
    },
    {
      id: 14,
      title: "The Anandita",
      description: "High-end property website featuring immersive imagery, concise content sections, and a premium presentation style.",
      image: "/project-images/theanandita.jpg",
      tags: ["Website Development", "Luxury", "Property", "Frontend"],
      liveUrl: "http://www.theanandita.com/",
      category: "frontend"
    },
    {
      id: 13,
      title: "Villa Lilibel",
      description: "Destination website created to present villa offerings with warm visuals and a clean, accessible information layout.",
      image: "/project-images/lilibel.jpg",
      tags: ["Website Development", "Villa", "Travel", "Frontend"],
      liveUrl: "http://villalilibel.com/",
      category: "frontend"
    },
    {
      id: 11,
      title: "FabPlanet Feed",
      description: "A dynamic feed experience for FabPlanet designed to surface content in a clear, fast, and visually polished layout.",
      image: "/project-images/fabplanet.png",
      tags: ["React", "Feed", "Content", "Frontend"],
      liveUrl: "https://fabplanet.vercel.app/feed",
      category: "frontend"
    },
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

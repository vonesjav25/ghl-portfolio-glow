
import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type ArchiveProject = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "frontend" | "fullstack" | "ghl";
};

type CaseStudy = {
  id: number;
  title: string;
  role: string;
  image: string;
  tags: string[];
  problem: string;
  solution: string;
  outcome: string;
  liveUrl?: string;
  githubUrl?: string;
};

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "frontend" | "fullstack" | "ghl">("all");

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "SeePrompt",
      role: "Product design and frontend implementation",
      image: "/project-images/seeprompt.png",
      tags: ["React", "TypeScript", "Dashboard", "AI Workflow"],
      problem:
        "Prompt-heavy workflows become messy fast when teams cannot quickly sort, score, and retrieve their best prompts.",
      solution:
        "I designed a focused dashboard experience with structured organization, filtering, and scoring patterns that make repeated prompt use easier.",
      outcome:
        "The result is a cleaner retrieval flow that supports faster AI experimentation and gives the product a more credible, tool-like feel.",
      liveUrl: "https://seeprompt.vercel.app/",
    },
    {
      id: 2,
      title: "AHA Innovations",
      role: "Brand-led business website delivery",
      image: "/project-images/aha.png",
      tags: ["React", "Business Website", "Brand Positioning", "UI/UX"],
      problem:
        "A service business needs trust quickly. If the site feels generic, the brand loses credibility before the conversation starts.",
      solution:
        "I translated the company's positioning into a polished, modern web presence with clear service framing, stronger hierarchy, and professional presentation.",
      outcome:
        "The site now works as a sharper credibility layer for outreach, discovery, and first impressions with prospective clients.",
      liveUrl: "https://www.aha-innovations.com/",
    },
    {
      id: 3,
      title: "Voyce.me",
      role: "Frontend experience and interface refinement",
      image: "/project-images/voyceme.png",
      tags: ["React", "Content Platform", "UI/UX", "Frontend"],
      problem:
        "Content-driven platforms need to balance clarity, readability, and personality without overwhelming the user.",
      solution:
        "I helped shape a cleaner presentation layer with modern frontend patterns, readable content flow, and an interface that stays visually engaging.",
      outcome:
        "The finished experience supports storytelling and updates more effectively while keeping the product approachable and easy to navigate.",
      liveUrl: "https://www.voyce.me/",
    },
  ];

  const projects: ArchiveProject[] = [
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

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="relative py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-primary">Featured Projects</div>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Project work framed as decisions, not just screenshots.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            These featured builds show how I approach product problems, shape solutions, and deliver outcomes.
            Most client repositories are private, so live links represent the shipped work.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {caseStudies.map((project) => (
            <Card key={project.id} className="overflow-hidden rounded-[2rem] border-border/70 bg-card/80 shadow-sm">
              <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1">{project.role}</span>
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-secondary px-3 py-1">{tag}</span>
                    ))}
                  </div>

                  <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground">{project.title}</h3>

                  <div className="mt-8 grid gap-5 md:grid-cols-3">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Problem</div>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Solution</div>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Outcome</div>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <Button asChild className="rounded-full">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          View Live Project
                        </a>
                      </Button>
                    )}
                    {project.githubUrl ? (
                      <Button asChild variant="outline" className="rounded-full">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    ) : (
                      <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-muted-foreground">
                        <Lock className="h-4 w-4" />
                        Client code is private
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div>
            <h3 className="font-display text-3xl font-bold tracking-tight">Selected launches and shipped builds</h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              A broader view of frontend, full-stack, and GoHighLevel-adjacent work across business sites and product experiments.
            </p>
          </div>

          <div className="inline-flex rounded-full border border-border/70 bg-card/80 p-1 shadow-sm">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              variant={filter === "frontend" ? "default" : "ghost"}
              onClick={() => setFilter("frontend")}
              className="rounded-full"
            >
              Frontend
            </Button>
            <Button
              variant={filter === "fullstack" ? "default" : "ghost"}
              onClick={() => setFilter("fullstack")}
              className="rounded-full"
            >
              Full Stack
            </Button>
            <Button
              variant={filter === "ghl" ? "default" : "ghost"}
              onClick={() => setFilter("ghl")}
              className="rounded-full"
            >
              GHL
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border-border/70 bg-card/80 shadow-sm transition-transform duration-300 hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display text-2xl tracking-tight">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="leading-7 text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                {project.liveUrl && (
                  <Button asChild variant="default" size="sm" className="rounded-full">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {!project.githubUrl && (
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    Private client work
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-[1.75rem] border border-border/70 bg-card/80 p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="font-display text-2xl font-bold tracking-tight">Active code presence</h4>
              <p className="mt-2 text-muted-foreground">
                Public GitHub activity and this portfolio repository are available if you want to review recent work and implementation style.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" className="rounded-full">
                <a href="https://github.com/vonesjav25" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub Profile
                </a>
              </Button>
              <Button asChild className="rounded-full">
                <a href="https://github.com/vonesjav25/ghl-portfolio-glow" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="h-4 w-4" />
                  Portfolio Repo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

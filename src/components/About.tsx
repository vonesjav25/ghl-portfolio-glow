import {
  Blocks,
  Briefcase,
  Code,
  Database,
  Globe,
  Layers,
  MessagesSquare,
  Server,
  Settings,
  ShieldCheck,
  Terminal,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const proofPoints = [
    { value: "12+", label: "years across enterprise, agency, and product work" },
    { value: "7", label: "roles spanning consulting, travel, civic tech, and SaaS" },
    { value: "End-to-end", label: "delivery from UI systems to backend integration" },
  ];

  const strengths = [
    {
      title: "Product-minded frontend craft",
      description:
        "I design interfaces to be readable, resilient, and fast to extend, not just visually polished.",
      icon: Blocks,
    },
    {
      title: "Client communication without translation loss",
      description:
        "I am comfortable gathering requirements directly, shaping scope, and turning business language into implementation detail.",
      icon: MessagesSquare,
    },
    {
      title: "Delivery patterns that scale",
      description:
        "Reusable components, shared services, and pragmatic architecture keep teams moving after launch.",
      icon: ShieldCheck,
    },
  ];

  const techGroups = [
    {
      title: "Frontend",
      icon: Globe,
      items: ["Angular", "React", "Preact", "TypeScript", "JavaScript", "HTML", "CSS", "SASS", "Ionic", "PixiJS"],
    },
    {
      title: "Backend and Data",
      icon: Server,
      items: ["Node.js", "NestJS", "ExpressJS", "PHP", "Oracle", "MySQL", "PostgreSQL", "SQLite"],
    },
    {
      title: "Tooling and Systems",
      icon: Terminal,
      items: ["Git", "Bash", "Unix", "CGI", "Awk", "WordPress", "CodeIgniter", "WinJS"],
    },
  ];

  const values = [
    {
      title: "Clarity over noise",
      description: "I favor direct communication, clean implementation, and interfaces that make the next decision obvious.",
      icon: Code,
    },
    {
      title: "Systems thinking",
      description: "I look beyond a single feature and shape patterns that reduce repeated work across teams and releases.",
      icon: Layers,
    },
    {
      title: "Reliable execution",
      description: "I focus on maintainability, documentation, and delivery discipline so projects stay stable under pressure.",
      icon: Settings,
    },
  ];

  const domainIcons = [Briefcase, Database, Server];

  return (
    <section id="about" className="relative bg-secondary/45 py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-primary">About Me</div>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Technical depth backed by calm execution and strong client partnership.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I have spent more than a decade building digital products across enterprise consulting, agency delivery,
            civic tech, travel, and custom business platforms. My best work sits at the intersection of thoughtful UI,
            dependable engineering, and clear communication.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {proofPoints.map((item) => (
            <Card key={item.label} className="rounded-[1.75rem] border-border/70 bg-card/80 shadow-sm">
              <CardContent className="p-6">
                <div className="font-display text-3xl font-bold text-foreground">{item.value}</div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-border/70 bg-card/80 p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Personal Brand</div>
              <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
                <p>
                  I bring a blend of frontend precision, systems awareness, and practical leadership. That means I can
                  move from polishing component details to shaping delivery patterns, documenting solutions, and helping
                  teams stay aligned when requirements shift.
                </p>
                <p>
                  The through-line in my work is trust: clients need clear answers, teams need dependable systems, and
                  products need structure that remains useful after the initial release.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <Card key={value.title} className="rounded-[1.75rem] border-border/70 bg-card/80 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-foreground">{value.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            {strengths.map((strength) => {
              const Icon = strength.icon;

              return (
                <Card key={strength.title} className="rounded-[1.75rem] border-border/70 bg-card/80 shadow-sm">
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{strength.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{strength.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {techGroups.map((group, index) => {
            const Icon = group.icon;
            const AccentIcon = domainIcons[index] ?? Code;

            return (
              <Card key={group.title} className="rounded-[1.75rem] border-border/70 bg-card/80 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
                    </div>
                    <AccentIcon className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-sm text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

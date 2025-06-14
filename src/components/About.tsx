import { Code, Briefcase, Users, Globe, Palette, Zap, Atom, Heart, Waves, Hash, Triangle, Server, Coffee, Database, Leaf, FileText, Github, Code2, Figma, Settings, Terminal, Layers } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const frontendTech = [
    { name: "Angular", icon: Atom },
    { name: "React", icon: Atom },
    { name: "PreactJs", icon: Heart },
    { name: "HTML", icon: Globe },
    { name: "CSS", icon: Palette },
    { name: "JavaScript", icon: Zap },
    { name: "TypeScript", icon: Code },
    { name: "Bootstrap", icon: Hash },
    { name: "SASS", icon: Waves },
    { name: "jQuery", icon: Code2 },
    { name: "Ionic", icon: Triangle },
    { name: "PixiJS", icon: Layers }
  ];

  const backendTech = [
    { name: "Node.js", icon: Server },
    { name: "NestJS", icon: Server },
    { name: "ExpressJS", icon: Server },
    { name: "PHP", icon: Code },
    { name: "MySQL", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "SQLite", icon: Database },
    { name: "Oracle", icon: Database }
  ];

  const tools = [
    { name: "Git", icon: Github },
    { name: "CGI", icon: Terminal },
    { name: "Bash", icon: Terminal },
    { name: "Unix", icon: Terminal },
    { name: "Awk", icon: Terminal },
    { name: "CodeIgniter", icon: Settings },
    { name: "WordPress", icon: Globe },
    { name: "WinJS", icon: Code2 }
  ];

  return (
    <section id="about" className="py-20 bg-secondary relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              I'm a seasoned full-stack developer with over 12 years of experience building 
              robust web applications and enterprise-grade solutions. Currently working as an 
              App Developer at Accenture, I specialize in modern JavaScript frameworks and backend systems.
            </p>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              My expertise spans from Angular and React to Node.js, PHP, and databases like Oracle 
              and PostgreSQL. I've worked across diverse industries including IT consulting, travel, 
              and mobile applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive on solving complex technical challenges, collaborating with clients to understand 
              their needs, and architecting scalable solutions that drive business value.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">My Expertise</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Code className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building end-to-end solutions with Angular, React, Node.js, and PHP for 
                    scalable enterprise applications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Enterprise Solutions</h4>
                  <p className="text-muted-foreground">
                    Working with enterprise clients at Accenture and Atos to deliver custom 
                    solutions and technical consulting services.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Technical Leadership</h4>
                  <p className="text-muted-foreground">
                    Creating reusable component libraries, architecting systems, and mentoring 
                    teams on best practices and modern development workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">Tools & Technologies</h3>
            <p className="text-muted-foreground">The tools I work with daily</p>
          </div>

          <div className="space-y-8">
            {/* Frontend */}
            <div>
              <h4 className="text-lg font-semibold text-center mb-4 text-muted-foreground">Frontend</h4>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-3 max-w-4xl mx-auto">
                {frontendTech.map((tech) => {
                  const IconComponent = tech.icon;
                  return (
                    <div key={tech.name} className="flex flex-col items-center group">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 border border-border/30">
                        <IconComponent className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <span className="text-xs font-medium text-center text-muted-foreground">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h4 className="text-lg font-semibold text-center mb-4 text-muted-foreground">Backend</h4>
              <div className="flex justify-center">
                <div className="grid grid-cols-4 md:grid-cols-4 gap-3 max-w-lg">
                  {backendTech.map((tech) => {
                    const IconComponent = tech.icon;
                    return (
                      <div key={tech.name} className="flex flex-col items-center group">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 border border-border/30">
                          <IconComponent className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <span className="text-xs font-medium text-center text-muted-foreground">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-lg font-semibold text-center mb-4 text-muted-foreground">Tools</h4>
              <div className="flex justify-center">
                <div className="grid grid-cols-4 md:grid-cols-4 gap-3 max-w-lg">
                  {tools.map((tool) => {
                    const IconComponent = tool.icon;
                    return (
                      <div key={tool.name} className="flex flex-col items-center group">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 border border-border/30">
                          <IconComponent className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <span className="text-xs font-medium text-center text-muted-foreground">{tool.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

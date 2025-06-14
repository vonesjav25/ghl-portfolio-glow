
import { Code, Briefcase, Users, Globe, Palette, Zap, Atom, Heart, Waves, Hash, Triangle, Server, Coffee, Database, Leaf, FileText, Github, Code2, Figma } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const frontendTech = [
    { name: "HTML", icon: Globe },
    { name: "CSS", icon: Palette },
    { name: "JavaScript", icon: Zap },
    { name: "React", icon: Atom },
    { name: "Vue", icon: Heart },
    { name: "Tailwind", icon: Waves },
    { name: "Bootstrap", icon: Hash },
    { name: "Next.js", icon: Triangle }
  ];

  const backendTech = [
    { name: "Node.js", icon: Server },
    { name: "Java", icon: Coffee },
    { name: "Python", icon: Code },
    { name: "SQL", icon: Database },
    { name: "MongoDB", icon: Leaf }
  ];

  const tools = [
    { name: "Git", icon: FileText },
    { name: "GitHub", icon: Github },
    { name: "VS Code", icon: Code2 },
    { name: "Figma", icon: Figma }
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
              Hi there! I'm a passionate frontend developer and GoHighLevel expert with over 5 years of experience 
              building modern, responsive web applications that deliver exceptional user experiences.
            </p>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              I specialize in crafting clean, efficient code and leveraging the power of GoHighLevel 
              to help businesses streamline their operations and maximize growth. My approach combines technical 
              expertise with a deep understanding of business needs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, 
              or sharing knowledge through technical blog posts and community events.
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
                  <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive, interactive web applications with modern JavaScript frameworks.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">GoHighLevel Expert</h4>
                  <p className="text-muted-foreground">
                    Implementing custom GHL solutions to automate workflows and improve conversion rates.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Creating intuitive user interfaces that balance aesthetics with functionality.
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

          <div className="space-y-10">
            {/* Frontend */}
            <div>
              <h4 className="text-lg font-semibold text-center mb-6 text-muted-foreground">Frontend</h4>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
                {frontendTech.map((tech) => {
                  const IconComponent = tech.icon;
                  return (
                    <div key={tech.name} className="flex flex-col items-center group">
                      <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 border border-border/50">
                        <IconComponent className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <span className="text-xs font-medium text-center text-muted-foreground">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h4 className="text-lg font-semibold text-center mb-6 text-muted-foreground">Backend</h4>
              <div className="flex justify-center">
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-lg">
                  {backendTech.map((tech) => {
                    const IconComponent = tech.icon;
                    return (
                      <div key={tech.name} className="flex flex-col items-center group">
                        <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 border border-border/50">
                          <IconComponent className="w-6 h-6 text-muted-foreground" />
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
              <h4 className="text-lg font-semibold text-center mb-6 text-muted-foreground">Tools</h4>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-sm">
                  {tools.map((tool) => {
                    const IconComponent = tool.icon;
                    return (
                      <div key={tool.name} className="flex flex-col items-center group">
                        <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 border border-border/50">
                          <IconComponent className="w-6 h-6 text-muted-foreground" />
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

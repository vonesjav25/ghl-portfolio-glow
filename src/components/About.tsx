
import { Code, Briefcase, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const frontendTech = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Vue", icon: "💚" },
    { name: "Tailwind", icon: "🌊" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "Next.js", icon: "▲" }
  ];

  const backendTech = [
    { name: "Node.js", icon: "🟢" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" }
  ];

  const tools = [
    { name: "Git", icon: "📝" },
    { name: "GitHub", icon: "🐙" },
    { name: "VS Code", icon: "💙" },
    { name: "Figma", icon: "🎨" }
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
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Tools & Technologies</h3>
            <p className="text-lg text-muted-foreground">The tools I work with daily</p>
          </div>

          <div className="space-y-12">
            {/* Frontend */}
            <div>
              <h4 className="text-2xl font-bold text-center mb-8">Frontend</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {frontendTech.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center group">
                    <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                      <span className="text-2xl">{tech.icon}</span>
                    </div>
                    <span className="text-sm font-medium text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h4 className="text-2xl font-bold text-center mb-8">Backend</h4>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-2xl">
                  {backendTech.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center group">
                      <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                        <span className="text-2xl">{tech.icon}</span>
                      </div>
                      <span className="text-sm font-medium text-center">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-2xl font-bold text-center mb-8">Tools</h4>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-xl">
                  {tools.map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center group">
                      <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                        <span className="text-2xl">{tool.icon}</span>
                      </div>
                      <span className="text-sm font-medium text-center">{tool.name}</span>
                    </div>
                  ))}
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

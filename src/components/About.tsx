
import { Code, Briefcase, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "HTML/CSS", 
    "Tailwind CSS", "Node.js", "GoHighLevel", "API Integration",
    "Responsive Design", "UI/UX Design", "Next.js", "Git"
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

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Card key={skill} className="bg-accent border-none">
                <CardContent className="p-3 text-sm font-medium">{skill}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

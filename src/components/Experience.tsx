
import { useRef, type ReactNode } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion, useInView, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TimelineItem = ({ children }: { children: ReactNode }) => {
  const dotRef = useRef<HTMLSpanElement>(null);
  // Lights up once the drawn line reaches this role, and stays lit while scrolling past it.
  const isReached = useInView(dotRef, { margin: "100000px 0px -30% 0px" });

  return (
    <div data-reveal className="relative pl-9 md:pl-12">
      <span
        ref={dotRef}
        aria-hidden
        data-reached={isReached}
        className="absolute left-[7px] top-9 h-[11px] w-[11px] rounded-full border border-border bg-background transition-[background-color,border-color,box-shadow,transform] duration-500 data-[reached=true]:scale-110 data-[reached=true]:border-primary data-[reached=true]:bg-primary data-[reached=true]:glow-orange"
      />
      {children}
    </div>
  );
};

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 70%", "end 70%"] });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });

  const experiences = [
    {
      company: "Accenture",
      position: "App Developer",
      duration: "Jul 2024 – Current",
      type: "Full-stack Development, IT Services and Consulting",
      stack: ["CGI", "Bash", "Unix", "Oracle", "Awk", "HTML", "CSS", "JavaScript"],
      responsibilities: [
        "Contribute to system architecture and solution design for secure, maintainable, well-documented software",
        "Work directly with clients to gather requirements, clarify technical details, and keep delivery aligned with business goals",
        "Develop reusable components, services, and libraries that support future delivery"
      ]
    },
    {
      company: "Atos",
      position: "Software Engineer",
      duration: "Jul 2020 – Dec 2023",
      type: "Frontend Development, IT Services and Consulting",
      stack: ["Angular", "Git", "Bootstrap", "SASS"],
      responsibilities: [
        "Developed reusable Angular components, services, and libraries integrated with APIs",
        "Served as a direct client contact for requirements, status updates, and technical clarification"
      ]
    },
    {
      company: "Angat Buhay App (formerly Leni2022)",
      position: "Software Engineer",
      duration: "Dec 2021 – May 2022",
      type: "Frontend Development, Mobile Application",
      stack: ["Preact"],
      responsibilities: [
        "Turned product designs into working mobile application features using Preact",
        "Created shared components, services, and libraries for the application",
        "Created and carried out project plans"
      ]
    },
    {
      company: "ImFree Mobile Inc.",
      position: "Software Engineer",
      duration: "Jul 2017 – Jul 2020",
      type: "Frontend Development, Information Technology",
      stack: ["JavaScript", "TypeScript", "HTML", "CSS/SASS", "MySQL", "PostgreSQL", "Git", "Angular", "PixiJS", "NestJS", "ExpressJS"],
      responsibilities: [
        "Researched, designed, implemented, and managed software programs",
        "Built modular layouts and shared code libraries",
        "Partnered with designers, product owners, backend, and DevOps teams",
        "Created project plans and presented status and proposals across departments",
        "Wrote technical documentation and solution design architecture",
        "Tested new software and fixed bugs"
      ]
    },
    {
      company: "Elite Havens",
      position: "Frontend Developer",
      duration: "Jan 2014 – Jul 2017",
      type: "Frontend Development, Travel Agency, Information Technology",
      stack: ["PHP", "HTML", "XML", "CSS", "SASS", "JavaScript", "jQuery", "Bootstrap", "TypeScript", "Ionic", "Smarty", "WordPress", "Angular"],
      responsibilities: [
        "Defined web page structure and design in line with user experience requirements",
        "Delivered responsive interfaces across device resolutions",
        "Optimized web pages for speed and scalability",
        "Built reusable frontend code and integrated it with backend development"
      ]
    },
    {
      company: "Robin Tech",
      position: "Developer",
      duration: "Aug 2012 – May 2013",
      type: "Web and Software Development, Information Technology",
      stack: ["HTML", "CSS", "PHP", "JavaScript", "jQuery", "WinJS", "MySQL", "SQLite", "CodeIgniter", "WordPress"],
      responsibilities: [
        "Designed algorithms and flowcharts with the development team",
        "Wrote clean, efficient code to specification and integrated third-party programs",
        "Troubleshot, debugged, and upgraded existing software",
        "Produced technical documentation for reference and reporting"
      ]
    },
    {
      company: "Sadeoditu Enterprise",
      position: "Web Designer",
      duration: "Dec 2011 – Aug 2012",
      type: "Web Design and Frontend Development, IT, Web Development",
      stack: ["Photoshop", "HTML", "CSS", "jQuery", "JavaScript", "WordPress", "PrestaShop", "OsClass"],
      responsibilities: [
        "Developed wireframes and task flows based on user needs",
        "Created website designs, including content, graphics, and layouts",
        "Converted PSD designs to HTML/CSS and handled UX design"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div data-reveal="title" className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto"></div>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto space-y-8">
          <div aria-hidden className="absolute bottom-6 left-3 top-6 w-px bg-border/60">
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-primary to-accent"
              style={{ scaleY: reduceMotion ? scrollYProgress : lineProgress }}
            />
          </div>

          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
            <Card className="bg-secondary border-violet-500/20 hover:border-violet-500/40 transition-[border-color,box-shadow] duration-300 hover:glow-orange">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-violet-500/20 p-3 rounded-lg">
                      <Briefcase className="h-6 w-6 text-violet-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-bold text-gradient">
                        {exp.position}
                      </CardTitle>
                      <h3 className="text-lg font-semibold text-violet-400 mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-mono">{exp.duration}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-violet-400 mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-violet-400 mt-1.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-violet-400 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 text-xs font-mono bg-violet-500/10 text-violet-300 rounded border border-violet-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

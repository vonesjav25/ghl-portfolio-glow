
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "Accenture",
      position: "App Developer",
      duration: "Jul 2024 – Current",
      type: "Full-stack Development, IT Services and Consulting",
      stack: ["CGI", "Bash", "Unix", "Oracle", "Awk", "HTML", "CSS", "Javascript"],
      responsibilities: [
        "Build reusable components, services and libraries for future use",
        "Communicate directly with clients to gather requirements, provide updates, clarify technical details, and ensure alignment with business goals",
        "Participate in system architecture and solution design to create secure, maintainable, and well-documented software"
      ]
    },
    {
      company: "Atos",
      position: "Software Engineer",
      duration: "Jul 2020 – Dec 2023",
      type: "Frontend Development, IT Services and Consulting",
      stack: ["Angular", "Git", "Bootstrap", "SASS"],
      responsibilities: [
        "Build reusable components, services and libraries using Angular and Integrate with APIs",
        "Communicate directly with clients to gather requirements, provide updates, clarify technical details, and ensure alignment with business goals"
      ]
    },
    {
      company: "Angat Buhay App (formerly Leni2022)",
      position: "Software Engineer",
      duration: "Dec 2021 – May 2022",
      type: "Frontend Development, Mobile Application",
      stack: ["PreactJs"],
      responsibilities: [
        "Build reusable components, services and libraries",
        "Convert designs into functional mobile application features",
        "Develop and execute project plans"
      ]
    },
    {
      company: "ImFree Mobile Inc.",
      position: "Software Engineer",
      duration: "Jul 2017 – Jul 2020",
      type: "Frontend Development, Information Technology",
      stack: ["JavaScript", "Typescript", "Html", "CSS/SASS", "MySQL", "PostgreSQL", "Git", "Angular", "PixiJS", "NestJS", "ExpressJS"],
      responsibilities: [
        "Research, design, implement and manage software programs",
        "Build modular layouts, reusable code and libraries for future use",
        "Collaborate with other team members (designers, product owners, back-end, devOps, etc)",
        "Work closely with cross-functional departments to communicate project statuses and proposals",
        "Write technical documentation, solutions design architecture",
        "Develop and execute project plans",
        "Test new softwares and fix bugs"
      ]
    },
    {
      company: "Elite Havens",
      position: "Frontend Developer",
      duration: "Jan 2014 – Jul 2017",
      type: "Frontend Development, Travel Agency, Information Technology",
      stack: ["PHP", "HTML", "XML", "CSS", "SASS", "JavaScript", "jQuery", "Bootstrap", "TypeScript", "Ionic", "Smarty", "WordPress", "Angular"],
      responsibilities: [
        "Determine the structure and design of web pages",
        "Ensure alignment of web design and user experience requirements",
        "Ensure user interface design is compatible with any device resolution",
        "Build reusable code for future use",
        "Optimize web pages for maximum speed and scalability",
        "Integrate with backend development"
      ]
    },
    {
      company: "Robin Tech",
      position: "Developer",
      duration: "Aug 2012 – May 2013",
      type: "Web and Software Development, Information Technology",
      stack: ["HTML", "CSS", "PHP", "JavaScript", "jQuery", "WinJS", "MySQL", "SQLite", "CodeIgniter", "WordPress", "WinJS"],
      responsibilities: [
        "Work with developers to design algorithms and flowcharts",
        "Produce clean, efficient code based on specifications",
        "Integrate software components and third-party programs",
        "Troubleshoot, debug and upgrade existing software",
        "Create technical documentation for reference and reporting"
      ]
    },
    {
      company: "Sadeoditu Enterprise",
      position: "Web Designer",
      duration: "Dec 2011 – Aug 2012",
      type: "Web Design and Frontend Development, IT, Web Development",
      stack: ["PhotoshopCS5", "HTML", "CSS", "jQuery", "JavaScript", "WordPress", "Prestashop", "OsClass"],
      responsibilities: [
        "Develop wireframes and task flows based on user needs",
        "Create website designs (content, graphics and layouts)",
        "Convert PSD to HTML/CSS",
        "UX design"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-secondary border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 hover:glow-orange">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

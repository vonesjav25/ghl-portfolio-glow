
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background/85 py-12 backdrop-blur">
      <div className="container px-4">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-card text-sm font-bold text-primary shadow-sm">
                AJ
              </div>
              <div>
                <div className="font-display text-lg font-bold tracking-tight">Alvin Javelosa</div>
                <div className="text-sm text-muted-foreground">
                  Building scalable web solutions with clarity and impact.
                </div>
              </div>
            </Link>

            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Senior frontend and full-stack developer focused on shipping usable interfaces,
              dependable systems, and client-facing solutions that stay maintainable after launch.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-full">
                <a href="mailto:alvinjavelosa@gmail.com?subject=Let's%20build%20something">
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>
              </Button>
            </div>

            <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a href="#about" className="transition-colors hover:text-foreground">
                About
              </a>
              <a href="#experience" className="transition-colors hover:text-foreground">
                Experience
              </a>
              <a href="#projects" className="transition-colors hover:text-foreground">
                Projects
              </a>
              <a href="#contact" className="transition-colors hover:text-foreground">
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} Alvin Javelosa. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";

import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { SHOW_PROJECTS } from "@/lib/site-config";

const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  ...(SHOW_PROJECTS ? [{ href: "#projects", label: "Projects" }] : []),
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => setIsScrolled(latest > 50));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const href = `#${entry.target.id}`;
          if (entry.isIntersecting) {
            setActiveHref(href);
          } else {
            setActiveHref((current) => (current === href ? "" : current));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    navItems.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[padding,background-color,border-color,box-shadow] duration-300 ${
        isScrolled
          ? "border-b border-border/60 bg-background/82 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-background/85 text-base font-bold text-primary shadow-sm">
            AJ
          </div>
          <div>
            <div className="font-display text-lg font-bold tracking-tight text-foreground">Alvin Javelosa</div>
            <div className="hidden text-xs uppercase tracking-[0.28em] text-muted-foreground sm:block">
              Senior Frontend &amp; Full-Stack
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-active={activeHref === item.href}
              aria-current={activeHref === item.href ? "location" : undefined}
              className="relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-foreground data-[active=true]:text-foreground data-[active=true]:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}

          <ThemeToggle />

          <div className="flex items-center gap-2">
            <Button asChild size="icon" variant="ghost" className="rounded-full">
              <a href="mailto:alvinjavelosa@gmail.com" aria-label="Email Alvin Javelosa">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild className="rounded-full px-5 font-semibold shadow-sm">
              <a href="#contact">Start a Conversation</a>
            </Button>
          </div>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground shadow-sm backdrop-blur"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="container mt-3 lg:hidden">
          <div className="rounded-3xl border border-border/70 bg-background/95 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-2 flex items-center gap-3">
                <Button asChild className="flex-1 rounded-full">
                  <a href="mailto:alvinjavelosa@gmail.com">
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

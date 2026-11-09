
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PuzzleGame from "@/components/ParticleGame";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import ScrollProgress from "@/components/ScrollProgress";
import { useReveal } from "@/hooks/use-reveal";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { SHOW_PROJECTS } from "@/lib/site-config";

const Index = () => {
  useSmoothScroll();
  useReveal();

  return (
    <div id="top" className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <ScrollProgress />
      <FloatingElements />
      <Header />
      <main>
        <Hero />
        <Experience />
        <About />
        {SHOW_PROJECTS && (
          <div data-reveal>
            <Projects />
          </div>
        )}
        <div data-reveal>
          <PuzzleGame />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

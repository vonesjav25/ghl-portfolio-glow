
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PuzzleGame from "@/components/ParticleGame";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <FloatingElements />
      <Header />
      <main>
        <Hero />
        <PuzzleGame />
        <About />
        <Experience />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

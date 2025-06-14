
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    "Frontend Developer",
    "Fullstack Developer",
    "Mobile App Developer",
    "Software Developer",
    "GHL Specialist",
    "Web Designer"
  ];
  
  const currentText = texts[currentTextIndex];

  useEffect(() => {
    if (isTyping) {
      if (typedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setTypedText(currentText.slice(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Text is fully typed, wait then start erasing
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Erasing phase
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Text is fully erased, move to next text
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [typedText, isTyping, currentText, texts.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-animated -z-10"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="animate-fade-in text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hello, I'm <span className="text-gradient pulse-orange">Alvin Javelosa</span>
          </h1>
          <div className="h-8 md:h-12 mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-mono text-gradient-orange">
              {typedText}<span className={`inline-block w-1 h-5 md:h-6 bg-violet-400 ml-1 glow-orange ${isTyping || typedText.length > 0 ? 'animate-pulse' : 'opacity-0'}`}></span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting beautiful, responsive web experiences and leveraging GoHighLevel to help businesses grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="px-8 glow-orange-strong hover:glow-orange transition-all duration-300 bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 border-glow hover:bg-violet-500/10 transition-all duration-300 border-violet-400 text-violet-400"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;


import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Frontend Developer & GHL Expert";

  useEffect(() => {
    if (isTyping) {
      if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setTypedText("");
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [typedText, isTyping]);

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="animate-fade-in text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hello, I'm <span className="text-gradient">John Doe</span>
          </h1>
          <div className="h-8 md:h-12 mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-mono text-muted-foreground">
              {typedText}<span className={`inline-block w-1 h-5 md:h-6 bg-primary ml-1 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting beautiful, responsive web experiences and leveraging GoHighLevel to help businesses grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="px-8">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;

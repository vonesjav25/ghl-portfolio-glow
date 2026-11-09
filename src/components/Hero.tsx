
import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { Button } from "@/components/ui/button";
import { SHOW_PROJECTS } from "@/lib/site-config";

const delayStyle = (delay: number) => ({ "--delay": `${delay}ms` }) as CSSProperties;

const MaskedText = ({ delay, children }: { delay: number; children: ReactNode }) => (
  <span className="mask-line">
    <span style={delayStyle(delay)}>{children}</span>
  </span>
);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 96]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const nearOrbY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const farOrbY = useTransform(scrollYProgress, [0, 1], [0, -56]);

  return (
    <section ref={sectionRef} className="pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-grid-soft -z-10"
        style={reduceMotion ? undefined : { opacity: gridOpacity }}
      />
      <motion.div className="absolute top-20 left-10" style={reduceMotion ? undefined : { y: nearOrbY }}>
        <div className="w-64 h-64 bg-violet-500/20 rounded-full blur-3xl floating"></div>
      </motion.div>
      <motion.div className="absolute bottom-20 right-10" style={reduceMotion ? undefined : { y: farOrbY }}>
        <div className="w-96 h-96 bg-blue-400/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
      </motion.div>

      <motion.div
        className="container mx-auto px-4"
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <MaskedText delay={80}>Hello,</MaskedText>{" "}
            <MaskedText delay={150}>I'm</MaskedText>{" "}
            <MaskedText delay={240}>
              <span className="text-gradient">Alvin Javelosa</span>
            </MaskedText>
          </h1>
          <div className="hero-rise" style={delayStyle(460)}>
            <h2 className="mb-8 text-xl md:text-2xl lg:text-3xl font-mono text-gradient-orange">
              Senior Frontend &amp; Full-Stack Developer
            </h2>
          </div>
          <p className="hero-rise text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" style={delayStyle(560)}>
            13+ years building web and mobile products across enterprise consulting, travel, civic tech, and agency work, most recently at Accenture and Atos. I work directly with clients and deliver from UI to backend integration.
          </p>
          <div className="hero-rise flex flex-col sm:flex-row items-center justify-center gap-4" style={delayStyle(660)}>
            <Button
              asChild
              size="lg"
              className="px-8 glow-orange-strong hover:glow-orange bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700"
            >
              <a href={SHOW_PROJECTS ? "#projects" : "#experience"}>
                {SHOW_PROJECTS ? "View My Work" : "View My Experience"}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 border-glow hover:bg-violet-500/10 border-violet-400 text-violet-400"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;


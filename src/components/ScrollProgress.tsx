import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

const ScrollProgress = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary to-accent"
      style={{ scaleX: reduceMotion ? scrollYProgress : smoothProgress }}
    />
  );
};

export default ScrollProgress;

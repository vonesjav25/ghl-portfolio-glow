import { Code, Database, Globe, Layers, Monitor, Smartphone, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type FloatingIcon = {
  Icon: LucideIcon;
  side: "left" | "right";
  offset: string;
  top: string;
  size: number;
  delay: string;
};

type Depth = {
  travel: number;
  icons: FloatingIcon[];
};

// Icons stay in the page margins, and nearer layers travel further for a sense of depth.
const depths: Depth[] = [
  {
    travel: 240,
    icons: [
      { Icon: Globe, side: "left", offset: "4%", top: "16%", size: 22, delay: "0s" },
      { Icon: Database, side: "right", offset: "5%", top: "62%", size: 20, delay: "3s" },
    ],
  },
  {
    travel: 520,
    icons: [
      { Icon: Layers, side: "right", offset: "3%", top: "24%", size: 28, delay: "1.5s" },
      { Icon: Smartphone, side: "left", offset: "2.5%", top: "68%", size: 26, delay: "4.5s" },
    ],
  },
  {
    travel: 900,
    icons: [
      { Icon: Code, side: "left", offset: "6%", top: "40%", size: 36, delay: "2s" },
      { Icon: Monitor, side: "right", offset: "6.5%", top: "84%", size: 34, delay: "5s" },
    ],
  },
];

const DepthLayer = ({ travel, icons }: Depth) => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -travel]);
  const height = `calc(100vh + ${travel}px)`;

  return (
    <motion.div className="absolute inset-x-0 top-0" style={reduceMotion ? { height } : { height, y }}>
      {icons.map(({ Icon, side, offset, top, size, delay }) => (
        <div
          key={Icon.displayName ?? top}
          className="animate-float-slow absolute text-primary/20"
          style={{ [side]: offset, top, animationDelay: delay }}
        >
          <Icon size={size} strokeWidth={1.25} />
        </div>
      ))}
    </motion.div>
  );
};

const FloatingElements = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden lg:block">
    {depths.map((depth) => (
      <DepthLayer key={depth.travel} {...depth} />
    ))}
  </div>
);

export default FloatingElements;

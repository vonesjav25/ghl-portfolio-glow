import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

/** Inertial wheel scrolling and animated in-page anchors. Touch and keyboard stay native. */
export const useSmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      allowNestedScroll: true,
      anchors: { offset: -32, duration: 1.4, easing: easeOutQuart },
    });

    return () => lenis.destroy();
  }, []);
};

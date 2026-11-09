import { useEffect } from "react";

const STAGGER_MS = 70;
const MAX_STAGGERED_ITEMS = 6;

/**
 * Plays the CSS entrance for every [data-reveal] element once, as it enters the viewport.
 * Elements arriving together are staggered top-to-bottom, then left-to-right.
 * Anything already above the viewport is revealed too, so scrolling back never finds blanks.
 */
export const useReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top ||
              a.boundingClientRect.left - b.boundingClientRect.left
          )
          .forEach((entry, index) => {
            const element = entry.target as HTMLElement;
            element.style.animationDelay = `${Math.min(index, MAX_STAGGERED_ITEMS) * STAGGER_MS}ms`;
            element.classList.add("is-revealed");
            observer.unobserve(element);
          });
      },
      { rootMargin: "100000px 0px -10% 0px" }
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};

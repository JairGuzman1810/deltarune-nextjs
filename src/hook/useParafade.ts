import { useEffect, useRef, useState } from "react";

// useParafade - Custom hook to fade in an element as it scrolls into view, with optional persistent visibility
export const useParafade = (
  options = {
    duration: 1000, // Duration of the opacity transition (ms)
    ease: "ease-in-out", // CSS easing for the transition
    keepVisible: false, // Whether to keep the element visible after fade-in
  }
) => {
  const ref = useRef<HTMLElement | null>(null); // Target element ref
  const [opacity, setOpacity] = useState(0); // Current opacity value (0–1)
  const [hasBeenVisible, setHasBeenVisible] = useState(false); // Track if element has ever been fully visible
  const lastScrollY = useRef(0); // Last recorded scrollY value to determine direction

  useEffect(() => {
    if (!ref.current) return;

    // calculateOpacity - Updates opacity based on element's position in viewport
    const calculateOpacity = () => {
      if (!ref.current) return;

      // Element’s bounding rectangle and window height
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Determine scroll direction
      const scrollDirection =
        window.scrollY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = window.scrollY;

      // If visibility is locked and user is scrolling down, keep fully visible
      if (options.keepVisible && hasBeenVisible && scrollDirection === "down") {
        setOpacity(1);
        return;
      }

      // Element's top relative to different parts of viewport
      const elementTopPassingViewportBottom = rect.top - windowHeight;
      const elementTopPassingViewportMiddle = rect.top - windowHeight / 2;

      // Fade in when element enters between bottom and middle of viewport
      if (
        elementTopPassingViewportBottom <= 0 &&
        elementTopPassingViewportMiddle >= 0
      ) {
        const totalDistance = windowHeight / 2; // Range for opacity to transition
        const currentPosition = -elementTopPassingViewportBottom;

        const progress = Math.min(
          1,
          Math.max(0, currentPosition / totalDistance)
        );

        setOpacity(progress);

        // Mark as visible once past 80% fade
        if (progress > 0.8) {
          setHasBeenVisible(true);
        }
      }

      // Fully visible if already in the middle or beyond
      else if (elementTopPassingViewportMiddle < 0) {
        if (scrollDirection === "down") {
          setOpacity(1);
          setHasBeenVisible(true);
        } else if (
          !options.keepVisible ||
          (options.keepVisible && !hasBeenVisible)
        ) {
          setOpacity(1);
        }
      }

      // Fade out if element is still below viewport and scrolling up
      else if (elementTopPassingViewportBottom > 0) {
        if (scrollDirection === "up") {
          setOpacity(0);
          if (!options.keepVisible) {
            setHasBeenVisible(false);
          }
        }
      }
    };

    calculateOpacity(); // Run initially on mount

    // Add scroll and resize listeners
    window.addEventListener("scroll", calculateOpacity, { passive: true });
    window.addEventListener("resize", calculateOpacity, { passive: true });

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("scroll", calculateOpacity);
      window.removeEventListener("resize", calculateOpacity);
    };
  }, [options.keepVisible, hasBeenVisible]);

  const style = {
    opacity, // Computed opacity value
    transition: `opacity ${options.duration}ms ${options.ease}`, // CSS transition string
  };

  return { ref, style }; // Return ref and inline style object
};

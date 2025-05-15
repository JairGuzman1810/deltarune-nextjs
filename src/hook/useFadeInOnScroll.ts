import { useEffect, useRef, useState } from "react";

// useFadeInOnScroll - Gradually fades in an element as it becomes visible on scroll
export const useFadeInOnScroll = () => {
  const ref = useRef<HTMLElement | null>(null); // Ref to attach to the target section
  const [opacity, setOpacity] = useState(0); // State for dynamic opacity value

  useEffect(() => {
    const el = ref.current; // Get the current DOM element from ref
    if (!el) return; // Exit if ref is not attached

    // Create an IntersectionObserver to track visibility ratio
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio; // How much of the element is visible (0 to 1)

        // If element is below the viewport, do nothing
        if (entry.boundingClientRect.top > window.innerHeight) {
          return;
        }

        // If less than 50% visible, scale opacity from 0 to 1
        if (ratio < 0.5) {
          setOpacity(ratio * 2); // Map 0–0.5 ratio to 0–1 opacity
        } else {
          setOpacity(1); // Lock opacity at 1 once 50% or more is visible
        }
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i / 20), // Create 21 steps from 0.00 to 1.00
      }
    );

    observer.observe(el); // Start observing the element
    return () => observer.disconnect(); // Clean up observer on unmount
  }, []);

  return {
    ref, // Ref to be attached to the target section
    style: {
      opacity, // Dynamic opacity based on intersection ratio
      transition: "opacity 0.2s ease-out", // Smooth opacity transition effect
    },
  };
};

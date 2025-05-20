import { useEffect, useRef, useState } from "react";

// useScrollFadeIn - Custom hook to animate fade-in based on scroll position and intersection
export const useScrollFadeIn = (threshold = 0.1) => {
  const ref = useRef<HTMLElement | null>(null); // Target element ref for observation

  const [isFullyVisible, setIsFullyVisible] = useState(false); // Track if element should lock into fully visible state
  const [opacity, setOpacity] = useState(0); // Track current opacity level (0 = transparent, 1 = fully visible)

  const lastScrollY = useRef(0); // Stores last scroll Y position to determine scroll direction
  const maxObservedRatio = useRef(0); // Stores the highest intersection ratio seen (useful for small viewports)

  useEffect(() => {
    // Create IntersectionObserver to monitor visibility of target element
    const observer = new IntersectionObserver(
      (entries) => {
        // Calculate scroll direction
        const scrollDirection =
          window.scrollY > lastScrollY.current ? "down" : "up";
        lastScrollY.current = window.scrollY;

        // Iterate through all observed entries
        entries.forEach((entry) => {
          if (entry.target === ref.current) {
            // Update max observed intersection ratio
            if (entry.intersectionRatio > maxObservedRatio.current) {
              maxObservedRatio.current = entry.intersectionRatio;
            }

            // Handle element when it is intersecting
            if (entry.isIntersecting) {
              // Determine a scale factor based on maxObservedRatio for smaller screens
              const scaleFactor =
                maxObservedRatio.current >= threshold
                  ? threshold
                  : maxObservedRatio.current;

              // Compute new opacity relative to current intersection ratio
              const newOpacity = Math.min(
                1,
                entry.intersectionRatio / scaleFactor
              );
              setOpacity(newOpacity);

              // Lock element as fully visible once threshold is exceeded on scroll down
              if (
                scrollDirection === "down" &&
                (newOpacity >= 0.9 ||
                  entry.intersectionRatio >= maxObservedRatio.current * 0.9)
              ) {
                setIsFullyVisible(true);
              }
            } else {
              // Element is not visible
              if (scrollDirection === "down") {
                // Keep it fully visible if it was already shown while scrolling down
                setIsFullyVisible(true);
              } else {
                // Fade out on upward scroll
                setOpacity(0);
                setIsFullyVisible(false);
              }
            }
          }
        });
      },
      {
        // Use multiple thresholds for smoother transitions during partial visibility
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "0px", // No offset from viewport
      }
    );

    // Begin observing element when ref is available
    if (ref.current) observer.observe(ref.current);

    // Cleanup on unmount
    return () => observer.disconnect();
  }, [threshold]);

  // If element is fully visible, override opacity to 1
  const finalOpacity = isFullyVisible ? 1 : opacity;

  return {
    ref, // Ref to attach to target element
    style: { opacity: finalOpacity }, // Computed inline style for fading
    className: `transition-opacity duration-1000 ease-in-out`, // Fade-in transition class
  };
};

import { useEffect, useRef, useState } from "react";

export const useScrollFadeIn = (threshold = 0.2) => {
  const ref = useRef<HTMLElement | null>(null); // Target element ref
  const [visible, setVisible] = useState(false); // Whether the element is currently visible
  const lastScrollY = useRef(0); // Stores last scroll position to determine scroll direction

  useEffect(() => {
    // Create IntersectionObserver to detect visibility of target element
    const observer = new IntersectionObserver(
      (entries) => {
        // Determine scroll direction by comparing current and previous scrollY
        const scrollDirection =
          window.scrollY > lastScrollY.current ? "down" : "up";
        lastScrollY.current = window.scrollY;

        // Check each observed entry
        entries.forEach((entry) => {
          if (entry.target === ref.current) {
            // Show if intersecting or scrolling down
            if (entry.isIntersecting || scrollDirection === "down") {
              setVisible(true);
            } else {
              setVisible(false);
            }
          }
        });
      },
      { threshold: threshold } // Trigger when 20% of the element is visible
    );

    // Start observing the target element
    if (ref.current) observer.observe(ref.current);

    // Clean up observer on unmount
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: `transition-opacity duration-1000 ease-in-out ${
      visible ? "opacity-100" : "opacity-0"
    }`, // Return ref and dynamic class based on visibility
  };
};

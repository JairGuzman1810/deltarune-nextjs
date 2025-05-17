import { starSizes, StarType } from "@/lib/type";
import Image from "next/image";
import { useEffect, useState } from "react";

// StarProps - Props expected by the Star component
export interface StarProps {
  src: string; // Path to star image
  marginLeft: string; // Horizontal position
  marginTop: string; // Vertical position
  delay: string; // Animation delay value
  distance: number; // Used for parallax effect strength
}

// Star - Renders a single animated star with parallax behavior
export const Star = ({
  src,
  marginLeft,
  marginTop,
  delay,
  distance,
}: StarProps) => {
  const [translateY, setTranslateY] = useState<number>(0); // State for vertical translation

  useEffect(() => {
    // calculateParallax - Applies a parallax offset based on scroll and distance
    const calculateParallax = (): void => {
      const scrollY = window.scrollY;
      setTranslateY(-((distance * scrollY) / 300)); // Applies a parallax offset based on scroll and distance
    };

    calculateParallax(); // Run on mount

    window.addEventListener("scroll", calculateParallax); // Listen to scroll for dynamic parallax

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", calculateParallax);
  }, [distance]); // Re-run effect if distance changes

  const starType = src.split("/").pop()?.split(".")[0] as StarType; // Extract star type from filename
  const { width, height } = starSizes[starType] || { width: 20, height: 20 }; // Get dimensions or fallback

  return (
    <Image
      className="absolute opacity-70 animate-pulse motion-safe:translate-y-0" // Styling and animation classes
      data-distance={distance} // Custom attribute for tracking parallax distance
      src={src} // Star image source
      width={width} // Image width
      height={height} // Image height
      style={
        {
          marginLeft, // CSS left offset
          marginTop, // CSS top offset
          animationDelay: delay, // Dynamic animation delay
          "--tw-translate-y": `${translateY}px`, // Custom transform value
        } as React.CSSProperties
      }
      aria-hidden="true" // Hide from assistive tech for decorative use
      alt="" // No alt text for decorative image
    />
  );
};

export default Star;

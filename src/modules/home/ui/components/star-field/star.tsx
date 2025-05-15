import Image from "next/image";
import { useEffect, useState } from "react";

// StarType - Allowed image types for star visuals
export type StarType =
  | "star1"
  | "star2"
  | "star3"
  | "star4"
  | "star5"
  | "star6";

// StarSize - Dimensions for each star type
export interface StarSize {
  width: number; // Width of the star image
  height: number; // Height of the star image
}

// starSizes - Maps star types to image dimensions
export const starSizes: Record<StarType, StarSize> = {
  star1: { width: 21, height: 21 }, // Default size for star1
  star2: { width: 21, height: 21 }, // Default size for star2
  star3: { width: 21, height: 20 }, // Slightly shorter height for star3
  star4: { width: 15, height: 15 }, // Smaller size for star4
  star5: { width: 3, height: 3 }, // Tiny star5
  star6: { width: 39, height: 66 }, // Special large star
};

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
    // calculateParallax - Simplified placeholder for vertical parallax shift
    const calculateParallax = (): void => {
      setTranslateY(-(distance * 2.5)); // Fixed offset per star's distance
    };

    calculateParallax(); // Run on mount

    window.addEventListener("scroll", calculateParallax); // Listen to scroll for dynamic parallax

    return () => window.removeEventListener("scroll", calculateParallax); // Cleanup listener on unmount
  }, [distance]);

  const starType = src.split("/").pop()?.split(".")[0] as StarType; // Extract star type from filename
  const { width, height } = starSizes[starType] || { width: 20, height: 20 }; // Get dimensions or fallback

  return (
    <Image
      className="absolute opacity-70 animate-pulse motion-safe:translate-y-0 parallax" // Styling and animation classes
      data-distance={distance} // Custom attribute for tracking parallax distance
      data-scroll-target="parallax" // For scroll-based animation targeting
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

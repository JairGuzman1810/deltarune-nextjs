import { particleSizes } from "@/lib/type";
import Image from "next/image";
import { useEffect, useState } from "react";

// ParticleProps - Props expected by the Particle component
export interface ParticleProps {
  type: "image" | "pixel"; // Whether this is an image or colored span
  src?: string; // Image source path (for type="image")
  marginLeft: string; // Horizontal position
  marginTop: string; // Vertical position
  delay: string; // Animation delay value
  distance: number; // Used for parallax effect strength
  maxWidth?: number; // Max width fallback for images
  size?: number; // Size for pixels (type="pixel")
  color?: string; // Background color for pixels (type="pixel")
}

// Particle - Renders a single animated particle with parallax behavior
export const Particle = ({
  type,
  src,
  size,
  color,
  marginLeft,
  marginTop,
  delay,
  distance,
  maxWidth = 12,
}: ParticleProps) => {
  const [translateY, setTranslateY] = useState<number>(0); // State for vertical translation

  useEffect(() => {
    // calculateParallax - Applies a parallax offset based on scroll and distance
    const calculateParallax = (): void => {
      const scrollY = window.scrollY || window.pageYOffset;
      setTranslateY(-((distance * scrollY) / 300));
    };

    calculateParallax(); // Run on mount

    window.addEventListener("scroll", calculateParallax); // Listen to scroll for dynamic parallax

    return () => window.removeEventListener("scroll", calculateParallax); // Cleanup on unmount
  }, [distance]);

  if (type === "image") {
    const particleType = src
      ?.split("/")
      .pop()
      ?.split(".")[0] as keyof typeof particleSizes; // Extract type from filename
    const { width, height } = particleSizes[particleType] ?? {
      width: maxWidth,
      height: maxWidth,
    }; // Use preset or fallback size

    return (
      <Image
        className="absolute opacity-70 animate-pulse motion-safe:translate-y-0" // Styling and animation
        src={src ?? ""} // Image source
        width={width} // Computed width
        height={height} // Computed height
        style={
          {
            marginLeft, // Horizontal offset
            marginTop, // Vertical offset
            animationDelay: delay, // Animation delay
            "--tw-translate-y": `${translateY}px`, // Parallax transform
          } as React.CSSProperties
        }
        aria-hidden="true" // Decorative image
        alt="" // No alt text
      />
    );
  }

  return (
    <span
      className="absolute animate-pulse motion-safe:translate-y-0 border-0" // Styling and animation
      style={
        {
          marginLeft, // Horizontal offset
          marginTop, // Vertical offset
          width: `${size}px`, // Pixel width
          height: `${size}px`, // Pixel height
          backgroundColor: color, // Pixel color
          animationDelay: delay, // Animation delay
          "--tw-translate-y": `${translateY}px`, // Parallax transform
        } as React.CSSProperties
      }
      aria-hidden="true" // Decorative element
    />
  );
};

export default Particle;

"use client"; // Enables client-side rendering

import { ParticleData } from "@/lib/type";
import { useEffect, useState } from "react";
import { Particle } from "./particle";

// createParticle - Creates an image particle with random position, delay, and distance
const createParticle = (
  x: number,
  y: number,
  isMobile = false,
  maxWidth = 12
): ParticleData => {
  let imageNum = Math.floor(Math.random() * 3) + 1; // Randomly choose image index 1–3
  if (x > 0) imageNum += 3; // Offset index to 4–6 if on the right side of screen

  const delay = Math.floor(Math.random() * 6) + 1; // Random delay between 1–6s
  const distance = Math.floor(Math.random() * 80) + 50; // Random distance for animation
  y += distance * 2; // Offset y-position to avoid overlapping

  return {
    type: "image", // Particle type is image
    src: `/assets/images/particle-${imageNum}.png`, // Image path based on index
    marginLeft: `${x}px`, // Horizontal offset
    marginTop: `${y}px`, // Vertical offset
    delay: `-${delay}s`, // Negative delay for staggered animation
    distance, // Movement distance
    maxWidth, // Max width of image
    isMobile, // Indicates mobile particle
  };
};

// createPixel - Creates a pixel particle (colored dot) with random attributes
const createPixel = (
  x: number,
  y: number,
  isMobile = false,
  maxSize = 4
): ParticleData => {
  const size = Math.floor(Math.random() * maxSize) + 2; // Random size between 2–maxSize+2
  const delay = Math.floor(Math.random() * 6) + 1; // Random delay between 1–6s
  const distance = Math.floor(Math.random() * 100) + 50; // Random distance for animation
  const colorValue = Math.floor(Math.random() * 200); // Base RGB color intensity
  y += distance * 2; // Offset y-position to prevent overlapping

  return {
    type: "pixel", // Particle type is pixel
    size, // Size of the dot
    marginLeft: `${x}px`, // Horizontal offset
    marginTop: `${y}px`, // Vertical offset
    delay: `-${delay}s`, // Negative delay for staggered animation
    distance, // Movement distance
    color: `rgb(${colorValue}, ${colorValue}, 255)`, // Blue-tinted RGB color
    isMobile, // Indicates mobile particle
  };
};

// generateParticlePositions - Generates a randomized list of particles for both views
const generateParticlePositions = (): ParticleData[] => {
  const particles: ParticleData[] = []; // Initialize particle list

  const standardCount = Math.floor(Math.random() * 4) + 6; // Number of image particles for desktop
  for (let i = 0; i < standardCount; i++) {
    let x = Math.floor(Math.random() * 600) + 600 + i * 10; // Random x with spacing
    const y = Math.floor(Math.random() * 450) + 200 + i * 10; // Random y with spacing
    if (i % 2 === 0) x = -x - 20; // Alternate direction left/right
    particles.push(createParticle(x, y, false)); // Add standard image particle
  }

  const pixelCount = Math.floor(Math.random() * 4) + 8; // Number of pixel particles for desktop
  for (let i = 0; i < pixelCount; i++) {
    let x = Math.floor(Math.random() * 600) + 800 + i * 10; // Random x with spacing
    const y = Math.floor(Math.random() * 450) + 200 + i * 10; // Random y with spacing
    if (i % 2 === 0) x = -x - 20; // Alternate direction left/right
    particles.push(createPixel(x, y, false)); // Add standard pixel particle
  }

  const mobileCount = Math.floor(Math.random() * 2) + 4; // Number of image particles for mobile
  for (let i = 0; i < mobileCount; i++) {
    let x = Math.floor(Math.random() * 100) + 220 + i * 10; // Random x with spacing
    const y = Math.floor(Math.random() * 300) + 100 + i * 10; // Random y with spacing
    if (i % 2 === 0) x = -x - 20; // Alternate direction left/right
    particles.push(createParticle(x, y, true, 3)); // Add mobile image particle
  }

  const mobilePixels = Math.floor(Math.random() * 3) + 6; // Number of pixel particles for mobile
  for (let i = 0; i < mobilePixels; i++) {
    let x = Math.floor(Math.random() * 100) + 220 + i * 10; // Random x with spacing
    const y = Math.floor(Math.random() * 300) + 100 + i * 10; // Random y with spacing
    if (i % 2 === 0) x = -x - 20; // Alternate direction left/right
    particles.push(createPixel(x, y, true, 2)); // Add mobile pixel particle
  }

  return particles; // Return generated particles
};

// ParticlesField - Renders animated particles conditionally based on screen size
export const ParticlesField = () => {
  const [particles, setParticles] = useState<ParticleData[]>([]); // State to store particles

  useEffect(() => {
    setParticles(generateParticlePositions()); // Generate particles on mount
  }, []);

  const standardParticles = particles.filter((p) => !p.isMobile); // Filter desktop particles
  const mobileParticles = particles.filter((p) => p.isMobile); // Filter mobile particles

  return (
    <>
      {/* Desktop view particle layer (hidden on mobile) */}
      <div className="absolute justify-center text-center w-full h-full overflow-hidden pointer-events-none z-10 hidden sm:flex motion-reduce:hidden">
        {standardParticles.map((particle, i) => (
          <Particle key={`standard-${i}`} {...particle} /> // Render each desktop particle
        ))}
      </div>

      {/* Mobile view particle layer (hidden on desktop) */}
      <div className="absolute justify-center text-center w-full h-full overflow-hidden pointer-events-none z-10 flex sm:hidden motion-reduce:hidden">
        {mobileParticles.map((particle, i) => (
          <Particle key={`mobile-${i}`} {...particle} /> // Render each mobile particle
        ))}
      </div>
    </>
  );
};

export default ParticlesField;

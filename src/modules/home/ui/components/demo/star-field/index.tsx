import { useEffect, useState } from "react";
import { Star } from "./star";

// generateStarPositions - Generates an array of star objects with randomized positions and animation parameters
const generateStarPositions = () => {
  const stars = []; // Initialize star array

  // Right side fixed stars with slight randomness
  stars.push(
    createStar(
      Math.floor(Math.random() * 10) + 450,
      Math.floor(Math.random() * 10) + 100
    ) // Star near (450, 100) with jitter
  );

  stars.push(
    createStar(
      Math.floor(Math.random() * 10) + 320,
      Math.floor(Math.random() * 5) + 105
    ) // Star near (320, 105) with jitter
  );

  stars.push(
    createStar(
      Math.floor(Math.random() * 10) + 480,
      Math.floor(Math.random() * 10) + 150
    ) // Star near (480, 150) with jitter
  );

  stars.push(
    createStar(
      Math.floor(Math.random() * 10) + 500,
      Math.floor(Math.random() * 10) + 350
    ) // Star near (500, 350) with jitter
  );

  // Left side fixed stars with slight randomness
  stars.push(
    createStar(
      0 - (Math.floor(Math.random() * 10) + 450),
      Math.floor(Math.random() * 10) + 100
    ) // Star near (-450, 100)
  );

  stars.push(
    createStar(
      0 - (Math.floor(Math.random() * 10) + 320),
      Math.floor(Math.random() * 5) + 105
    ) // Star near (-320, 105)
  );

  stars.push(
    createStar(
      0 - (Math.floor(Math.random() * 10) + 480),
      Math.floor(Math.random() * 10) + 150
    ) // Star near (-480, 150)
  );

  stars.push(
    createStar(
      0 - (Math.floor(Math.random() * 10) + 500),
      Math.floor(Math.random() * 10) + 325
    ) // Star near (-500, 325)
  );

  // Add additional stars with randomized positions and alternating sides
  const additionalStarsCount = Math.floor(Math.random() * 6) + 4; // Between 4 to 9 extra stars

  for (let i = 0; i < additionalStarsCount; i++) {
    let x = Math.floor(Math.random() * 300) + 600 + i * 10; // X position incremented by index
    const y = Math.floor(Math.random() * 200) + 200 + i * 10; // Y position with stagger

    if (i % 2 === 0) {
      x = 0 - x - 20; // Alternate left side for even indices
    }

    const useSpecialStar = i < 2; // First two stars are marked as special
    stars.push(createStar(x, y, useSpecialStar)); // Add new star to the array
  }

  return stars; // Return complete star array
};

// createStar - Creates a star object with position, animation, and appearance data
const createStar = (x: number, y: number, useSpecialStar: boolean = false) => {
  let starType = 6; // Use star6 for special stars by default

  if (!useSpecialStar) {
    starType = Math.floor(Math.random() * 5) + 1; // Otherwise pick random star1 to star5
  }

  const delay = Math.floor(Math.random() * 6) + 1; // Random delay from 1s to 6s
  const distance = Math.floor(Math.random() * 20) + 10; // Random parallax distance from 10 to 29

  y += distance * 2; // Offset Y to simulate depth effect

  return {
    src: `/assets/images/star${starType}.png`, // Image source path
    marginLeft: `${x}px`, // Horizontal position in px
    marginTop: `${y}px`, // Vertical position in px
    delay: `-${delay}s`, // Animation delay
    distance: distance, // Parallax intensity
  };
};

// Starfield - Renders a field of parallax stars
export const Starfield = () => {
  const [stars, setStars] = useState<
    // State to hold generated stars
    Array<{
      src: string; // Star image path
      marginLeft: string; // Left margin CSS
      marginTop: string; // Top margin CSS
      delay: string; // Animation delay string
      distance: number; // Distance for parallax effect
    }>
  >([]);

  useEffect(() => {
    setStars(generateStarPositions()); // Generate stars once on initial mount
  }, []);

  return (
    <div className="absolute flex -top-8 justify-center text-center w-full h-full overflow-hidden pointer-events-none z-10 motion-reduce:hidden">
      {stars.map((star, index) => (
        <Star
          key={index} // Unique key for React list
          src={star.src} // Image source path
          marginLeft={star.marginLeft} // CSS left offset
          marginTop={star.marginTop} // CSS top offset
          delay={star.delay} // Animation delay
          distance={star.distance} // Parallax distance
        />
      ))}
    </div>
  );
};

export default Starfield;

import Fancybox from "@/components/fancybox"; // Import the Fancybox wrapper component
import { GameScreenshotsItem } from "./game-screenshots-item"; // Import the individual screenshot item component

// Static list of screenshots used in the grid
const screenshots = [
  { src: "/assets/images/ss-1-en.png", alt: "Screenshot of DELTARUNE" },
  { src: "/assets/images/ss-2-en.png", alt: "Screenshot of DELTARUNE" },
  { src: "/assets/images/ss-3-en.png", alt: "Screenshot of DELTARUNE" },
  { src: "/assets/images/ss-4-en.png", alt: "Screenshot of DELTARUNE" },
  { src: "/assets/images/ss-5-en.png", alt: "Screenshot of DELTARUNE" },
  { src: "/assets/images/ss-6-en.png", alt: "Screenshot of DELTARUNE" },
] as const; // Define as a readonly tuple array

// GameScreenshots - Renders a grid of screenshots using Fancybox for zoom preview
export const GameScreenshots = () => {
  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: true, // Enable infinite looping in carousel
        },
        Thumbs: {
          type: "classic", // Use classic-style thumbnails
        },
        Toolbar: {
          display: {
            left: [], // No buttons on the left
            middle: [], // No buttons in the middle
            right: ["close"], // Only show 'close' button on the right
          },
        },
      }}
    >
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
        {/* Render each screenshot in a grid item */}
        {screenshots.map((screenshot, i) => (
          <li key={i}>
            {/* Display individual screenshot */}
            <GameScreenshotsItem screenshot={screenshot} />
          </li>
        ))}
      </ul>
    </Fancybox>
  );
};

import { GameScreenshotsItem } from "./game-screenshots-item";

// Static array of screenshot data objects
const screenshots = [
  { src: "/assets/images/ss-1-en.png", alt: "Screenshot of DELTARUNE" }, // Screenshot 1
  { src: "/assets/images/ss-2-en.png", alt: "Screenshot of DELTARUNE" }, // Screenshot 2
  { src: "/assets/images/ss-3-en.png", alt: "Screenshot of DELTARUNE" }, // Screenshot 3
  { src: "/assets/images/ss-4-en.png", alt: "Screenshot of DELTARUNE" }, // Screenshot 4
  { src: "/assets/images/ss-5-en.png", alt: "Screenshot of DELTARUNE" }, // Screenshot 5
  { src: "/assets/images/ss-6-en.png", alt: "Screenshot of DELTARUNE" }, // Screenshot 6
];

// GameScreenshotsGrid - Component rendering a grid of screenshot items
export const GameScreenshotsGrid = () => {
  return (
    // Unordered list styled as a responsive grid with 2 columns on small screens, 3 on medium+
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
      {/* Map over screenshots array to render each screenshot item */}
      {screenshots.map((screenshot) => (
        // Render GameScreenshotsItem, passing src and alt, using src as unique key
        <GameScreenshotsItem key={screenshot.src} {...screenshot} />
      ))}
    </ul>
  );
};

import { useState } from "react";
import { GameScreenshotsItem } from "./game-screenshots-item";
import { ScreenshotModal } from "./screenshot-modal";

// Static array of screenshot data with source and alt text
const screenshots = [
  { src: "/assets/images/ss-1-en.png", alt: "Screenshot of DELTARUNE" },
  { src: "/assets/images/ss-2-en.png", alt: "Screenshot of DELTARUNE" },
  { src: "/assets/images/ss-3-en.png", alt: "Screenshot of DELTARUNE" },
  { src: "/assets/images/ss-4-en.png", alt: "Screenshot of DELTARUNE" },
  { src: "/assets/images/ss-5-en.png", alt: "Screenshot of DELTARUNE" },
  { src: "/assets/images/ss-6-en.png", alt: "Screenshot of DELTARUNE" },
];

// GameScreenshotsGrid - Displays screenshot thumbnails and handles modal open/close
export const GameScreenshotsGrid = () => {
  // State for currently selected screenshot and its bounding rect for animation
  const [selected, setSelected] = useState<{
    originRect: DOMRect; // Bounding rectangle of clicked image element
    index: number; // Index of selected screenshot
  } | null>(null);

  // Handles clicking a screenshot item to open modal
  const handleItemClick = (
    index: number, // Index of clicked screenshot
    event: React.MouseEvent<HTMLDivElement> // Click event object
  ) => {
    // Find the <img> element inside the clicked div
    const imgEl = event.currentTarget.querySelector("img");
    if (!imgEl) return; // Safety check if image element not found

    // Get bounding client rect of image for animation origin
    const rect = imgEl.getBoundingClientRect();

    // Set selected state with image rect and index to open modal
    setSelected({ originRect: rect, index });
  };

  // Close modal by clearing selected state
  const handleClose = () => setSelected(null);

  return (
    <>
      {/* Grid container for screenshot thumbnails */}
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
        {/* Map over screenshots to render each GameScreenshotsItem */}
        {screenshots.map((screenshot, i) => (
          <GameScreenshotsItem
            key={i} // Unique key per item by index
            screenshot={screenshot} // Pass screenshot object
            onClick={(e) => handleItemClick(i, e)} // Pass click handler with index
          />
        ))}
      </ul>

      {/* Conditionally render ScreenshotModal if a screenshot is selected */}
      {selected && (
        <ScreenshotModal
          images={screenshots.map((s) => ({
            ...s,
            originRect: selected.originRect, // Pass origin rect for animation to each image
          }))}
          initialIndex={selected.index} // Set initial image index in modal
          onClose={handleClose} // Close modal handler callback
        />
      )}
    </>
  );
};

import { useRef, useState } from "react";
import { GameScreenshotsItem } from "./game-screenshots-item";
import { ScreenshotModal } from "./screenshot-modal";

// Static list of screenshots used in the grid and modal preview
const screenshots = [
  { src: "/assets/images/ss-1-en.png", alt: "Screenshot of DELTARUNE" },
  { src: "/assets/images/ss-2-en.png", alt: "Screenshot of DELTARUNE" },
  { src: "/assets/images/ss-3-en.png", alt: "Screenshot of DELTARUNE" },
  { src: "/assets/images/ss-4-en.png", alt: "Screenshot of DELTARUNE" },
  { src: "/assets/images/ss-5-en.png", alt: "Screenshot of DELTARUNE" },
  { src: "/assets/images/ss-6-en.png", alt: "Screenshot of DELTARUNE" },
];

// GameScreenshotsGrid - Renders a responsive grid of screenshots with modal zoom preview
export const GameScreenshotsGrid = () => {
  // selected - Tracks which screenshot is active in the modal
  const [selected, setSelected] = useState<{
    originRect: DOMRect;
    index: number;
  } | null>(null);

  // itemRefs - Holds references to each screenshot item DOM node
  const itemRefs = useRef<(HTMLDivElement | null)[]>(
    Array(screenshots.length).fill(null)
  );

  // handleItemClick - Handles click on a screenshot item and opens modal
  const handleItemClick = (
    index: number,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    // Get the image element from the clicked item
    const imgEl = event.currentTarget.querySelector("img");
    if (!imgEl) return; // If no image element, return

    // Get the bounding client rect of the image
    const rect = imgEl.getBoundingClientRect();
    setSelected({ originRect: rect, index }); // Set the selected state with the origin rect and index
  };

  // handleClose - Resets the selected state to close the modal
  const handleClose = () => setSelected(null);

  // getOriginRect - Retrieves the DOMRect of the image at the given index
  const getOriginRect = (index: number) => {
    const el = itemRefs.current[index]; // Get the image element from the clicked item
    if (!el) return null; // If no image element, return null

    // Get the image element from the clicked item
    const imgEl = el.querySelector("img");
    if (!imgEl) return null; // If no image element, return null

    return imgEl.getBoundingClientRect(); // Return the bounding client rect of the image
  };

  return (
    <>
      {/* Screenshot grid layout */}
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
        {screenshots.map((screenshot, i) => (
          <GameScreenshotsItem
            key={i}
            screenshot={screenshot}
            onClick={(e) => handleItemClick(i, e)}
            ref={(el: HTMLDivElement | null) => {
              itemRefs.current[i] = el; // Store reference for later bounding box access
            }}
          />
        ))}
      </ul>

      {/* Screenshot modal with animated zoom effect and index-based navigation */}
      {selected && (
        <ScreenshotModal
          images={screenshots.map((s) => ({
            ...s,
            originRect: selected.originRect, // Attach current originRect to each image object
          }))}
          initialIndex={selected.index}
          onClose={handleClose}
          getOriginRect={getOriginRect}
        />
      )}
    </>
  );
};

import Image from "next/image";
import { forwardRef } from "react";

// Screenshot - Represents a screenshot's image source and alt text
interface Screenshot {
  src: string; // Path to the screenshot image
  alt: string; // Descriptive alt text for accessibility
}

// GameScreenshotsItemProps - Props for the GameScreenshotsItem component
interface GameScreenshotsItemProps {
  screenshot: Screenshot; // Screenshot data (src and alt)
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void; // Handler for click events
  ref: React.RefObject<HTMLDivElement>; // Ref for the container element
}

// GameScreenshotsItem - Renders a single screenshot thumbnail with hover effect
export const GameScreenshotsItem = forwardRef<
  HTMLDivElement,
  GameScreenshotsItemProps
>(({ screenshot, onClick }, ref) => (
  <li>
    {/* Container div with white border that turns yellow on hover */}
    <div
      ref={ref}
      onClick={onClick}
      className="group relative flex border-2 border-white transition-colors duration-150 hover:duration-0 hover:border-deltarune-yellow cursor-pointer"
    >
      <Image
        src={screenshot.src} // Source of the image from props
        alt={screenshot.alt} // Alt text for screen readers
        width={640} // Image width in pixels
        height={480} // Image height in pixels
        className="aspect-4/3 object-cover" // Maintain 4:3 aspect ratio with image covering area
        draggable={false} // Disable drag behavior on the image
      />
    </div>
  </li>
));

GameScreenshotsItem.displayName = "GameScreenshotsItem";

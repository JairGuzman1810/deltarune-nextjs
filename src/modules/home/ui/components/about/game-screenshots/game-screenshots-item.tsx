import Image from "next/image"; // Import Next.js optimized image component
import Link from "next/link"; // Import Link component for client-side navigation

// Screenshot - Defines the structure of a screenshot object
interface Screenshot {
  src: string; // Path to the screenshot image
  alt: string; // Descriptive alt text for accessibility
}

// GameScreenshotsItemProps - Props for the GameScreenshotsItem component
interface GameScreenshotsItemProps {
  screenshot: Screenshot; // Screenshot data (src and alt)
}

// GameScreenshotsItem - Renders a clickable screenshot with Fancybox zoom support
export const GameScreenshotsItem = ({
  screenshot,
}: GameScreenshotsItemProps) => {
  return (
    <Link prefetch data-fancybox="gallery" href={screenshot.src}>
      <div className="group relative flex border-2 border-white transition-colors duration-150 hover:duration-0 hover:border-deltarune-yellow cursor-pointer">
        <Image
          src={screenshot.src} // Source of the image from props
          alt={screenshot.alt} // Alt text for screen readers
          width={640} // Image width in pixels
          height={480} // Image height in pixels
          className="aspect-4/3 object-cover" // Maintain 4:3 aspect ratio with image covering area
          draggable={false} // Disable drag behavior on the image
        />
      </div>
    </Link>
  );
};

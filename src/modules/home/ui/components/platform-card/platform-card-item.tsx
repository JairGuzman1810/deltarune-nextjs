import Image from "next/image";
import Link from "next/link";

// PlatformCardItemProps - Props for PlatformCardItem component
interface PlatformCardItemProps {
  url: string; // Link to external store platform
  src: string | null; // Platform logo image URL or null if no image
  alt: string; // Alt text for the image or fallback text label
}

// PlatformCardItem - Renders a single clickable platform card for the demo section.
export const PlatformCardItem = ({ url, src, alt }: PlatformCardItemProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="z-20 flex items-center justify-center border-2 border-white rounded-lg bg-white/10 p-1 sm:p-2 w-20 sm:w-32 transition-all duration-150 hover:bg-white/20 hover:duration-0 hover:border-deltarune-yellow"
    >
      {/* Show logo image if src provided */}
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={410}
          height={80}
          className="w-full object-contain"
        />
      ) : (
        // Otherwise show fallback text inside the card
        <span className="text-white text-sm sm:text-base">{alt}</span>
      )}
    </Link>
  );
};

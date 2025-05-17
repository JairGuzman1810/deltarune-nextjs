import Image from "next/image";
import Link from "next/link";

// PlatformItem - Renders a single platform logo with link and hover effect
interface PlatformItemProps {
  url: string | null; // URL for the platform link
  src: string; // Path to the platform image
  alt: string; // Alt text for accessibility
  background: string; // Background color for the platform tile
  hoverBackground: string; // Hover background color for the platform tile
  invert?: boolean; // Whether to apply invert filter to the image
  noPadding?: boolean; // If true, removes the p-3 padding
}

// PlatformItem - Renders a single platform tile with a link or div
export const PlatformItem = ({
  url,
  src,
  alt,
  background,
  hoverBackground,
  invert,
  noPadding = true,
}: PlatformItemProps) => {
  // Shared styles applied to both linked and static tiles
  const sharedClasses = `
    ${
      noPadding ? "p-3" : "p-0"
    } flex items-center justify-center w-28 h-20 md:w-32 md:h-24 rounded-lg
    transition-all duration-300 border-2 border-white
    hover:border-deltarune-yellow ${background} ${hoverBackground}
  `;

  // Image styling with optional invert filter
  const imageClass = `w-full h-full object-contain ${invert ? "invert" : ""}`;

  // Platform image element
  const content = (
    <Image
      src={src}
      alt={alt}
      width={300}
      height={300}
      className={imageClass}
    />
  );

  // If URL is provided, render as link; otherwise, render as plain div
  return url ? (
    <Link
      key={alt}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={sharedClasses}
    >
      {content}
    </Link>
  ) : (
    <div key={alt} className={sharedClasses}>
      {content}
    </div>
  );
};

import Image from "next/image";
import { PlatformCardItem } from "./platform-card-item";

// platformCardItems - Platform card definitions used in the DemoSection.
// Each item represents a platform with a URL and optional logo image.
const platformCardItems = [
  {
    alt: "PC / MAC", // Text label shown when no image is present
    src: null, // No logo image for this platform
    url: "https://store.steampowered.com/app/1671210/DELTARUNE/", // Link to Steam store
  },
  {
    alt: "Nintendo Switch", // Accessible alt text for logo image
    src: "/assets/images/platform-switch.png", // Logo image path
    url: "https://www.nintendo.com/us/store/products/deltarune-chapter-1-and-2-switch/", // Link to Nintendo store
  },
  {
    alt: "PlayStation 4", // Accessible alt text for logo image
    src: "/assets/images/platform-ps4.png", // Logo image path
    url: "https://store.playstation.com/en-us/concept/233495", // Link to PlayStation store
  },
];

// PlatformCard - Renders a horizontal row of platform cards below the demo title.
// Includes decorative background ribbon and a list of clickable cards.
export const PlatformCard = () => {
  return (
    <div className="relative flex gap-2 w-full justify-center">
      {/* Decorative ribbon behind the platform cards */}
      <Image
        src="/assets/images/ribbon.png"
        alt="Ribbon"
        width={973}
        height={284}
        className="absolute w-full object-contain z-10 mt-[-5.5%]"
      />

      {/* Render each platform card using the PlatformCardItem component */}
      {platformCardItems.map((item, index) => (
        <PlatformCardItem key={index} {...item} />
      ))}
    </div>
  );
};

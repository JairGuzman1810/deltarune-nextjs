import { PlatformItem } from "./platform-item";

// platforms - Defines the list of available platforms with display data
const platforms = [
  {
    alt: "Steam", // Alt text for Steam logo
    src: "/assets/images/platform-square-steam-tall.png", // Image source for Steam
    url: "https://store.steampowered.com/app/1671210/DELTARUNE/", // External Steam store link
    background: "bg-white/10", // Default background color
    hoverBackground: "hover:bg-white/20", // Hover background color
  },
  {
    alt: "Nintendo Switch 2", // Alt text for Nintendo Switch 2
    src: "/assets/images/platform-square-switch2.png", // Image source for Switch 2
    url: "https://www.nintendo.com/us/store/products/deltarune-switch-2/", // External Switch 2 store link
    background: "bg-red-600/50", // Default background color
    hoverBackground: "hover:bg-red-600/70", // Hover background color
  },
  {
    alt: "PlayStation 5", // Alt text for PS5
    src: "/assets/images/platform-square-ps5.png", // Image source for PS5
    url: "https://store.playstation.com/en-us/concept/233495", // External PS5 store link
    background: "bg-white/80", // Default background color
    hoverBackground: "hover:bg-white", // Hover background color
    invert: true, // Apply invert filter for contrast
    noPadding: false, // Do not apply padding
  },
  {
    alt: "Nintendo Switch", // Alt text for original Switch
    src: "/assets/images/platform-square-switch.png", // Image source for Switch
    url: null, // No external link provided
    background: "bg-red-600/50", // Default background color
    hoverBackground: "hover:bg-red-600/70", // Hover background color
  },
  {
    alt: "PlayStation 4", // Alt text for PS4
    src: "/assets/images/platform-square-ps4.png", // Image source for PS4
    url: "https://store.playstation.com/en-us/concept/233495", // External PS4 store link
    background: "bg-blue-600/50", // Default background color
    hoverBackground: "hover:bg-blue-600/70", // Hover background color
    noPadding: false, // Do not apply padding
  },
];

// PlatformGrid - Renders a responsive grid of platform tiles with built-in data
export const PlatformGrid = () => {
  return (
    // Container for wrapping all platform items with spacing and padding
    <div className="flex flex-wrap justify-center max-w-md md:max-w-lg mx-auto gap-4">
      {platforms.map((platform, index) => (
        // Render each platform tile using PlatformItem component
        <PlatformItem key={index} {...platform} />
      ))}
    </div>
  );
};

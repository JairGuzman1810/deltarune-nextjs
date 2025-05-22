// platforms - Defines the list of available platforms with display data
export const platforms = [
  {
    id: 1,
    alt: "Steam", // Alt text for Steam logo
    src: "/assets/images/platform-square-steam-tall.png", // Image source for Steam
    url: "/", // External Steam store link
    background: "bg-white/10", // Default background color
    hoverBackground: "hover:bg-white/20", // Hover background color
  },
  {
    id: 2,
    alt: "Nintendo Switch 2", // Alt text for Nintendo Switch 2
    src: "/assets/images/platform-square-switch2.png", // Image source for Switch 2
    url: "/", // External Switch 2 store link
    background: "bg-red-600/50", // Default background color
    hoverBackground: "hover:bg-red-600/70", // Hover background color
  },
  {
    id: 3,
    alt: "PlayStation 5", // Alt text for PS5
    src: "/assets/images/platform-square-ps5.png", // Image source for PS5
    url: "/", // External PS5 store link
    background: "bg-white/80", // Default background color
    hoverBackground: "hover:bg-white", // Hover background color
    invert: true, // Apply invert filter for contrast
    noPadding: false, // Do not apply padding
  },
  {
    id: 4,
    alt: "Nintendo Switch", // Alt text for original Switch
    src: "/assets/images/platform-square-switch.png", // Image source for Switch
    url: null, // No external link provided
    background: "bg-red-600/50", // Default background color
    hoverBackground: "hover:bg-red-600/70", // Hover background color
  },
  {
    id: 5,
    alt: "PlayStation 4", // Alt text for PS4
    src: "/assets/images/platform-square-ps4.png", // Image source for PS4
    url: "/", // External PS4 store link
    background: "bg-blue-600/50", // Default background color
    hoverBackground: "hover:bg-blue-600/70", // Hover background color
    noPadding: false, // Do not apply padding
  },
];

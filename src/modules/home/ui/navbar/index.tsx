import { NavbarFlagItem } from "./navbar-flag-item";
import { NavbarItem } from "./navbar-item";

// navItems - Defines the primary navigation links for the navbar
const navItems = [
  { title: "Game", href: "/" }, // Navigation link for the Game page
  { title: "Soundtrack", href: "https://tobyfox.bandcamp.com/" }, // External link to soundtrack
  { title: "Merch", href: "https://www.fangamer.com/collections/deltarune" }, // External link to merch
  { title: "FAQ / CONTACT", href: "/help" }, // Navigation link to help/contact page
];

// flagItems - Defines the flag icons for the navbar
const flagItems = [
  {
    href: "/", // Link target for US flag (placeholder)
    src: "/assets/images/flag-us.png", // Image source for US flag
    alt: "US English Version", // Alt text for US flag
  },
  {
    href: "/", // Link target for JP flag (placeholder)
    src: "/assets/images/flag-jp.png", // Image source for JP flag
    alt: "JP 日本語 Version", // Alt text for JP flag
  },
];

// Navbar - Renders the top navigation bar with links and flag icons
export const Navbar = () => {
  return (
    <nav className="w-full z-40 overflow-hidden bg-nav-blue">
      <div className="relative w-full">
        {/* Navigation items list aligned centrally with responsive spacing */}
        <ul className="flex items-center justify-between max-w-2xl mx-auto uppercase h-12 gap-3 md:gap-6 pl-2 md:pl-0 pr-30 md:pr-0">
          {navItems.map((item, index) => (
            <NavbarItem key={index} {...item} /> // Render each navbar link item
          ))}
        </ul>

        <div className="absolute right-2 top-[11px] z-50">
          {/* Flags list aligned to the top-right corner */}
          <ul className="flex items-center justify-center gap-3">
            {flagItems.map((flag, index) => (
              <NavbarFlagItem key={index} {...flag} /> // Render each flag item
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

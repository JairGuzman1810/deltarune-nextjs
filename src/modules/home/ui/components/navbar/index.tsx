import { flagItems } from "./flag-items";
import { navItems } from "./nav-items";
import { NavbarFlagItem } from "./navbar-flag-item";
import { NavbarItem } from "./navbar-item";

// Navbar - Renders the top navigation bar with links and flag icons
export const Navbar = () => {
  return (
    <nav className="z-40 w-full overflow-hidden bg-nav-blue">
      <div className="relative w-full">
        {/* Navigation items list aligned centrally with responsive spacing */}
        <ul className="flex items-center justify-between h-12 max-w-2xl gap-3 pl-2 mx-auto uppercase md:gap-6 md:pl-0 pr-30 md:pr-0">
          {navItems.map((item) => (
            <NavbarItem key={item.id} {...item} /> // Render each navbar link item
          ))}
        </ul>

        <div className="absolute right-2 top-[11px] z-50">
          {/* Flags list aligned to the top-right corner */}
          <ul className="flex items-center justify-center gap-3">
            {flagItems.map((flag) => (
              <NavbarFlagItem key={flag.id} {...flag} /> // Render each flag item
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

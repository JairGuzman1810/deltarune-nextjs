import Link from "next/link";

// NavbarItemProps - Props for the NavbarItem component
interface NavbarItemProps {
  title: string; // Text label for the navigation item
  href: string; // URL the item should link to
}

// NavbarItem - Renders a single navigation list item with styled link
export const NavbarItem = ({ title, href }: NavbarItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className="text-white inline-block hover:opacity-80 text-xs sm:text-sm md:text-lg drop-shadow-[2px_2px_0px_rgba(0,0,0)]"
      >
        {title}
      </Link>
    </li>
  );
};

import Image from "next/image";
import Link from "next/link";

// NavbarFlagItem - Renders a single flag with link and hover effect
interface NavbarFlagItemProps {
  href: string; // URL for the flag link
  src: string; // Path to the flag image
  alt: string; // Alt text for accessibility
}

// NavbarFlagItem - Renders a single flag with link and hover effect
export const NavbarFlagItem = ({ href, src, alt }: NavbarFlagItemProps) => {
  return (
    <li>
      <Link href={href}>
        <Image
          src={src}
          alt={alt}
          width={38}
          height={26}
          className="cursor-pointer hover:opacity-80"
        />
      </Link>
    </li>
  );
};

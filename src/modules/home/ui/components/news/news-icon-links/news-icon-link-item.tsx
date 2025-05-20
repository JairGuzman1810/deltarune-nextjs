import Image from "next/image";
import Link from "next/link";

// NewsIconLinkItemProps - Props for the icon link
interface NewsIconLinkItemProps {
  href: string; // Destination URL
  src: string; // Image source path
  alt: string; // Alt text for accessibility
}

// NewsIconLinkItem - Stateless component for rendering a styled link with an image icon
export const NewsIconLinkItem = ({ href, src, alt }: NewsIconLinkItemProps) => (
  <Link
    href={href}
    className="border-2 border-white rounded-lg hover:bg-white/20 hover:border-deltarune-yellow px-4 py-2 duration-150 transition-colors hover:duration-0"
  >
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      className="fill-white w-6 h-6 text-transparent"
    />
  </Link>
);

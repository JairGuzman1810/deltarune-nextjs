import Link from "next/link";

// NewsTextLinkProps - Props for the styled text link
interface NewsTextLinkProps {
  href: string; // Destination URL for the link
  children: React.ReactNode; // Link content (typically text or inline elements)
}

// NewsTextLink - Stateless component that displays a border-styled text link with transition and highlight effects
export const NewsTextLink = ({ href, children }: NewsTextLinkProps) => (
  <Link
    href={href}
    className="border-2 border-white rounded-lg hover:bg-white/20 hover:border-deltarune-yellow px-4 py-2 duration-150 transition-colors hover:duration-0 text-xl highlight-white"
  >
    {children}
  </Link>
);

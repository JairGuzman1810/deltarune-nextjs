import { NewsIconLinkItem } from "./news-icon-link-item";
import { newsLinks } from "./news-link";

// NewsIconLinks - Renders a horizontal row of social media icon links
export const NewsIconLinks = () => {
  return (
    <div className="flex gap-4">
      {/* Render each link in the newsLinks array */}
      {newsLinks.map((link) => (
        <NewsIconLinkItem
          key={link.href}
          href={link.href}
          src={link.src}
          alt={link.alt}
        />
      ))}
    </div>
  );
};

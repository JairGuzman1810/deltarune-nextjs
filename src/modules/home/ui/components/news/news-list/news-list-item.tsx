import Image from "next/image";
import Link from "next/link";

// NewsListItemProps - Props for a single news item in the list
interface NewsListItemProps {
  image: string; // URL of the news image
  alt: string; // Alt text for the image
  width: number; // Image width
  height: number; // Image height
  url: string; // Target URL when the item is clicked
  date: string; // Publication date of the news
  title: string; // Title of the news
  description: string; // Short description of the news
}

// NewsListItem - Render a single news item as a clickable card
export const NewsListItem = ({
  image,
  alt,
  width,
  height,
  url,
  date,
  title,
  description,
}: NewsListItemProps) => {
  return (
    // Render clickable news card with image, date, title, and description
    <Link
      href={url}
      className="flex flex-row gap-4 p-4 text-left transition-colors duration-150 border-2 border-white rounded-lg bg-white/10 hover:bg-white/20 hover:border-deltarune-yellow hover:duration-0"
    >
      {/* News image on the left */}
      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        className="flex-shrink-0 object-contain w-24 h-24 rounded"
        aria-hidden="true"
      />

      {/* Right-side content: date, title, and description */}
      <div className="flex flex-col">
        {/* Publication date with highlight style */}
        <p className="mb-2 text-sm highlight-yellow">{date}</p>

        {/* News title */}
        <h5 className="text-xl highlight-white">{title}</h5>

        {/* Short description of the news */}
        <p className="text-lg tracking-wide text-white">{description}</p>
      </div>
    </Link>
  );
};

import Image from "next/image";
// GameScreenshotsItemProps - Props interface for a single screenshot item
interface GameScreenshotsItemProps {
  src: string; // Image URL source
  alt: string; // Alternative text for accessibility and SEO
}

// GameScreenshotsItem - Component to render one screenshot with border and hover effect
export const GameScreenshotsItem = ({ src, alt }: GameScreenshotsItemProps) => {
  return (
    <li>
      {/* Container div with white border that changes to yellow on hover */}
      <div className="group relative flex border-2 border-white transition-colors duration-150 hover:duration-0 hover:border-deltarune-yellow cursor-pointer">
        <Image
          src={src} // Source of the image from props
          alt={alt} // Alt text from props for accessibility
          width={640} // Fixed image width
          height={480} // Fixed image height
          className="aspect-4/3 object-cover" // Enforce 4:3 aspect ratio and cover image area
        />
      </div>
    </li>
  );
};

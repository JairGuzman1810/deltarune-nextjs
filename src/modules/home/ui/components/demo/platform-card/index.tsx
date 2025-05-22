import Image from "next/image";
import { PlatformCardItem } from "./platform-card-item";
import { platformCardItems } from "./platforms";

// PlatformCard - Renders a horizontal row of platform cards below the demo title.
// Includes decorative background ribbon and a list of clickable cards.
export const PlatformCard = () => {
  return (
    <div className="relative flex justify-center w-full gap-2">
      {/* Decorative ribbon behind the platform cards */}
      <Image
        src="/assets/images/ribbon.png"
        alt="Ribbon"
        width={973}
        height={284}
        className="absolute w-full object-contain z-10 mt-[-5.5%]"
      />

      {/* Render each platform card using the PlatformCardItem component */}
      {platformCardItems.map((item) => (
        <PlatformCardItem key={item.id} {...item} />
      ))}
    </div>
  );
};

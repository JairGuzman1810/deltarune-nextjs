import { PlatformItem } from "./platform-item";
import { platforms } from "./platforms";

// PlatformGrid - Renders a responsive grid of platform tiles with built-in data
export const PlatformGrid = () => {
  return (
    // Container for wrapping all platform items with spacing and padding
    <div className="flex flex-wrap justify-center max-w-md gap-4 mx-auto md:max-w-lg">
      {platforms.map((platform) => (
        // Render each platform tile using PlatformItem component
        <PlatformItem key={platform.id} {...platform} />
      ))}
    </div>
  );
};

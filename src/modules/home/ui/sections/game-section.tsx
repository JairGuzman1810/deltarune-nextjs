import { PlatformGrid } from "../components/game/platform-grid";

// GameSection - Game section of the homepage with platform logos and wishlist call to action
export const GameSection = () => {
  return (
    <section
      id="game"
      className="container mx-auto max-w-2xl px-4 flex flex-col gap-4 text-center motion-safe:animate-fade-in motion-safe:opacity-0 motion-safe:translate-y-4"
      style={{ animationDelay: "0.5s" }}
    >
      {/* Heading for platform section */}
      <h4 className="text-lg text-white">COMING TO</h4>

      {/* Platform logo grid */}
      <PlatformGrid />

      {/* Wishlist call to action */}
      <h4 className="text-lg text-white">WISHLIST NOW!</h4>
    </section>
  );
};

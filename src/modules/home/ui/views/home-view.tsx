import { GameSection } from "../sections/game-section";
import { HomeSection } from "../sections/home-section";

// HomeView - Composes the homepage layout with stacked content sections
export const HomeView = () => {
  return (
    <main>
      <div className="relative z-0 flex flex-col gap-16 py-16 overflow-hidden bg-black">
        {/* Render the landing section */}
        <HomeSection />

        {/* Render the game section */}
        <GameSection />
      </div>
    </main>
  );
};

import { HomeSection } from "../sections/home-section";

// HomeView - Composes the homepage layout with stacked content sections
export const HomeView = () => {
  return (
    <main>
      <div className="flex flex-col gap-16 py-16 overflow-hidden">
        {/* Render the landing section */}
        <HomeSection />
      </div>
    </main>
  );
};

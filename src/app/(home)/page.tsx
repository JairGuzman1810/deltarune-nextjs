import { HomeSection } from "@/modules/home/sections/home-section";

// Home - Root layout for the homepage composed of multiple stacked sections
export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-16 py-16 overflow-hidden ">
        {/* Render the landing section */}
        <HomeSection />
      </div>
    </main>
  );
}

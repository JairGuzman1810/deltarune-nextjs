import { HomeView } from "@/modules/home/ui/views/home-view";

// Home - Root layout for the homepage composed of multiple stacked sections
// Delegates rendering to the HomeView component, which handles layout and content
export default function Home() {
  return <HomeView />;
}

import { Footer } from "@/modules/home/ui/components/footer";
import { Navbar } from "@/modules/home/ui/components/navbar";

// LayoutProps - Props for the Layout component
interface LayoutProps {
  children: React.ReactNode; // Content to render below the Navbar
}

// Layout - Renders the home page layout with a Navbar and content wrapper
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/* Render the top navigation bar */}
      <Navbar />
      {/* Render the page content */}
      {children}
      {/* Render the footer */}
      <Footer />
    </div>
  );
};

export default Layout;

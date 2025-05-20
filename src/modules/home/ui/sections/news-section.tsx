import { NewsIconLinks } from "../components/news/news-icon-links";
import { NewsTextLink } from "../components/news/news-text-link";

// NewsSection - News section that displays the mailing list and social media links
export const NewsSection = () => {
  return (
    <section
      id="news"
      className="container mx-auto max-w-2xl text-center flex flex-col gap-4 px-4"
    >
      {/* Section heading */}
      <h4 className="text-white text-2xl">NEWS AND UPDATES</h4>

      {/* News content block with description, mailing list link, and social icons */}
      <div className="max-w-lg mx-auto flex flex-col items-center justify-center gap-4 py-4 px-6 bg-deltarune-blue/30 mb-4 rounded-lg">
        <p className="text-white">
          Subscribe for free e-mail updates no matter what happens to any
          website on the internet!
        </p>

        {/* Mailing list link */}
        <NewsTextLink href="/">
          DELTARUNE / UNDERTALE
          <br />
          <span className="highlight-yellow">MAILING LIST</span>
        </NewsTextLink>

        {/* Social media icon links */}
        <NewsIconLinks />
      </div>
    </section>
  );
};

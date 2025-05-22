import Image from "next/image";
import Link from "next/link";

// Footer - Render the website footer with legal text, ESRB rating, and a privacy policy link
export const Footer = () => {
  return (
    // Wrapper for the footer section with padding and background color
    <footer
      className="relative w-full px-4 pt-12 pb-4 text-center bg-black md:pb-6"
      style={{
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div className="container flex flex-col items-center justify-center gap-2 mx-auto text-center">
        {/* Copyright notice */}
        <span className="block max-w-lg px-4 text-xs text-center text-deltarune-gray">
          DELTARUNE © Toby Fox 2018-2025. All rights reserved.
        </span>

        {/* Steam trademark disclaimer */}
        <span className="block max-w-lg px-4 text-xs text-center text-deltarune-gray">
          Steam and the Steam logo are trademarks and/or registered trademarks
          of Valve Corporation in the U.S. and/or other countries.
        </span>

        {/* PlayStation trademark disclaimer */}
        <span className="block max-w-lg px-4 text-xs text-center text-deltarune-gray">
          &quot;PlayStation&quot; and the &quot;PS&quot; Family logo are
          registered trademarks and &quot;PS4&quot; is a trademark of Sony
          Interactive Entertainment LLC.
        </span>

        {/* Nintendo trademark disclaimer */}
        <span className="block max-w-lg px-4 text-xs text-center text-deltarune-gray">
          Nintendo Switch™ is a trademark of Nintendo.
        </span>

        {/* ESRB rating box with image and descriptors */}
        <div
          className="flex flex-row items-center h-20 bg-white border-2 border-white"
          style={{
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          }}
        >
          {/* ESRB rating image */}
          <Image
            src="/assets/images/esrb-t.png"
            alt="ESRB T for Teen rating"
            width={311}
            height={472}
            className="h-full w-12.5 shrink-0"
          />

          {/* Rating descriptors */}
          <div className="flex items-center w-full h-full px-2 border-r-2 border-black border-y-2">
            <p className="text-xs text-black">
              Language
              <br />
              Suggestive Themes
              <br />
              Mild Blood
              <br />
              Fantasy Violence
            </p>
          </div>
        </div>

        {/* Privacy policy link */}
        <span className="block max-w-lg px-4 text-xs text-center text-deltarune-gray">
          <Link
            href="/"
            className="text-deltarune-gray underline hover:opacity-90 !text-xs"
          >
            Privacy Policy
          </Link>
        </span>
      </div>
    </footer>
  );
};

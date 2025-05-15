"use client"; // Enable client-side rendering

import { useFadeInOnScroll } from "@/hook/useFadeInOnScroll";
import Image from "next/image";
import { PlatformCard } from "../components/platform-card";
import { Starfield } from "../components/star-field";

// DemoSection - Demo section with background, logo, and platform cards
export const DemoSection = () => {
  const { ref, style } = useFadeInOnScroll(); // Scroll-triggered fade-in animation

  return (
    <section
      ref={ref}
      style={style}
      className="relative w-full text-center mb-32 pt-8"
      id="demo"
    >
      {/* Background animated starfield */}
      <Starfield />

      <div className="relative container mx-auto max-w-2xl">
        {/* Town background image */}
        <Image
          src="/assets/images/bg.gif"
          alt="Castle Town"
          className="w-full object-contain -z-20 inset-shadow-[0_10px_10px_rgba(0,0,0,1)]"
          width={978}
          height={626}
          unoptimized
        />

        {/* Overlay content */}
        <div className="absolute bottom-0 flex flex-col gap-2 w-full mx-auto">
          {/* Logo image */}
          <h2 className="text-transparent">
            <Image
              src="/assets/images/logo.png"
              alt="DELTARUNE"
              width={1150}
              height={167}
              className="w-xs md:w-md mx-auto"
            />
          </h2>

          {/* Demo availability text */}
          <h3 className="text-xl text-white mb-4">
            Demo (Chapter 1&2)
            <br />
            Available now
          </h3>

          {/* Platform cards with external links */}
          <PlatformCard />
        </div>
      </div>
    </section>
  );
};

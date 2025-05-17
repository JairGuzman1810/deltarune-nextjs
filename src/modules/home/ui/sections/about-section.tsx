"use client"; // Enable client-side rendering

import { useFadeInOnScroll } from "@/hook/useFadeInOnScroll";
import Image from "next/image";
import ParticleField from "../components/particle-field";

// AboutSection - Section that displays the animated particle background with logo and title
export const AboutSection = () => {
  const { ref, style } = useFadeInOnScroll(); // Scroll-triggered fade-in animation

  return (
    <section id="about" ref={ref} style={style}>
      {/* Container with relative layout to position image and overlay content */}
      <div className="relative flex justify-center">
        {/* ParticleField background animation */}
        <ParticleField />

        {/* ABOUT title and DELTARUNE logo positioned absolutely over key art */}
        <h2 className="absolute top-26 md:top-74 mx-auto flex flex-col items-center justify-center gap-4 z-20">
          {/* Section heading text */}
          <span className="text-2xl md:text-4xl highlight-white">ABOUT</span>

          {/* DELTARUNE logo image */}
          <Image
            src="/assets/images/logo.png"
            alt="About DELTARUNE"
            width={1150}
            height={167}
            className="w-xl px-12 md:px-0 highlight-white"
          />
        </h2>

        {/* Background key art: silhouettes of main characters */}
        <Image
          src="/assets/images/key-art.gif"
          alt="Silhouettes of Susie, Kris, and Ralsei standing in front of a fountain"
          className="w-4xl z-3"
          width={970}
          height={780}
          unoptimized
        />

        {/* Blue bottom stripe (DELTARUNE brand accent) */}
        <div
          className="absolute w-full h-[39px] bottom-0 bg-[#004FDE] z-1"
          aria-hidden="true"
        />

        {/* Inset shadow at the bottom edge for visual depth */}
        <div
          className="absolute w-full h-8 bottom-0 inset-shadow-[0_-5px_5px_#004FDF] z-6"
          aria-hidden="true"
        />
      </div>

      {/* Lower section with dark blue gradient background */}
      <div className="relative bg-linear-to-b from-[#004FDE] to-[#001F7E]">
        {/* Centered content container with padding */}
        <div className="container mx-auto max-w-2xl flex flex-col gap-6 px-4 py-8">
          {/* Section subheading */}
          <h3 className="text-lg md:text-2xl highlight-yellow text-center">
            The next adventure in the UNDERTALE series has appeared!
          </h3>

          {/* Introduction paragraph with game overview */}
          <p className="highlight-white">
            Dive into the parallel story to UNDERTALE! Fight or spare your way
            through action-packed battles as you explore a mysterious world
            alongside an endearing cast of new and familiar characters. Chapters
            1-4 will be available at launch, with more planned as free updates!
          </p>

          {/* Feature list describing game elements */}
          <ul className="list-[square] highlight-white px-4 flex flex-col gap-2">
            <li>A massive soundtrack and story written by Toby Fox!</li>

            <li>
              Meet new and endearing main characters, as well as familiar faces
              like Toriel, Sans, and more. Huh? Papyrus? No, he&apos;s busy.
              Sorry
            </li>

            <li>
              Smooth and expressive pixel-animation by Temmie. She also has a
              new hat (in-game)
            </li>

            <li>
              A linear, chapter-based system that you can pick up from anywhere.
            </li>

            <li>
              Creative bullet-dodging based battles inspired by games like the
              Touhou series and Chrono Trigger.
            </li>

            <li>Jevilishly difficult hidden bosses.</li>

            <li>And...</li>

            <li>...</li>

            <li>... only 1 ending...?</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

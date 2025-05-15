import Image from "next/image";
import ParticleField from "../components/particle-field";

// AboutSection - Section that displays the animated particle background with logo and title
export const AboutSection = () => {
  return (
    <section id="about">
      {/* Container with relative layout to position image and overlay content */}
      <div className="relative flex justify-center">
        {/* ParticleField background animation */}
        <ParticleField />

        {/* Key art background image */}
        <Image
          src="/assets/images/key-art.gif"
          alt="Silhouettes of Susie, Kris, and Ralsei standing in front of a fountain"
          className="w-4xl z-3"
          width={970}
          height={780}
          unoptimized
        />

        {/* Overlayed ABOUT title and logo */}
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
      </div>
    </section>
  );
};

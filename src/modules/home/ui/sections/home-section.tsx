import Image from "next/image";
import { Countdown } from "../components/countdown";
import { VideoPlayer } from "../components/video-player";
// HomeSection - Landing section of the homepage with animated spire backgrounds and site logo
export const HomeSection = () => {
  return (
    <section className="relative container mx-auto max-w-2xl px-4">
      {/* Left spire image with fade-in-top animation */}
      <Image
        src="/assets/images/spire-fade.png"
        alt="Spire"
        width={194}
        height={1434}
        className="absolute w-24 md:w-32 top-0 left-4 md:-left-16 -z-20 motion-safe:animate-fade-in-top motion-safe:translate-y-0"
      />

      {/* Right spire image rotated 180° with fade-in-top animation */}
      <Image
        src="/assets/images/spire-fade.png"
        alt="Spire"
        width={194}
        height={1434}
        className="absolute w-24 md:w-32 -top-96 right-4 md:-right-16 -z-20 rotate-180 motion-safe:animate-fade-in-top motion-safe:translate-y-0"
      />

      {/* Centered DELTARUNE logo */}
      <Image
        src="/assets/images/logo.png"
        alt="DELTARUNE"
        width={1150}
        height={167}
        className="w-lg mx-auto"
      />

      {/* Subtitle below the logo */}
      <h2 className="text-white text-3xl md:text-5xl text-center mt-4 mb-12">
        Chapters 1-4
      </h2>

      {/* Countdown  */}
      <Countdown />

      {/* Video Player */}
      <VideoPlayer />
    </section>
  );
};

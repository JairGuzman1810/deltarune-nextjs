import Image from "next/image";
import ParticleField from "../components/particle-field";

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="relative flex justify-center">
        <ParticleField />
        <Image
          src="/assets/images/key-art.gif"
          alt="Silhouettes of Susie, Kris, and Ralsei standing in front of a fountain"
          className="w-4xl z-3"
          width={970}
          height={780}
          unoptimized
        />
      </div>
    </section>
  );
};

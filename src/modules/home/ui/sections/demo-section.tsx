"use client"; // Enable client-side rendering

import { useFadeInOnScroll } from "@/hook/useFadeInOnScroll";
import Image from "next/image";
import { Starfield } from "../components/star-field";

export const DemoSection = () => {
  const { ref, style } = useFadeInOnScroll();

  return (
    <section
      ref={ref}
      style={style}
      className="relative w-full text-center mb-32 pt-8"
    >
      <Starfield />

      <div className="relative container mx-auto max-w-2xl">
        <Image
          src="/assets/images/bg.gif"
          alt="Castle Town"
          className="w-full object-contain -z-20 inset-shadow-[0_10px_10px_rgba(0,0,0,1)]"
          width={978}
          height={626}
          unoptimized
        />
      </div>
    </section>
  );
};

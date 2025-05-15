import { Starfield } from "../components/star-field";

export const DemoSection = () => {
  return (
    <section className="relative w-full text-center mb-32 pt-8">
      <Starfield />

      <div className="relative container mx-auto max-w-2xl">
        <img
          src="/assets/images/bg.gif"
          alt="Castle Town"
          className="lazyload w-full object-contain -z-20 inset-shadow-[0_10px_10px_rgba(0,0,0,1)]"
        />
      </div>
    </section>
  );
};

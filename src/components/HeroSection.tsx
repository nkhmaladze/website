import { MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";
import crystalIcon from "@/assets/crystal-icon.png";
import heroDinner from "@/assets/hero-dinner.png";
import heroDinnerLight from "@/assets/hero-dinner-light.png";

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 pb-16 pt-[calc(5.5rem+env(safe-area-inset-top,0px))] text-center md:min-h-screen md:pb-10 md:pt-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
        <img
          src={crystalIcon}
          alt="Flipped crystal"
          className="h-40 w-32 -mb-24 object-contain sm:h-44 sm:w-36 sm:-mb-28 md:h-60 md:w-48 md:-mb-[11.25rem]"
        />
        <img
          src={resolvedTheme === "light" ? heroDinnerLight : heroDinner}
          alt="Dinner date illustration"
          className="mb-4 w-full max-w-lg opacity-90 md:max-w-2xl"
          width={1024}
          height={640}
        />
        <h1 className="mb-3 font-heading text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-7xl">
          One dinner date. Every week.
        </h1>
        <p className="mb-6 font-mono text-base text-foreground/80 sm:text-lg md:text-2xl">
          Skip the texting. Just show up.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-3 rounded-lg bg-foreground px-7 py-3 font-mono text-sm uppercase tracking-wider text-background transition-opacity hover:opacity-90 sm:px-9 sm:py-4 sm:text-base"
        >
          I want in
          <MessageCircle className="h-6 w-6 shrink-0" strokeWidth={2} aria-hidden />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

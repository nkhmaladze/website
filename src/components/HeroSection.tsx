import { MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";
import crystalIcon from "@/assets/crystal-icon.png";
import heroDinner from "@/assets/hero-dinner.png";
import heroDinnerLight from "@/assets/hero-dinner-light.png";

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section className="flex h-screen flex-col items-center justify-center px-6 pt-16 text-center md:pt-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
        <img
          src={crystalIcon}
          alt="Flipped crystal"
          className="h-52 w-40 -mb-[8.5rem] md:h-60 md:w-48 md:-mb-[11.25rem] object-contain"
        />
        <img
          src={resolvedTheme === "light" ? heroDinnerLight : heroDinner}
          alt="Dinner date illustration"
          className="mb-4 w-full max-w-2xl opacity-90"
          width={1024}
          height={640}
        />
        <h1 className="mb-3 font-heading text-5xl font-medium tracking-tight text-foreground md:text-7xl">
          One dinner date. Every week.
        </h1>
        <p className="mb-6 font-mono text-lg text-foreground/80 md:text-2xl">
          Skip the texting. Just show up.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-3 rounded-lg bg-foreground px-9 py-4 font-mono text-base uppercase tracking-wider text-background transition-opacity hover:opacity-90"
        >
          I want in
          <MessageCircle className="h-6 w-6 shrink-0" strokeWidth={2} aria-hidden />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

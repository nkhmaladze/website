import { MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";
import crystalIcon from "@/assets/crystal-icon.png";
import heroDinner from "@/assets/hero-dinner.png";
import heroDinnerLight from "@/assets/hero-dinner-light.png";

const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="flex flex-col items-center px-6 pb-8 pt-24 text-center md:pt-28">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <img
          src={crystalIcon}
          alt="Flipped crystal"
          className="h-36 w-28 -mb-10 md:h-40 md:w-32 md:-mb-12 object-contain"
        />
        <img
          src={theme === "light" ? heroDinnerLight : heroDinner}
          alt="Dinner date illustration"
          className="mb-3 w-full max-w-md opacity-90"
          width={1024}
          height={640}
        />
        <h1 className="mb-2 font-heading text-3xl font-medium tracking-tight text-foreground md:text-5xl">
          One dinner date. Every week.
        </h1>
        <p className="mb-4 font-mono text-sm text-foreground/80 md:text-base">
          Skip the texting. Just show up.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-2.5 font-mono text-sm uppercase tracking-wider text-background transition-opacity hover:opacity-90"
        >
          I want in
          <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

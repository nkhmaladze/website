import crystalIcon from "@/assets/crystal-icon.png";
import heroDinner from "@/assets/hero-dinner.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-20 pb-16 px-6 text-center">
      <img src={crystalIcon} alt="Flipped crystal" className="w-32 h-32 mb-2" />
      <img
        src={heroDinner}
        alt="Dinner date illustration"
        className="w-full max-w-md mb-8 opacity-80"
        width={1024}
        height={640}
      />
      <h1 className="font-heading text-3xl md:text-5xl font-medium tracking-tight mb-4">
        One dinner date. Every week.
      </h1>
      <p className="text-muted-foreground text-sm md:text-base font-mono mb-8">
        Skip the texting. Just show up.
      </p>
      <a
        href="#"
        className="inline-flex items-center gap-2 px-8 py-3 bg-[#2a2a2a] rounded-lg text-sm font-mono uppercase tracking-wider text-foreground hover:bg-[#353535] transition-colors"
      >
        I want in 🍽
      </a>
    </section>
  );
};

export default HeroSection;

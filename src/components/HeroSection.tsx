import { MessageCircle } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import crystalIcon from "@/assets/diamond-img.png";
import crystalLight from "@/assets/diamond-light.png";
import heroDinner from "@/assets/hero-dinner.png";
import heroDinnerLight from "@/assets/hero-dinner-light.png";
import commentIcon from "@/assets/comment-icon.svg";
import { Link } from "react-router-dom";
import WantInButton from "./ui/wantIn";

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section className="flex min-h-[60svh] md:h-[calc(100vh-110px)] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[70vh] md:py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
        <div className="relative flex flex-col items-center">
          <img
            src={crystalIcon}
            alt="Flipped crystal"
            className="relative z-10 h-40 w-32 -mb-24 object-contain sm:h-44 sm:w-36 sm:-mb-28 md:h-60 md:w-48 md:-mb-[11.25rem]"
          />
          <img src={crystalLight}
            alt=""
            className="animate-light-sweep absolute top-[30%] right-10 w-[90%] max-w-[500px] opacity-0 mix-blend-screen pointer-events-none"
          />
        </div>
        <img
          src={resolvedTheme === "light" ? heroDinnerLight : heroDinner}
          alt="Dinner date illustration"
          className="mb-4 w-full max-w-lg opacity-90 md:max-w-5xl"
          width={1024}
          height={640}
        />
        <h1 className="mb-3 font-instrument font-normal tracking-wide text-text-primary text-5xl md:text-6xl 
        ">
          One dinner date. Every week.
        </h1>
        <p className={`mb-6 font-anonymous text-base md:text-xl ${resolvedTheme === "light" ? "text-[#1A1A1A99]" : "text-[#FFFFFF99]"}`}>
          Skip the texting. Just show up.
        </p>
        <WantInButton />
      </div>
    </section>
  );
};

export default HeroSection;

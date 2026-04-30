import { MessageCircle } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import crystalIcon from "@/assets/diamond-img.png";
import crystalLight from "@/assets/diamond-light.png";
import heroDinner from "@/assets/hero-dinner.png";
import heroDinnerLight from "@/assets/hero-dinner-light.png";
import commentIcon from "@/assets/comment-icon.svg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section className="flex min-h-[60svh] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[70vh] md:py-20">
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
          className="mb-4 w-full max-w-lg opacity-90 md:max-w-2xl"
          width={1024}
          height={640}
        />
        <h1 className="mb-3 font-instrument font-normal tracking-wide text-foreground text-5xl md:text-6xl 
        ">
          One dinner date. Every week.
        </h1>
        <p className="mb-6 font-anonymous text-base text-[#FFFFFF99]">
          Skip the texting. Just show up.
        </p>
        <Link
          to="https://forms.gle/6LvmBuAWfoPRm87v5"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 relative inline-flex items-center justify-center rounded-[12px] border border-[#FFFFFF4D] w-[195px] h-[52px] sm:p-[4px] p-[2px] overflow-hidden"
        >
          {/* Inner Button */}
          <div
            className="relative flex h-full w-full items-center justify-center gap-4 font-bold rounded-[8px] 
               border border-[#C2C4B9] bg-[#E8E5E1] px-4 py-2 font-anonymous uppercase text-[#1E1E1E] 
               group-hover:border-transparent transition-all duration-300 overflow-hidden"
            style={{
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25), inset 0px 1px 1px 2px rgba(255, 255, 255, 0.8)",
            }}
          >
            {/* Gradient Background on Hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{
                background: "linear-gradient(90deg, rgba(198, 141, 214, 0.4) 46.63%, rgba(255, 122, 125, 0.4) 100%)",
                borderRadius: "8px",
                backdropFilter: "blur(80px)",
              }}
            />

            {/* Button Content */}
            <div className="relative z-10 flex items-center gap-4 transition-colors duration-300 ">
              I want in
              <div className="relative">
                <img src={commentIcon} className="h-4 w-4" alt="" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

import { useTheme } from "@/context/ThemeContext";
import stepProfile from "@/assets/step-profile.png";
import stepSunday from "@/assets/step-sunday.png";
import stepPick from "@/assets/step-pick.png";
import stepShowup from "@/assets/step-showup.png";
import stepLabel1 from "@/assets/step-label-1.png";
import stepLabel2 from "@/assets/step-label-2.png";
import stepLabel3 from "@/assets/step-label-3.png";
import stepLabel4 from "@/assets/step-label-4.png";
import stepProfileLight from "@/assets/step-profile-light.png";
import stepSundayLight from "@/assets/step-sunday-light.png";
import stepPickLight from "@/assets/step-pick-light.png";
import stepShowupLight from "@/assets/step-showup-light.png";
import stepLabel1Light from "@/assets/step-label-1-light.png";
import stepLabel2Light from "@/assets/step-label-2-light.png";
import stepLabel3Light from "@/assets/step-label-3-light.png";
import stepLabel4Light from "@/assets/step-label-4-light.png";

const steps = [
  {
    number: "1",
    title: "Tell us about you.",
    description: "Your type, your vibe, your schedule, your food taste. We'll handle the rest.",
    image: stepSunday,
    imageLight: stepSundayLight,
    color: "#3DE2FF",
    imageAlt: "Profile details",
    gradient: "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(90deg, rgba(61, 226, 255, 0.7) 0%, rgba(61, 226, 255, 0) 79.29%)"
  },
  {
    number: "2",
    title: "Sunday, 11:59 PM.",
    description: "Every week, a fresh set of matches — each one already comes with a location, a day, and a time.",
    image: stepProfile,
    imageLight: stepProfileLight,
    color: "#FFF71E",
    imageAlt: "Weekly matches",
    gradient: "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(90deg, rgba(255, 247, 30, 0.7) 0%, rgba(255, 247, 30, 0) 79.29%)"
  },
  {
    number: "3",
    title: "Pick your date.",
    description: "Send requests, get requests, adjust the time if you need to. First one you both say yes to? That's your date this week.",
    image: stepPick,
    imageLight: stepPickLight,
    color: "#FF75EF",
    imageAlt: "Date selection",
    gradient: "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(90deg, rgba(255, 117, 239, 0.7) 0%, rgba(255, 117, 239, 0) 79.29%)"
  },
  {
    number: "4",
    title: "Just show up.",
    description: "No small talk. No \"let's grab drinks sometime.\" A real dinner date, this week, with someone actually worth meeting.",
    image: stepShowup,
    imageLight: stepShowupLight,
    color: "#63FF63",
    imageAlt: "Dinner date",
    gradient: "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(90deg, rgba(99, 255, 99, 0.7) 0%, rgba(99, 255, 99, 0) 79.29%)"
  },
];

const ScribbleCircle = ({
  number,
  color,
}: {
  number: string;
  color: string;
}) => (
  <div className="relative  shrink-0">
    <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.7" d="M14 36C12.0522 36 10.2261 35.5453 8.52174 34.636C6.81739 33.6942 5.31594 32.4114 4.01739 30.7876C2.75942 29.1637 1.76522 27.2639 1.03478 25.088C0.344927 22.8796 0 20.5088 0 17.9756C0 15.4425 0.344927 13.088 1.03478 10.912C1.76522 8.73613 2.75942 6.83627 4.01739 5.21245C5.31594 3.55616 6.81739 2.27334 8.52174 1.36401C10.2261 0.454668 12.0522 0 14 0C15.9478 0 17.7536 0.454668 19.4174 1.36401C21.1217 2.27334 22.6232 3.55616 23.9217 5.21245C25.2203 6.83627 26.2145 8.73613 26.9043 10.912C27.6348 13.088 28 15.4425 28 17.9756C28 20.5088 27.6348 22.8796 26.9043 25.088C26.2145 27.2639 25.2203 29.1637 23.9217 30.7876C22.6232 32.4114 21.1217 33.6942 19.4174 34.636C17.7536 35.5453 15.9478 36 14 36ZM14 32.6847C16.8812 32.6847 19.1333 31.3045 20.7565 28.544C22.3797 25.7835 26.1913 23.594 26.1913 17.9756C26.1913 12.3572 22.3797 10.184 20.7565 7.45602C19.1333 4.69553 16.8812 3.31529 14 3.31529C11.1594 3.31529 8.90725 4.69553 7.24348 7.45602C5.62029 10.184 1.8087 12.3572 1.8087 17.9756C1.8087 23.594 5.62029 25.7835 7.24348 28.544C8.90725 31.3045 11.1594 32.6847 14 32.6847Z" fill="white" />
    </svg>


    <span
      className="absolute left-1/2 top-1/2 z-10 font-instrument text-xl font-semibold -translate-x-1/2 -translate-y-1/2"
      style={{ color }}
    >
      {number}
    </span>
  </div>
);

const HowItWorks = () => {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <section className="flex min-h-[80dvh] flex-col items-center px-5 py-12 sm:py-24 md:min-h-screen md:justify-center md:px-6">
      <h2 className="mb-16 text-center font-instrument text-5xl font-medium sm:text-6xl md:mb-24 md:text-7xl">
        How it{" "}
        <span className="bg-gradient-to-tr from-foreground from-30% via-[#B6F09C] to-[#48C78E] bg-clip-text text-transparent">
          works.
        </span>
      </h2>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 md:px-16">
        {steps.map((step, index) => {
          const isEven = index % 2 === 1;
          const imageSrc = isLight ? step.imageLight : step.image;

          return (
            <div
              key={step.number}
              className={`flex flex-col gap-12 md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}
            >
              {/* Text Content */}
              <div className="flex flex-1 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <ScribbleCircle number={step.number} color={step.color} />
                  <h3
                    className="font-instrument text-2xl md:text-3xl"
                    style={{
                      backgroundImage: step.gradient,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      display: "inline-block"
                    }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="sm:max-w-sm max-w-[250px] pl-[45px] font-anonymous  text-foreground/70 sm:text-sm text-xs">
                  {step.description}
                </p>
              </div>

              {/* Image Content */}
              <div className="flex flex-1 justify-center">
                <div className="relative">
                  <img
                    src={imageSrc}
                    alt={step.imageAlt}
                    className="h-auto w-full max-w-[280px] object-contain opacity-90 md:max-w-[400px]"
                    loading="lazy"
                  />

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;

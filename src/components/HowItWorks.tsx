import { useTheme } from "next-themes";
import howItWorksImg from "@/assets/howitworks.png";
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

const darkSteps = [
  {
    number: "1",
    label: stepLabel1,
    labelLight: stepLabel1Light,
    image: stepSunday,
    imageLight: stepSundayLight,
    imageAlt: "Filling out profile",
    imgSize: "w-36 h-28",
    labelMt: "",
    imgMt: "",
  },
  {
    number: "2",
    label: stepLabel2,
    labelLight: stepLabel2Light,
    image: stepProfile,
    imageLight: stepProfileLight,
    imageAlt: "Group of people",
    imgSize: "w-44 h-36",
    labelMt: "mt-6",
    imgMt: "",
  },
  {
    number: "3",
    label: stepLabel3,
    labelLight: stepLabel3Light,
    image: stepPick,
    imageLight: stepPickLight,
    imageAlt: "Calendar with date picked",
    imgSize: "w-32 h-28",
    labelMt: "",
    imgMt: "-mt-4",
  },
  {
    number: "4",
    label: stepLabel4,
    labelLight: stepLabel4Light,
    image: stepShowup,
    imageLight: stepShowupLight,
    imageAlt: "Couple at restaurant",
    imgSize: "w-44 h-36",
    labelMt: "",
    imgMt: "",
  },
];

const HowItWorks = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className="px-6 pb-10 pt-6 md:pt-8">
      <h2 className="mb-6 text-center font-heading text-3xl font-medium md:mb-8 md:text-4xl">
        How it works.
      </h2>
      <div className="mx-auto max-w-2xl space-y-2 md:space-y-3">
        {darkSteps.map((step, index) => {
          const isEven = index % 2 === 0;
          const labelSrc = isLight ? step.labelLight : step.label;
          const imageSrc = isLight ? step.imageLight : step.image;

          const imageEl = (
            <div className={`flex flex-shrink-0 ${step.imgMt}`}>
              <div className={`${step.imgSize}`}>
                <img
                  src={imageSrc}
                  alt={step.imageAlt}
                  className="max-h-full max-w-full object-contain opacity-90"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>
            </div>
          );

          const textEl = (
            <div className={`flex flex-shrink-0 items-start ${step.labelMt}`}>
              <img
                src={labelSrc}
                alt={`Step ${step.number}`}
                className="h-auto w-56 object-contain"
              />
            </div>
          );

          return (
            <div key={step.number} className={`flex items-start justify-center gap-10 md:gap-14 ${index === 2 ? "-mt-4" : ""}`}>
              {isEven ? <>{textEl}{imageEl}</> : <>{imageEl}{textEl}</>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;

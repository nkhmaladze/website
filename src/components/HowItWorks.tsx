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

const darkSteps = [
  {
    number: "1",
    label: stepLabel1,
    labelLight: stepLabel1Light,
    image: stepSunday,
    imageLight: stepSundayLight,
    imageAlt: "Filling out profile",
    mobileFrame: "h-24 w-24 sm:h-28 sm:w-28",
    midFrame: "h-32 w-32",
    mobileImageClass: "scale-110",
    midImageClass: "scale-110",
    mobileTextClass: "",
    midTextClass: "",
    imgSize: "w-24 h-20 sm:w-28 sm:h-24 md:w-44 md:h-36",
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
    mobileFrame: "h-24 w-24 sm:h-28 sm:w-28",
    midFrame: "h-32 w-32",
    mobileImageClass: "scale-[1.45]",
    midImageClass: "scale-[1.4]",
    mobileTextClass: "translate-x-2 sm:translate-x-3",
    midTextClass: "translate-x-3",
    imgSize: "w-28 h-24 sm:w-32 sm:h-28 md:w-56 md:h-44",
    labelMt: "md:-mt-10",
    imgMt: "",
  },
  {
    number: "3",
    label: stepLabel3,
    labelLight: stepLabel3Light,
    image: stepPick,
    imageLight: stepPickLight,
    imageAlt: "Calendar with date picked",
    mobileFrame: "h-24 w-24 sm:h-28 sm:w-28",
    midFrame: "h-32 w-32",
    mobileImageClass: "scale-110",
    midImageClass: "scale-110",
    mobileTextClass: "",
    midTextClass: "",
    imgSize: "w-24 h-20 sm:w-28 sm:h-24 md:w-40 md:h-36",
    labelMt: "",
    imgMt: "",
  },
  {
    number: "4",
    label: stepLabel4,
    labelLight: stepLabel4Light,
    image: stepShowup,
    imageLight: stepShowupLight,
    imageAlt: "Couple at restaurant",
    mobileFrame: "h-24 w-24 sm:h-28 sm:w-28",
    midFrame: "h-32 w-32",
    mobileImageClass: "scale-[1.4]",
    midImageClass: "scale-[1.35]",
    mobileTextClass: "translate-x-2 sm:translate-x-3",
    midTextClass: "translate-x-3",
    imgSize: "w-28 h-24 sm:w-32 sm:h-28 md:w-56 md:h-44",
    labelMt: "md:-mt-6",
    imgMt: "md:mt-6",
  },
];

const HowItWorks = () => {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <section className="flex min-h-[100svh] flex-col items-center px-5 py-20 md:min-h-screen md:justify-center md:px-6 md:py-10">
      <h2 className="mb-8 text-center font-heading text-3xl font-medium sm:text-4xl md:mb-10 md:text-5xl">
        How it works.
      </h2>

      <div className="mx-auto flex w-full max-w-sm flex-col gap-8 sm:max-w-md md:hidden">
        {darkSteps.map((step, index) => {
          const isEven = index % 2 === 0;
          const labelSrc = isLight ? step.labelLight : step.label;
          const imageSrc = isLight ? step.imageLight : step.image;
          const mobileRowClass = isEven
            ? "grid-cols-[minmax(0,1fr)_6.5rem]"
            : "grid-cols-[6.5rem_minmax(0,1fr)]";

          return (
            <div
              key={step.number}
              className={`grid items-center gap-x-3 gap-y-2 ${mobileRowClass}`}
            >
              {isEven ? (
                <>
                  <img
                    src={labelSrc}
                    alt={`Step ${step.number}`}
                    className={`h-auto w-full max-w-[16rem] justify-self-start object-contain ${step.mobileTextClass}`}
                  />
                  <div className="flex justify-self-end">
                    <div className={`flex items-center justify-center ${step.mobileFrame}`}>
                      <img
                        src={imageSrc}
                        alt={step.imageAlt}
                        className={`max-h-full max-w-full origin-center object-contain opacity-90 ${step.mobileImageClass}`}
                        loading="lazy"
                        width={512}
                        height={512}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-self-start">
                    <div className={`flex items-center justify-center ${step.mobileFrame}`}>
                      <img
                        src={imageSrc}
                        alt={step.imageAlt}
                        className={`max-h-full max-w-full origin-center object-contain opacity-90 ${step.mobileImageClass}`}
                        loading="lazy"
                        width={512}
                        height={512}
                      />
                    </div>
                  </div>
                  <img
                    src={labelSrc}
                    alt={`Step ${step.number}`}
                    className={`h-auto w-full max-w-[16rem] justify-self-start object-contain ${step.mobileTextClass}`}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="mx-auto hidden w-full max-w-md flex-col gap-7 md:max-lg:flex">
        {darkSteps.map((step, index) => {
          const isEven = index % 2 === 0;
          const labelSrc = isLight ? step.labelLight : step.label;
          const imageSrc = isLight ? step.imageLight : step.image;

          return (
            <div
              key={step.number}
              className={`grid items-center gap-x-5 ${isEven ? "grid-cols-[minmax(0,1fr)_9rem]" : "grid-cols-[9rem_minmax(0,1fr)]"}`}
            >
              {isEven ? (
                <>
                  <img
                    src={labelSrc}
                    alt={`Step ${step.number}`}
                    className={`h-auto w-full max-w-[18rem] object-contain ${step.midTextClass}`}
                  />
                  <div className="flex justify-self-end">
                    <div className={`flex items-center justify-center ${step.midFrame}`}>
                      <img
                        src={imageSrc}
                        alt={step.imageAlt}
                        className={`max-h-full max-w-full origin-center object-contain opacity-90 ${step.midImageClass}`}
                        loading="lazy"
                        width={512}
                        height={512}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-self-start">
                    <div className={`flex items-center justify-center ${step.midFrame}`}>
                      <img
                        src={imageSrc}
                        alt={step.imageAlt}
                        className={`max-h-full max-w-full origin-center object-contain opacity-90 ${step.midImageClass}`}
                        loading="lazy"
                        width={512}
                        height={512}
                      />
                    </div>
                  </div>
                  <img
                    src={labelSrc}
                    alt={`Step ${step.number}`}
                    className={`h-auto w-full max-w-[18rem] object-contain ${step.midTextClass}`}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="mx-auto hidden w-full max-w-[56rem] flex-col gap-6 lg:flex xl:max-w-[60rem]">
        {darkSteps.map((step, index) => {
          const isEven = index % 2 === 0;
          const labelSrc = isLight ? step.labelLight : step.label;
          const imageSrc = isLight ? step.imageLight : step.image;

          const imageEl = (
            <div
              className={`flex flex-shrink-0 justify-center ${step.imgMt}`}
            >
              <div className={step.imgSize}>
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
            <div
              className={`flex min-w-0 flex-shrink-0 items-start ${step.labelMt} ${isEven ? "justify-self-start" : "justify-self-end lg:translate-x-4 xl:translate-x-6"}`}
            >
              <img
                src={labelSrc}
                alt={`Step ${step.number}`}
                className="h-auto w-64 max-w-full object-contain xl:w-72"
              />
            </div>
          );

          return (
            <div
              key={step.number}
              className={`mx-auto grid items-center justify-center gap-x-8 xl:gap-x-10 ${isEven ? "grid-cols-[18rem_13rem] xl:grid-cols-[20rem_14rem]" : "grid-cols-[13rem_18rem] xl:grid-cols-[14rem_20rem]"}`}
            >
              {isEven ? <>{textEl}{imageEl}</> : <>{imageEl}{textEl}</>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;

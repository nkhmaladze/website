import howItWorksImg from "@/assets/howitworks.png";
import stepProfile from "@/assets/step-profile.png";
import stepSunday from "@/assets/step-sunday.png";
import stepPick from "@/assets/step-pick.png";
import stepShowup from "@/assets/step-showup.png";
import stepLabel1 from "@/assets/step-label-1.png";
import stepLabel2 from "@/assets/step-label-2.png";
import stepLabel3 from "@/assets/step-label-3.png";
import stepLabel4 from "@/assets/step-label-4.png";

const steps = [
  {
    number: "1",
    label: stepLabel1,
    description: "Your type, your vibe, your schedule, your food taste. We'll handle the rest.",
    image: stepSunday,
    imageAlt: "Filling out profile",
    imgSize: "w-36 h-28",
    labelMt: "",
    imgMt: "",
  },
  {
    number: "2",
    label: stepLabel2,
    description: "Every week, a fresh set of matches — each one already comes with a restaurant, a day, and a time.",
    image: stepProfile,
    imageAlt: "Clock showing Sunday",
    imgSize: "w-44 h-36",
    labelMt: "mt-6",
    imgMt: "",
  },
  {
    number: "3",
    label: stepLabel3,
    description: "Send requests, get requests, adjust the time if you need to. First one you both say yes to? That's your date this week.",
    image: stepPick,
    imageAlt: "Calendar with date picked",
    imgSize: "w-32 h-28",
    labelMt: "",
    imgMt: "-mt-4",
  },
  {
    number: "4",
    label: stepLabel4,
    description: 'No small talk. No "let\'s grab drinks sometime." A real dinner date, this week, with someone actually worth meeting.',
    image: stepShowup,
    imageAlt: "Couple at restaurant",
    imgSize: "w-44 h-36",
    labelMt: "",
    imgMt: "",
  },
];

const HowItWorks = () => {
  return (
    <section className="px-6 pb-10 pt-6 md:pt-8">
      <h2 className="mb-6 text-center font-heading text-3xl font-medium md:mb-8 md:text-4xl">
        How it works.
      </h2>
      <div className="mx-auto max-w-2xl space-y-2 md:space-y-3">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          const imageEl = (
            <div className={`flex flex-shrink-0 ${step.imgMt}`}>
              <div className={`${step.imgSize}`}>
                <img
                  src={step.image}
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
                src={step.label}
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

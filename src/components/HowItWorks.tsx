import stepProfile from "@/assets/step-profile.png";
import stepSunday from "@/assets/step-sunday.png";
import stepPick from "@/assets/step-pick.png";
import stepShowup from "@/assets/step-showup.png";

const steps = [
  {
    number: "1",
    title: "Tell us about you.",
    description: "Your type, your vibe, your schedule, your food taste. We'll handle the rest.",
    image: stepProfile,
    imageAlt: "Filling out profile",
    color: "text-teal-300",
    borderColor: "border-teal-300",
    imgSize: "w-52 h-44",
  },
  {
    number: "2",
    title: "Sunday, 11:59 PM.",
    description: "Every week, a fresh set of matches — each one already comes with a restaurant, a day, and a time.",
    image: stepSunday,
    imageAlt: "Clock showing Sunday",
    color: "text-amber-200",
    borderColor: "border-amber-200",
    imgSize: "w-40 h-32",
  },
  {
    number: "3",
    title: "Pick your date.",
    description: "Send requests, get requests, adjust the time if you need to. First one you both say yes to? That's your date this week.",
    image: stepPick,
    imageAlt: "Calendar with date picked",
    color: "text-violet-300",
    borderColor: "border-violet-300",
    imgSize: "w-40 h-32",
  },
  {
    number: "4",
    title: "Just show up.",
    description: 'No small talk. No "let\'s grab drinks sometime." A real dinner date, this week, with someone actually worth meeting.',
    image: stepShowup,
    imageAlt: "Couple at restaurant",
    color: "text-emerald-400",
    borderColor: "border-emerald-400",
    imgSize: "w-52 h-44",
  },
];

const HowItWorks = () => {
  return (
    <section className="px-6 pb-10 pt-6 md:pt-8">
      <h2 className="mb-6 text-center font-heading text-3xl font-medium md:mb-8 md:text-4xl">
        How it wor<span className="text-teal-400/90">ks</span>.
      </h2>
      <div className="mx-auto max-w-3xl space-y-2 md:space-y-3">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={step.number}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-3 md:gap-5`}
            >
              <div className={`flex flex-shrink-0 ${step.imgSize} items-center justify-center`}>
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  className="max-h-full max-w-full object-contain opacity-90"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>

              <div className={`flex-1 ${isEven ? "md:text-left" : "md:text-right"}`}>
                <div className={`mb-1 flex items-center gap-3 ${!isEven ? "md:justify-end" : ""}`}>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs font-mono ${step.borderColor} ${step.color}`}
                  >
                    {step.number}
                  </span>
                  <h3 className={`font-heading text-base font-semibold ${step.color}`}>{step.title}</h3>
                </div>
                <p
                  className={`max-w-xs text-xs leading-relaxed text-muted-foreground ${!isEven ? "md:ml-auto" : ""}`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;

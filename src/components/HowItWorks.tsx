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
    color: "text-pink-300",
    borderColor: "border-pink-300",
    imgSize: "w-52 h-44",
  },
  {
    number: "2",
    title: "Sunday, 11:59 PM.",
    description: "Every week, a fresh set of matches — each one already comes with a restaurant, a day, and a time.",
    image: stepSunday,
    imageAlt: "Clock showing Sunday",
    color: "text-yellow-200",
    borderColor: "border-yellow-200",
  },
  {
    number: "3",
    title: "Pick your date.",
    description: "Send requests, get requests, adjust the time if you need to. First one you both say yes to? That's your date this week.",
    image: stepPick,
    imageAlt: "Calendar with date picked",
    color: "text-emerald-300",
    borderColor: "border-emerald-300",
  },
  {
    number: "4",
    title: "Just show up.",
    description: 'No small talk. No "let\'s grab drinks sometime." A real dinner date, this week, with someone actually worth meeting.',
    image: stepShowup,
    imageAlt: "Couple at restaurant",
    color: "text-orange-300",
    borderColor: "border-orange-300",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6">
      <h2 className="font-heading text-3xl md:text-4xl text-center mb-16 font-medium">
        How it works.
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={step.number}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-4 md:gap-8`}
            >
              {/* Image */}
              <div className="flex-shrink-0 w-40 h-32 flex items-center justify-center">
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  className="max-w-full max-h-full object-contain opacity-80"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>

              {/* Text */}
              <div className={`flex-1 ${isEven ? "md:text-left" : "md:text-right"}`}>
                <div className={`flex items-center gap-3 mb-1 ${!isEven ? "md:justify-end" : ""}`}>
                  <span className={`flex items-center justify-center w-6 h-6 rounded-full border ${step.borderColor} ${step.color} text-xs font-mono`}>
                    {step.number}
                  </span>
                  <h3 className={`${step.color} text-base font-heading font-semibold`}>
                    {step.title}
                  </h3>
                </div>
                <p className={`text-muted-foreground text-xs leading-relaxed max-w-xs ${!isEven ? "md:ml-auto" : ""}`}>
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

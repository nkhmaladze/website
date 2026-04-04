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
  },
  {
    number: "2",
    title: "Sunday, 11:59 PM.",
    description: "Every week, a fresh set of matches — each one already comes with a restaurant, a day, and a time.",
    image: stepSunday,
    imageAlt: "Clock showing Sunday",
  },
  {
    number: "3",
    title: "Pick your date.",
    description: "Send requests, get requests, adjust the time if you need to. First one you both say yes to? That's your date this week.",
    image: stepPick,
    imageAlt: "Calendar with date picked",
  },
  {
    number: "4",
    title: "Just show up.",
    description: 'No small talk. No "let\'s grab drinks sometime." A real dinner date, this week, with someone actually worth meeting.',
    image: stepShowup,
    imageAlt: "Couple at restaurant",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6">
      <h2 className="font-heading text-3xl md:text-4xl text-center mb-16 font-medium">
        How it works.
      </h2>
      <div className="max-w-2xl mx-auto space-y-12">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-6 md:gap-10`}
          >
            <div className={`flex-1 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
              <div className={`flex items-center gap-3 mb-2 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                <span className="flex items-center justify-center w-7 h-7 rounded-full border border-step text-step text-xs font-mono">
                  {step.number}
                </span>
                <h3 className="text-step text-lg font-heading font-semibold">
                  {step.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src={step.image}
                alt={step.imageAlt}
                className="w-36 h-36 object-contain opacity-70"
                loading="lazy"
                width={512}
                height={512}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

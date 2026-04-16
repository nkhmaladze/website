import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import comingSoonDark from "@/assets/coming-soon-dark.png";
import comingSoonLight from "@/assets/coming-soon-light.png";

const Events = () => {
  const { resolvedTheme } = useTheme();
  const comingSoonImage = resolvedTheme === "light" ? comingSoonLight : comingSoonDark;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <img
        src={comingSoonImage}
        alt="Flipped coming soon illustration"
        className="mb-8 w-full max-w-4xl opacity-95"
      />
      <h1 className="mb-4 font-heading text-4xl font-medium md:text-5xl">Coming Soon.</h1>
      <p className="mb-8 max-w-md font-mono text-sm text-muted-foreground">
        Flipped events are on the way. Stay tuned.
      </p>
      <Link
        to="/"
        className="rounded-full border border-foreground px-6 py-2.5 text-sm font-mono uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
      >
        Back home
      </Link>
    </div>
  );
};

export default Events;

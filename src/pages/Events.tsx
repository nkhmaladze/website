import { Link } from "react-router-dom";
import crystalIcon from "@/assets/crystal-icon.png";

const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <img src={crystalIcon} alt="Flipped" className="w-12 h-12 mb-6" />
      <h1 className="font-heading text-4xl md:text-5xl font-medium mb-4">Coming Soon.</h1>
      <p className="text-muted-foreground font-mono text-sm mb-8">
        Flipped events are on the way. Stay tuned.
      </p>
      <Link
        to="/"
        className="px-6 py-2.5 border border-foreground rounded-full text-sm font-mono uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-colors"
      >
        Back home
      </Link>
    </div>
  );
};

export default Events;

import { Link } from "react-router-dom";
import flippedLogo from "@/assets/flipped-logo.png";

interface NavbarProps {
  onOpenAbout: () => void;
}

const navBtnClass =
  "inline-flex min-h-9 shrink-0 items-center justify-center px-4 leading-none bg-[#2a2a2a] rounded-lg text-xs font-mono uppercase tracking-wider text-foreground hover:bg-[#353535] transition-colors";

const Navbar = ({ onOpenAbout }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 pb-3 pt-[max(0.875rem,env(safe-area-inset-top,0px))]">
      <div className="relative mx-auto max-w-6xl">
        <Link
          to="/"
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 font-heading text-lg italic text-foreground md:text-xl"
        >
          Flipped
        </Link>
        <div className="flex justify-center px-20 sm:px-24 md:px-28">
          <div className="grid w-full max-w-xl grid-cols-[1fr_auto_1fr] items-center gap-x-2 gap-y-2 md:max-w-2xl md:gap-x-3">
            <div className="flex items-center justify-end gap-2 md:gap-3">
              <button type="button" onClick={onOpenAbout} className={navBtnClass}>
                About
              </button>
              <Link to="/blog" className={navBtnClass}>
                Blog
              </Link>
            </div>
            <Link to="/" className="inline-flex shrink-0 items-center justify-center justify-self-center">
              <img src={flippedLogo} alt="Flipped" className="h-9 w-9 shrink-0" />
            </Link>
            <div className="flex items-center justify-start gap-2 md:gap-3">
              <a href="#" className={navBtnClass}>
                Download
              </a>
              <Link to="/events" className={navBtnClass}>
                Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

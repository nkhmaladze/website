import { Link } from "react-router-dom";
import crystalIcon from "@/assets/crystal-icon.png";

interface NavbarProps {
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

const navBtnClass =
  "px-5 py-2 bg-[#2a2a2a] rounded-lg text-xs font-mono uppercase tracking-wider text-foreground hover:bg-[#353535] transition-colors";

const Navbar = ({ onOpenAbout, onOpenContact }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-6">
      <div className="flex items-center gap-2 md:gap-3">
        <button onClick={onOpenAbout} className={navBtnClass}>
          About
        </button>
        <Link to="/blog" className={navBtnClass}>
          Blog
        </Link>
        <img src={crystalIcon} alt="Flipped" className="w-9 h-9 mx-1" />
        <a href="#" className={navBtnClass}>
          Download
        </a>
        <Link to="/events" className={navBtnClass}>
          Events
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

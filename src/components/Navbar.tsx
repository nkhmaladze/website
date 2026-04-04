import { Link } from "react-router-dom";
import crystalIcon from "@/assets/crystal-icon.png";

interface NavbarProps {
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

const Navbar = ({ onOpenAbout, onOpenContact }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-6">
      <div className="flex items-center gap-3 md:gap-4">
        <button
          onClick={onOpenAbout}
          className="px-4 py-1.5 border border-muted-foreground/30 rounded-full text-xs font-mono uppercase tracking-wider text-foreground hover:bg-secondary transition-colors"
        >
          About
        </button>
        <Link
          to="/blog"
          className="px-4 py-1.5 border border-muted-foreground/30 rounded-full text-xs font-mono uppercase tracking-wider text-foreground hover:bg-secondary transition-colors"
        >
          Blog
        </Link>
        <img src={crystalIcon} alt="Flipped" className="w-8 h-8 mx-2" />
        <a
          href="#"
          className="px-4 py-1.5 border border-muted-foreground/30 rounded-full text-xs font-mono uppercase tracking-wider text-foreground hover:bg-secondary transition-colors"
        >
          Download
        </a>
        <Link
          to="/events"
          className="px-4 py-1.5 border border-muted-foreground/30 rounded-full text-xs font-mono uppercase tracking-wider text-foreground hover:bg-secondary transition-colors"
        >
          Events
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

interface FooterProps {
  onOpenLegal: () => void;
  onOpenContact: () => void;
}

const Footer = ({ onOpenLegal, onOpenContact }: FooterProps) => {
  return (
    <footer className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Links row */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={onOpenLegal}
            className="px-4 py-1.5 border border-muted-foreground/30 rounded-full text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            Legal
          </button>
          <button
            onClick={onOpenContact}
            className="px-4 py-1.5 border border-muted-foreground/30 rounded-full text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {["LinkedIn", "X", "YouTube", "Instagram", "Threads"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              aria-label={platform}
            >
              {platform === "LinkedIn" && "in"}
              {platform === "X" && "𝕏"}
              {platform === "YouTube" && "▶"}
              {platform === "Instagram" && "◎"}
              {platform === "Threads" && "@"}
            </a>
          ))}
        </div>

        {/* Big brand text */}
        <div className="text-center">
          <h2 className="font-heading text-6xl md:text-8xl font-bold text-foreground/5 italic select-none">
            Flipped
          </h2>
        </div>

        <p className="text-center text-muted-foreground/50 text-xs font-mono mt-4">
          © 2025 Flipped Social, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

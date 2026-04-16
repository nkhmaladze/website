interface FooterProps {
  onOpenLegal: () => void;
  onOpenContact: () => void;
}

const footerBtnClass =
  "inline-flex min-h-9 items-center justify-center rounded-lg px-5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors bg-[#D5D1CC] hover:bg-[#C8C4BF] dark:bg-[#2a2a2a] dark:hover:bg-[#353535]";

const Footer = ({ onOpenLegal, onOpenContact }: FooterProps) => {
  return (
    <footer className="relative flex min-h-[220px] flex-col justify-end overflow-hidden px-6 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] pt-10 md:h-[25vh] md:min-h-0 md:pb-8 md:pt-0">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden
      >
        <span className="whitespace-nowrap font-heading text-[clamp(2.5rem,16vh,10rem)] font-bold italic text-foreground/[0.07]">
          Flipped
        </span>
      </div>

      <div className="relative w-full">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
          <p className="order-2 font-mono text-xs text-muted-foreground/80 sm:order-1">
            © 2026 Flipped Social, Inc.
          </p>
          <div className="order-1 flex flex-col items-start gap-3 sm:order-2 sm:items-end">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button type="button" onClick={onOpenLegal} className={footerBtnClass}>
                Legal
              </button>
              <button type="button" onClick={onOpenContact} className={footerBtnClass}>
                Contact
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/80 sm:gap-5">
              {[
                { label: "LinkedIn", char: "in" },
                { label: "X", char: "𝕏" },
                { label: "YouTube", char: "▶" },
                { label: "Instagram", char: "◎" },
                { label: "TikTok", char: "♪" },
              ].map(({ label, char }) => (
                <a
                  key={label}
                  href="#"
                  className="transition-colors hover:text-foreground"
                  aria-label={label}
                >
                  {char}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

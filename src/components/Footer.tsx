interface FooterProps {
  onOpenLegal: () => void;
  onOpenContact: () => void;
}

const footerBtnClass =
  "inline-flex min-h-9 items-center justify-center rounded-lg bg-[#2a2a2a] px-5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:bg-[#353535]";

const Footer = ({ onOpenLegal, onOpenContact }: FooterProps) => {
  return (
    <footer className="relative overflow-hidden px-6 pb-8 pt-6">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none"
        aria-hidden
      >
        <span className="whitespace-nowrap font-heading text-[clamp(3.5rem,16vw,10rem)] font-bold italic text-foreground/[0.07]">
          Flipped
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[9rem] max-w-6xl flex-col justify-end">
        <div className="flex flex-col gap-6 pt-10 sm:flex-row sm:items-end sm:justify-between sm:gap-5 sm:pt-12">
          <p className="order-2 font-mono text-xs text-muted-foreground/80 sm:order-1">
            © 2024 Flipped Social, Inc.
          </p>
          <div className="order-1 flex flex-col items-start gap-3 sm:order-2 sm:items-end">
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={onOpenLegal} className={footerBtnClass}>
                Legal
              </button>
              <button type="button" onClick={onOpenContact} className={footerBtnClass}>
                Contact
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/80">
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

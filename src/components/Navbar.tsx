import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import flippedLogo from "@/assets/flipped-logo.png";

interface NavbarProps {
  onOpenAbout: () => void;
}

const navBtnClass =
  "inline-flex min-h-9 shrink-0 items-center justify-center px-4 leading-none rounded-lg text-xs font-mono uppercase tracking-wider text-foreground transition-colors bg-[#D5D1CC] hover:bg-[#C8C4BF] dark:bg-[#2a2a2a] dark:hover:bg-[#353535]";

const socials = [
  { label: "Instagram" },
  { label: "LinkedIn" },
  { label: "TikTok" },
  { label: "X (Twitter)" },
  { label: "YouTube" },
];

const Navbar = ({ onOpenAbout }: NavbarProps) => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
      if (socialRef.current && !socialRef.current.contains(e.target as Node)) setSocialOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 pb-3 pt-[max(0.875rem,env(safe-area-inset-top,0px))]">

      {/* Mobile layout */}
      <div className="flex items-center justify-center gap-3 md:hidden">
        <Link to="/">
          <img src={flippedLogo} alt="Flipped" className="h-9 w-9 shrink-0" />
        </Link>

        {/* Hamburger menu */}
        <div ref={menuRef} className="relative">
          <button
            type="button"
            onClick={() => { setMenuOpen(o => !o); setSocialOpen(false); }}
            className={navBtnClass}
            aria-label="Menu"
          >
            ≡
          </button>
          {menuOpen && (
            <div className="absolute left-1/2 top-full mt-2 w-44 -translate-x-1/2 rounded-lg bg-[#D5D1CC] dark:bg-[#2a2a2a] py-1 shadow-lg">
              {[
                { label: "About", action: () => { onOpenAbout(); setMenuOpen(false); } },
                { label: "Blog", href: "/blog" },
                { label: "Download", href: "#" },
                { label: "Events", href: "/events" },
                { label: theme === "dark" ? "Light Mode" : "Dark Mode", action: () => { setTheme(theme === "dark" ? "light" : "dark"); setMenuOpen(false); } },
              ].map((item) =>
                item.href ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-5 py-3 font-mono text-xs uppercase tracking-wider text-foreground hover:bg-[#C8C4BF] dark:hover:bg-[#353535] border-b border-black/10 dark:border-white/10 last:border-0"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    onClick={item.action}
                    className="w-full text-left block px-5 py-3 font-mono text-xs uppercase tracking-wider text-foreground hover:bg-[#C8C4BF] dark:hover:bg-[#353535] border-b border-black/10 dark:border-white/10 last:border-0"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
          )}
        </div>

        {/* Social menu */}
        <div ref={socialRef} className="relative">
          <button
            type="button"
            onClick={() => { setSocialOpen(o => !o); setMenuOpen(false); }}
            className={navBtnClass}
            aria-label="Social links"
          >
            @
          </button>
          {socialOpen && (
            <div className="absolute right-0 top-full mt-2 w-44 rounded-lg bg-[#D5D1CC] dark:bg-[#2a2a2a] py-1 shadow-lg">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  onClick={() => setSocialOpen(false)}
                  className="block px-5 py-3 font-mono text-xs uppercase tracking-wider text-foreground hover:bg-[#C8C4BF] dark:hover:bg-[#353535] border-b border-black/10 dark:border-white/10 last:border-0"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="relative mx-auto hidden max-w-6xl md:block">
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
              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={navBtnClass}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? "☀" : "☽"}
              </button>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;

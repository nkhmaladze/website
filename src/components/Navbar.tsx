import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import flippedLogoDark from "@/assets/flipped-logo-dark.png";
import flippedLogoLight from "@/assets/flipped-logo-light.png";
import navBurgerDark from "@/assets/nav-burger-dark.svg";
import navBurgerLight from "@/assets/nav-burger-light.svg";
import navAtDark from "@/assets/nav-at-dark.svg";
import navAtLight from "@/assets/nav-at-light.svg";

interface NavbarProps {
  onOpenAbout: () => void;
}

const navBtnClass =
  "inline-flex min-h-9 shrink-0 items-center justify-center px-4 leading-none rounded-lg text-xs font-mono uppercase tracking-wider text-foreground transition-colors bg-secondary hover:bg-muted";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/flippedsocial" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/flippedsocial/about/?viewAsMember=true" },
  { label: "TikTok", href: "https://www.tiktok.com/@flippedsocial?_r=1&_t=ZT-95iIpKTEqZa" },
  { label: "X (Twitter)", href: "https://x.com/FlippedSocial" },
  { label: "YouTube", href: "https://www.youtube.com/@flippedsocial" },
];

const Navbar = ({ onOpenAbout }: NavbarProps) => {
  const { resolvedTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const logoSrc = resolvedTheme === "light" ? flippedLogoLight : flippedLogoDark;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
      if (socialRef.current && !socialRef.current.contains(e.target as Node)) setSocialOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 pb-3 pt-[max(0.875rem,env(safe-area-inset-top,0px))] backdrop-blur-md">
      {/* Mobile layout */}
      <div className="mx-auto flex w-full items-center justify-center gap-3 md:hidden">
        <Link to="/">
          <img src={logoSrc} alt="Flipped" className="h-10 w-10 shrink-0 rounded-xl" />
        </Link>

        {/* Hamburger menu */}
        <div ref={menuRef} className="relative">
          <button
            type="button"
            onClick={() => { setMenuOpen(o => !o); setSocialOpen(false); }}
            className={navBtnClass}
            aria-label="Menu"
          >
            <img src={resolvedTheme === "light" ? navBurgerLight : navBurgerDark} alt="" className="h-5 w-5" aria-hidden />
          </button>
          {menuOpen && (
            <div className="absolute left-1/2 top-full mt-2 w-44 -translate-x-1/2 rounded-lg bg-[#D5D1CC] py-1 shadow-lg dark:bg-[#2a2a2a]">
              {[
                { label: "About", action: () => { onOpenAbout(); setMenuOpen(false); } },
                { label: "Blog", href: "/blog" },
                { label: "Download", href: "#" },
                { label: "Events", href: "/events" },
              ].map((item) =>
                item.href ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-black/10 px-5 py-3 font-mono text-xs uppercase tracking-wider text-foreground hover:bg-[#C8C4BF] last:border-0 dark:border-white/10 dark:hover:bg-[#353535]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    onClick={item.action}
                    className="block w-full border-b border-black/10 px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-foreground hover:bg-[#C8C4BF] last:border-0 dark:border-white/10 dark:hover:bg-[#353535]"
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
            <img src={resolvedTheme === "light" ? navAtLight : navAtDark} alt="" className="h-5 w-5" aria-hidden />
          </button>
          {socialOpen && (
            <div className="absolute left-1/2 top-full mt-2 w-44 -translate-x-1/2 rounded-lg bg-[#D5D1CC] py-1 shadow-lg dark:bg-[#2a2a2a]">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSocialOpen(false)}
                  className="block border-b border-black/10 px-5 py-3 font-mono text-xs uppercase tracking-wider text-foreground hover:bg-[#C8C4BF] last:border-0 dark:border-white/10 dark:hover:bg-[#353535]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="relative hidden w-full md:block">
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
              <img src={logoSrc} alt="Flipped" className="h-10 w-10 shrink-0 rounded-xl" />
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

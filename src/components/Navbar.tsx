import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import flippedLogoDark from "@/assets/Flipped-navbar-logo.png";
import flippedLogoLight from "@/assets/flipped-logo-light.png";
import navBurgerDark from "@/assets/nav-burger-dark.svg";
import navBurgerLight from "@/assets/nav-burger-light.svg";
import navAtDark from "@/assets/nav-at-dark.svg";
import navAtLight from "@/assets/nav-at-light.svg";
import navVector from '@/assets/nav-Vector.svg'
import flippedBg from "@/assets/btn-bg.png";
import TextureButton from "./ui/texture-btn";

interface NavbarProps {
  onOpenAbout: () => void;
}

const navBtnClass =
  "inline-flex items-center w-[115px] relative h-[46px] justify-center px-8 py-[13px] " +
  "rounded-[6px] border border-[#252525] text-base font-anonymous uppercase tracking-wider text-[#F9F7EE] " +
  "transition-all duration-200 active:scale-[0.985] " +
  "bg-[#252525] " +
  "hover:bg-[#282828] " +
  // Subtle white inner highlight
  "shadow-[inset_0_0.2px_0px_0_rgba(255,255,255,0.3)] " +
  // Outer drop shadow
  "shadow-[0_6px_10px_0_rgba(0,0,0,0.25)]";

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
    <nav className="relative  max-w-maxw mx-auto w-full z-50 px-6 py-1">
      {/* Mobile layout */}
      <div className="mx-auto flex w-full items-center justify-center gap-3 md:hidden">


        <Link
          to="/"
        >
          <TextureButton
            className="!w-[50px]"
            src={navVector}
          />

        </Link>

        {/* Hamburger menu */}
        <div ref={menuRef} className="relative">
         

          <TextureButton
            className="!w-[50px]"
            onClick={() => { setMenuOpen(o => !o); setSocialOpen(false); }}
            src={resolvedTheme === "light" ? navBurgerLight : navBurgerDark}
          />
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
          

           <TextureButton
            className="!w-[50px]"
            onClick={() => { setSocialOpen(o => !o); setMenuOpen(false); }}
            src={resolvedTheme === "light" ? navAtLight : navAtDark}
          />
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

        <Link to="/">
          <h1 className="absolute left-0 top-1/2 z-10 -translate-y-1/2  font-playfair text-xl italic tracking-widest text-[#FFFFFF2A]  md:text-[32px]">Flipped</h1>
        </Link>
        <div className="flex justify-center px-20 sm:px-24 md:px-28">
          <div className="grid w-full max-w-xl grid-cols-[1fr_auto_1fr] items-center gap-x-2 gap-y-2 md:max-w-2xl md:gap-x-3">
            <div className="flex items-center justify-end gap-2 md:gap-3">

              <TextureButton
                text="About"
                onClick={onOpenAbout}
              />
              <Link to="/blog" >
                <TextureButton
                  text="Blog"
                />
              </Link>
            </div>
            {/* Middle Logo */}
            <Link
              to="/"
            >
              <TextureButton
                className="!w-[50px]"
                src={navVector}
              />

            </Link>
            <div className="flex items-center justify-start gap-2 md:gap-3">
              <a href="#">
                <TextureButton
                  text="Download"
                />
              </a>
              <Link to="/events">
                <TextureButton
                  text="Events"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;

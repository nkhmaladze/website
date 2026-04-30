import React, { useState, useRef, useEffect } from "react";
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
import { Flippedicon } from "@/svgs";

interface NavbarProps {
  onOpenAbout: () => void;
}


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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setSocialOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="relative  3xl:max-w-[1650px] max-w-[1350px] mx-auto w-full z-50 px-6 py-1">
      {/* Mobile layout */}
      <div ref={containerRef} className="relative mx-auto flex w-full items-center justify-center gap-3 md:hidden">
        <Link to="/">
          <TextureButton
            className="!w-[50px]"
            icon={<Flippedicon className="h-[34px] w-[34px]" />}
          />
        </Link>

        {/* Hamburger menu trigger */}
        <TextureButton
          className="!w-[50px]"
          onClick={() => { setMenuOpen(o => !o); setSocialOpen(false); }}
          src={resolvedTheme === "light" ? navBurgerLight : navBurgerDark}
        />

        {/* Social menu trigger */}
        <TextureButton
          className="!w-[50px]"
          onClick={() => { setSocialOpen(o => !o); setMenuOpen(false); }}
          src={resolvedTheme === "light" ? navAtLight : navAtDark}
        />

        {/* Unified Popups Positioned relative to the row center */}
        {menuOpen && (
          <div className="absolute left-1/2 top-full mt-2 w-44 px-4 -translate-x-1/2 rounded-lg bg-[#1E1E1E] py-1 shadow-lg dark:bg-[#2a2a2a] overflow-hidden z-50">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 z-0 pointer-events-none" style={{ backgroundImage: `url(${flippedBg})` }} />
            <div className="relative z-10 ">
              {[
                { label: "About", action: () => { onOpenAbout(); setMenuOpen(false); } },
                { label: "Blog", href: "/blog" },
                { label: "Download", href: "#" },
                { label: "Events", href: "/events" },
              ].map((item, index, array) => (
                <React.Fragment key={item.label}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 px-3 my-1.5 font-anonymous font-bold uppercase tracking-wider text-white hover:bg-[#C8C4BF1A] dark:hover:bg-[#353535] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={item.action}
                      className="block w-full py-2 px-3 my-1.5 text-left font-bold font-anonymous uppercase tracking-wider text-white hover:bg-[#C8C4BF1A] dark:hover:bg-[#353535] transition-colors"
                    >
                      {item.label}
                    </button>
                  )}
                  {index < array.length - 1 && <div className="nav-divider" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {socialOpen && (
          <div className="absolute left-1/2 top-full mt-2 w-44 px-4 -translate-x-1/2 rounded-lg bg-[#1E1E1E] py-1 shadow-lg dark:bg-[#2a2a2a] overflow-hidden z-50">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 z-0 pointer-events-none" style={{ backgroundImage: `url(${flippedBg})` }} />
            <div className="relative z-10">
              {socials.map((s, index, array) => (
                <React.Fragment key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSocialOpen(false)}
                    className="block py-2 px-3 my-1.5  font-anonymous font-bold uppercase tracking-wider text-white hover:bg-[#C8C4BF1A] dark:hover:bg-[#353535] transition-colors"
                  >
                    {s.label}
                  </a>
                  {index < array.length - 1 && <div className="nav-divider" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
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
                icon={<Flippedicon className="h-[34px] w-[34px]" />}
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

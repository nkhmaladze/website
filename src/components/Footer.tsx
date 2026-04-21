import { useTheme } from "next-themes";
import linkedinDark from "@/assets/social-linkedin-dark.svg";
import linkedinLight from "@/assets/social-linkedin-light.svg";
import xDark from "@/assets/social-x-dark.svg";
import xLight from "@/assets/social-x-light.svg";
import youtubeDark from "@/assets/social-youtube-dark.svg";
import youtubeLight from "@/assets/social-youtube-light.svg";
import instagramDark from "@/assets/social-instagram-dark.svg";
import instagramLight from "@/assets/social-instagram-light.svg";
import tiktokDark from "@/assets/social-tiktok-dark.svg";
import tiktokLight from "@/assets/social-tiktok-light.svg";

interface FooterProps {
  onOpenLegal: () => void;
  onOpenContact: () => void;
}

const footerBtnClass =
  "inline-flex min-h-9 items-center justify-center rounded-lg px-5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors bg-[#D5D1CC] hover:bg-[#C8C4BF] dark:bg-[#2a2a2a] dark:hover:bg-[#353535]";

const Footer = ({ onOpenLegal, onOpenContact }: FooterProps) => {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  const socials = [
    { label: "LinkedIn", darkSrc: linkedinDark, lightSrc: linkedinLight, href: "https://www.linkedin.com/company/flippedsocial/about/?viewAsMember=true" },
    { label: "X", darkSrc: xDark, lightSrc: xLight, href: "https://x.com/FlippedSocial" },
    { label: "YouTube", darkSrc: youtubeDark, lightSrc: youtubeLight, href: "https://www.youtube.com/@flippedsocial" },
    { label: "Instagram", darkSrc: instagramDark, lightSrc: instagramLight, href: "https://www.instagram.com/flippedsocial" },
    { label: "TikTok", darkSrc: tiktokDark, lightSrc: tiktokLight, href: "https://www.tiktok.com/@flippedsocial?_r=1&_t=ZT-95iIpKTEqZa" },
  ];

  return (
    <footer className="relative flex min-h-[220px] flex-col justify-end overflow-hidden px-6 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] pt-10 md:h-[25vh] md:min-h-0 md:pb-8 md:pt-0">
      <div
        className="pointer-events-none absolute inset-0 hidden items-center justify-center select-none sm:flex"
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
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              {socials.map(({ label, darkSrc, lightSrc, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="transition-opacity hover:opacity-70"
                  aria-label={label}
                >
                  <img
                    src={isLight ? lightSrc : darkSrc}
                    alt={label}
                    className="h-5 w-5 object-contain"
                  />
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

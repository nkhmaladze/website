import { useTheme } from "@/context/ThemeContext";
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
import TextureButton from "./ui/texture-btn";

interface FooterProps {
  onOpenLegal: () => void;
  onOpenContact: () => void;
}

const footerBtnClass =
  "inline-flex h-7 items-center justify-center rounded-[4px] border border-[#252525] bg-[#FFFFFF0D] px-4 font-anonymous text-[10px] uppercase tracking-widest text-[#F9F7EE] shadow-[inset_0_0.2px_0_0_rgba(255,255,255,0.2)] hover:bg-[#FFFFFF1A] transition-colors";

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
    <footer className="relative flex min-h-[300px] mb-0  flex-col justify-center overflow-hidden px-10  pt-20 md:min-h-[450px]">
      {/* Background Large Text */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden
      >
        <span
          className="whitespace-nowrap font-playfair xl:text-[437px] lg:text-[300px] md:text-[200px] text-[100px] font-light leading-none tracking-[-0.06em] text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(360deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Flipped
        </span>
      </div>


      <div className="mb-12 absolute top-4 right-24 flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-end sm:gap-8">
        <div className="flex gap-2">
          
          <TextureButton
            text="Legal"
            onClick={onOpenLegal}
            className="!text-sm !w-[63px] !h-[25px] !px-3 !py-1 relative"
          />
          <TextureButton
            text="Contact"
            onClick={onOpenContact}
            className="!text-sm !w-[63px] !h-[25px] !px-3 !py-1 relative"
          />
        </div>
        <div className="flex items-center gap-5">
          {socials.map(({ label, darkSrc, lightSrc, href }) => (
            <a
              key={label}
              href={href}
              target={href !== "#" ? "_blank" : undefined}
              rel={href !== "#" ? "noopener noreferrer" : undefined}
              className="opacity-100 transition-opacity hover:opacity-70"
              aria-label={label}
            >
              <img
                src={isLight ? lightSrc : darkSrc}
                alt={label}
                className="h-6 w-6 object-contain invert dark:invert-0"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="bottom-6 absolute left-20 flex justify-start">
        <p className="font-anonymous text-[10px] uppercase tracking-widest text-[#FFFFFF80]">
          © 2026 Flipped Social, Inc.
        </p>
      </div>

    </footer>
  );
};

export default Footer;

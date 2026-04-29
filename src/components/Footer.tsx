import { useTheme } from "@/context/ThemeContext";
import TextureButton from "./ui/texture-btn";
import { Instagram, Linkedin, Tiktok, Twitter, Youtube } from "@/svgs";
import HorizontalBorder from "./HorizontalBorder";

interface FooterProps {
  onOpenLegal: () => void;
  onOpenContact: () => void;
}

const footerBtnClass =
  "inline-flex h-7 items-center justify-center rounded-[4px] border border-[#252525] bg-[#FFFFFF0D] px-4 font-anonymous text-[10px] uppercase tracking-widest text-[#F9F7EE] shadow-[inset_0_0.2px_0_0_rgba(255,255,255,0.2)] hover:bg-[#FFFFFF1A] transition-colors";

const Footer = ({ onOpenLegal, onOpenContact }: FooterProps) => {
  const { resolvedTheme } = useTheme();

  const socials = [
    { label: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/company/flippedsocial/about/?viewAsMember=true" },
    { label: "X", Icon: Twitter, href: "https://x.com/FlippedSocial" },
    { label: "YouTube", Icon: Youtube, href: "https://www.youtube.com/@flippedsocial" },
    { label: "Instagram", Icon: Instagram, href: "https://www.instagram.com/flippedsocial" },
    { label: "TikTok", Icon: Tiktok, href: "https://www.tiktok.com/@flippedsocial?_r=1&_t=ZT-95iIpKTEqZa" },
  ];

  return (
    <footer className="relative flex min-h-[220px] h-full mb-0  flex-col justify-center overflow-hidden   pt-20 md:min-h-[500px]">
      {/* Background Large Text */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden
      >
        <span
          className="whitespace-nowrap font-playfair xl:text-[437px] lg:text-[300px] md:text-[200px] text-[118px] font-light leading-none tracking-[-0.06em] text-transparent bg-clip-text"
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


      <div className="mb-12 absolute top-4 right-8 sm:right-24 flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-end sm:gap-8">
        <div className="flex gap-2">

          <TextureButton
            text="Legal"
            onClick={onOpenLegal}
            className="!text-sm !w-[70px] !h-[30px] !px-3 !py-1 relative"
          />
          <TextureButton
            text="Contact"
            onClick={onOpenContact}
            className="!text-sm !w-[85px] !h-[30px] !px-3 !py-1 relative"
          />
        </div>
        <div className="sm:flex hidden items-center gap-5">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href !== "#" ? "_blank" : undefined}
              rel={href !== "#" ? "noopener noreferrer" : undefined}
              className="text-[#FFFFFF99] py-2 hover:text-white transition-colors duration-300"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="bottom-[9%] absolute sm:left-[17%] left-1/2 sm:-translate-x-0 -translate-x-1/2 flex justify-start">
        <p className="font-anonymous text-[10px] uppercase tracking-widest text-[#FFFFFF80]">
          © 2026 Flipped Social, Inc.
        </p>
      </div>

      <div className="absolute bottom-16 left-0 right-0">
        <HorizontalBorder />
      </div>

    </footer>
  );
};

export default Footer;

import { useTheme } from "@/context/ThemeContext";
import TextureButton from "./ui/texture-btn";
import { Instagram, Linkedin, Tiktok, Twitter, Youtube } from "@/svgs";
import HorizontalBorder from "./HorizontalBorder";
import FlippedText from "@/assets/Flipped-text.png";
import FlippedTextLight from "@/assets/Flipped-text-light.png";

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
    { label: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/company/flippedsocial/about/?viewAsMember=true" },
    { label: "X", Icon: Twitter, href: "https://x.com/FlippedSocial" },
    { label: "YouTube", Icon: Youtube, href: "https://www.youtube.com/@flippedsocial" },
    { label: "Instagram", Icon: Instagram, href: "https://www.instagram.com/flippedsocial" },
    { label: "TikTok", Icon: Tiktok, href: "https://www.tiktok.com/@flippedsocial?_r=1&_t=ZT-95iIpKTEqZa" },
  ];

  return (
    <footer className="relative w-full">
      {/* Content and Branding Wrapper with Clipping */}
      <div className="relative flex sm:min-h-[290px] min-h-[250px] h-full md:max-w-[1650px] sm:px-4 px-10 mx-auto flex-col justify-center overflow-hidden md:min-h-[550px]">
        {/* Background Branding */}
        <div>
          <img src={isLight ? FlippedTextLight : FlippedText} className="w-full h-full" alt="" />
        </div>

        <div className="mb-12 absolute top-4 sm:right-0 right-6 flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-end sm:gap-8">
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
                className={`${isLight ? "text-[#1A1A1A99]" : "text-[#FFFFFF99]"} py-2 hover:text-white transition-colors duration-300`}
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="sm:bottom-[20%] bottom-[10%] absolute sm:left-[2%] left-1/2 sm:-translate-x-0 -translate-x-1/2 flex justify-start z-10">
          <p className={`${isLight ? "text-[#1A1A1A80]" : "text-[#FFFFFF80]"} font-anonymous text-[10px] uppercase tracking-widest`}>
            © 2026 Flipped Social, Inc.
          </p>
        </div>
      </div>

      {/* Full-Width Divider - Outside the restricted content wrapper */}
      <div className="absolute sm:bottom-36 bottom-24 w-full left-0 right-0 pointer-events-none">
        <HorizontalBorder />
      </div>
    </footer>
  );
};

export default Footer;

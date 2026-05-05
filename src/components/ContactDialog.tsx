import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { X, ChevronDown } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import TextureButton from "./ui/texture-btn";
import { useState, useRef, useEffect } from "react";
import flippedBg from "@/assets/btn-bg.png";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  const [locationOpen, setLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const locations = ["New York", "London", "Berlin", "San Francisco", "Tokyo"];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLocationOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        hideClose
        className={`w-[500px] max-w-[90vw] gap-0 rounded-[6px] transition-all duration-300 overflow-hidden ${
          isLight 
            ? "bg-[#E8E5E1] border-[#C2C4B9] shadow-[0_12px_24px_rgba(0,0,0,0.1)]" 
            : "bg-[#1E1E1E] border-[#1E1E1E] shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)]"
        } p-[14px]`}
      >
        {/* Top dashed line */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[5px] h-px w-[calc(100%-10px)] -translate-x-1/2"
          style={{
            backgroundImage: `repeating-linear-gradient(to right, ${
              isLight ? "rgba(170, 154, 138, 0.4)" : "rgba(255,255,255,0.35)"
            } 0 6px, transparent 6px 10px)`,
          }}
        />

        {/* Header row */}
        <div className="relative z-10 flex flex-row items-center justify-between px-[14px] py-[10px]">
          <DialogTitle className={`m-0 font-instrument text-[28px] font-normal leading-[120%] ${isLight ? "text-[#1E1E1E]" : "text-white"}`}>
            Contact
          </DialogTitle>
          <DialogClose
            aria-label="Close"
            className={`group relative grid h-[32px] w-[32px] place-items-center rounded-full transition-all focus:outline-none ${
              isLight ? "text-[#1E1E1E] opacity-70 hover:opacity-100" : "text-white opacity-90 hover:opacity-100"
            }`}
          >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, rgba(198, 141, 214, 0.4) 46.63%, rgba(255, 122, 125, 0.4) 100%)",
                  borderRadius: "8px",
                  backdropFilter: "blur(80px)",
                }}
              />
            <X className="relative z-10 h-5 w-5" strokeWidth={1.5} />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>

        {/* Divider */}
        <div
          aria-hidden
          className={`h-[1px] w-full ${isLight ? "bg-[#C2C4B9]" : "bg-white/10"}`}
        />

        {/* Scrollable Content */}
        <div className="max-h-[75vh] overflow-y-auto px-[14px] pt-6 pb-4 space-y-8 custom-scrollbar">
          
          {/* Section 1: Already on Flipped? */}
          <div className="space-y-3">
            <div className="space-y-1">
              <h4 className={`font-instrument text-[20px] ${isLight ? "text-[#1E1E1E]" : "text-white"}`}>
                Already on Flipped?
              </h4>
              <p className={`font-anonymous text-[13px] ${isLight ? "text-[#1E1E1E99]" : "text-white/60"}`}>
                We got you. Text us anytime.
              </p>
            </div>
            <a href="sms:+1234567890" className="block w-full">
              <TextureButton
                text="Text us"
                className="!w-full !h-[52px]"
              />
            </a>
          </div>

          <div className={`h-[1px] w-full ${isLight ? "bg-[#C2C4B9]" : "bg-white/10"}`} />

          {/* Section 2: Partners */}
          <div className="space-y-3">
            <div className="space-y-1">
              <h4 className={`font-instrument text-[20px] leading-tight ${isLight ? "text-[#1E1E1E]" : "text-white"}`}>
                Own a restaurant, venue, or run events?
              </h4>
              <p className={`font-anonymous text-[13px] leading-relaxed ${isLight ? "text-[#1E1E1E99]" : "text-white/60"}`}>
                We set up real dinner dates at places worth going to. Yours could be one of them.
              </p>
            </div>
            <a
              href="https://forms.gle/Y9bF2dYX6PRkCdP27"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <TextureButton
                text="Partner with Flipped"
                className={`!w-full !h-[52px] `}
                isLightBtn={!isLight}
              />
            </a>
          </div>

          <div className={`h-[1px] w-full ${isLight ? "bg-[#C2C4B9]" : "bg-white/10"}`} />

          {/* Section 3: Form */}
          <div className="space-y-4 pb-10">
            <div className="space-y-1">
              <h4 className={`font-instrument text-[20px] ${isLight ? "text-[#1E1E1E]" : "text-white"}`}>
                Something else on your mind?
              </h4>
              <p className={`font-anonymous text-[13px] ${isLight ? "text-[#1E1E1E99]" : "text-white/60"}`}>
                We'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-2">
              <input 
                type="text" 
                placeholder="Name" 
                className={`w-full h-[52px] bg-transparent rounded-[8px] border transition-all px-4 font-anonymous text-[14px] focus:outline-none ${
                    isLight 
                      ? "border-[#C2C4B9] text-[#1E1E1E] placeholder:text-[#1E1E1E40] focus:border-[#1E1E1E]" 
                      : "border-white/10 bg-white/5 text-white placeholder:text-white/20 focus:border-white/20"
                }`}
              />
              <input 
                type="email" 
                placeholder="Email" 
                className={`w-full h-[52px] bg-transparent rounded-[8px] border transition-all px-4 font-anonymous text-[14px] focus:outline-none ${
                    isLight 
                      ? "border-[#C2C4B9] text-[#1E1E1E] placeholder:text-[#1E1E1E40] focus:border-[#1E1E1E]" 
                      : "border-white/10 bg-white/5 text-white placeholder:text-white/20 focus:border-white/20"
                }`}
              />
              
              {/* Custom Location Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  type="button"
                  onClick={() => setLocationOpen(!locationOpen)}
                  className={`w-full h-[52px] flex items-center justify-between bg-transparent rounded-[8px] border transition-all px-4 font-anonymous text-[14px] focus:outline-none ${
                      isLight 
                        ? "border-[#C2C4B9] text-[#1E1E1E] focus:border-[#1E1E1E]" 
                        : "border-white/10 bg-white/5 text-white focus:border-white/20"
                  }`}
                >
                  <span className={selectedLocation === "Location" ? (isLight ? "text-[#1E1E1E40]" : "text-white/20") : ""}>
                    {selectedLocation}
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${locationOpen ? "rotate-180" : ""} ${isLight ? "text-[#1E1E1E60]" : "text-white/40"}`} />
                </button>

                {locationOpen && (
                  <div className={`absolute left-0 bottom-full mb-2 w-full rounded-lg py-1 shadow-xl overflow-hidden z-20 transition-all duration-300 ${isLight ? "bg-[#E8E5E1] border border-[#C2C4B9]" : "bg-[#1E1E1E] border border-white/5"}`}>
                     <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat z-0 pointer-events-none ${isLight ? "opacity-[0.03]" : "opacity-5"}`} style={{ backgroundImage: `url(${flippedBg})` }} />
                     <div className="relative z-10">
                        {locations.map((loc, index) => (
                          <div key={loc}>
                             <button
                                type="button"
                                onClick={() => {
                                  setSelectedLocation(loc);
                                  setLocationOpen(false);
                                }}
                                className={`w-full text-left py-3 px-4 font-anonymous font-bold text-[13px] uppercase tracking-wider transition-colors ${isLight ? "text-[#1E1E1E] hover:bg-[#1A1A1A0D]" : "text-white hover:bg-white/10"}`}
                             >
                                {loc}
                             </button>
                             {index < locations.length - 1 && <div className={`h-[px] w-full ${isLight ? "bg-[#1A1A1A1A]" : "bg-white/10"}`} style={{ height: '1px' }} />}
                          </div>
                        ))}
                     </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom dashed line */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[5px] left-1/2 h-px w-[calc(100%-10px)] -translate-x-1/2"
          style={{
            backgroundImage: `repeating-linear-gradient(to right, ${
              isLight ? "rgba(170, 154, 138, 0.4)" : "rgba(255,255,255,0.35)"
            } 0 6px, transparent 6px 10px)`,
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;

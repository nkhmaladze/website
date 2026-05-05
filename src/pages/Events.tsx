import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBorders from "@/components/PageBorders";
import HorizontalBorder from "@/components/HorizontalBorder";
import AboutDialog from "@/components/AboutDialog";
import ContactDialog from "@/components/ContactDialog";
import LegalDialog from "@/components/LegalDialog";
import WantInButton from "@/components/ui/wantIn";
import flippedBg from "@/assets/flipped-texture-bg.png";
import heroDinner from "@/assets/event-mask.png";
import heroDinnerLight from "@/assets/event-mask-light.png";
import { useTheme } from "@/context/ThemeContext";

const EVENT_GROUPS = [
  {
    month: "NOVEMBER - 2024",
    events: [
      { id: 1, day: "01", weekday: "THU", title: "Magic in Angeles", location: "Texas Roadhouse, Los Angeles, CA", description: "Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl proin cras. Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl.", tags: ["ENTERTAINMENT", "DINING"] },
      { id: 2, day: "06", weekday: "TUE", title: "Magic in Angeles", location: "Texas Roadhouse, Los Angeles, CA", description: "Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl proin cras. Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl.", tags: ["ENTERTAINMENT", "DINING"] }
    ]
  },
  {
    month: "DECEMBER - 2024",
    events: [
      { id: 3, day: "05", weekday: "FRI", title: "Magic in Angeles", location: "Texas Roadhouse, Los Angeles, CA", description: "Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl proin cras. Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl.", tags: ["ENTERTAINMENT", "DINING"] },
      { id: 4, day: "12", weekday: "WED", title: "Magic in Angeles", location: "Texas Roadhouse, Los Angeles, CA", description: "Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl proin cras. Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl.", tags: ["ENTERTAINMENT", "DINING"] },
      { id: 5, day: "26", weekday: "SAT", title: "Magic in Angeles", location: "Texas Roadhouse, Los Angeles, CA", description: "Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl proin cras. Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl.", tags: ["ENTERTAINMENT", "DINING"] }
    ]
  }
];

const Events = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative min-h-screen overflow-x-clip ${isLight ? "bg-[#E8E5E1]" : ""} bg-contain bg-center bg-repeat`} style={{ backgroundImage: isLight ? "none" : `url(${flippedBg})` }}>
      <div className="relative z-10 flex max-w-[1900px] w-full mx-auto flex-col">
        {/* Global Outer Borders */}
        <PageBorders showInnerBorder={false} />

        {/* Header container */}
        <div className="relative pt-12  ">
          
          <div className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
            ? isLight
              ? "bg-[#E8E5E1]/90 backdrop-blur-md shadow-sm"
              : "bg-[#1E1E1E]/90 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            : ""
            }`}>
            {!scrolled && <HorizontalBorder />}
            <div className="max-w-[1900px] mx-auto w-full">
              <Navbar onOpenAbout={() => setAboutOpen(true)} />
            </div>
            {!scrolled && <HorizontalBorder />}
          </div>

          {/* Events Hero Section */}
          <section className="relative px-6 py-20 text-center space-y-8 mx-auto overflow-visible z-10">
            {/* Inner Borders - Anchored here but bleeding UP to the very top of the page */}
            <div className="absolute top-[-200px] left-0 right-0 h-[calc(100%+200px)] pointer-events-none overflow-hidden sm:block hidden">
              <PageBorders showOuterBorder={false} />
            </div>

            <div className="relative z-20">
              <div className="space-y-4 max-w-[700px] mx-auto ">
                <h1 className={`font-instrument text-[42px] md:text-[56px] leading-[110%]  tracking-tight ${isLight ? "text-[#1E1E1E]" : "text-white"}`}>
                  When home movie night isn't enough anymore, you go on adventures
                </h1>
                <p className={`font-anonymous text-[14px] md:text-[16px] leading-relaxed max-w-[600px] mx-auto ${isLight ? "text-[#1E1E1E99]" : "text-white/60"}`}>
                  Lorem ipsum dolor sit amet consectetur. At mi faucibus est pellentesque. Viverra neque aenean
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-[450px] mt-16 mx-auto relative group">
                <div className={`flex items-center  gap-2 transition-all duration-300 overflow-hidden `}>
                  <input
                    type="text"
                    placeholder="Search..."
                    className={`${isLight ? "bg-[#1A1A1A1C] border-[#C2C4B9] focus-within:border-[#1E1E1E]" : "bg-white/5 border-white/10 focus-within:border-white/20"
                      } flex-1 h-[52px] bg-transparent rounded-sm px-6 font-anonymous text-[14px] focus:outline-none ${isLight ? "text-[#1E1E1E]" : "text-white"}`}
                  />
                  <button className={`h-[51px] w-[51px] flex items-center rounded-lg justify-center transition-colors ${isLight ? "bg-[#1E1E1E] text-white hover:bg-black" : "bg-white text-black hover:bg-white/80"
                    }`}>
                    <Search className="h-8 w-8" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <HorizontalBorder />

          {/* Events Timeline List - NO Inner Borders here */}
          <section className="px-10 sm:py-16 py-8 max-w-[1650px] mx-auto sm:space-y-24 space-y-12 relative md:px-12">
            {EVENT_GROUPS.map((group, groupIdx) => (
              <div key={groupIdx} className="sm:space-y-12 space-y-6">
                {/* Month Label Section */}
                <div className="space-y-0">
                  <div className={`inline-block px-4 py-2 mb-[1px] rounded-[4px]  font-anonymous text-[12px] md:text-[13px] font-bold tracking-widest uppercase transition-all duration-300 ${isLight
                    ? "bg-[#1A1A1A1A]  text-[#1E1E1E]"
                    : "bg-[#2A2A2A]  text-[#E8E5E1]"
                    }`}>
                    {group.month.split(" - ")[0]}
                    <span className="mx-2" style={{ color: "#D9D9D966" }}>•</span>
                    {group.month.split(" - ")[1]}
                  </div>
                  {/* Solid low-opacity border as requested */}
                  <div className={`h-[1px] w-full ${isLight ? "bg-[#1A1A1A1A]" : "bg-[#FFFFFF1A]"}`} />
                </div>

                {/* Events list within month */}
                <div className="sm:space-y-16 space-y-6">
                  {group.events.map((event) => (
                    <Link to={`/events/${event.id}`} key={event.id} className="flex flex-col md:flex-row gap-8 md:gap-20 group cursor-pointer">
                      {/* Desktop Day Indicator (Hidden on Mobile) */}
                      <div className="hidden md:flex flex-col items-center pt-2 min-w-[70px]">
                        <span className={`font-anonymous text-[12px] font-bold tracking-widest ${isLight ? "text-[#1A1A1A]" : "text-[#E8E5E1]"}`}>{event.weekday}</span>
                        <span className={`font-instrument text-[56px] leading-none ${isLight ? "text-[#1A1A1A]" : "text-[#E8E5E1]"}`}>{event.day}</span>
                      </div>

                      {/* Event Card */}
                      <div className={`flex-1 flex flex-col p-3 md:flex-row rounded-[6px] overflow-hidden border relative transition-all duration-300 ${isLight
                        ? "bg-[#E8E5E1] border-[#C2C4B9] hover:shadow-md"
                        : "bg-[#262626] border-[#1E1E1E] hover:bg-[#222222] shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
                        }`}>
                        {/* Card Texture Overlay */}
                        <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat z-0 pointer-events-none ${isLight ? "opacity-[0.03]" : "opacity-5"}`} style={{ backgroundImage: `url(${flippedBg})` }} />

                        {/* Card Image Placeholder */}
                        <div className={`w-full md:w-[350px] h-[180px] md:h-[250px] relative overflow-hidden flex-shrink-0 z-10 ${isLight ? "bg-[#1A1A1A1A]" : "bg-[#2A2A2A]"}`}>
                          <div className={`absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none ${!isLight && "invert"}`} style={{ backgroundImage: `url(${flippedBg})` }} />
                          
                          {/* Mobile Floating Date (Hidden on Desktop) */}
                          <div className="md:hidden absolute top-3 left-3 z-20">
                            <div className={`flex flex-col items-center justify-center w-[52px] h-[72px] rounded-[6px] border ${
                              isLight 
                                ? "bg-white border-[#E8E5E1] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.8),0_2px_4px_rgba(0,0,0,0.08)]" 
                                : "bg-[#1A1A1A] border-white/5 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_2px_2px_rgba(0,0,0,0.4)]"
                            }`}>
                               <span className={`font-anonymous text-[10px] font-bold tracking-widest ${isLight ? "text-black/50" : "text-white/50"}`}>{event.weekday}</span>
                               <span className={`font-instrument text-[32px] leading-none ${isLight ? "text-black" : "text-white"}`}>{event.day}</span>
                            </div>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="flex-1 px-0 md:px-6  sm:pt-2 pt-6 pb-2 space-y-6 relative z-10">
                          <div className="space-y-4">
                            <h3 className={`font-instrument text-[24px] md:text-[34px] leading-tight ${isLight ? "text-[#1E1E1E]" : "text-white"}`}>
                              {event.title}
                            </h3>

                            {/* Line under title */}
                            <div className={`h-[1px] w-full ${isLight ? "bg-[#1A1A1A1A]" : "bg-white/10"}`} />

                            <div className="space-y-4">
                              <div className={`flex items-center gap-2 font-anonymous text-[14px] font-bold ${isLight ? "text-[#1E1E1E60]" : "text-[#E8E5E1]"}`}>
                                <MapPin className="h-4 w-4" />
                                {event.location}
                              </div>
                              <p className={`font-anonymous text-[14px] md:text-[15px] leading-relaxed line-clamp-3 ${isLight ? "text-[#1E1E1E99]" : "text-white/60"}`}>
                                {event.description}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 md:gap-3">
                            {event.tags.map(tag => (
                              <span key={tag} className={`px-4 md:px-5 py-2 font-anonymous text-[10px] md:text-[11px] font-bold tracking-[0.1em] transition-colors ${isLight
                                ? "bg-[#D4CEC8] text-[#1E1E1E]"
                                : "bg-[#3D3D3D] text-white"
                                }`}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <HorizontalBorder />

          {/* Bottom CTA Section - Hidden on Mobile */}
          <div className="hidden md:block">
            <div className="md:my-24 my-16" >
              <HorizontalBorder />
            </div>
            <section className="px-6 py-6">
              <div className="max-w-[1650px] mx-auto flex flex-col md:flex-row items-start justify-between gap-12 px-4 md:px-12">
                <div className="max-w-[500px] min-h-[420px] flex flex-col justify-between  h-full ">
                  <div className="space-y-6">
                    <h2 className={`font-instrument text-[48px] md:text-[64px] leading-[110%] tracking-tight ${isLight ? "text-[#1A1A1A]" : "text-white"}`}>
                      One dinner date.<br /> Every week.
                    </h2>
                    <p className={`font-anonymous text-[16px]  ${isLight ? "text-[#1A1A1A99]" : "text-white/60"}`}>
                      Skip the texting. Just show up.
                    </p>
                  </div>
                  <WantInButton className="mt-4" />
                </div>

                <div className="relative">
                  <img
                    src={isLight ? heroDinnerLight : heroDinner}
                    alt="Dinner illustration"
                    className="w-full max-w-[700px] min-h-[450px] h-full"
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="md:my-24 my-16 sm:block hidden" >
            <HorizontalBorder />
          </div>

          <HorizontalBorder />
        </div>

        {/* Footer Area */}
        <div className="relative">
          <Footer onOpenLegal={() => setLegalOpen(true)} onOpenContact={() => setContactOpen(true)} />
        </div>
      </div>

      <AboutDialog open={aboutOpen} onOpenChange={setAboutOpen} />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
      <LegalDialog open={legalOpen} onOpenChange={setLegalOpen} />
    </div>
  );
};

export default Events;

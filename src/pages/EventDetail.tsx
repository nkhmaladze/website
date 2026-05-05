import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBorders from "@/components/PageBorders";
import HorizontalBorder from "@/components/HorizontalBorder";
import AboutDialog from "@/components/AboutDialog";
import ContactDialog from "@/components/ContactDialog";
import LegalDialog from "@/components/LegalDialog";
import TextureButton from "@/components/ui/texture-btn";
import flippedBg from "@/assets/flipped-texture-bg.png";
import { useTheme } from "@/context/ThemeContext";

const EventDetail = () => {
  const { id } = useParams();
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

  // Static event data for demonstration
  const event = {
    title: "Magic in Angeles",
    location: "Texas Roadhouse, Los Angeles, CA",
    description: "Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl proin cras. Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl.",
    tags: ["ENTERTAINMENT", "CIRCUS"],
    content: [
      {
        heading: "Lorem ipsum dolor",
        text: [
          "Lorem ipsum dolor sit amet consectetur. At mi faucibus est pellentesque. Viverra neque aenean pharetra tortor cras et amet lacinia suspendisse. Feugiat nisl et hendrerit libero. Adipiscing id eu ut orci egestas ultrices.",
          "Lorem ipsum dolor sit amet consectetur. At mi faucibus est pellentesque. Viverra neque aenean pharetra tortor cra."
        ]
      },
      {
        heading: "Lorem ipsum dolor",
        text: [
          "Lorem ipsum dolor sit amet consectetur. At mi faucibus est pellentesque. Viverra neque aenean pharetra tortor cras et amet lacinia suspendisse. Feugiat nisl et hendrerit libero. Adipiscing id eu ut orci egestas ultrices.",
          "Lorem ipsum dolor sit amet consectetur. At mi faucibus est pellentesque. Viverra neque aenean pharetra tortor cra."
        ]
      }
    ]
  };

  const recommendedEvents = [
    { id: 1, day: "01", weekday: "THU", title: "Magic in Angeles", location: "Texas Roadhouse, Los Angeles, CA", description: "Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl proin cras.", tags: ["ENTERTAINMENT", "CIRCUS"] },
    { id: 2, day: "06", weekday: "TUE", title: "Magic in Angeles", location: "Texas Roadhouse, Los Angeles, CA", description: "Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl proin cras.", tags: ["ENTERTAINMENT", "CIRCUS"] },
    { id: 3, day: "12", weekday: "WED", title: "Magic in Angeles", location: "Texas Roadhouse, Los Angeles, CA", description: "Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl proin cras.", tags: ["ENTERTAINMENT", "CIRCUS"] },
  ];

  return (
    <div className={`relative min-h-screen overflow-x-clip ${isLight ? "bg-[#E8E5E1]" : ""} bg-contain bg-center bg-repeat`} style={{ backgroundImage: isLight ? "none" : `url(${flippedBg})` }}>
      <div className="relative z-10 flex max-w-[1900px] w-full mx-auto flex-col">
        {/* Global Outer Borders */}
        <PageBorders showInnerBorder={false} />
        
        {/* Header container */}
        <div className="relative pt-12">
          
          <div className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled 
              ? isLight 
                ? "bg-[#E8E5E1]/90 backdrop-blur-md shadow-sm" 
                : "bg-[#1E1E1E]/90 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              : ""
          }`}>
            {!scrolled && <HorizontalBorder />}
            <Navbar onOpenAbout={() => setAboutOpen(true)} />
            {!scrolled && <HorizontalBorder />}
          </div>

          <div className=" mx-auto px-6  space-y-12 relative z-10">
            {/* Inner Borders - Bleeding Up */}
            <div className="absolute top-[-200px] left-0 right-0 h-[calc(100%+200px)] pointer-events-none overflow-hidden sm:block hidden">
              <PageBorders showOuterBorder={false} />
            </div>

            <div className="relative z-20 space-y-12 max-w-[800px] mx-auto">
              {/* Event Hero Image */}
              <div className={`aspect-[16/9] w-full rounded-[4px] relative overflow-hidden border ${
                 isLight ? "bg-[#1A1A1A1A] border-[#E2E0DD]" : "bg-[#2A2A2A] border-white/5"
              }`}>
                 <div className={`absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none ${!isLight && "invert"}`} style={{ backgroundImage: `url(${flippedBg})` }} />
              </div>

              {/* Event Info */}
              <div className="space-y-6">
                 <h1 className={`font-instrument text-[42px] md:text-[56px] leading-[110%] tracking-tight ${isLight ? "text-[#1E1E1E]" : "text-white"}`}>
                   {event.title}
                 </h1>

                 {/* Solid low-opacity border as requested */}
                  <div className={`h-[1px] w-full ${isLight ? "bg-[#1A1A1A1A]" : "bg-[#FFFFFF1A]"}`} />
                 
                 <div className="space-y-4">
                    <div className={`flex items-center gap-2 font-anonymous text-[14px] md:text-[16px] font-bold ${isLight ? "text-[#1E1E1E60]" : "text-[#E8E5E1]"}`}>
                      <MapPin className="h-5 w-5" />
                      {event.location}
                    </div>
                    <p className={`font-anonymous text-[14px] md:text-[16px] leading-relaxed ${isLight ? "text-[#1E1E1E99]" : "text-white/60"}`}>
                      {event.description}
                    </p>
                 </div>

                 <div className="flex flex-wrap gap-3">
                   {event.tags.map(tag => (
                     <span key={tag} className={`px-5 py-2 font-anonymous text-[11px] font-bold tracking-[0.1em] transition-colors ${isLight
                       ? "bg-[#D4CEC8] text-[#1E1E1E]"
                       : "bg-[#3D3D3D] text-white"
                       }`}>
                       {tag}
                     </span>
                   ))}
                 </div>

                 <TextureButton 
                   text="JOIN EVENT" 
                   className="!w-full md:!w-[200px] !h-[50px] !text-[14px]" 
                   isLightBtn={!isLight}
                 />
              </div>

{/* Solid low-opacity border as requested */}
                  <div className={`h-[1px] w-full ${isLight ? "bg-[#1A1A1A1A]" : "bg-[#FFFFFF1A]"}`} />

              {/* Event Content */}
              <div className="space-y-12">
                 {event.content.map((section, index) => (
                   <div key={index} className="space-y-6">
                      <h2 className={`font-instrument text-[24px] md:text-[28px] font-medium ${isLight ? "text-[#1E1E1E]" : "text-white"}`}>
                        {section.heading}
                      </h2>
                      <div className="space-y-6">
                        {section.text.map((p, pIndex) => (
                          <p key={pIndex} className={`font-anonymous text-[15px] md:text-[16px] leading-[180%] ${isLight ? "text-[#1E1E1E99]" : "text-white/60"}`}>
                            {p}
                          </p>
                        ))}
                      </div>
                   </div>
                 ))}
              </div>

              <HorizontalBorder />

              {/* Recommendations Section */}
              <div className="space-y-8 pt-8 md:pb-32 pb-16">
                 <h2 className={`font-instrument text-[28px] md:text-[32px] ${isLight ? "text-[#1E1E1E]" : "text-white"}`}>
                   More events like this one:
                 </h2>
                 
                 <div className="space-y-6">
                    {recommendedEvents.map((recEvent) => (
                      <Link to={`/events/${recEvent.id}`} key={recEvent.id} className="flex flex-col md:flex-row gap-8 group cursor-pointer">
                        {/* Event Card */}
                        <div className={`flex-1 flex flex-col p-3 md:flex-row rounded-[6px] overflow-hidden border relative transition-all duration-300 ${isLight
                          ? "bg-[#E8E5E1] border-[#C2C4B9] hover:shadow-md"
                          : "bg-[#262626] border-[#1E1E1E] hover:bg-[#222222] shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
                          }`}>
                          {/* Card Texture Overlay */}
                          <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat z-0 pointer-events-none ${isLight ? "opacity-[0.03]" : "opacity-5"}`} style={{ backgroundImage: `url(${flippedBg})` }} />

                          {/* Card Image Placeholder */}
                          <div className={`w-full md:w-[200px] h-[120px] md:h-auto relative overflow-hidden flex-shrink-0 z-10 ${isLight ? "bg-[#1A1A1A1A]" : "bg-[#2A2A2A]"}`}>
                            <div className={`absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none ${!isLight && "invert"}`} style={{ backgroundImage: `url(${flippedBg})` }} />
                          </div>

                          {/* Card Content */}
                          <div className="flex-1 px-0 md:px-6  sm:pt-2 pt-4 pb-2 space-y-4 relative z-10">
                            <div className="space-y-4">
                              <h3 className={`font-instrument text-[22px] md:text-[28px] leading-tight ${isLight ? "text-[#1E1E1E]" : "text-white"}`}>
                                {recEvent.title}
                              </h3>

                              {/* Line under title */}
                              <div className={`h-[1px] w-full ${isLight ? "bg-[#1A1A1A1A]" : "bg-white/10"}`} />

                              <div className="space-y-2">
                                <div className={`flex items-center gap-2 font-anonymous text-[12px] font-bold ${isLight ? "text-[#1E1E1E60]" : "text-[#E8E5E1]"}`}>
                                  <MapPin className="h-4 w-4" />
                                  {recEvent.location}
                                </div>
                                <p className={`font-anonymous text-[13px] md:text-[14px] leading-relaxed line-clamp-2 ${isLight ? "text-[#1E1E1E99]" : "text-white/60"}`}>
                                  {recEvent.description}
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {recEvent.tags.map(tag => (
                                <span key={tag} className={`px-3 py-1 font-anonymous text-[9px] md:text-[10px] font-bold tracking-[0.1em] transition-colors ${isLight
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

              <HorizontalBorder />
            </div>
          </div>
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

export default EventDetail;

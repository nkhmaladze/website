import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import AboutDialog from "@/components/AboutDialog";
import ContactDialog from "@/components/ContactDialog";
import LegalDialog from "@/components/LegalDialog";
import flippedBg from "@/assets/flipped-texture-bg.png";

import PageBorders from "@/components/PageBorders";
import HorizontalBorder from "@/components/HorizontalBorder";
import { useTheme } from "@/context/ThemeContext";

const Index = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative min-h-screen overflow-x-clip ${isLight ? "bg-[#E8E5E1]" : ""} bg-contain bg-center bg-repeat`} style={{ backgroundImage: isLight ? "none" : `url(${flippedBg})` }}>
      <div className="relative z-10 flex max-w-[1900px] w-full mx-auto flex-col">
        {/* Global Outer Borders */}
        <PageBorders showInnerBorder={false} />

        {/* Main Content Area with its own Inner Borders */}
        <div className="relative pt-12">
          <PageBorders showOuterBorder={false} />

          <div className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
              ? isLight
                ? "bg-[#E8E5E1]/90 backdrop-blur-md shadow-sm"
                : "bg-[#1E1E1E]/90 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              : ""
            }`}>
            {!scrolled && <HorizontalBorder />}
            <Navbar onOpenAbout={() => setAboutOpen(true)} />
            {!scrolled && <HorizontalBorder />}
          </div>

          <HeroSection />
          <HorizontalBorder />

          <HowItWorks />
          <HorizontalBorder />
        </div>

        {/* Footer Area - Outer Borders are already global, but we can maintain this for structure */}
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

export default Index;

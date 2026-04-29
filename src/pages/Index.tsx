import { useState } from "react";
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

const Index = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${flippedBg})` }}>
      <div className="relative z-10 flex max-w-[1900px] w-full mx-auto flex-col">
        <div className="relative pt-12">
          <PageBorders />
          <HorizontalBorder />
          <Navbar onOpenAbout={() => setAboutOpen(true)} />
          <HorizontalBorder />

          <HeroSection />
          <HorizontalBorder />

          <HowItWorks />
          <HorizontalBorder />
        </div>

        <PageBorders showInnerBorder={false} />
        <Footer onOpenLegal={() => setLegalOpen(true)} onOpenContact={() => setContactOpen(true)} />
      </div>

      <AboutDialog open={aboutOpen} onOpenChange={setAboutOpen} />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
      <LegalDialog open={legalOpen} onOpenChange={setLegalOpen} />
    </div>
  );
};

export default Index;

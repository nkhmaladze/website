import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import AboutDialog from "@/components/AboutDialog";
import ContactDialog from "@/components/ContactDialog";
import LegalDialog from "@/components/LegalDialog";

const Index = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenAbout={() => setAboutOpen(true)} onOpenContact={() => setContactOpen(true)} />
      <HeroSection />
      <HowItWorks />
      <Footer onOpenLegal={() => setLegalOpen(true)} onOpenContact={() => setContactOpen(true)} />
      <AboutDialog open={aboutOpen} onOpenChange={setAboutOpen} />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
      <LegalDialog open={legalOpen} onOpenChange={setLegalOpen} />
    </div>
  );
};

export default Index;

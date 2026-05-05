import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBorders from "@/components/PageBorders";
import HorizontalBorder from "@/components/HorizontalBorder";
import AboutDialog from "@/components/AboutDialog";
import ContactDialog from "@/components/ContactDialog";
import LegalDialog from "@/components/LegalDialog";
import flippedBg from "@/assets/flipped-texture-bg.png";
import { useTheme } from "@/context/ThemeContext";

const BlogDetail = () => {
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

  // For demonstration, we use static data. 
  // In a real app, you'd fetch based on the 'id'.
  const post = {
    title: "One dinner date. Every week.",
    description: "Lorem ipsum dolor sit amet consectetur. Maecenas in posuere eget condimentum ut.",
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

  return (
    <div className={`relative min-h-screen overflow-x-clip ${isLight ? "bg-[#E8E5E1]" : ""} bg-contain bg-center bg-repeat`} style={{ backgroundImage: isLight ? "none" : `url(${flippedBg})` }}>
      <div className="relative z-10 flex max-w-[1900px] w-full mx-auto flex-col">
        {/* Global Outer Borders */}
        <PageBorders showInnerBorder={false} />
        
        {/* Header container */}
        <div className="relative pt-12">
          <PageBorders showOuterBorder={false} />
          
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

          <div className="max-w-[750px] mx-auto px-6 py-12 md:py-20 space-y-12">
            
            {/* Main Image */}
            <div className={`aspect-[16/10] w-full rounded-[4px] relative overflow-hidden transition-all duration-500 border ${
               isLight ? "bg-[#1A1A1A1A] border-[#E2E0DD]" : "bg-[#2A2A2A] border-white/5"
            }`}>
               <div className={`absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none ${!isLight && "invert"}`} style={{ backgroundImage: `url(${flippedBg})` }} />
            </div>

            {/* Post Hero */}
            <div className="space-y-4">
               <h1 className={`font-serif text-[42px] md:text-[56px] leading-[110%] tracking-tight ${isLight ? "text-[#1E1E1E]" : "text-white"}`}>
                 {post.title}
               </h1>
               <p className={`font-anonymous text-[14px] md:text-[16px] leading-relaxed ${isLight ? "text-[#1E1E1E99]" : "text-white/60"}`}>
                 {post.description}
               </p>
            </div>

           {/* Solid low-opacity border as requested */}
           <div className={`h-[1px] w-full ${isLight ? "bg-[#1A1A1A1A]" : "bg-[#FFFFFF1A]"}`} />

            {/* Post Content */}
            <div className="space-y-12">
               {post.content.map((section, index) => (
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

            {/* <div className="pt-8 flex justify-center">
               <Link 
                 to="/blog"
                 className={`font-anonymous text-[12px] font-bold uppercase tracking-[0.2em] border-b pb-1 transition-all ${
                   isLight ? "text-[#1E1E1E] border-[#1E1E1E60] hover:border-[#1E1E1E]" : "text-white border-white/40 hover:border-white"
                 }`}
               >
                 ← Back to blog
               </Link>
            </div> */}
            
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

export default BlogDetail;

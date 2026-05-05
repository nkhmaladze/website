import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBorders from "@/components/PageBorders";
import HorizontalBorder from "@/components/HorizontalBorder";
import AboutDialog from "@/components/AboutDialog";
import ContactDialog from "@/components/ContactDialog";
import LegalDialog from "@/components/LegalDialog";
import flippedBg from "@/assets/flipped-texture-bg.png";
import { useTheme } from "@/context/ThemeContext";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Facilisis dolor mollis leo ultricies.",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl proin cras.",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur. Erat.",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Maecenas in posuere eget condimentum ut.",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Facilisis dolor mollis leo ultricies.",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl proin cras.",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet consectetur. Erat.",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Maecenas in posuere eget condimentum ut.",
    image: "/placeholder.svg"
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Facilisis dolor mollis leo ultricies.",
    image: "/placeholder.svg"
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Accumsan vitae eleifend nisl proin cras.",
    image: "/placeholder.svg"
  },
  {
    id: 9,
    title: "Lorem ipsum dolor sit amet consectetur. Erat.",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Maecenas in posuere eget condimentum ut.",
    image: "/placeholder.svg"
  }
];

const Blog = () => {
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

        {/* Main Content container */}
        <div className="relative pt-12">
          
          {/* Sticky Navbar - Now a direct child of the main content column */}
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

          {/* Blog Hero Section - Houses the inner borders for the header frame */}
          <section className="relative px-6 py-20 min-h-[50dvh] flex justify-center items-center text-center space-y-8  mx-auto overflow-visible z-10">
            {/* Inner Borders - Anchored here but bleeding UP to the very top of the page */}
            <div className="absolute top-[-200px] left-0 right-0 h-[calc(100%+200px)] pointer-events-none overflow-hidden sm:block hidden">
              <PageBorders showOuterBorder={false} />
            </div>

            <div className="relative z-20">
              <div className="space-y-4"> 
                <h1 className="font-instrument text-[48px] md:text-[64px] leading-[110%] tracking-tight text-text-secondary ">
                  little spice here, little spice there
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
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <HorizontalBorder />

          {/* Blog Grid - Outside the Inner Borders Context */}
          <section className="px-6 py-12 relative z-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16 gap-y-6 gap-x-8 lg:gap-x-16 max-w-[1650px] mx-auto px-4 md:px-12">
              {BLOG_POSTS.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="group cursor-pointer block">
                  <article>
                    <div className={`rounded-[12px] p-4 transition-all duration-300 border ${isLight
                      ? "bg-[#F5F2F0] border-[#E2E0DD] hover:shadow-md shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                      : "bg-[#1E1E1E] border-white/5 hover:bg-[#222222] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                      }`}>
                      <div className="space-y-4">
                        {/* Image Placeholder */}
                        <div className={`h-[200px] w-full rounded-[6px] relative overflow-hidden transition-all duration-500 group-hover:scale-[1.01] ${isLight ? "bg-[#1A1A1A1A]" : "bg-[#2A2A2A]"}`}>
                          <div className={`absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none ${!isLight && "invert"}`} style={{ backgroundImage: `url(${flippedBg})` }} />
                        </div>

                        {/* Navbar-style Divider */}
                        <div className={`h-[1px] w-full ${isLight ? "bg-[#1A1A1A1A]" : "bg-white/10"}`} />

                        <div className="space-y-4 pt-1 px-1 pb-2">
                          <h3 className={`font-instrument text-base tracking-wide transition-colors ${isLight ? "text-[#1E1E1E]" : "text-white"}`}>
                            {post.title}
                          </h3>
                          <p className={`font-anonymous text-sm leading-relaxed line-clamp-2 ${isLight ? "text-[#1E1E1E99]" : "text-white/60"}`}>
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

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

export default Blog;

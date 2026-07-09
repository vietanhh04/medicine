import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "./Icons";
import { motionVariants } from "../data/data";

const NAV_LINKS = [
  { href: "#product", label: "Sản phẩm" },
  { href: "#growing-region", label: "Vùng trồng" },
  { href: "#strength", label: "Thế mạnh" },
  { href: "#heritage", label: "Di sản" },
  { href: "#contact", label: "Liên hệ" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 lg:px-16 pointer-events-auto">
      <motion.div
        initial={motionVariants.initial}
        animate={motionVariants.animate}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`h-12 w-12 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 shadow-md ${
          isScrolled
            ? "bg-[#FAFCF8]/90 border border-[#0B1E12]/10 backdrop-blur-md"
            : "bg-white/10 border border-white/10 backdrop-blur-md"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src={isScrolled ? "/logonavb-02.svg" : "/logonavc-02.svg"}
          alt="Logo"
          className="h-12 w-12 select-none"
        />
      </motion.div>

      {/* Desktop nav */}
      <motion.div
        initial={motionVariants.initial}
        animate={motionVariants.animate}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className={`hidden md:flex rounded-full px-2 py-1.5 items-center gap-1 shadow-md transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAFCF8]/90 border border-[#0B1E12]/10 backdrop-blur-md"
            : "bg-white/10 border border-white/10 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`px-4 py-2 text-xs md:text-sm font-medium font-body transition-colors duration-300 ${
                isScrolled
                  ? "text-[#0B1E12]/80 hover:text-[#107542]"
                  : "text-white/80 hover:text-[#4ADE80]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "#contact")}
          className={`ml-2 transition-all duration-300 rounded-full px-4 py-2 text-xs md:text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap shadow-md ${
            isScrolled
              ? "bg-[#107542] text-white hover:bg-[#0B1E12]"
              : "bg-white text-[#107542] hover:bg-[#E8F5E9]"
          }`}
        >
          Hợp tác GACP
          <ArrowUpRight className={isScrolled ? "text-white" : "text-[#107542]"} />
        </a>
      </motion.div>

      {/* Mobile menu toggle */}
      <motion.button
        initial={motionVariants.initial}
        animate={motionVariants.animate}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
        className={`md:hidden relative z-50 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md ${
          isScrolled || isMenuOpen
            ? "bg-[#FAFCF8]/90 border border-[#0B1E12]/10 backdrop-blur-md"
            : "bg-white/10 border border-white/10 backdrop-blur-md"
        }`}
      >
        {isMenuOpen ? (
          <X className={isScrolled ? "text-[#0B1E12]" : "text-neutral-500"} />
        ) : (
          <Menu className={isScrolled ? "text-[#0B1E12]" : "text-white"} />
        )}
      </motion.button>

      {/* Right spacer for desktop symmetry */}
      <div className="h-12 w-12 hidden md:block" />

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-0 left-0 z-40 bg-[#050D08]/97 backdrop-blur-lg flex flex-col items-center justify-center gap-2 px-6"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  scrollToSection(e, link.href);
                  setIsMenuOpen(false);
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className="text-white/90 hover:text-[#4ADE80] font-heading italic text-3xl py-3 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => {
                scrollToSection(e, "#contact");
                setIsMenuOpen(false);
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * NAV_LINKS.length }}
              className="mt-6 bg-white text-[#107542] rounded-full px-6 py-3 text-sm font-semibold flex items-center gap-2 shadow-md"
            >
              Hợp tác GACP
              <ArrowUpRight className="text-[#107542]" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const NAV_LINKS = [
  { name: "ABOUT", href: "#about" },
  { name: "QUALIFICATIONS", href: "#qualifications" },
  { name: "WORK", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [time, setTime] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. CLOCK LOGIC
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "numeric", 
        minute: "2-digit",
        second: "2-digit" 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 2. SCROLL STATE LOGIC
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. LOCK BODY SCROLL ON MOBILE MENU
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // 4. SMOOTH SCROLL HANDLER (Generic)
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // If href is just "#" or "/", scroll to top
    if (href === "#" || href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
          scrolled 
            ? "bg-[#0a0a0a]/80 backdrop-blur-md border-white/5 py-4" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 h-10 relative flex items-center justify-between">
          
          {/* LEFT: LOGO (Now scrolls to top) */}
          <div className="z-50">
            <a 
              href="/" 
              onClick={(e) => handleScrollTo(e, "/")}
              className="font-mono text-xl font-bold tracking-tighter text-white group flex items-center gap-1 cursor-pointer"
            >
              NM<span className="text-[#8b5cf6] group-hover:rotate-12 transition-transform">.</span>
            </a>
          </div>

          {/* CENTER: DESKTOP NAV */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 font-mono text-xs text-gray-400">
            {NAV_LINKS.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                onClick={(e) => handleScrollTo(e, item.href)}
                className="hover:text-white transition-colors tracking-wide hover:underline decoration-[#8b5cf6] underline-offset-4"
              >
                [ {item.name} ]
              </a>
            ))}
            
            <span className="cursor-not-allowed opacity-50 select-none hover:text-gray-500 transition-colors">
              [ RESUME_SOON ]
            </span>
          </div>

          {/* RIGHT: TIME & HAMBURGER */}
          <div className="flex items-center gap-4 z-50">
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-gray-500 tabular-nums">
              <span className="hidden xl:inline tracking-widest">MUMBAI</span>
              <span className="text-[#8b5cf6] hidden xl:inline">:</span>
              <span className="min-w-[85px] text-right text-gray-300">
                {time}
              </span>
            </div>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-white text-2xl focus:outline-none hover:text-[#8b5cf6] transition-colors"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center md:hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <nav className="flex flex-col items-center gap-8 relative z-10 font-mono">
              {NAV_LINKS.map((item, i) => (
                <motion.a 
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-2xl text-gray-300 hover:text-[#8b5cf6] transition-colors tracking-widest"
                >
                  [ {item.name} ]
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 px-6 py-2 border border-white/10 text-gray-500 text-xs tracking-widest cursor-not-allowed opacity-60"
              >
                RESUME UPLOADING...
              </motion.div>
            </nav>

            <div className="absolute bottom-12 flex gap-6 text-gray-500">
              <a href="https://github.com/Macplayz" target="_blank"><FiGithub size={20} /></a>
              <a href="https://linkedin.com/in/neelaymachha" target="_blank"><FiLinkedin size={20} /></a>
              <a href="mailto:machhanilay@gmail.com"><FiMail size={20} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
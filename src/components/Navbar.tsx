"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

export default function Navbar() {
  const [time, setTime] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "numeric", 
        minute: "2-digit",
        second: "2-digit" // Added seconds here
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 relative flex items-center justify-between">
        
        {/* Logo */}
        <div className="z-50">
          <Link href="/" className="font-mono text-xl font-bold tracking-tighter text-white">
            NM<span className="text-[#8b5cf6]">.</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 font-mono text-xs text-gray-400">
          {["ABOUT", "QUALIFICATIONS", "PROJECTS", "CONTACT"].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="hover:text-white transition-colors tracking-wide hover:underline decoration-[#8b5cf6] underline-offset-4"
            >
              [ {item} ]
            </Link>
          ))}
        </div>

        {/* Right Side: Time & Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-gray-500 tabular-nums">
            <span className="hidden xl:inline">MUMBAI</span>
            <span className="text-[#8b5cf6] hidden xl:inline">:</span>
            <span className="min-w-[85px] text-right text-gray-300">
              {time}
            </span>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white text-2xl z-50 focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenuAlt4 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col justify-center items-center transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col gap-8 text-center font-mono text-xl text-gray-300">
            {["ABOUT", "QUALIFICATIONS", "PROJECTS", "CONTACT"].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#8b5cf6] transition-colors"
              >
                [ {item} ]
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </nav>
  );
}
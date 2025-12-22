"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [time, setTime] = useState<string>("");

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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 relative flex items-center justify-between">
        
        {/* 1. Left: Logo */}
        <div className="z-10 flex items-center">
          <Link href="/" className="font-mono text-xl font-bold tracking-tighter text-white hover:text-[#8b5cf6] transition-colors">
            NM<span className="text-[#8b5cf6]">.</span>
          </Link>
        </div>

        {/* 2. Center: Expanded Navigation */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex gap-8 font-mono text-xs text-gray-400">
          <Link href="#about" className="hover:text-white transition-colors tracking-wide hover:underline decoration-[#8b5cf6] underline-offset-4">
            [ ABOUT ]
          </Link>
          <Link href="#qualifications" className="hover:text-white transition-colors tracking-wide hover:underline decoration-[#8b5cf6] underline-offset-4">
            [ QUALIFICATIONS ]
          </Link>
          <Link href="#projects" className="hover:text-white transition-colors tracking-wide hover:underline decoration-[#8b5cf6] underline-offset-4">
            [ PROJECTS ]
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors tracking-wide hover:underline decoration-[#8b5cf6] underline-offset-4">
            [ CONTACT ]
          </Link>
        </div>

        {/* 3. Right: Time Data Only (Cleaner) */}
        <div className="z-10 flex items-center gap-6">
          <div className="flex items-center gap-3 font-mono text-xs text-gray-400 tabular-nums whitespace-nowrap">
            <span className="hidden xl:inline text-gray-600 tracking-wider">MUMBAI, IN</span>
            <span className="text-[#8b5cf6] hidden xl:inline">::</span>
            <span className="min-w-[85px] text-right text-gray-300">
              {time || "--:--:--"}
            </span>
          </div>
        </div>
        
      </div>
    </nav>
  );
}
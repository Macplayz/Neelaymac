"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
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
          <Link href="/" className="font-mono text-xl font-bold tracking-tighter text-white hover:text-[#3b82f6] transition-colors">
            NM<span className="text-[#3b82f6]">.</span>
          </Link>
        </div>

        {/* 2. Center: Navigation (Locked in the middle) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-8 font-mono text-xs text-gray-400">
          <Link href="#about" className="hover:text-white transition-colors tracking-wide">[ ABOUT ]</Link>
          <Link href="#work" className="hover:text-white transition-colors tracking-wide">[ WORK ]</Link>
          <Link href="#contact" className="hover:text-white transition-colors tracking-wide">[ CONTACT ]</Link>
        </div>

        {/* 3. Right: Location & Time */}
        <div className="z-10 flex items-center gap-3 font-mono text-xs text-gray-400 tabular-nums whitespace-nowrap">
          <span className="hidden sm:inline text-gray-600 tracking-wider">MUMBAI, IN</span>
          <span className="text-[#3b82f6]">::</span>
          <span className="min-w-[85px] text-right text-gray-300">
            {time || "--:--:--"}
          </span>
        </div>
        
      </div>
    </nav>
  );
}
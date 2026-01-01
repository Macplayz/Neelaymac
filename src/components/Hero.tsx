"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiLoader } from "react-icons/fi"; 

export default function Hero() {
  const container = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Main Title Staggered Rise
    tl.from(".hero-title-line", {
      y: 100,
      opacity: 0,
      rotateX: -20, // 3D effect
      duration: 1.2,
      stagger: 0.15,
      skewY: 5,
      delay: 0.5 
    })
    // 2. Description & Button Fade Up
    .from(".hero-content", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    }, "-=0.8")
    // 3. Scroll Indicator Bounce
    .from(".hero-scroll", {
      y: 50,
      opacity: 0,
      duration: 1
    }, "-=0.5");

  }, { scope: container });

  return (
    <section ref={container} className="relative h-dvh w-full flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 to-[#0a0a0a] perspective-1000">
      
      <div className="z-10 text-center space-y-6 md:space-y-8 px-4 relative max-w-5xl mx-auto">
        
        {/* Main Title */}
        <h1 ref={titleRef} className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none text-white">
          <div className="overflow-hidden"><div className="hero-title-line">NEELAY<span className="text-[#8b5cf6]">.</span></div></div>
          <div className="overflow-hidden"><div className="hero-title-line">MACHHA</div></div>
        </h1>
        
        {/* Role & Description */}
        <div className="flex flex-col items-center gap-6">
          <p className="hero-content font-mono text-xs md:text-base text-gray-200 tracking-tight text-center">
            [ SYSTEM_ARCHITECT ] <span className="mx-1 md:mx-2 text-[#8b5cf6]">///</span> [ FULL_STACK ]
          </p>
          
          <p className="hero-content max-w-xs md:max-w-md text-gray-300 text-xs md:text-sm leading-relaxed text-center">
            Building digital infrastructure with precision and purpose.
          </p>

          {/* BUTTON: "Download Effect" style but for "Resume Soon" */}
          <button 
            onClick={(e) => e.preventDefault()} // No action yet
            className="hero-content group relative inline-flex items-center justify-center overflow-hidden rounded-sm border border-[#8b5cf6]/50 px-6 py-2.5 md:px-8 md:py-3 font-mono font-medium tracking-wide text-[#8b5cf6] transition-all duration-300 hover:border-[#8b5cf6] hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] cursor-wait"
          >
            {/* The Sliding Purple Background Fill */}
            <span className="absolute inset-0 h-full w-full translate-y-full bg-[#8b5cf6] transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
            
            {/* The Text & Loader */}
            <span className="relative z-10 flex items-center gap-2">
              <span className="opacity-50 transition-opacity group-hover:opacity-100">[</span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em]">RESUME_SOON</span>
              <FiLoader className="h-3 w-3 animate-spin" />
              <span className="opacity-50 transition-opacity group-hover:opacity-100">]</span>
            </span>
          </button>
        </div>
      </div>

      {/* Glow */}
      <div className="hero-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#8b5cf6] opacity-[0.08] blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Scroll Footer */}
      <div className="hero-scroll absolute bottom-6 md:bottom-10 w-full flex justify-center px-4 font-mono text-[9px] md:text-[10px] text-white/50 uppercase tracking-widest">
        <span className="animate-bounce">↓ Scroll</span>
      </div>
    </section>
  );
}
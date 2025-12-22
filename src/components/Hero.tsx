import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 to-[#0a0a0a]">
      
      {/* 1. Content Container */}
      <div className="z-10 text-center space-y-8 px-4 relative">
        
        {/* Status Tag - Uses Signal Green for 'Active' state */}
        <div className="inline-flex items-center gap-2 border border-white/5 bg-white/5 px-3 py-1 rounded-full backdrop-blur-md mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_10px_#10b981]"></span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
            Available for Hire
          </span>
        </div>
        
        {/* Main Title - Uses Electric Violet for Brand Identity */}
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none text-white">
          NEELAY<span className="text-[#8b5cf6]">.</span><br />
          MACHHA
        </h1>
        
        {/* Role & Description */}
        <div className="flex flex-col items-center gap-6">
          <p className="font-mono text-sm md:text-base text-gray-400 tracking-tight">
            [ SYSTEM_ARCHITECT ] <span className="mx-2 opacity-30">///</span> [ FULL_STACK ]
          </p>
          
          <p className="max-w-md text-gray-500 text-sm leading-relaxed">
            Building digital infrastructure with precision and purpose.
          </p>

          {/* === RESUME BUTTON (Violet Accent) === */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm border border-[#8b5cf6]/50 px-8 py-3 font-mono font-medium tracking-wide text-[#8b5cf6] transition-all duration-300 hover:border-[#8b5cf6] hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          >
            {/* Background Fill Animation */}
            <span className="absolute inset-0 h-full w-full translate-y-full bg-[#8b5cf6] transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
            
            {/* Text & Icons */}
            <span className="relative z-10 flex items-center gap-2">
              <span className="opacity-50 transition-opacity group-hover:opacity-100">[</span>
              <span className="text-xs uppercase tracking-[0.2em]">Download_CV</span>
              <svg 
                className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="opacity-50 transition-opacity group-hover:opacity-100">]</span>
            </span>
          </a>
          {/* ========================================= */}

        </div>

      </div>

      {/* 2. Background Glow (Violet) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6] opacity-[0.08] blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* 3. Footer Data */}
      <div className="absolute bottom-10 w-full flex justify-between px-10 font-mono text-[10px] text-white/30 uppercase tracking-widest">
        <span>Mumbai, IN</span>
        <span className="animate-bounce">↓ Scroll</span>
        <span>v2.0.25</span>
      </div>
    </section>
  );
}
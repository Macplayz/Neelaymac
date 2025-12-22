const SKILLS = [
  "NEXT.JS 15", 
  "TYPESCRIPT", 
  "TAILWIND CSS", 
  "NODE.JS", 
  "POSTGRESQL", 
  "SYSTEM_DESIGN", 
  "DOCKER", 
  "AWS"
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* 1. Left Column: Identity */}
          <div className="sticky top-32">
            
            {/* Tag - Violet for Identity */}
            <div className="inline-block border border-[#8b5cf6]/30 px-3 py-1 rounded-full mb-6 bg-[#8b5cf6]/5">
               <p className="font-mono text-[10px] text-[#8b5cf6] uppercase tracking-widest">
                 / 01 _ Identity
               </p>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#ededed] mb-6 leading-tight">
              ENGINEERING <br />
              {/* High Contrast Violet Text */}
              <span className="text-[#8b5cf6]">PRECISION.</span>
            </h2>
            
            {/* The "Anchor" Line */}
            <div className="h-1 w-24 bg-[#8b5cf6] mb-8 shadow-[0_0_20px_#8b5cf6]" />
            
            <p className="text-gray-400 text-sm font-mono max-w-xs leading-relaxed">
              Transforming complex requirements into elegant, fault-tolerant digital systems.
            </p>
          </div>

          {/* 2. Right Column: Bio & Skills */}
          <div className="space-y-16">
            
            {/* The Bio */}
            <div className="prose prose-invert">
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                I am a <span className="text-white font-medium">System Architect</span> and Developer. 
                My focus isn't just on writing code—it's on designing <span className="text-white">ecosystems</span>.
              </p>
              <p className="text-gray-500 mt-6 text-lg">
                Currently finishing my degree at <span className="text-[#8b5cf6]">BTI</span>, I specialize in bridging the gap between rigorous backend logic and fluid, high-performance frontend interfaces.
              </p>
            </div>

            {/* The Skills Sub-Section */}
            <div>
              <h3 className="font-mono text-xs text-[#10b981] uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                {/* Green Accent for "Capabilities/Growth" */}
                <span className="w-8 h-[1px] bg-[#10b981]"></span>
                Technical_Arsenal
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2">
                {SKILLS.map((skill, i) => (
                  <div key={i} className="group flex items-center gap-3 cursor-default">
                    {/* Tiny dot turns Green on hover (Success State) */}
                    <span className="w-1.5 h-1.5 bg-white/10 group-hover:bg-[#10b981] transition-colors duration-300 rounded-full group-hover:shadow-[0_0_10px_#10b981]" />
                    <span className="font-mono text-sm text-gray-500 group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Background Glow (Violet) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6] opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
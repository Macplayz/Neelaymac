"use client";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // 1. Initial fast load to 40%
    const timer1 = setTimeout(() => setWidth(40), 100);

    // 2. Slow down / "think" phase to 70%
    const timer2 = setTimeout(() => setWidth(70), 800);

    // 3. Fast finish to 100%
    const timer3 = setTimeout(() => setWidth(100), 1400);

    // 4. Trigger completion
    const timer4 = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]">
      
      {/* Container for the line */}
      <div className="relative w-64 h-[2px] bg-gray-900 overflow-hidden rounded-full">
        
        {/* The Moving Blue Line */}
        <div 
          className="absolute top-0 left-0 h-full bg-[#3b82f6] shadow-[0_0_15px_#3b82f6] transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ width: `${width}%` }} 
        />
        
      </div>

    </div>
  );
}
"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Preloader from "@/components/preloader";

export default function Home() {
  // State to track if loading is finished
  const [loading, setLoading] = useState(true);

  // Optional: Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      
      {/* 1. Show Preloader if loading is true */}
      {loading && (
        <Preloader onComplete={() => setLoading(false)} />
      )}

      {/* 2. Main Website (Hidden logic creates a smooth fade-in) */}
      <div 
        className={`transition-opacity duration-1000 ease-in-out ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <Hero />
    
      </div>
    </main>
  );
}
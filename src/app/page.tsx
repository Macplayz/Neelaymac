"use client";
import { useState, useEffect } from "react";
// Ensure these imports match your actual filenames (Capitalized is best practice)
import Hero from "@/components/Hero";
import Preloader from "@/components/preloader"; 
import About from "@/components/about";
import Qualifications from "@/components/qualifications";
import Projects from "@/components/projects";
import Contact from "@/components/contact"; 

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      
      {loading && (
        <Preloader onComplete={() => setLoading(false)} />
      )}

      <div 
        className={`transition-opacity duration-1000 ease-in-out ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Hero />
        <About />
        <Qualifications />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Preloader from "@/components/preloader";
import About from "@/components/about";


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
        <Navbar />
        <Hero />
        <About />
      </div>
    </main>
  );
}
"use client";
import { useRef } from "react";
import Image from "next/image"; 
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FiGithub, FiExternalLink, FiFigma, FiArrowRight } from "react-icons/fi";

// --- DIRECT IMAGE IMPORTS ---
import bharatImage from "@/assets/bharatjuris.png";
import quizzoraImage from "@/assets/quizzora.png";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: "BHARAT JURIS",
    category: "AI LEGAL TECH",
    description: "A comprehensive Multi-Model AI Engine designed to revolutionize Indian Legal Tech. It integrates OCR, NLP, and Deep Learning models to analyze legal documents, draft court notices, and simplify complex statutes. Built on a completely stateless architecture with no persistent database, ensuring maximum user privacy and data security.",
    tech: ["Next.js", "Groq API (Llama 3)", "Tailwind CSS", "Lucide React", "TypeScript", "Vercel"], 
    image: bharatImage, 
    live: "https://bharatjuris.vercel.app/",
    github: "https://github.com/Macplayz/Bharat-Juris",
    color: "#3b82f6", 
  },
  {
    title: "QUIZZORA",
    category: "SAAS PLATFORM",
    description: "A high-performance quiz creation ecosystem built for scale. Leverages Supabase for real-time database interactions and authentication. Features a dynamic quiz engine, analytics dashboard, and a dark-mode first UI for seamless user engagement.",
    tech: ["Next.js", "Supabase Auth", "PostgreSQL", "TypeScript", "Framer Motion", "Vercel"],
    image: quizzoraImage,
    live: "https://quizzora-supa.vercel.app/",
    github: "https://github.com/CriticalMalwareHacker/quizzora-supa",
    color: "#8b5cf6", 
  },
];

const DESIGNS = [
  {
    title: "HEALTH TRACKER APP",
    type: "UI/UX DESIGN",
    link: "https://www.figma.com/design/FPu7qL81DTj9ynn7T3ahFu/UI-UX?node-id=0-1&t=QZckBpFOYtx3Ojje-1",
  },
];

export default function Projects() {
  const container = useRef(null);

  useGSAP(() => {
    const projects = gsap.utils.toArray<HTMLElement>(".project-card");
    
    projects.forEach((project) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

  }, { scope: container });

  return (
    <section id="projects" ref={container} className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-[#8b5cf6]"></div>
              <span className="font-mono text-[#8b5cf6] tracking-widest text-sm">DEPLOYMENTS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              SELECTED <span className="text-[#8b5cf6]">WORKS</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-right hidden md:block">
            A curated collection of full-stack applications and system architectures built for scale.
          </p>
        </div>

        {/* 1. ENGINEERING PROJECTS */}
        <div className="space-y-32 mb-40">
          {PROJECTS.map((project, i) => (
            <div key={i} className={`project-card flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center`}>
              
              {/* Image Half */}
              <div className="w-full md:w-3/5 relative group">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-[#111]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                  
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    placeholder="blur"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div 
                  className="absolute -inset-4 opacity-20 blur-2xl -z-10 rounded-full transition-opacity duration-500 group-hover:opacity-40"
                  style={{ backgroundColor: project.color }}
                ></div>
              </div>

              {/* Text Half */}
              <div className="w-full md:w-2/5 space-y-6">
                <span className="font-mono text-xs text-gray-500 tracking-[0.2em] uppercase">
                  /// {project.category}
                </span>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-[10px] font-mono border border-white/10 rounded-full text-gray-300 bg-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-6">
                  <Link href={project.live} target="_blank" className="flex items-center gap-2 text-white hover:text-[#8b5cf6] transition-colors font-mono text-sm group">
                    <FiExternalLink /> 
                    <span className="border-b border-transparent group-hover:border-[#8b5cf6]">LIVE_DEMO</span>
                  </Link>
                  <Link href={project.github} target="_blank" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-mono text-sm">
                    <FiGithub /> 
                    <span>SOURCE_CODE</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. DESIGN LAB MINI-SECTION */}
        <div className="border-t border-white/10 pt-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <FiFigma className="text-[#8b5cf6]" /> DESIGN <span className="text-gray-600">LAB</span>
            </h3>
            <span className="font-mono text-xs text-gray-500 hidden md:block">/// UI_UX & DESIGNS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map over Design Works */}
            {DESIGNS.map((design, i) => (
              <Link href={design.link} target="_blank" key={i} className="group block p-8 bg-[#111] border border-white/5 rounded-2xl hover:border-[#8b5cf6]/50 hover:bg-[#161616] transition-all duration-300">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-white/5 rounded-lg text-[#8b5cf6] group-hover:text-white transition-colors">
                    <FiFigma className="text-xl" />
                  </div>
                  <FiExternalLink className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
                
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">{design.type}</span>
                  <h4 className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">{design.title}</h4>
                </div>
              </Link>
            ))}
            
            {/* SAVEE.IT PROPER CARD */}
            <Link 
              href="https://savee.com/neelaymac/" 
              target="_blank" 
              className="group relative p-8 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 rounded-2xl hover:border-[#8b5cf6] hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5cf6] opacity-[0.05] blur-[50px] group-hover:opacity-[0.1] transition-opacity"></div>

              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="p-3 bg-[#8b5cf6]/10 rounded-lg text-[#8b5cf6]">
                   {/* Grid Icon for 'Collection' */}
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                </div>
                <FiArrowRight className="text-gray-600 group-hover:text-[#8b5cf6] group-hover:translate-x-1 transition-all" />
              </div>

              <div className="space-y-2 relative z-10">
                <span className="font-mono text-[10px] text-[#8b5cf6] uppercase tracking-wider">DESIGNS</span>
                <h4 className="text-xl font-bold text-white">View on Savee.it</h4>
              </div>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
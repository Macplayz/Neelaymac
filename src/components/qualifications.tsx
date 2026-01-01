"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE = [
  {
    year: "2024 — PRESENT",
    title: "B.TECH IN INFORMATION TECHNOLOGY",
    institution: "NMIMS MPSTME",
    location: "Mumbai, IN",
    // REFINED: Smoother flow, less robotic
    description: "Currently pursuing an Integrated B.Tech degree with a specialization in Full Stack Engineering and Applied AI. My focus lies in building scalable system architectures and contributing to the open-source ecosystem.",
    active: true, 
  },
  {
    year: "2022 — 2024",
    title: "DIPLOMA IN INFORMATION TECHNOLOGY", 
    institution: "NMIMS MPSTME",
    location: "Mumbai, IN",
    // REFINED: clearer emphasis on the foundation
    description: "Completed the foundational phase of the Integrated B.Tech program. Gained rigorous training in computer science fundamentals, including algorithms, low-level programming, and database systems.",
    active: false,
  },
  {
    year: "2008 — 2022",
    title: "SECONDARY EDUCATION",
    institution: "Children's Academy",
    location: "Malad, Mumbai",
    // REFINED: Professional phrasing
    description: "Completed secondary schooling with a dedicated focus on Information Technology. Developed an early passion for technology through participation in various tech competitions and coding workshops.",
    active: false,
  },
];

export default function Qualifications() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      }
    });

    // 1. Draw the vertical line
    tl.from(".timeline-line", {
      height: "0%",
      duration: 1.5,
      ease: "power2.inOut",
    })
    // 2. Pop in the dots
    .from(".timeline-dot", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
      ease: "back.out(1.7)"
    }, "-=1")
    // 3. Slide in the content
    .from(".timeline-content", {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
    }, "-=0.5");

  }, { scope: container });

  return (
    <section id="qualifications" ref={container} className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-20">
          <div className="h-[1px] w-12 bg-[#8b5cf6]"></div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            ACADEMIC <span className="text-[#8b5cf6]">TIMELINE</span>
          </h2>
        </div>

        {/* THE TIMELINE */}
        <div className="relative border-l border-white/10 ml-3 md:ml-12 space-y-16">
          
          {/* Animated Line Overlay */}
          <div className="timeline-line absolute left-[-1px] top-0 w-[1px] bg-[#8b5cf6] h-full origin-top"></div>

          {TIMELINE.map((item, i) => (
            <div key={i} className="relative pl-8 md:pl-16 group">
              
              {/* The Dot */}
              <div className={`timeline-dot absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full border-2 ${item.active ? 'border-[#8b5cf6] bg-[#0a0a0a]' : 'border-gray-600 bg-[#0a0a0a]'} z-10 group-hover:scale-150 transition-transform duration-300`}>
                {item.active && <div className="absolute inset-0 rounded-full bg-[#8b5cf6] animate-ping opacity-75"></div>}
              </div>

              {/* Content */}
              <div className="timeline-content">
                <span className="font-mono text-xs text-[#8b5cf6] tracking-widest mb-2 block">
                  [{item.year}]
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 font-mono text-sm mb-4">
                  <span>{item.institution}</span>
                  <span className="text-[#8b5cf6]">•</span>
                  <span>{item.location}</span>
                </div>
                <p className="text-gray-400 max-w-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* FUTURE NODE */}
          <div className="relative pl-8 md:pl-16 opacity-50">
            <div className="absolute left-[-1px] top-[-60px] h-[60px] w-[1px] border-l border-dashed border-gray-700"></div>
            <div className="timeline-dot absolute left-[-4px] top-3 w-[7px] h-[7px] bg-gray-700 rounded-full animate-pulse"></div>
            <div className="timeline-content">
              <span className="font-mono text-xs text-gray-600 tracking-widest mb-1 block">
                [ FUTURE ]
              </span>
              <h3 className="text-xl font-bold text-gray-500 italic">
                What's Next?
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
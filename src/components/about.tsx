"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
// Make sure react-icons is installed!
import { 
  SiJavascript, SiTypescript, SiCplusplus, SiPython, SiPhp, SiHtml5, SiCss3, 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, 
  SiMysql, SiFirebase, SiGit, SiGithub, SiLinux, SiNpm, SiPostman, 
  SiFigma, SiAdobeillustrator, SiAdobephotoshop 
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; 

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "C++", icon: SiCplusplus },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "PHP", icon: SiPhp },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Firebase", icon: SiFirebase },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Linux", icon: SiLinux },
  { name: "npm", icon: SiNpm },
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: SiFigma },
  { name: "Illustrator", icon: SiAdobeillustrator },
  { name: "Photoshop", icon: SiAdobephotoshop },
];

export default function About() {
  const container = useRef(null);

  useGSAP(() => {
    // Only animate the Bio Text
    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1
    });

  }, { scope: container });

  return (
    <section ref={container} id="about" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Bio Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="about-text text-3xl md:text-6xl font-bold tracking-tighter text-white mb-6 md:mb-8 leading-tight">
            I BUILD <span className="text-[#8b5cf6]">SYSTEMS</span> <br />
            THAT SCALE.
          </h2>
          
          <p className="about-text text-base md:text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
            B.Tech IT Undergraduate focused on <span className="text-white font-medium">Full Stack Engineering</span> and <span className="text-white font-medium">Applied Machine Learning</span>. I combine robust <span className="text-white font-medium">System Architecture</span> with impactful <span className="text-[#8b5cf6] font-medium">Graphic Design</span> to create digital experiences that are both powerful and visually compelling.
          </p>
        </div>

        {/* Technical Matrix */}
        <div className="max-w-6xl mx-auto">
          
          <div className="flex items-center gap-4 mb-8 md:mb-12"> 
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent opacity-30"></div>
            <h3 className="font-mono text-[10px] md:text-xs text-[#8b5cf6] uppercase tracking-[0.3em]">
              /// Technical_Matrix
            </h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent opacity-30"></div>
          </div>

          <div className="skills-grid grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
            {SKILLS.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={i} 
                  className="group p-3 md:p-4 bg-[#111111] border border-white/5 rounded-xl flex flex-col items-center justify-center gap-2 md:gap-3 transition-all duration-300 hover:border-[#8b5cf6] hover:shadow-[0_0_20px_-5px_#8b5cf6] hover:-translate-y-1"
                >
                  {/* Icons are rendered directly here */}
                  <Icon className="text-2xl md:text-4xl text-gray-500 group-hover:text-white transition-colors duration-300" />
                  
                  <span className="font-mono text-[9px] md:text-[10px] text-gray-600 uppercase tracking-wider group-hover:text-[#8b5cf6] transition-colors duration-300 text-center">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const SOCIALS = [
  { name: "GITHUB", link: "https://github.com/Macplayz", icon: FiGithub },
  { name: "LINKEDIN", link: "https://linkedin.com/in/neelaymachha", icon: FiLinkedin },
  { name: "EMAIL", link: "mailto:machhanilay@gmail.com", icon: FiMail },
];

export default function Contact() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".contact-title", { y: 50, opacity: 0, duration: 1, stagger: 0.1 })
      .from(".contact-link", { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.5")
      .from(".footer-line", { width: "0%", duration: 1, ease: "power2.inOut" }, "-=0.5")
      .from(".footer-text", { opacity: 0, y: 10, duration: 0.5 }, "-=0.2");

  }, { scope: container });

  return (
    <section ref={container} id="contact" className="py-20 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div>
            <h2 className="contact-title text-4xl md:text-7xl font-bold tracking-tighter text-white max-w-2xl leading-none">
              READY TO <br />
              <span className="text-gray-400 hover:text-white transition-colors duration-500">COLLABORATE?</span>
            </h2>
          </div>

          <a 
            href="mailto:machhanilay@gmail.com"
            className="contact-title group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 transition-all duration-300 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10"
          >
            <span className="font-mono text-sm text-gray-200 group-hover:text-white mr-2">INITIALIZE_CHAT</span>
            <FiArrowUpRight className="text-gray-400 group-hover:text-[#8b5cf6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {SOCIALS.map((social, i) => (
            <a 
              key={i} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link group flex items-center justify-between p-4 border border-white/5 bg-[#0a0a0a] rounded-lg hover:border-[#8b5cf6]/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <social.icon className="text-gray-400 group-hover:text-[#8b5cf6] transition-colors" />
                <span className="font-mono text-xs text-gray-300 group-hover:text-white transition-colors tracking-wider">
                  {social.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="relative pt-8">
          <div className="footer-line absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          <div className="footer-text flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            {/* UPDATED: Changed text-gray-600 to text-gray-300 for high visibility */}
            <p className="font-mono text-[10px] text-gray-300 uppercase tracking-widest">
              © {new Date().getFullYear()} NEELAY MACHHA. ALL SYSTEMS OPERATIONAL.
            </p>
            
            <p className="font-mono text-[10px] text-gray-300 uppercase tracking-widest flex items-center gap-2">
              LOCATION: MUMBAI, IN <span className="text-[#8b5cf6]">///</span> 19.0760° N, 72.8777° E
            </p>
          </div>
        </div>

      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#8b5cf6]/5 to-transparent pointer-events-none"></div>
    </section>
  );
}
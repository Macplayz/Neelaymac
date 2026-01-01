import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/smoothScrolling"; 
import { Analytics } from "@vercel/analytics/react"; // <--- 1. Import Analytics

// Headline Font (Modern, Geometric)
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-grotesk" 
});

// Technical Font (Retro, Code)
const spaceMono = Space_Mono({ 
  weight: ["400", "700"],
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: "Neelay Machha | Creative Dev",
  description: "Portfolio 2025",
  icons: {
    icon: "/icon.svg", 
  },
  // Added OpenGraph for better social sharing
  openGraph: {
    title: "Neelay Machha | System Architect",
    description: "Full Stack Engineer & System Architect based in Mumbai.",
    url: "https://your-domain.com", 
    siteName: "Neelay Machha Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased bg-[#0a0a0a] text-[#e5e5e5]`}>
        
        {/* Grain Texture */}
        <div className="fixed inset-0 z-[60] pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <SmoothScrolling>
          <Navbar />
          {children}
          <Analytics /> {/* <--- 2. Add Component Here */}
        </SmoothScrolling>

      </body>
    </html>
  );
}
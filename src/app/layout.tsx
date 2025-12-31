import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/smoothScrolling"; // Import the smooth scroll wrapper

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased bg-[#0a0a0a] text-[#e5e5e5]`}>
        
        {/* Grain Texture (Kept this, it looks cool) */}
        <div className="fixed inset-0 z-[60] pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        {
        
        }
        <SmoothScrolling>
          <Navbar />
          {children}
        </SmoothScrolling>

      </body>
    </html>
  );
}
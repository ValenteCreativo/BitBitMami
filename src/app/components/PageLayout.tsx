"use client";

import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function PageLayout({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBlur = scrollY > 100;
  const hideLogo = scrollY > 120;

  return (
    <div className="relative z-10 min-h-screen font-sans text-center text-[#0F9D91] overflow-x-hidden">
      {/* Soft blur panel */}
      {showBlur && (
       <div className="fixed top-0 left-0 w-full h-[57.5%] z-20 pointer-events-none bg-white/20 backdrop-blur-sm transition-opacity duration-300" />
      )}

      {/* Back button */}
      <div className="fixed top-6 left-6 z-30">
        <Link href="/">
          <button className="bg-[#fef7e0] text-[#6e4b1f] font-semibold px-4 py-2 rounded-full shadow-md hover:bg-[#fff3c0] transition-all border border-[#d4af37]">
            ← Back to Garden
          </button>
        </Link>
      </div>

      {/* Menu */}
      <div className="fixed top-6 right-6 z-30">
        <button className="p-2 rounded-full bg-[#d4af37] text-white shadow hover:brightness-110 transition">
          <FaBars size={20} />
        </button>
      </div>

      {/* Logo */}
      {!hideLogo && (
        <div className="fixed top-[22%] left-1/2 -translate-x-1/2 z-20 animate-fade-in transition-transform duration-700 ease-out hover:scale-105">
        <Image
          src="https://red-causal-armadillo-397.mypinata.cloud/ipfs/bafkreiefgcssizawt255mjjqaced3qn7scseiylpnqrmfboma4f7i5gjeu"
          alt="BitBitMami Logo"
          width={180}
          height={180}
          className="rounded-full border-4 border-[#D4AF37] shadow-2xl"
        />
        </div>
      )}

      {/* Main content */}
      <div className="pt-[440px] pb-20 px-6 w-full max-w-4xl mx-auto flex flex-col items-center z-30 relative">
        {children}
      </div>

      {/* Footer */}
      <footer className="text-sm text-[#00747A] opacity-80 pb-10 z-30 relative">
        From México with love <span className="text-[#D4AF37]">❤</span> — open source at{' '}
        <a
          href="https://github.com/ValenteCreativo/bitbitmami"
          className="underline hover:text-[#0F9D91]"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

"use client";

import { FaWallet } from "react-icons/fa";
import Image from "next/image";
import GardenScene from "./components/GardenScene";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans text-[#0F9D91] overflow-hidden">
      <GardenScene zoom={0} />

      {/* Connect Wallet in corner */}
      <div className="fixed top-6 right-6 z-20 animate-fade-in">
        <button className="flex items-center gap-2 px-5 py-2 bg-[#D4AF37] text-white rounded-full shadow hover:brightness-110 transition text-sm md:text-base">
          <FaWallet /> Connect Wallet
        </button>
      </div>

      {/* Fixed Logo */}
      <div className="fixed top-[22%] left-1/2 -translate-x-1/2 z-20 animate-fade-in transition-transform duration-700 ease-out hover:scale-105">
  <Image
    src="https://red-causal-armadillo-397.mypinata.cloud/ipfs/bafkreiefgcssizawt255mjjqaced3qn7scseiylpnqrmfboma4f7i5gjeu"
    alt="BitBitMami Logo"
    width={180}
    height={180}
    className="rounded-full border-4 border-[#D4AF37] shadow-2xl"
  />
      </div>

      <div className="mt-30" />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen text-center px-6 pt-[370px] pb-20 animate-fade-in-slow">
        <div className="mt-12" />

        <p className="text-lg md:text-xl text-[#3DB8A0] max-w-2xl leading-relaxed mb-20 bg-white/85 px-8 py-5 rounded-xl shadow-lg backdrop-blur-xl transition-all duration-700 ease-out">
        Follow the white rabbit 🐇 into your own wonderland — A gateway to plan your savings, get paid in Bitcoin, exchange with others in a living economy, and grow your legacy.
        </p>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mb-20">
          {[
            { title: "Savings Plan", url: "/software/savings" },
            { title: "Learn Bitcoin", url: "/software/learn" },
            { title: "Circular Economy", url: "/software/networking" },
            { title: "Send / Receive", url: "/software/send" },
          ].map((link, index) => (
            <Link key={index} href={link.url}>
              <button className="px-8 py-4 rounded-full bg-[#3DB8A0] text-white font-semibold text-lg shadow-lg hover:bg-[#0F9D91] hover:shadow-xl hover:brightness-105 transition-all duration-300 ease-in-out">
                {link.title}
              </button>
            </Link>
          ))}
        </div>

       
        {/* Footer */}
        <footer className="text-sm text-[#00747A] opacity-80">
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

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-slow {
          animation: fade-in 1.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
}

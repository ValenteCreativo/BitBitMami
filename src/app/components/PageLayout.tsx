"use client";

import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  CartIcon,
  ReceiveIcon,
  SatoshiV3Icon,
  PieChartIcon,
  WalletIcon,
} from "@bitcoin-design/bitcoin-icons-react/outline";
import { connect } from "@stacks/connect";

export default function PageLayout({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBlur = scrollY > 100;
  const hideLogo = scrollY > 120;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleConnectWallet = async () => {
    try {
      const response = await connect();
      if (response && response.addresses) {
        const address = response.addresses[0]?.address;
        setWalletAddress(address || null);
      }
    } catch (error) {
      console.error("Connection failed", error);
    }
  };

  

  return (
    <div className="relative z-10 min-h-screen font-sans text-center text-[#0F9D91] overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-[100] pointer-events-none">
        <div className="flex justify-between items-center px-6 pt-6 pointer-events-auto">
          <button
            onClick={() => router.push("/")}
            className="bg-[#fef7e0] text-[#6e4b1f] font-semibold px-4 py-2 rounded-full shadow-md hover:bg-[#fff3c0] transition-all border border-[#d4af37]"
          >
            ← Back to Garden
          </button>
          <div className="flex items-center gap-4">
            <button
              className="p-2 rounded-full bg-[#d4af37] text-white shadow hover:brightness-110 transition"
              onClick={handleConnectWallet}
            >
              <WalletIcon
                style={{ height: "20px", width: "20px", color: "#FFFFFF" }}
              />
            </button>
            {walletAddress && (
              <span className="text-xs text-[#fef7e0] font-mono truncate max-w-[100px]">
                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </span>
            )}
            <button
              className="p-2 rounded-full bg-[#d4af37] text-white shadow hover:brightness-110 transition"
              onClick={toggleMenu}
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Blur removed */}
      {showBlur && (
        <div className="fixed top-0 left-0 w-full h-[57.5%] z-20 pointer-events-none bg-white/20 transition-opacity duration-300" />
      )}

      {!hideLogo && (
        <div className="fixed top-[22%] left-1/2 -translate-x-1/2 z-10 animate-fade-in transition-transform duration-700 ease-out hover:scale-105 pointer-events-none">
          <Image
            src="https://red-causal-armadillo-397.mypinata.cloud/ipfs/bafkreiefgcssizawt255mjjqaced3qn7scseiylpnqrmfboma4f7i5gjeu"
            alt="BitBitMami Logo"
            width={180}
            height={180}
            className="rounded-full border-4 border-[#D4AF37] shadow-2xl"
          />
        </div>
      )}

      <div className="pt-[440px] pb-20 px-6 w-full max-w-4xl mx-auto flex flex-col items-center z-30 relative">
        {children}
      </div>

      <footer className="text-sm text-[#00747A] opacity-80 pb-10 z-30 relative">
        From México with love <span className="text-[#D4AF37]">❤</span> — open source at{" "}
        <a
          href="https://github.com/ValenteCreativo/bitbitmami"
          className="underline hover:text-[#0F9D91]"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>

      {menuOpen && (
        <div
        className="fixed top-18 right-6 w-72 z-[150] flex flex-col items-start p-4 pt-6 space-y-4 text-white border-5 border-[#3DB8A0] rounded-bl-2xl bg-white/0 backdrop-blur-none"
        >
          <button
            onClick={toggleMenu}
            className="self-end text-[#3DB8A0] text-xl font-bold px-2"
          >
            <FaTimes />
          </button>

          <button
            className="flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-white font-semibold text-lg rounded-full hover:shadow-xl transition-all duration-300 ease-in-out"
            onClick={() => router.push("/software/savings")}
          >
            <SatoshiV3Icon
              style={{ height: "20px", width: "20px", color: "#FFFFFF" }}
            />
            Savings Plan
          </button>
          <button
            className="flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-white font-semibold text-lg rounded-full hover:shadow-xl transition-all duration-300 ease-in-out"
            onClick={() => router.push("/software/learn")}
          >
            <PieChartIcon
              style={{ height: "20px", width: "20px", color: "#FFFFFF" }}
            />
            Learn Bitcoin
          </button>
          <button
            className="flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-white font-semibold text-lg rounded-full hover:shadow-xl transition-all duration-300 ease-in-out"
            onClick={() => router.push("/software/networking")}
          >
            <CartIcon
              style={{ height: "20px", width: "20px", color: "#FFFFFF" }}
            />
            Circular Economy
          </button>
          <button
            className="flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-white font-semibold text-lg rounded-full hover:shadow-xl transition-all duration-300 ease-in-out"
            onClick={() => router.push("/software/send")}
          >
            <ReceiveIcon
              style={{ height: "20px", width: "20px", color: "#FFFFFF" }}
            />
            Send / Receive
          </button>
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { WalletIcon } from "@bitcoin-design/bitcoin-icons-react/outline";

const WalletSimulator = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsed = JSON.parse(userData);
      const address = parsed?.addresses?.[0]?.address;
      if (address) setWalletAddress(address);
    }
  }, []);

  const handleConnect = () => {
    const simulatedAddress = "SP2C2FJY9K6...8AZE2";
    localStorage.setItem("userData", JSON.stringify({
      addresses: [{ address: simulatedAddress }]
    }));
    setWalletAddress(simulatedAddress);
  };

  return (
    <div className="mt-8 text-center text-[#0F9D91]">
      {walletAddress ? (
        <>
          <p className="text-sm mb-2">Wallet Connected</p>
          <p className="text-xs opacity-80">{walletAddress}</p>
        </>
      ) : (
        <button
          onClick={handleConnect}
          className="flex items-center gap-2 px-5 py-2 bg-[#D4AF37] text-white rounded-full shadow hover:brightness-110 transition"
        >
          <WalletIcon className="w-5 h-5" />
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletSimulator;

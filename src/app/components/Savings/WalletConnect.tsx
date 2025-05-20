"use client";

import { useWalletStore } from "@/app/store/walletStore";

const WalletConnect = () => {
  const { isConnected, connectWallet, address } = useWalletStore();

  return (
    <div className="mb-6">
      {isConnected ? (
        <div className="text-sm text-[#00747a] bg-white/60 px-4 py-2 rounded-xl shadow-md inline-block">
          Connected: <span className="font-semibold">{address}</span>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-[#d4af37] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#0f9d91] transition"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;

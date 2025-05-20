"use client";

import { useSavingsStore } from "@/app/store/savingsStore";

const WalletInfo = () => {
  const { totalAmount } = useSavingsStore();

  const btcToUsd = 67000; // valor estimado
  const totalUsd = (totalAmount / 100000000) * btcToUsd;

  return (
    <div className="mb-6 bg-white/60 px-6 py-4 rounded-lg shadow border border-[#d4af37]">
      <h2 className="text-xl font-semibold text-[#00747a] mb-2">Wallet Info</h2>
      <p>
        <strong>Connected Wallet:</strong> SP2C2K1A3H0GJ4X8H4T5QWJ8YZ3GTRV1B6ZP9QK8R
      </p>
      <p>
        <strong>Balance:</strong> {totalAmount} sBTC (~${totalUsd.toFixed(2)} USD)
      </p>
    </div>
  );
};

export default WalletInfo;

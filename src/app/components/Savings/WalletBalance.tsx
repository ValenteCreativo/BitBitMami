"use client";

import { useWalletStore } from "@/app/store/walletStore";

const WalletBalance = () => {
  const { balance } = useWalletStore();

  return (
    <div className="text-center text-lg text-[#3db8a0] mt-4">
      Current Balance: <span className="font-bold">{balance} sBTC</span>
    </div>
  );
};

export default WalletBalance;

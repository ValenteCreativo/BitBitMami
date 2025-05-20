"use client";

import { LightningIcon, LockIcon, SafeIcon } from "@bitcoin-design/bitcoin-icons-react/outline";

const vaults = [
  {
    name: "sBTC Growth Vault",
    yield: "5.2%",
    description: "Earn passive yield on your Bitcoin through secure smart contracts.",
    icon: <SafeIcon className="h-6 w-6 text-[#0f9d91]" />,
  },
  {
    name: "Community Stacking Vault",
    yield: "3.8%",
    description: "Participate in Stacking pools and receive BTC rewards.",
    icon: <LightningIcon className="h-6 w-6 text-[#0f9d91]" />,
  },
  {
    name: "DeFi Yield Vault",
    yield: "6.5%",
    description: "Simulated DeFi integration via the Stacks ecosystem.",
    icon: <LockIcon className="h-6 w-6 text-[#0f9d91]" />,
  },
];

const SavingsYield = () => {
  return (
    <div className="w-full max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-[#00747a] mb-4">Earn Yield on Your sBTC</h2>
      {vaults.map((vault, idx) => (
        <div key={idx} className="flex items-center justify-between p-5 bg-white/70 rounded-xl shadow border border-[#d4af37]">
          <div className="flex items-center gap-4">
            {vault.icon}
            <div className="text-left">
              <h3 className="text-lg font-semibold text-[#0f9d91]">{vault.name}</h3>
              <p className="text-sm text-[#00747a]">{vault.description}</p>
            </div>
          </div>
          <span className="text-lg font-bold text-[#3db8a0]">{vault.yield}</span>
        </div>
      ))}
    </div>
  );
};

export default SavingsYield;

"use client";

const vaults = [
  {
    name: "Education Vault",
    description: "Earn 3.5% APY on educational savings",
    apr: "3.5%",
  },
  {
    name: "Home Vault",
    description: "Save towards your dream home at 4.2% APY",
    apr: "4.2%",
  },
  {
    name: "Vacation Vault",
    description: "Plan your next getaway and earn 5% APY",
    apr: "5.0%",
  },
];

const SavingsVaults = () => {
  return (
    <div className="w-full max-w-4xl mt-12">
      <h2 className="text-2xl font-bold text-[#00747a] mb-6">Savings Vaults (Mock)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vaults.map((vault, idx) => (
          <div
            key={idx}
            className="bg-white/60 p-6 rounded-xl shadow-lg backdrop-blur-md border border-[#d4af37] hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold text-[#0f9d91]">{vault.name}</h3>
            <p className="text-sm text-[#00747a] mt-2">{vault.description}</p>
            <div className="mt-4 text-[#d4af37] font-bold text-xl">{vault.apr} APY</div>
            <button
              className="mt-4 bg-[#3db8a0] text-white px-4 py-2 rounded-full hover:bg-[#0f9d91] transition"
              onClick={() => alert(`Joined ${vault.name} vault!`)}
            >
              Join Vault
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavingsVaults;

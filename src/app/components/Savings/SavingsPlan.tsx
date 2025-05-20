import { useState } from "react";
import { useSavingsStore } from "@/app/store/savingsStore";

const SavingsPlan = () => {
  const { totalAmount, savingsBoxes, addBox, removeBox } = useSavingsStore();
  const [name, setName] = useState("");
  const [usdAmount, setUsdAmount] = useState(0);

  const btcToUsd = 67000;
  const sbtcAmount = Math.round((usdAmount / btcToUsd) * 100000000);

  const handleAdd = () => {
    if (!name || sbtcAmount <= 0 || sbtcAmount > totalAmount) {
      alert("Check name or amount");
      return;
    }
    addBox({ name, amount: sbtcAmount, saved: 0 });
    setUsdAmount(0);
    setName("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-[#00747a] mb-4">Create Savings Box</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          value={name}
          placeholder="Box name"
          onChange={(e) => setName(e.target.value)}
          className="flex-1 p-3 border border-[#0f9d91] rounded-lg"
        />
        <input
          type="number"
          value={usdAmount}
          placeholder="USD"
          onChange={(e) => setUsdAmount(Number(e.target.value))}
          className="w-40 p-3 border border-[#3db8a0] rounded-lg"
        />
        <button onClick={handleAdd} className="bg-[#3db8a0] text-white px-6 py-3 rounded-lg hover:bg-[#0f9d91] transition">
          Add
        </button>
      </div>

      {savingsBoxes?.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Your Boxes</h3>
          <div className="space-y-2">
            {savingsBoxes.map((box, idx) => (
              <div key={idx} className="flex justify-between items-center px-4 py-2 bg-white/70 rounded shadow border border-[#d4af37]">
                <div>
                  <p className="text-[#0f9d91] font-medium">{box.name}</p>
                  <p>{box.amount} sBTC</p>
                </div>
                <button onClick={() => removeBox(box.name)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SavingsPlan;

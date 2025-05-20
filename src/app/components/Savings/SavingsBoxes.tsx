"use client";

import { useSavingsStore } from "@/app/store/savingsStore";
import { useState } from "react";

const SavingsBoxes = () => {
  const { savingsBoxes, totalAmount, addBox, removeBox } = useSavingsStore();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const handleAdd = () => {
    if (!name || amount <= 0) {
      alert("Please enter a valid name and amount.");
      return;
    }

    if (amount > totalAmount) {
      alert("Insufficient funds.");
      return;
    }

    addBox({ name, amount, saved: 0 });
    setName("");
    setAmount(0);
  };

  return (
    <div className="w-full max-w-xl">
      <h2 className="text-2xl font-bold text-[#00747a] mb-6">Distribute Savings</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Box name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 p-3 border border-[#3db8a0] rounded-xl"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-32 p-3 border border-[#3db8a0] rounded-xl"
        />
        <button
          onClick={handleAdd}
          className="bg-[#3db8a0] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#0f9d91] transition"
        >
          Add Box
        </button>
      </div>

      {savingsBoxes.length === 0 ? (
        <p className="text-[#0f9d91] opacity-80">No boxes yet. Start by adding one!</p>
      ) : (
        <div className="space-y-4">
          {savingsBoxes.map((box, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white/70 p-4 rounded-xl shadow border border-[#d4af37]"
            >
              <div>
                <p className="font-semibold text-[#0f9d91]">{box.name}</p>
                <p>{box.amount} sBTC</p>
              </div>
              <button
                onClick={() => removeBox(box.name)}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-sm text-[#0f9d91]">
        <strong>Remaining Total:</strong> {totalAmount} sBTC
      </div>
    </div>
  );
};

export default SavingsBoxes;

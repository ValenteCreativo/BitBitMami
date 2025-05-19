"use client";

import { useState } from "react";

export default function SavingsPlan() {
  const [goalAmount, setGoalAmount] = useState(0);
  const [targetDate, setTargetDate] = useState("");
  
  const handleCreateSavingsPlan = () => {
    if (!goalAmount || !targetDate) {
      alert("Por favor, ingresa una cantidad y una fecha objetivo.");
      return;
    }

    // Aquí iría la lógica de conectar con Stacks para crear el plan
    console.log(`Objetivo de ahorro creado: ${goalAmount} hasta el ${targetDate}`);
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="goalAmount" className="block text-lg font-semibold">
          Objective Amount (sBTC):
        </label>
        <input
          type="number"
          id="goalAmount"
          value={goalAmount}
          onChange={(e) => setGoalAmount(Number(e.target.value))}
          className="mt-2 p-2 w-full border border-[#0F9D91] rounded-lg"
          placeholder="Enter amount in sBTC"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="targetDate" className="block text-lg font-semibold">
          Target Date:
        </label>
        <input
          type="date"
          id="targetDate"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          className="mt-2 p-2 w-full border border-[#0F9D91] rounded-lg"
        />
      </div>

      <button
        onClick={handleCreateSavingsPlan}
        className="w-full bg-[#0F9D91] text-white font-semibold p-3 rounded-lg hover:bg-[#3DB8A0] transition-all"
      >
        Create Savings Plan
      </button>
    </div>
  );
}

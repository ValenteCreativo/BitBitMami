"use client";

import { useState, useEffect } from "react";

export default function SavingsProgress() {
  const [progress, setProgress] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const goalAmount = 1000; // Simulamos un objetivo de ahorro de 1000 sBTC

  useEffect(() => {
    // Calculamos el progreso en función del balance actual (esto es simulado)
    const progress = (currentBalance / goalAmount) * 100;
    setProgress(progress);
  }, [currentBalance]);

  return (
    <div>
      <h2 className="text-lg font-semibold text-[#0F9D91] mb-4">Progress</h2>
      <div className="mb-4">
        <p>Current Balance: {currentBalance} sBTC</p>
        <div className="w-full bg-[#D4AF37] rounded-full h-2 mt-2">
          <div
            className="bg-[#0F9D91] h-2"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        <p>Progress: {Math.min(progress, 100)}%</p>
      </div>
      <button onClick={() => setCurrentBalance(currentBalance + 100)}>
        Add 100 sBTC
      </button>
    </div>
  );
}

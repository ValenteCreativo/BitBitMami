"use client";

import { useSavingsStore } from "@/app/store/savingsStore";
import { useMemo } from "react";

const SavingsProgress = () => {
  const rawBoxes = useSavingsStore((state) => state.savingsBoxes);
  const savingsBoxes = useMemo(() => rawBoxes ?? [], [rawBoxes]);

  const totalGoal = savingsBoxes.reduce((acc, box) => acc + box.amount, 0);
  const totalSaved = savingsBoxes.reduce((acc, box) => acc + box.saved, 0);
  const progress = totalGoal > 0 ? (totalSaved / totalGoal) * 100 : 0;

  return (
    <div className="w-full max-w-xl">
      <h2 className="text-2xl font-bold text-[#00747a] mb-6">Your Progress</h2>

      <div className="bg-white/70 border border-[#d4af37] rounded-xl p-6 shadow-md text-left">
        <p className="mb-2 text-lg text-[#0f9d91] font-medium">
          Total Goal: {totalGoal} sBTC
        </p>
        <p className="mb-4 text-lg text-[#0f9d91] font-medium">
          Total Saved: {totalSaved} sBTC
        </p>

        <div className="w-full h-6 bg-[#f5f5f5] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#3db8a0] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-2 text-sm text-right text-[#00747a] font-semibold">
          {Math.round(progress)}% Complete
        </p>
      </div>
    </div>
  );
};

export default SavingsProgress;

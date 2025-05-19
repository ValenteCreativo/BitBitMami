"use client";

import { useState } from "react";

const SavingsPlan = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [goalAmount, setGoalAmount] = useState(0);
  const [goalName, setGoalName] = useState("");
  const [boxes, setBoxes] = useState<any[]>([]);

  const handleAddGoal = () => {
    if (goalAmount <= totalAmount) {
      setBoxes([...boxes, { name: goalName, amount: goalAmount }]);
      setTotalAmount(totalAmount - goalAmount); // Restar el dinero del total
      setGoalAmount(0);
      setGoalName("");
    } else {
      alert("Insufficient balance for this goal.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Create your Savings Plan</h2>
      
      {/* Total amount */}
      <div className="mb-4">
        <input
          type="number"
          placeholder="Total available amount"
          className="p-2 border rounded"
          value={totalAmount}
          onChange={(e) => setTotalAmount(Number(e.target.value))}
        />
      </div>
      
      {/* Goal details */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Goal Name (e.g., Travel)"
          className="p-2 border rounded"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Goal Amount"
          className="p-2 border rounded ml-4"
          value={goalAmount}
          onChange={(e) => setGoalAmount(Number(e.target.value))}
        />
        <button
          onClick={handleAddGoal}
          className="ml-4 p-2 bg-[#0F9D91] text-white rounded"
        >
          Add Goal
        </button>
      </div>

      {/* Display goals */}
      <div className="mb-6">
        <h3 className="font-semibold">Your Goals</h3>
        {boxes.map((box, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <span>{box.name}</span>
            <span>{box.amount} sBTC</span>
          </div>
        ))}
      </div>

      {/* Remaining Balance */}
      <h4>Remaining Balance: {totalAmount} sBTC</h4>
    </div>
  );
};

export default SavingsPlan;

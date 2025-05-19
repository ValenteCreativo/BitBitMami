"use client";

import { useState } from "react";

const SavingsTransaction = ({ amount, recipient }: any) => {
  const [status, setStatus] = useState("Pending");

  const handleTransaction = () => {
    // Simulamos la transacción
    setStatus("Processing...");
    setTimeout(() => {
      setStatus("Transaction Complete");
    }, 2000); // Simula una transacción de 2 segundos
  };

  return (
    <div>
      <h3>Transaction Status: {status}</h3>
      <button onClick={handleTransaction} className="p-2 bg-[#0F9D91] text-white rounded">
        Simulate Transaction
      </button>
    </div>
  );
};

export default SavingsTransaction;

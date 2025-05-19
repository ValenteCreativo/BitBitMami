// /src/app/components/Savings/SavingsTransaction.tsx

"use client";

import { useState } from "react";
import { sendRawTransaction } from "@/app/Utils/rebarAPI"; // Función para enviar transacciones

const SavingsTransaction = ({ recipient, amount }: { recipient: string; amount: number }) => {
  const [txid, setTxid] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSendTransaction = async () => {
    try {
      const rawTx = "raw_tx_hex_here"; // Aquí usarías el método adecuado para generar la transacción (simulada)
      const response = await sendRawTransaction(rawTx);
      setTxid(response.result); // Simulamos que se genera un txid
    } catch (err: any) {
      setError("Transaction failed: " + err.message);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Send Bitcoin</h2>
      <p>Recipient: {recipient}</p>
      <p>Amount: {amount} sBTC</p>
      <button onClick={handleSendTransaction} className="bg-[#3DB8A0] text-white py-2 px-4 rounded-full mt-4">
        Send Transaction
      </button>
      {txid && <p>Transaction ID: {txid}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SavingsTransaction;

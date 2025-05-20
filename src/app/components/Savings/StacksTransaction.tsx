"use client";

import { useState } from "react";
import { sendSbtc } from "@/app/Utils/stacks/sendSbtc";

interface Props {
  recipient: string;
  amount: number;
}

const StacksTransaction = ({ recipient, amount }: Props) => {
  const [loading, setLoading] = useState(false);
  const [txid, setTxid] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async () => {
    setLoading(true);
    setError(null);
    setTxid(null);

    try {
      const result: string = await sendSbtc(recipient, amount);
      setTxid(result);
    } catch (err) {
      if (err instanceof Error) {
        setError("Transaction failed: " + err.message);
      } else {
        setError("Transaction failed: Unknown error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mt-12">
      <h2 className="text-2xl font-bold text-[#00747a] mb-4">Simulate Send Transaction</h2>
      <p className="text-sm text-[#3db8a0] mb-2">
        <strong>Recipient:</strong> {recipient}
      </p>
      <p className="text-sm text-[#3db8a0] mb-6">
        <strong>Amount:</strong> {amount} sBTC
      </p>

      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-[#0f9d91] text-white px-6 py-3 rounded-xl hover:bg-[#3db8a0] transition"
      >
        {loading ? "Sending..." : "Send sBTC"}
      </button>

      {txid && (
        <p className="mt-4 text-sm text-green-600 break-all">
          Transaction ID: {txid}
        </p>
      )}
      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default StacksTransaction;

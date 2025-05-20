"use client";

import { useState } from "react";
import { sendSbtc } from "@/app/Utils/stacks/sendSbtc";

type Props = {
  recipient: string;
  amount: number;
};

const SavingsTransaction = ({ recipient, amount }: Props) => {
  const [txid, setTxid] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    try {
      const tx = await sendSbtc(recipient, amount);
      setTxid(tx);
    } catch (err) {
      console.error("Error sending:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/60 rounded-xl p-6 shadow-md backdrop-blur-md mt-10">
      <h3 className="text-xl font-semibold text-[#00747a] mb-2">Send sBTC to a Goal</h3>
      <p className="text-sm mb-4 text-[#0f9d91]">Send {amount} sBTC to {recipient}</p>

      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-[#0f9d91] text-white px-6 py-2 rounded-full hover:bg-[#3db8a0] transition"
      >
        {loading ? "Sending..." : "Send Transaction"}
      </button>

      {txid && (
        <p className="mt-4 text-sm text-[#00747a]">
          ✅ Mock transaction sent! ID: <span className="font-mono">{txid}</span>
        </p>
      )}
    </div>
  );
};

export default SavingsTransaction;

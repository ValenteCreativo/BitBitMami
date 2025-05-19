"use client";

import { useState } from "react";
import PageLayout from "@/app/components/PageLayout";
import GardenScene from "@/app/components/GardenScene";
import { sendSbtc } from "@/app/components/Savings/StacksTransaction"; 

const TransactionPage = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSendSbtc = async () => {
    if (!recipient || !amount) {
      alert("Please provide both recipient and amount");
      return;
    }

    try {
      const txid = await sendSbtc(recipient, amount);
      alert(`Transaction successful: ${txid}`);
    } catch (error) {
      alert(`Transaction failed: ${error}`);
    }
  };

  return (
    <PageLayout>
      <GardenScene zoom={0} theme="spring" />
      <div className="pt-[120px] text-center">
        <h1 className="text-3xl font-bold mb-6">Send sBTC</h1>
        <div>
          <label className="block text-lg font-semibold">Recipient Address</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="mt-2 p-2 w-full border border-[#0F9D91] rounded-lg"
            placeholder="Enter recipient address"
          />
        </div>

        <div className="mt-4">
          <label className="block text-lg font-semibold">Amount (sBTC)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-2 p-2 w-full border border-[#0F9D91] rounded-lg"
            placeholder="Enter amount"
          />
        </div>

        <button
          onClick={handleSendSbtc}
          className="w-full bg-[#0F9D91] text-white font-semibold p-3 rounded-lg hover:bg-[#3DB8A0] transition-all mt-6"
        >
          Send sBTC
        </button>
      </div>
    </PageLayout>
  );
};

export default TransactionPage;

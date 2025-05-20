"use client";

const LearnMarket = () => {
  return (
    <div className="text-[#0f9d91] text-left space-y-4">
      <h2 className="text-2xl font-bold text-[#00747a]">Bitcoin Overview</h2>
      <p>
        Bitcoin is a decentralized currency that runs on a global peer-to-peer network. It lets you send and receive money without banks or governments.
      </p>
      <p>
        The current circulating supply is <strong>19.86M BTC</strong> out of a maximum of <strong>21M BTC</strong>. Price fluctuates depending on global demand.
      </p>
      <ul className="list-disc list-inside text-[#3DB8A0]">
        <li>💰 Total supply is limited: 21M</li>
        <li>📉 Price adjusts every minute</li>
        <li>🧮 You can own a fraction (called "sats")</li>
        <li>🔐 Every transaction is public and secured by cryptography</li>
      </ul>
    </div>
  );
};

export default LearnMarket;
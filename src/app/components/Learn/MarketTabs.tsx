"use client";

import { useState } from "react";
import LearnMarket from "./LearnMarket";
import LearnRebarStats from "./LearnRebarStats";

const MarketTabs = () => {
  const [activeTab, setActiveTab] = useState<"basic" | "advanced">("basic");

  return (
    <div className="w-full max-w-5xl bg-white/50 backdrop-blur-md rounded-xl p-6">
      <div className="flex justify-center mb-4 space-x-4">
        <button
          onClick={() => setActiveTab("basic")}
          className={`px-6 py-2 rounded-full text-sm font-semibold ${
            activeTab === "basic" ? "bg-[#0f9d91] text-white" : "bg-white text-[#0f9d91] border border-[#0f9d91]"
          } transition`}
        >
          Bitcoin Essentials
        </button>
        <button
          onClick={() => setActiveTab("advanced")}
          className={`px-6 py-2 rounded-full text-sm font-semibold ${
            activeTab === "advanced" ? "bg-[#0f9d91] text-white" : "bg-white text-[#0f9d91] border border-[#0f9d91]"
          } transition`}
        >
          Rebar Technicals
        </button>
      </div>

      {activeTab === "basic" ? <LearnMarket /> : <LearnRebarStats />}
    </div>
  );
};

export default MarketTabs;

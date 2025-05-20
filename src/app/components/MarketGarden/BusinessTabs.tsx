"use client";

import { useMarketStore } from "@/app/store/marketStore";

const BusinessTabs = () => {
  const { currentTab, setTab } = useMarketStore();

  return (
    <div className="flex justify-center gap-6 mb-6">
      <button
        onClick={() => setTab("physical")}
        className={`px-6 py-2 rounded-full font-semibold transition ${
          currentTab === "physical"
            ? "bg-[#3DB8A0] text-white"
            : "bg-white text-[#0F9D91] border border-[#3DB8A0]"
        }`}
      >
        Physical Stores
      </button>
      <button
        onClick={() => setTab("digital")}
        className={`px-6 py-2 rounded-full font-semibold transition ${
          currentTab === "digital"
            ? "bg-[#3DB8A0] text-white"
            : "bg-white text-[#0F9D91] border border-[#3DB8A0]"
        }`}
      >
        Digital Businesses
      </button>
    </div>
  );
};

export default BusinessTabs;

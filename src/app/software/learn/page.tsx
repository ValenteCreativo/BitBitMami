"use client";

import GardenScene from "../../components/GardenScene";
import PageLayout from "../../components/PageLayout";

export default function LearnPage() {
  return (
    <>
      <GardenScene zoom={0} theme="summer" />
      <PageLayout>
      <div className="mt-40" />
        <h1 className="text-3xl md:text-4xl font-bold text-[#00747a] mb-6">Learn Bitcoin</h1>
        <p className="text-lg md:text-xl text-[#3db8a0] max-w-2xl mx-auto leading-relaxed bg-white/60 px-6 py-4 rounded-xl shadow-md backdrop-blur-md">
          Understand the magic behind Bitcoin and learn how to use it to build a better future.
          We curated a gentle path to help you or your business thrive with crypto.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6 max-w-3xl">
          {[
            { title: "Bitcoin Basics", url: "#" },
            { title: "Why Bitcoin for Women?", url: "#" },
            { title: "Security & Wallets", url: "#" },
            { title: "Use Cases & Stories", url: "#" },
          ].map((item, index) => (
            <a key={index} href={item.url}>
              <button className="px-6 py-3 rounded-full bg-[#3db8a0] text-white font-semibold text-base shadow hover:bg-[#0f9d91] hover:scale-105 transition-all">
                {item.title}
              </button>
            </a>
          ))}
        </div>
      </PageLayout>
    </>
  );
}

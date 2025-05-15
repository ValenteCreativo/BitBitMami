"use client";

import GardenScene from "@/app/components/GardenScene";

export default function InsightsPage() {
  return (
    <main className="relative min-h-screen text-[#0F9D91] overflow-hidden">
      <GardenScene zoom={0} theme="spring" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-44">
        <h1 className="text-4xl font-bold mb-6">Insights & Data</h1>
        <p className="max-w-xl text-lg bg-white/80 px-6 py-4 rounded-xl shadow-md">
          Explore Rebar Data insights to grow your economic literacy and make informed decisions.
        </p>
      </div>
    </main>
  );
}

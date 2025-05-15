"use client";

import GardenScene from "@/app/components/GardenScene";

export default function SendPage() {
  return (
    <main className="relative min-h-screen text-[#0F9D91] overflow-hidden">
      <GardenScene zoom={0} theme="winter" /> 
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-44">
        <h1 className="text-4xl font-bold mb-6">Send & Receive</h1>
        <p className="max-w-xl text-lg bg-white/80 px-6 py-4 rounded-xl shadow-md">
          Manage Bitcoin payments with privacy and speed using Rebar Shield technology.
        </p>
      </div>
    </main>
  );
}
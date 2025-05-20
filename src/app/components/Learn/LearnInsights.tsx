"use client";

const LearnInsights = () => {
  return (
    <section className="bg-white/60 p-6 rounded-xl shadow-md backdrop-blur mb-12">
      <h2 className="text-2xl font-bold text-[#00747A] mb-4">Bitcoin Insights</h2>
      <ul className="list-disc list-inside text-left text-[#3DB8A0] space-y-2">
        <li>🧱 Blocks are mined approximately every 10 minutes</li>
        <li>🪙 Each block currently gives 3.125 BTC as a reward (post-halving)</li>
        <li>🛰️ Bitcoin nodes verify the entire chain for trustless validation</li>
        <li>📦 UTXOs (Unspent Outputs) are Bitcoin&apos;s state model</li>
        <li>🛡️ Rebar Shield enables private transaction submission to miners</li>
      </ul>
    </section>
  );
};

export default LearnInsights;

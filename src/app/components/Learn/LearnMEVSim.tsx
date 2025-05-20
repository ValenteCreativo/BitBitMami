"use client";

const LearnMEVSim = () => {
  return (
    <section className="bg-white/60 p-6 rounded-xl shadow-md backdrop-blur mb-12">
      <h2 className="text-2xl font-bold text-[#00747A] mb-4">What is MEV?</h2>
      <p className="text-[#0F9D91] mb-4">
        MEV (Miner Extractable Value) refers to the profit miners can extract from transaction ordering.
        With tools like Rebar Shield and Alkanes, developers can protect against malicious ordering and simulate fair execution paths.
      </p>
      <ul className="list-disc list-inside text-left text-[#3DB8A0] space-y-2">
        <li>🔄 Simulate transaction orderings</li>
        <li>⛏️ Understand miner-side flows</li>
        <li>📊 Model MEV risk using data overlays</li>
      </ul>
    </section>
  );
};

export default LearnMEVSim;

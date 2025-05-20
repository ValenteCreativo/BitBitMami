"use client";

const LearnIntro = () => {
  return (
    <section className="bg-white/70 p-6 rounded-xl shadow-md backdrop-blur mb-12 text-left max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-[#00747A] mb-4">Why Learn Bitcoin?</h2>
      <p className="text-[#0F9D91] mb-4 leading-relaxed">
        Bitcoin is more than a currency — it&apos;s a new way to save, send, and grow money without relying on banks or borders.
        In this space, women and communities in Latin America can build circular economies using technology that puts them in control.
      </p>

      <p className="text-[#3DB8A0] mb-4 leading-relaxed">
        This learning garden gives you tools to understand:
      </p>

      <ul className="list-disc list-inside text-[#3DB8A0] space-y-2 mb-4">
        <li>🌍 How Bitcoin works and why it matters</li>
        <li>📈 What powers its price and network activity</li>
        <li>🔐 How tools like Rebar Data unlock new insights</li>
        <li>🛡️ How Rebar Shield helps protect your transactions</li>
        <li>💡 How MEV and Alkanes shape the future of Bitcoin DeFi</li>
      </ul>

      <p className="text-[#0F9D91] italic">
        Whether you&apos;re new to crypto or already stacking sats, this space is designed for you — clear, visual, and empowering.
      </p>
    </section>
  );
};

export default LearnIntro;

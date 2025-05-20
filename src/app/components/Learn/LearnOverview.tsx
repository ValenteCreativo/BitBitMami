"use client";

const LearnOverview = () => {
  return (
    <section className="mb-12 text-left space-y-4">
      <h2 className="text-2xl font-bold text-[#00747A]">What is Bitcoin?</h2>
      <p className="text-[#0F9D91]">
        Bitcoin is a decentralized digital currency secured by cryptography and validated by a global network of miners.
        It operates without central authorities and enables peer-to-peer transfers using a permissionless public ledger.
      </p>

      <h2 className="text-2xl font-bold text-[#00747A]">Why Stacks?</h2>
      <p className="text-[#0F9D91]">
        Stacks brings smart contracts and DeFi to Bitcoin using sBTC — a trust-minimized BTC-backed asset that lets users interact
        with protocols without leaving Bitcoin’s security model.
      </p>

      <h2 className="text-2xl font-bold text-[#00747A]">Why Rebar?</h2>
      <p className="text-[#0F9D91]">
        Rebar Labs provides direct access to Bitcoin's data layer and transaction flows, empowering developers to build MEV-aware apps,
        simulate execution, and optimize on-chain logic with high-fidelity RPC and API services.
      </p>
    </section>
  );
};

export default LearnOverview;

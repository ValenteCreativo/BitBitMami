"use client";

import ConceptCard from "./ConceptCard";

const EducationalConcepts = () => {
  return (
    <div className="mb-12 space-y-6">
      <ConceptCard title="What is Bitcoin?" description="Bitcoin is a decentralized digital currency that enables peer-to-peer transactions over a secure network." />
      <ConceptCard title="MEV in Bitcoin" description="Maximal Extractable Value refers to the profit miners can gain by reordering transactions in a block." />
      <ConceptCard title="Runes & Ordinals" description="Runes are fungible tokens native to Bitcoin, while Ordinals track individual sats with inscriptions." />
    </div>
  );
};

export default EducationalConcepts;

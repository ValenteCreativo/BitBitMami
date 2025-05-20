"use client";

interface ConceptCardProps {
  title: string;
  description: string;
}

const ConceptCard = ({ title, description }: ConceptCardProps) => {
  return (
    <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md border-l-4 border-[#D4AF37] text-left">
      <h3 className="text-xl font-bold text-[#0F9D91] mb-2">{title}</h3>
      <p className="text-[#3DB8A0] leading-relaxed">{description}</p>
    </div>
  );
};

export default ConceptCard;

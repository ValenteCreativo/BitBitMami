"use client";

interface PriceCardProps {
  title: string;
  value: string;
}

const PriceCard = ({ title, value }: PriceCardProps) => {
  return (
    <div className="bg-white/80 p-6 rounded-xl shadow-lg backdrop-blur border border-[#D4AF37] w-64 text-center">
      <h4 className="text-sm font-semibold text-[#3DB8A0] mb-2">{title}</h4>
      <p className="text-2xl font-bold text-[#0F9D91]">{value}</p>
    </div>
  );
};

export default PriceCard;

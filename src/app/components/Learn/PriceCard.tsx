"use client";

const PriceCard = ({ title, value }: { title: string, value: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-60">
      <h3 className="text-lg font-semibold text-[#00747a] mb-3">{title}</h3>
      <p className="text-xl font-bold text-[#0F9D91]">{value}</p>
    </div>
  );
};

export default PriceCard;

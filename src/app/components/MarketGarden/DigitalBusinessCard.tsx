"use client";

import { MarketBusiness } from "./MarketData";
import { FaLaptop, FaHeartbeat, FaGraduationCap, FaTshirt, FaConciergeBell } from "react-icons/fa";

const categoryIcons = {
  Services: <FaConciergeBell className="text-[#00747A]" />,
  Education: <FaGraduationCap className="text-[#00747A]" />,
  Health: <FaHeartbeat className="text-[#00747A]" />,
  Fashion: <FaTshirt className="text-[#00747A]" />,
  Food: <FaLaptop className="text-[#00747A]" />,
};

export default function DigitalBusinessCard({ business }: { business: MarketBusiness }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-[#3db8a022] p-4 text-left hover:shadow-lg transition-all duration-200">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-2xl">{categoryIcons[business.category]}</div>
        <h3 className="text-lg font-bold text-[#00747A]">{business.name}</h3>
      </div>
      <p className="text-sm text-[#0F9D91]">{business.description}</p>
      <p className="text-xs mt-2 text-gray-500 italic">{business.city}, {business.country}</p>
    </div>
  );
}

"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const dummyHistory = [
  { time: "10:00", price: 103030 },
  { time: "12:00", price: 102625 },
  { time: "14:00", price: 104547 },
  { time: "16:00", price: 105709 },
  { time: "18:00", price: 105913 },
  { time: "20:00", price: 105136 },
];

const metrics = [
  { label: "Market Cap", value: "2.08T US$" },
  { label: "24h Volume", value: "54.71B US$" },
  { label: "FDV", value: "2.2T US$" },
  { label: "Supply", value: "19.86M / 21M BTC" },
  { label: "Vol/Mkt Cap (24h)", value: "2.66%" },
];

const LearnRebarStats = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-[#00747A] mb-6">Bitcoin Market Overview</h2>

      {/* Price Chart */}
      <div className="bg-white/60 backdrop-blur p-6 rounded-xl shadow-md mb-8">
        <h3 className="text-lg font-semibold text-[#0F9D91] mb-2">Price Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dummyHistory}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#0F9D91" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {metrics.map((item, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow border border-[#D4AF37]"
          >
            <p className="text-sm text-[#00747A] font-semibold">{item.label}</p>
            <p className="text-lg text-[#0F9D91]">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnRebarStats;

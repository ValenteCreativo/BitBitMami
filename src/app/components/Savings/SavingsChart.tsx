"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Progress", value: 50 },
  { name: "Remaining", value: 50 },
];

const SavingsChart = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-[#0F9D91] mb-4">Goal Tracker</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#0F9D91"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? "#0F9D91" : "#D4AF37"} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SavingsChart; 

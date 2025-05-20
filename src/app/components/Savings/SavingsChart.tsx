"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Progress", value: 50 },
  { name: "Remaining", value: 50 },
];

const COLORS = ["#0F9D91", "#D4AF37"];

const SavingsChart = () => {
  return (
    <div className="w-full max-w-xl text-center mt-10">
      <h2 className="text-xl font-semibold text-[#00747A] mb-4">Goal Tracker</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SavingsChart;

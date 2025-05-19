"use client";

import { useState, useEffect } from "react";
import { fetchRebarData } from "@/app/Utils/rebarAPI"; // Importa las funciones para interactuar con Rebar
import PageLayout from "@/app/components/PageLayout";
import GardenScene from "@/app/components/GardenScene";
import PriceCard from "@/app/components/Learn/PriceCard"; // Componente para mostrar el precio
import ConceptCard from "@/app/components/Learn/ConceptCard"; // Componente para conceptos educativos
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"; // Gráficos

export default function LearnPage() {
  const [data, setData] = useState<any>({ price: 0, marketCap: 0, priceHistory: [] });

  useEffect(() => {
    const fetchData = async () => {
      // Obtener el precio de Bitcoin desde Rebar
      const fetchedData = await fetchRebarData("bitcoin/price");
      setData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <>
      <GardenScene zoom={0} theme="spring" />
      <PageLayout>
        <div className="mt-[120px] flex flex-col items-center justify-start text-center px-6 pb-20 animate-fade-in-slow">
          <h1 className="text-3xl md:text-4xl font-bold text-[#00747a] mb-6">Learn Bitcoin</h1>

          {/* Conceptos */}
          <div className="mb-12">
            <ConceptCard title="What is Bitcoin?" description="Bitcoin is a decentralized digital currency..." />
            <ConceptCard title="Bitcoin Mining" description="Bitcoin mining is the process of..." />
          </div>

          {/* Mostrar el precio de Bitcoin y estadísticas */}
          <div className="flex gap-6 mb-8">
            <PriceCard title="Bitcoin Price" value={`$${data?.price || 0}`} />
            <PriceCard title="Market Cap" value={`$${data?.marketCap || 0}`} />
          </div>

          {/* Gráficos interactivos */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Bitcoin Price Chart</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data?.priceHistory || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#0F9D91" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

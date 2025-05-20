"use client";

import { useState } from "react";
import { useMarketStore } from "@/app/store/marketStore";

const AddBusinessModal = () => {
  const [open, setOpen] = useState(false);
  const { addBusiness } = useMarketStore();

  const handleSubmit = () => {
    addBusiness({
      id: Date.now(),
      name: "Demo Café",
      type: "physical",
      category: "Café",
      description: "Best café accepting Bitcoin",
      location: [19.4326, -99.1332],
      acceptsBitcoin: true,
      website: "https://example.com",
    });
    setOpen(false);
  };

  return (
    <div className="text-center mb-8">
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-[#D4AF37] text-white rounded-full shadow hover:brightness-110 transition"
      >
        + Register a Business
      </button>
      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
            <h3 className="text-lg font-bold mb-4">Register Business</h3>
            <p className="text-sm mb-4">For demo purposes, this adds a sample store in CDMX.</p>
            <button
              onClick={handleSubmit}
              className="bg-[#0F9D91] text-white px-4 py-2 rounded-full hover:bg-[#3DB8A0] transition"
            >
              Add Store
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBusinessModal;

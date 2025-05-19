"use client";

import { useState } from "react";

// Simulamos las transacciones para distribuir el dinero entre las "cajitas"
const SavingsBoxes = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [boxes, setBoxes] = useState<any[]>([]); // Para almacenar las "cajitas"
  const [boxName, setBoxName] = useState("");
  const [boxAmount, setBoxAmount] = useState(0);

  const handleAddBox = () => {
    if (boxName && boxAmount > 0 && totalAmount >= boxAmount) {
      setBoxes([...boxes, { name: boxName, amount: boxAmount }]);
      setTotalAmount(totalAmount - boxAmount); // Restar el dinero de la caja
      setBoxName(""); // Limpiar el campo de nombre
      setBoxAmount(0); // Limpiar el campo de cantidad
    } else {
      alert("Ensure the amount is valid and available.");
    }
  };

  const handleAddMoney = (amount: number) => {
    setTotalAmount(totalAmount + amount); // Agregar dinero al total disponible
  };

  const handleRemoveBox = (name: string) => {
    const updatedBoxes = boxes.filter((box) => box.name !== name);
    setBoxes(updatedBoxes);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Distribute your savings</h2>

      {/* Input para agregar dinero */}
      <div className="mb-6">
        <input
          type="number"
          placeholder="Add money"
          className="p-2 border rounded"
          value={totalAmount}
          onChange={(e) => setTotalAmount(Number(e.target.value))}
        />
        <button
          onClick={() => handleAddMoney(100)} // Agregar 100 sBTC como ejemplo
          className="ml-4 p-2 bg-[#0F9D91] text-white rounded"
        >
          Add 100 sBTC
        </button>
      </div>

      {/* Formulario para agregar una "cajita" */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Box name (e.g., Travel, Education)"
          className="p-2 border rounded"
          value={boxName}
          onChange={(e) => setBoxName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className="p-2 border rounded ml-4"
          value={boxAmount}
          onChange={(e) => setBoxAmount(Number(e.target.value))}
        />
        <button
          onClick={handleAddBox}
          className="ml-4 p-2 bg-[#0F9D91] text-white rounded"
        >
          Add Box
        </button>
      </div>

      {/* Mostrar las "cajitas" creadas */}
      <div className="mb-6">
        <h3 className="font-semibold">Your Savings Boxes</h3>
        {boxes.map((box, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <span>{box.name}</span>
            <span>{box.amount} sBTC</span>
            <button
              onClick={() => handleRemoveBox(box.name)}
              className="bg-red-500 text-white rounded px-2 py-1"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="font-semibold">Remaining Amount: {totalAmount} sBTC</h3>
      </div>
    </div>
  );
};

export default SavingsBoxes;

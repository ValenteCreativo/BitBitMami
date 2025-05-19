"use client";

const SavingsProgress = ({ boxes = [] }: any) => { // Aseguramos que boxes nunca sea undefined
  const totalGoal = boxes.reduce((acc: any, box: any) => acc + box.amount, 0);
  const totalSaved = boxes.reduce((acc: any, box: any) => acc + box.amount, 0);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Savings Progress</h2>
      <div className="mb-4">
        <p>Total Goal: {totalGoal} sBTC</p>
        <p>Total Saved: {totalSaved} sBTC</p>
        <div className="progress-bar">
          <div
            style={{ width: `${(totalSaved / totalGoal) * 100}%` }}
            className="progress"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SavingsProgress;

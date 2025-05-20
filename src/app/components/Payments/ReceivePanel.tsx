"use client";

import QRCode from "react-qr-code";
import { useState } from "react";
import { ReceiveIcon } from "@bitcoin-design/bitcoin-icons-react/outline";

const ReceivePanel = () => {
  const [btcAddress, setBtcAddress] = useState("SP2C2K1A3H0GJ4X8H4T5QWJ8YZ3GTRV1B6ZP9QK8R");

  return (
    <div className="mt-10 bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4 justify-center">
        <ReceiveIcon style={{ height: 24, width: 24, color: "#3DB8A0" }} />
        <h2 className="text-xl font-semibold text-[#00747A]">Receive Bitcoin</h2>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium text-[#00747a]">Your Address</label>
        <input
          type="text"
          value={btcAddress}
          onChange={(e) => setBtcAddress(e.target.value)}
          className="w-full p-3 border border-[#3db8a0] rounded-xl text-[#0F9D91] font-mono"
        />
      </div>

      <div className="bg-white p-4 rounded-xl flex justify-center border border-[#3db8a0]">
        <QRCode value={btcAddress} size={160} />
      </div>

      <p className="mt-4 text-[#0f9d91] text-sm text-center">
        Scan this code to send Bitcoin to your wallet
      </p>
    </div>
  );
};

export default ReceivePanel;

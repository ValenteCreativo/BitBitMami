"use client";

import QRCode from "react-qr-code";

interface QRCodeDisplayProps {
  address: string;
}

const QRCodeDisplay = ({ address }: QRCodeDisplayProps) => {
  return (
    <div className="flex flex-col items-center mt-6">
      <h3 className="text-lg font-semibold text-[#00747a] mb-2">Scan to Pay</h3>
      <div className="bg-white p-4 rounded-xl shadow">
        <QRCode value={address} size={128} />
      </div>
      <p className="mt-2 text-sm text-[#3db8a0] break-all">{address}</p>
    </div>
  );
};

export default QRCodeDisplay;

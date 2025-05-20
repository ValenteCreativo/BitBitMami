"use client";

import { useEffect, useState } from "react";
import {
  SendIcon,
  SatoshiV2Icon,
  WalletIcon,
  ShieldIcon,
} from "@bitcoin-design/bitcoin-icons-react/outline";

const MOCK_BTC_PRICE = 67000;

type Props = {
  recipient: string;
  amount?: number;
};

export default function PaymentForm({ recipient, amount = 0 }: Props) {
  const [currency, setCurrency] = useState<"sbtc" | "usd">("sbtc");
  const [inputValue, setInputValue] = useState(amount);
  const [convertedValue, setConvertedValue] = useState(0);
  const [rebarEnabled, setRebarEnabled] = useState(false);

  useEffect(() => {
    if (currency === "sbtc") {
      setConvertedValue(inputValue * MOCK_BTC_PRICE);
    } else {
      setConvertedValue(inputValue / MOCK_BTC_PRICE);
    }
  }, [inputValue, currency]);

  const handleToggleCurrency = () => {
    setCurrency(currency === "sbtc" ? "usd" : "sbtc");
    setInputValue(convertedValue);
  };

  const handleToggleRebar = () => {
    setRebarEnabled((prev) => !prev);
  };

  const handleSend = () => {
    alert(
      `Sent ${inputValue} ${currency.toUpperCase()} to ${recipient} ${
        rebarEnabled ? "with" : "without"
      } Rebar Shield`
    );
  };

  return (
    <div className="mt-10 bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md w-full max-w-md">
      <div className="flex items-center gap-2 mb-4 justify-center">
        <SendIcon style={{ height: 24, width: 24, color: "#3DB8A0" }} />
        <h2 className="text-xl font-semibold text-[#00747A]">Send Payment</h2>
      </div>

      <div className="mb-4 text-sm text-[#0F9D91] text-center">
        To: <span className="font-mono">{recipient}</span>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={handleToggleCurrency}
          className="flex items-center gap-2 px-4 py-2 bg-[#3DB8A0] text-white rounded-full shadow hover:brightness-110 transition-all"
        >
          {currency === "sbtc" ? (
            <>
              <SatoshiV2Icon style={{ width: 18, height: 18 }} />
              Switch to USD
            </>
          ) : (
            <>
              <WalletIcon style={{ width: 18, height: 18 }} />
              Switch to sBTC
            </>
          )}
        </button>
      </div>

      <div className="flex flex-col gap-3 items-center mb-6">
        <label className="text-[#0F9D91] font-medium">
          Enter amount in {currency.toUpperCase()}:
        </label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(parseFloat(e.target.value) || 0)}
          className="px-4 py-2 border border-[#3DB8A0] rounded-md text-center text-[#00747A] font-semibold w-[200px]"
        />
        <p className="text-sm text-[#0F9D91]">
          ≈{" "}
          {currency === "sbtc"
            ? `$${convertedValue.toFixed(2)} USD`
            : `${convertedValue.toFixed(8)} sBTC`}
        </p>
      </div>

      {/* Rebar Shield toggle */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <button
          onClick={handleToggleRebar}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition shadow ${
            rebarEnabled
              ? "bg-[#00747A] text-white"
              : "bg-white border border-[#3DB8A0] text-[#00747A]"
          }`}
        >
          <ShieldIcon style={{ width: 18, height: 18 }} />
          {rebarEnabled ? "Rebar Shield: ON" : "Rebar Shield: OFF"}
        </button>
      </div>

      {/* Send button */}
      <div className="flex justify-center">
        <button
          onClick={handleSend}
          className="bg-[#D4AF37] hover:brightness-110 text-white px-6 py-3 rounded-full font-bold shadow-md transition-all"
        >
          Send Payment
        </button>
      </div>
    </div>
  );
}

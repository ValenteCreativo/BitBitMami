"use client";

import PageLayout from "@/app/components/PageLayout";
import GardenScene from "@/app/components/GardenScene";
import PaymentForm from "@/app/components/Payments/PaymentForm";
import ReceivePanel from "@/app/components/Payments/ReceivePanel";
import { WalletIcon } from "@bitcoin-design/bitcoin-icons-react/outline";

export default function PaymentsPage() {
  return (
    <>
      <GardenScene zoom={0} theme="night" />
      <PageLayout>
        <div className="mt-[120px] px-6 pb-20 animate-fade-in-slow w-full max-w-5xl flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-8">
            <WalletIcon style={{ height: 26, width: 26, color: "#3DB8A0" }} />
            <h1 className="text-3xl md:text-4xl font-bold text-[#00747a]">
              Payments
            </h1>
          </div>

          <p className="text-lg text-[#3db8a0] mb-12 max-w-2xl text-center">
            Pay friends or businesses using Bitcoin via the Stacks network. Toggle Rebar Shield for added privacy.
          </p>

          {/* Layout for Payment & Receive Side-by-Side */}
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-start">
            <PaymentForm recipient="bc1qexampleaddress123" />
            <ReceivePanel />
          </div>
        </div>
      </PageLayout>
    </>
  );
}

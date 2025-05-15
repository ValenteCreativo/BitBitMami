"use client";

import PageLayout from "@/app/components/PageLayout";
import GardenScene from "@/app/components/GardenScene";

export default function SendReceivePage() {
  return (
    <>
      <GardenScene zoom={0} theme="night" />
      <PageLayout>
        <div className="mt-[120px] flex flex-col items-center justify-start text-center px-6 pb-20 animate-fade-in-slow">
          <h1 className="text-3xl md:text-4xl font-bold text-[#00747a] mb-6">
            Send / Receive Bitcoin
          </h1>

          <p className="text-lg md:text-xl text-[#3db8a0] max-w-2xl mx-auto leading-relaxed bg-white/70 px-6 py-4 rounded-xl shadow-md backdrop-blur-md">
            Easily send and receive Bitcoin payments. Whether you're paying for
            services, getting paid for your work, or just splitting a bill—
            BitBitMami makes it seamless and secure.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6 max-w-3xl">
            {[
              { title: "Receive Payment", url: "#" },
              { title: "Send BTC", url: "#" },
              { title: "Private Transfer (Rebar Shield)", url: "#" },
              { title: "Transaction History", url: "#" }
            ].map((item, idx) => (
              <button
                key={idx}
                className="px-8 py-4 rounded-full bg-[#3DB8A0] text-white font-semibold text-lg shadow-lg hover:bg-[#0F9D91] hover:shadow-xl hover:brightness-105 transition-all duration-300"
                onClick={() => alert(`Navigate to ${item.title}`)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <style jsx global>{`
          @keyframes fade-in-slow {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-slow {
            animation: fade-in-slow 1.4s ease-out forwards;
          }
        `}</style>
      </PageLayout>
    </>
  );
}

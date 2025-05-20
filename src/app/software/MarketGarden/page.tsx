"use client";

import GardenScene from "@/app/components/GardenScene";
import PageLayout from "@/app/components/PageLayout";
import BusinessTabs from "@/app/components/MarketGarden/BusinessTabs";
import MapboxMap from "@/app/components/MarketGarden/MapboxMap";
import AddBusinessModal from "@/app/components/MarketGarden/AddBusinessModal";
import { useMarketStore } from "@/app/store/marketStore";
import { businesses } from "@/app/components/MarketGarden/MarketData";
import DigitalBusinessCard from "@/app/components/MarketGarden/DigitalBusinessCard";

export default function MarketGardenPage() {
  const { currentTab } = useMarketStore();

  const digitalBusinesses = businesses.filter((biz) => biz.type === "digital");

  return (
    <>
      <GardenScene zoom={0} theme="winter" />
      <PageLayout>
        <div className="mt-[120px] w-full max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#00747A] mb-6">
            Market Garden
          </h1>
          <p className="text-[#0F9D91] mb-6">
            Discover local and digital businesses that accept Bitcoin — and register your own to join the network.
          </p>

          <AddBusinessModal />
          <BusinessTabs />

          {currentTab === "physical" ? (
            <MapboxMap />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {digitalBusinesses.map((biz) => (
                <DigitalBusinessCard key={biz.id} business={biz} />
              ))}
            </div>
          )}
        </div>
      </PageLayout>
    </>
  );
}

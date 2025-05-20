"use client";

import GardenScene from "@/app/components/GardenScene";
import PageLayout from "@/app/components/PageLayout";
import BusinessTabs from "@/app/components/MarketGarden/BusinessTabs";
import MapboxMap from "@/app/components/MarketGarden/MapboxMap";
import AddBusinessModal from "@/app/components/MarketGarden/AddBusinessModal";

export default function MarketGardenPage() {
  return (
    <>
      <GardenScene zoom={0} theme="fall" />
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
          <MapboxMap />
        </div>
      </PageLayout>
    </>
  );
}

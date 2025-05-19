"use client";

import { useState } from "react";
import PageLayout from "@/app/components/PageLayout";
import GardenScene from "@/app/components/GardenScene";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"; 
import "react-tabs/style/react-tabs.css"; 

import SavingsPlan from "@/app/components/Savings/SavingsPlan";
import SavingsProgress from "@/app/components/Savings/SavingsProgress";
import SavingsChart from "@/app/components/Savings/SavingsChart";
import SavingsTransaction from "@/app/components/Savings/SavingsTransactions";

export default function SavingsPage() {
  const [boxes, setBoxes] = useState<any[]>([]); // Guardamos las "cajitas"

  return (
    <>
      <GardenScene zoom={0} theme="spring" />
      <PageLayout>
        <div className="mt-[120px] flex flex-col items-center justify-start text-center px-6 pb-20 animate-fade-in-slow">
          <h1 className="text-3xl md:text-4xl font-bold text-[#00747a] mb-6">Savings Plan</h1>

          {/* Tabs de ahorro */}
          <Tabs>
            <TabList className="flex gap-4 mb-8">
              <Tab 
                className="text-lg font-semibold text-[#0F9D91] px-6 py-3 rounded-xl bg-[#F5F5F5] hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
              >
                Create Plan
              </Tab>
              <Tab 
                className="text-lg font-semibold text-[#0F9D91] px-6 py-3 rounded-xl bg-[#F5F5F5] hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
              >
                Progress
              </Tab>
              <Tab 
                className="text-lg font-semibold text-[#0F9D91] px-6 py-3 rounded-xl bg-[#F5F5F5] hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
              >
                Goal Tracker
              </Tab>
            </TabList>

            <TabPanel>
              <SavingsPlan />
            </TabPanel>
            <TabPanel>
              <SavingsProgress boxes={boxes} />
            </TabPanel>
            <TabPanel>
              <SavingsChart />
              <SavingsTransaction amount={500} recipient="recipient_address" />
            </TabPanel>
          </Tabs>
        </div>
      </PageLayout>
    </>
  );
}

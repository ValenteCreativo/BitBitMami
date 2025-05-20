"use client";

import PageLayout from "@/app/components/PageLayout";
import GardenScene from "@/app/components/GardenScene";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import SavingsPlan from "@/app/components/Savings/SavingsPlan";
import SavingsProgress from "@/app/components/Savings/SavingsProgress";
import SavingsChart from "@/app/components/Savings/SavingsChart";
import SavingsVaults from "@/app/components/Savings/SavingsVaults";
import WalletInfo from "@/app/components/Savings/WalletInfo";
import SavingsTransaction from "@/app/components/Savings/SavingsTransactions";

export default function SavingsPage() {
  return (
    <>
      <GardenScene zoom={0} theme="spring" />
      <PageLayout>
        <div className="mt-[100px] bg-white/60 backdrop-blur-md px-8 py-10 rounded-xl shadow-xl w-full max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#00747a] mb-6">
          Save Bitcoin with sBTC on Stacks
          </h1>
          <p className="text-lg text-[#3db8a0] mb-10">
            Set your Bitcoin goals, connect with the Stacks network, and use smart DeFi strategies leveraging sBTC.
          </p>

          <Tabs>
            <TabList className="flex flex-wrap justify-center gap-4 mb-8">
              <Tab className="tab">Create & Manage Plan</Tab>
              <Tab className="tab">Track Progress</Tab>
              <Tab className="tab">Explore Vaults</Tab>
            </TabList>

            <TabPanel>
              <WalletInfo />
              <SavingsPlan />
              <SavingsTransaction recipient="mock_btc_address" amount={1000} />
            </TabPanel>

            <TabPanel>
              <SavingsChart />
              <SavingsProgress />
            </TabPanel>

            <TabPanel>
              <SavingsVaults />
            </TabPanel>
          </Tabs>
        </div>

        <style jsx global>{`
          .tab {
            background-color: #fef7e0;
            padding: 10px 20px;
            border-radius: 9999px;
            font-weight: 600;
            color: #00747a;
            cursor: pointer;
          }
          .tab:hover {
            background-color: #d4af37;
            color: white;
          }
          .tab.react-tabs__tab--selected {
            background-color: #0f9d91;
            color: white;
          }
        `}</style>
      </PageLayout>
    </>
  );
}

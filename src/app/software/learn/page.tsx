"use client";

import GardenScene from "@/app/components/GardenScene";
import PageLayout from "@/app/components/PageLayout";
import LearnIntro from "@/app/components/Learn/LearnIntro";
import LearnRebarStats from "@/app/components/Learn/LearnRebarStats";
import LearnInsights from "@/app/components/Learn/LearnInsights";
import LearnMEVSim from "@/app/components/Learn/LearnMEVSim";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  InfoIcon,
  PieChartIcon,
  VerifyIcon,
  ShieldIcon,
} from "@bitcoin-design/bitcoin-icons-react/outline";


export default function LearnPage() {
  return (
    <>
      <GardenScene zoom={0} theme="summer" />
      <PageLayout>
        <div className="mt-[100px] w-full max-w-5xl text-center px-4 md:px-0 animate-fade-in-slow">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00747A] mb-8">
            Learn Bitcoin
          </h1>
          <p className="text-[#0F9D91] text-lg mb-12 max-w-2xl mx-auto">
            Understand how Bitcoin empowers you — from simple savings to advanced DeFi with Rebar tools.
          </p>

          {/* Tabs for learning sections */}
          <div className="bg-white/50 backdrop-blur-md p-6 rounded-2xl shadow-xl">
            <Tabs>
            <TabList className="flex flex-wrap justify-center gap-4 mb-8">
  <Tab className="flex items-center gap-2 text-sm font-semibold text-[#0F9D91] px-5 py-2 rounded-full bg-[#f0fdfa] hover:bg-[#D4AF37] hover:text-white cursor-pointer transition-all duration-300">
    <InfoIcon style={{ width: 20, height: 20 }} /> Intro
  </Tab>
  <Tab className="flex items-center gap-2 text-sm font-semibold text-[#0F9D91] px-5 py-2 rounded-full bg-[#f0fdfa] hover:bg-[#D4AF37] hover:text-white cursor-pointer transition-all duration-300">
    <PieChartIcon style={{ width: 20, height: 20 }} /> Market Stats
  </Tab>
  <Tab className="flex items-center gap-2 text-sm font-semibold text-[#0F9D91] px-5 py-2 rounded-full bg-[#f0fdfa] hover:bg-[#D4AF37] hover:text-white cursor-pointer transition-all duration-300">
    <VerifyIcon style={{ width: 20, height: 20 }} /> Insights
  </Tab>
  <Tab className="flex items-center gap-2 text-sm font-semibold text-[#0F9D91] px-5 py-2 rounded-full bg-[#f0fdfa] hover:bg-[#D4AF37] hover:text-white cursor-pointer transition-all duration-300">
    <ShieldIcon style={{ width: 20, height: 20 }} /> MEV & Shield
  </Tab>
</TabList>

              <TabPanel>
                <LearnIntro />
              </TabPanel>
              <TabPanel>
                <LearnRebarStats />
              </TabPanel>
              <TabPanel>
                <LearnInsights />
              </TabPanel>
              <TabPanel>
                <LearnMEVSim />
              </TabPanel>
            </Tabs>
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

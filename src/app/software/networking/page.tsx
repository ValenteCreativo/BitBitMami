"use client";

import GardenScene from "@/app/components/GardenScene";
import PageLayout from "@/app/components/PageLayout";
import Link from "next/link";

export default function NetworkPage() {
  return (
    <>
      <GardenScene zoom={0} theme="night" />
      <PageLayout>
      <div className="mt-40" />
        <h1 className="text-3xl md:text-4xl font-bold text-[#00747a] mb-6">
          Entrepreneur Network
        </h1>

        <p className="text-lg md:text-xl text-[#3db8a0] max-w-2xl mx-auto leading-relaxed bg-white/60 px-6 py-4 rounded-xl shadow-md backdrop-blur-md">
          Join a vibrant circle of women offering products & services and accepting Bitcoin. Collaborate, grow, and amplify each other’s impact.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6 max-w-2xl">
          {[
            { title: "Browse Directory", url: "#" },
            { title: "Add My Business", url: "#" },
            { title: "Find Partners", url: "#" },
          ].map((item, index) => (
            <Link key={index} href={item.url}>
              <button className="px-6 py-3 rounded-full bg-[#3DB8A0] text-white font-medium text-base shadow-md hover:bg-[#0F9D91] transition-all">
                {item.title}
              </button>
            </Link>
          ))}
        </div>
      </PageLayout>
    </>
  );
}

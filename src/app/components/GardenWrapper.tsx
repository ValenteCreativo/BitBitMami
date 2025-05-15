"use client";

import GardenScene from "@/app/components/GardenScene";
import { usePathname } from "next/navigation";
import type { GardenSceneProps } from "@/app/components/GardenScene";

export default function GardenWrapper() {
  const pathname = usePathname();

  const routeConfig: Record<string, { theme: GardenSceneProps["theme"]; view: GardenSceneProps["view"] }> = {
    "/": { theme: "spring", view: "main" },
    "/software/savings": { theme: "fall", view: "savings" },
    "/software/learn": { theme: "spring", view: "learn" },
    "/software/network": { theme: "summer", view: "network" },
    "/software/send": { theme: "night", view: "send" },
    "/software/insights": { theme: "winter", view: "insights" },
  };

  const { theme, view } = routeConfig[pathname] || { theme: "spring", view: "main" };

  return <GardenScene zoom={0} theme={theme} view={view} />;
}

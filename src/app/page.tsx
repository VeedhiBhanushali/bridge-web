import { Metadata } from "next";
import BridgeExperience from "@/components/Home/experience";

export const metadata: Metadata = {
  title: "Bridge — Your next move, before it becomes urgent",
  description:
    "Bridge gives international students a clear, stage-aware weekly plan for the academic, immigration, and career decisions ahead.",
};

export default function Home() {
  return <BridgeExperience />;
}

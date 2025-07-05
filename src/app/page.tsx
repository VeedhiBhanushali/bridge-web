import React, { Suspense } from "react";
import Hero from "@/components/Home/Hero";
import { Metadata } from "next";
import dynamic from "next/dynamic";

// Lazy load non-critical components
const Work = dynamic(() => import("@/components/Home/work"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse"></div>,
});

const TimeLine = dynamic(() => import("@/components/Home/timeline"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse"></div>,
});

const Platform = dynamic(() => import("@/components/Home/platform"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse"></div>,
});

const Portfolio = dynamic(() => import("@/components/Home/portfolio"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse"></div>,
});

const Perks = dynamic(() => import("@/components/Home/perks"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse"></div>,
});

export const metadata: Metadata = {
  title: "Bridge - Student Success Platform",
  description: "Connect, thrive, and succeed in your university journey with Bridge",
};

export default function Home() {
  return (
    <main>
      {/* Hero loads immediately for better perceived performance */}
      <Hero />
      
      {/* Other sections load progressively */}
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse"></div>}>
        <Work />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse"></div>}>
        <TimeLine />
      </Suspense>
      
      <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse"></div>}>
        <Platform />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse"></div>}>
        <Portfolio />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse"></div>}>
        <Perks />
      </Suspense>
    </main>
  );
} 
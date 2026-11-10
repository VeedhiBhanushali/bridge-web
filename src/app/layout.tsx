'use client';

import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import { AuthProvider } from "@/context/AuthContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import ToasterContext from "@/app/api/contex/ToasetContex";
import { usePathname } from "next/navigation";
import React from "react";

const fontSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const fontDisplay = Outfit({ subsets: ["latin"], variable: "--font-display", display: "swap" });

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboardPage =
    pathname?.startsWith("/dashboard") ||
    pathname === "/profile" ||
    pathname === "/login";

  return (
    <ErrorBoundary>
      <AuthProvider>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <Aoscompo>
            {!isDashboardPage && <Header />}
            <main>{children}</main>
            {!isDashboardPage && <Footer />}
            <ScrollToTop />
            <ToasterContext />
          </Aoscompo>
        </ThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Bridge — Your next move, before it becomes urgent</title>
        <meta name="description" content="A clear, stage-aware weekly plan for international students navigating academic, immigration, and career decisions." />
        <meta name="theme-color" content="#f4f8ff" />
      </head>
      <body className={`${fontSans.className} ${fontSans.variable} ${fontDisplay.variable} bg-cream text-midnight_text antialiased`}>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}

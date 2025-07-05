'use client';

import { DM_Sans } from "next/font/google";
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
import { useEffect, useState } from "react";

const font = DM_Sans({ subsets: ["latin"] });

// NoSSR wrapper to prevent hydration mismatches
function NoSSR({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <>{children}</> : null;
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [isDashboardPage, setIsDashboardPage] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsDashboardPage(pathname?.startsWith('/dashboard') || pathname === '/profile' || pathname === '/login');
  }, [pathname]);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <Aoscompo>
            <NoSSR>
              {!isDashboardPage && <Header />}
            </NoSSR>
            <main>{children}</main>
            <NoSSR>
              {!isDashboardPage && <Footer />}
            </NoSSR>
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
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <title>Bridge - Student Success Platform</title>
        <meta name="description" content="Connect, learn, and thrive in your university journey with Bridge - the ultimate student networking and mentorship platform." />
      </head>
      <body className={`${font.className} bg-white text-midnight_text`}>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
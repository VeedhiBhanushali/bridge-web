"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback, lazy, Suspense } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from "@/utils/utils";

// Lazy load waitlist modal; slider loads with Hero to avoid chunk issues
const BuyCrypto = lazy(() => import("./buy-form"));
import CardSlider from "./slider";

const SURVEY_FORM_URL = "https://forms.gle/dSHh2QcMUfAjEroB8";

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
      setIsBuyingOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    if (isBuying) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBuying]);

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative md:pt-28 md:pb-24 py-14 overflow-hidden z-1 bg-cream"
      id="main-banner"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4 relative">
        <div className="grid grid-cols-12">
          <motion.div {...leftAnimation} className="lg:col-span-5 col-span-12">
            <div className="flex gap-6 items-center lg:justify-start justify-center mt-7">
             
            </div>
            <h1 className="font-display font-semibold lg:text-70 md:text-65 text-54 lg:text-start text-center text-midnight_text mb-10 tracking-tighter leading-[1.1]">
              Navigate your university journey <span className="text-primary">without</span> missing{" "}
              <span className="text-primary">what matters.</span>
            </h1>
            <div className="flex items-center md:justify-start justify-center gap-5">
              <button
                className="bg-primary border border-primary rounded-xl text-18 font-medium hover:bg-primaryDark text-white py-3.5 px-8 z-50 transition-all duration-300 shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5"
                onClick={() => setIsBuyingOpen(true)}
              >
                Join Waitlist
              </button>
              <Link
                href={SURVEY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm border border-border rounded-xl text-18 font-medium hover:bg-primary hover:text-white hover:border-primary text-midnight_text py-3.5 px-8 transition-all duration-300"
              >
                Take a Survey
              </Link>
            </div>
            <div className="flex items-center md:justify-start justify-center gap-12 mt-16">
              <Link href="#" className="hover:scale-110 duration-300">
                <Image
                  src={`${getImagePrefix()}images/hero/applestore.png`}
                  alt="App Store"
                  width={240}
                  height={70}
                  loading="lazy"
                />
              </Link>
            </div>
          </motion.div>
          <div className="col-span-7 lg:block hidden">
            {/* Empty space for layout */}
          </div>
        </div>
        
        {/* Image positioned absolutely to right edge */}
        <motion.div
          {...rightAnimation}
          className="absolute top-0 right-0 lg:block hidden"
          style={{ right: '-4rem' }}
        >
          <div className="relative">
            <Image
              src={`${getImagePrefix()}images/hero/banner-image.png`}
              alt="Banner"
              width={500}
              height={500}
              className="object-cover"
              loading="lazy"
              quality={75}
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
        
        {/* CardSlider positioned much lower below app store buttons with full width */}
        <div className="w-full mt-60">
          <Suspense fallback={<div className="h-80 bg-gray-100 rounded-xl animate-pulse"></div>}>
            <CardSlider />
          </Suspense>
        </div>
      </div>

      {/* Waitlist modal */}
      {isBuying && (
        <div className="fixed inset-0 w-full h-full bg-midnight_text/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div
            ref={BuyRef}
            className="relative w-full max-w-md overflow-hidden rounded-2xl px-8 pt-14 pb-8 z-999 text-center bg-white shadow-2xl border border-border/50"
          >
            <button
              onClick={() => setIsBuyingOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-grey transition-colors"
              aria-label="Close Waitlist Modal"
            >
              <Icon
                icon="tabler:x"
                className="text-muted hover:text-midnight_text text-24"
              />
            </button>
            <Suspense fallback={<div className="h-40 bg-gray-100 rounded animate-pulse"></div>}>
              <BuyCrypto />
            </Suspense>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

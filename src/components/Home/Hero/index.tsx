"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback, lazy, Suspense } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from "@/utils/utils";

// Lazy load the heavy components
const BuyCrypto = lazy(() => import("./buy-form"));
const SellCrypto = lazy(() => import("./sell-form"));
const CardSlider = lazy(() => import("./slider"));

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);
  const SellRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false);
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    if (isBuying || isSelling) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBuying, isSelling]);

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
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1 bg-white"
      id="main-banner"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4 relative">
        <div className="grid grid-cols-12">
          <motion.div {...leftAnimation} className="lg:col-span-5 col-span-12">
            <div className="flex gap-6 items-center lg:justify-start justify-center mb-5 mt-24">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={`${getImagePrefix()}images/icons/graduation-cap.png`}
                  alt="Graduation Cap"
                  width={40}
                  height={40}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <p className="text-midnight_text sm:text-28 text-18 mb-0">
                Student Success <span className="text-primary">Platform</span>
              </p>
            </div>
            <h1 className="font-medium lg:text-76 md:text-70 text-54 lg:text-start text-center text-midnight_text mb-10">
              Connect, and <span className="text-primary">Thrive</span> in your{" "}
              <span className="text-primary">University Journey</span>!
            </h1>
            <div className="flex items-center md:justify-start justify-center gap-8">
              <button
                className="bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-primary/90 text-white py-3 px-7 z-50 transition-colors duration-200"
                onClick={() => setIsBuyingOpen(true)}
              >
                Join Waitlist
              </button>
              <button
                className="bg-white border border-primary rounded-lg text-21 font-medium hover:bg-primary hover:text-white text-primary py-3 px-7 transition-colors duration-200"
                onClick={() => setIsSellingOpen(true)}
              >
                Take a Survey
              </button>
            </div>
            <div className="flex items-center md:justify-start justify-center gap-12 mt-20">
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
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
        
        {/* CardSlider positioned much lower below app store buttons with full width */}
        <div className="w-full mt-60">
          <Suspense fallback={<div className="h-80 bg-gray-100 rounded-xl animate-pulse"></div>}>
            <CardSlider />
          </Suspense>
        </div>
      </div>
      
      <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>

      {/* Modals for Buy and Sell */}
      {isBuying && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={BuyRef}
            className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-blue-200 bg-opacity-90 backdrop-blur-md"
          >
            <button
              onClick={() => setIsBuyingOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Buy Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-white hover:text-primary text-24 inline-block me-2"
              />
            </button>
            <Suspense fallback={<div className="h-40 bg-gray-100 rounded animate-pulse"></div>}>
              <BuyCrypto />
            </Suspense>
          </div>
        </div>
      )}
      {isSelling && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={SellRef}
            className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-blue-200 bg-opacity-90 backdrop-blur-md"
          >
            <button
              onClick={() => setIsSellingOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Sell Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-white hover:text-primary text-24 inline-block me-2"
              />
            </button>
            <Suspense fallback={<div className="h-40 bg-gray-100 rounded animate-pulse"></div>}>
              <SellCrypto />
            </Suspense>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

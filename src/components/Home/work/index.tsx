"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { getImagePrefix } from "@/utils/utils";

const Work = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [imageLoaded, setImageLoaded] = useState(false);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const services = [
    {
      icon: "🤝",
      text: "Academic Mentorship",
    },
    {
      icon: "👥",
      text: "Student Community",
    },
    {
      icon: "💼",
      text: "Career Guidance",
    },
  ];

  return (
    <section className="md:pt-28 bg-cream" id="work">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div ref={ref} className="grid grid-cols-12 items-center">
          <motion.div
            {...bottomAnimation}
            className="lg:col-span-7 col-span-12"
          >
            <p className="font-display font-medium sm:text-28 text-18 text-midnight_text">
              Connect with <span className="text-primary">Bridge</span>
            </p>
            <h2 className="font-display font-semibold sm:text-40 text-30 text-midnight_text lg:w-full md:w-70% tracking-tight">
              Successfully navigate your university journey.
            </h2>
            <div className="grid md:grid-cols-2 gap-7 mt-11">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div className="px-5 py-5 bg-light_grey rounded-full">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <p className="text-24 text-muted">{service.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...TopAnimation} className="lg:col-span-5 col-span-12">
            <div className="2xl:-mr-40 mt-9 flex justify-center">
              <div className="relative">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-200 rounded-2xl animate-pulse w-[400px] h-[600px]"></div>
                )}
                <Image
                  src={`${getImagePrefix()}images/hero/meet-bri-ai.png`}
                  alt="Meet Bri - AI Assistant"
                  width={400}
                  height={600}
                  className={`object-contain rounded-2xl shadow-lg transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  quality={70}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;

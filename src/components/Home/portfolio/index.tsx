"use client";
import Image from "next/image";
import { portfolioData } from "@/app/api/data";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";
import { useState } from "react";

const Portfolio = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="md:pt-48 sm:pt-28 pt-12 bg-cream" id="portfolio">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:pl-16 pl-8"
          >
            <div className="relative">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 rounded-2xl animate-pulse w-[400px] h-[500px]"></div>
              )}
              <Image
                src={`${getImagePrefix()}images/hero/student-events-interface.png`}
                alt="Student Events and Activities Interface"
                width={400}
                height={500}
                className={`object-contain rounded-2xl shadow-lg transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                quality={70}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display font-medium sm:text-28 text-18 text-muted mb-4">
              See what to do <span className="text-primary">this week</span>
            </p>
            <h2 className="font-display font-semibold text-midnight_text sm:text-40 text-30 mb-4 tracking-tight">
              Not more information. Better timing.
            </h2>
            <p className="text-muted text-18 mb-2">
              Get alerts before it&apos;s too late.
            </p>
            <p className="text-muted text-18">
              Track your readiness across your journey.
            </p>

            <table className="w-full sm:w-[80%]">
              <tbody>
                {portfolioData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-border border-opacity-30"
                  >
                    <td className="py-5">
                      <div className="bg-primary p-4 rounded-full bg-opacity-20 w-fit">
                        <span className="text-2xl">
                          {index === 0 ? "👤" : index === 1 ? "🌐" : "🎯"}
                        </span>
                      </div>
                    </td>
                    <td className="py-5">
                      <h4 className="font-display font-semibold text-midnight_text sm:text-28 text-22 ml-5 tracking-tight">
                        {item.title}
                      </h4>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

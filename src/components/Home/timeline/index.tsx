"use client";
import Image from "next/image";
import { timelineData } from "@/app/api/data";
import { motion } from "framer-motion";
import { useState } from "react";
import { getImagePrefix } from "@/utils/utils";

const TimeLine = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="md:pt-40 pt-9 bg-cream" id="development">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-16 px-4">
        <div className="text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display font-medium text-muted sm:text-28 text-18 mb-9">
              Student Journey <span className="text-primary">Timeline</span>
            </p>
            <h2 className="font-display font-semibold text-midnight_text sm:text-40 text-30 tracking-tight lg:w-80% mx-auto mb-20">
              We guide you through every step of your university journey, from arrival to graduation.
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:block hidden relative">
              <div className="flex justify-center">
                {!imageLoaded && (
                  <div className="bg-gray-200 rounded-lg animate-pulse w-[600px] h-[450px]"></div>
                )}
                <Image
                  src={`${getImagePrefix()}images/timeline/img-timeline.png`} 
                  alt="Bridge App Timeline"
                  width={600}
                  height={450}
                  className={`max-w-full h-auto object-contain transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  quality={75}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 md:hidden">
              {timelineData.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="bg-light_grey p-6 rounded-full">
                    <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">
                        {index === 0 ? "📋" : index === 1 ? "🤝" : index === 2 ? "👥" : "🏆"}
                      </span>
                    </div>
                  </div>
                  <div className="text-start">
                    <h4 className="text-28 text-midnight_text mb-2">{item.title}</h4>
                    <p className="text-muted text-18">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;

"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Work = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const fadeUp = {
    initial: { y: 28, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 28, opacity: 0 },
    transition: { duration: 0.6 },
  };

  const consequences = [
    {
      icon: "⏳",
      text: "Missed internship cycles that don't reopen",
    },
    {
      icon: "📉",
      text: "Lost CPT eligibility that can't be recovered",
    },
    {
      icon: "🏠",
      text: "Opportunities that disappear without warning",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-cream" id="work">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        <motion.div ref={ref} {...fadeUp} className="max-w-4xl">
          <h2 className="font-display font-semibold sm:text-40 text-30 text-midnight_text tracking-tight">
            What happens without a system
          </h2>
          <p className="text-midnight_text text-20 md:text-22 font-medium mt-6 md:mt-8 mb-8 md:mb-10">
            These are predictable outcomes, not random mistakes.
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 md:gap-x-12">
            {consequences.map((item, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className="px-5 py-5 bg-light_grey rounded-full shrink-0">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <p className="text-24 text-muted pt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;

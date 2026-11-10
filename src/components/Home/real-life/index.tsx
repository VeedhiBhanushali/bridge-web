"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RealLife = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-cream" id="real-life">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto rounded-3xl border border-primary/20 bg-gradient-to-br from-white/95 via-primaryLight/20 to-primary/10 px-8 py-10 md:px-12 md:py-12 shadow-[0_8px_40px_-12px_rgb(91_155_213_/_0.18)] backdrop-blur-sm"
        >
          <h2 className="font-display font-semibold text-midnight_text sm:text-40 text-28 tracking-tight mb-6">
            What this looks like in real life
          </h2>
          <p className="text-muted text-18 md:text-20 leading-relaxed">
            A student loses CPT eligibility because nobody flagged an enrollment
            requirement six weeks before the deadline. Bridge would have surfaced it
            in week one. These are not rare edge cases. This happens every semester.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RealLife;

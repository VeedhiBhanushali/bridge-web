"use client";
import { motion } from "framer-motion";

const TimingStandout = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-cream" id="timing">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/8 via-primaryLight/15 to-transparent px-6 py-12 md:px-10 md:py-14"
        >
          <p className="font-display font-semibold text-midnight_text text-36 sm:text-46 md:text-54 lg:text-60 tracking-tight leading-[1.15]">
            Not more information.
            <br />
            Better timing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TimingStandout;

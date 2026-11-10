import Link from "next/link";

const Platform = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 relative z-1 bg-cream">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-white/90 via-primaryLight/25 to-primary/12 px-8 py-12 md:px-12 md:py-14 lg:px-16 shadow-[0_8px_40px_-12px_rgb(91_155_213_/_0.15)] backdrop-blur-sm grid grid-cols-12 items-center">
          <div className="lg:col-span-8 col-span-12">
            <h2 className="font-display font-semibold text-midnight_text sm:text-40 text-30 mb-6 tracking-tight">
              How <span className="text-primary">Bridge</span> works
            </h2>
            <div className="text-muted text-18 space-y-2">
              <p><span className="font-semibold text-midnight_text">Stage Engine</span> - Knows where you are and what comes next</p>
              <p><span className="font-semibold text-midnight_text">Today View</span> - Shows what matters right now</p>
              <p><span className="font-semibold text-midnight_text">Risk Intelligence</span> - Highlights what breaks if you miss something</p>
              <p><span className="font-semibold text-midnight_text">Data Memory</span> - Learns from real student journeys</p>
            </div>
            <p className="text-midnight_text text-18 mt-5">
              Bridge runs your week based on what&apos;s coming, what&apos;s at risk, and what matters now.
            </p>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="flex lg:justify-end lg:mt-0 mt-7 justify-center">
              <Link
                href="#main-banner"
                className="text-white bg-primary border border-primary py-3 px-5 rounded-lg sm:text-21 text-18 font-medium hover:bg-primary/90"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;

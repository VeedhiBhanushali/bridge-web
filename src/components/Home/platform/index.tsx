import Link from "next/link";

const Platform = () => {
  return (
    <section className="md:pt-44 sm:pt-24 pt-12 relative z-1 bg-cream">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="bg-white/55 backdrop-blur-sm px-16 py-14 rounded-3xl border border-border/50 grid grid-cols-12 items-center before:content-[''] before:absolute relative before:w-96 before:h-64 before:bg-start before:bg-no-repeat before:-bottom-11 overflow-hidden lg:before:right-48 before:-z-1 before:opacity-10 shadow-sm">
          <div className="lg:col-span-8 col-span-12">
            <h2 className="font-display font-semibold text-midnight_text sm:text-40 text-30 mb-6 tracking-tight">
              Powered by the <span className="text-primary">Bridge</span> Platform
            </h2>
            <p className="text-muted text-18">
              Our platform empowers international students to have safer and more
              <br /> successful university experiences.
            </p>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="flex lg:justify-end lg:mt-0 mt-7 justify-center">
              <Link
                href="#"
                className="text-white bg-primary border border-primary py-3 px-5 rounded-lg sm:text-21 text-18 font-medium hover:bg-primary/90"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;

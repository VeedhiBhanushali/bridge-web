import { perksData } from "@/app/api/data";

const Perks = () => {
  return (
    <section className="pb-28 pt-40 relative bg-cream">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center">
          <p className="font-display font-medium text-muted sm:text-28 text-18 mb-4 pb-6 relative after:content-[''] after:w-8 after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2">
            Always By <span className="text-primary">your side</span>
          </p>
          <h2 className="font-display font-semibold text-midnight_text sm:text-40 text-30 tracking-tight">
            Be the first to use <span className="text-primary">Bridge</span>
            !
          </h2>
          <div className="mt-16 border border-border/40 grid lg:grid-cols-3 sm:grid-cols-2 py-16 gap-10 px-20 rounded-3xl bg-white/45 backdrop-blur-sm shadow-sm">
            {perksData.map((item, index) => (
              <div
                key={index}
                className="text-center flex items-center justify-end flex-col transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <div className="bg-primary/25 p-4 rounded-full w-fit">
                  <span className="text-3xl">
                    {index === 0 ? "🎧" : index === 1 ? "👥" : "🤝"}
                  </span>
                </div>
                <h4 className={`font-display font-semibold text-midnight_text text-28 mb-4 tracking-tight ${item.space}`}>
                  {item.title}
                </h4>
                <div
                  className="text-muted"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perks;

import { perksData } from "@/app/api/data";

const Perks = () => {
  const SURVEY_FORM_URL = "https://forms.gle/dSHh2QcMUfAjEroB8";

  return (
    <section className="pb-28 pt-40 relative bg-cream">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center">
          <p className="font-display font-medium text-muted sm:text-28 text-18 mb-4 pb-6 relative after:content-[''] after:w-8 after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2">
            Students are already trying to <span className="text-primary">build this</span>
          </p>
          <h2 className="font-display font-semibold text-midnight_text sm:text-40 text-30 tracking-tight mb-4">
            Stop guessing your next move before it&apos;s too late.
          </h2>
          <p className="text-muted text-18 mb-8">
            Join the first system built for your journey.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="#main-banner"
              className="bg-primary border border-primary rounded-xl text-18 font-medium hover:bg-primaryDark text-white py-3.5 px-8 transition-all duration-300 shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5"
            >
              Join Waitlist
            </a>
            <a
              href={SURVEY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm border border-border rounded-xl text-18 font-medium hover:bg-primary hover:text-white hover:border-primary text-midnight_text py-3.5 px-8 transition-all duration-300"
            >
              Help shape Bridge
            </a>
          </div>
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
          <p className="text-midnight_text text-20 font-medium mt-8">
            Bridge turns this into a real system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Perks;

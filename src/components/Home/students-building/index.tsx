import { perksData } from "@/app/api/data";

const perkEmojis = ["💬", "🧵", "👤", "📄"];

const StudentsBuilding = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 relative bg-cream" id="students-building">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        <div className="text-center">
          <p className="font-display font-medium text-muted sm:text-28 text-18 mb-3 pb-6 relative after:content-[''] after:w-8 after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2">
            Students are already trying to <span className="text-primary">build this</span>
          </p>
          <p className="text-muted text-18 mb-10 md:mb-12 max-w-2xl mx-auto">
            WhatsApp groups, Reddit threads, senior tips, shared docs — fragmented
            workarounds for what is fundamentally a timing problem.
          </p>

          <div className="border border-primary/15 grid lg:grid-cols-4 sm:grid-cols-2 gap-8 md:gap-10 py-10 md:py-12 px-6 md:px-10 lg:px-12 rounded-3xl bg-gradient-to-b from-white/70 to-primaryLight/15 backdrop-blur-sm shadow-[0_4px_32px_-8px_rgb(91_155_213_/_0.12)]">
            {perksData.map((item, index) => (
              <div
                key={index}
                className="text-center flex items-center justify-end flex-col transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <div className="bg-primary/25 p-4 rounded-full w-fit">
                  <span className="text-3xl">{perkEmojis[index] ?? "•"}</span>
                </div>
                <h4
                  className={`font-display font-semibold text-midnight_text text-22 md:text-28 mb-4 tracking-tight ${item.space}`}
                >
                  {item.title}
                </h4>
                <p className="text-muted text-16 md:text-18 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-midnight_text text-18 md:text-20 font-medium mt-10 md:mt-12 max-w-2xl mx-auto">
            Bridge turns timing into a real system: before deadlines pass you by.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentsBuilding;

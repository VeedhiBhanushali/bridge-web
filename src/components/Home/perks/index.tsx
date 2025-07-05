import { perksData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";

const Perks = () => {
  return (
    <section className="pb-28 pt-40 relative bg-white">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center">
          <p className="text-muted sm:text-28 text-18 mb-4 pb-6 relative after:content-[''] after:w-8 after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2">
            Always By <span className="text-primary">your side</span>
          </p>
          <h2 className="text-midnight_text sm:text-40 text-30 font-medium">
            Be the first to use Bri<span className="text-primary">dge</span>
            !
          </h2>
          <div className="mt-16 border border-border grid lg:grid-cols-3 sm:grid-cols-2 border-opacity-20 py-16 gap-10 px-20 rounded-3xl bg-grey bg-opacity-30">
            {perksData.map((item, index) => (
              <div
                key={index}
                className="text-center flex items-center justify-end flex-col transform transition-transform duration-300 hover:scale-105"
              >
                <div className="bg-primary bg-opacity-25 backdrop-blur-sm p-4 rounded-full w-fit">
                  <span className="text-3xl">
                    {index === 0 ? "🎧" : index === 1 ? "👥" : "🤝"}
                  </span>
                </div>
                <h4 className={`text-midnight_text text-28 mb-4 ${item.space}`}>
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
      <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div>
    </section>
  );
};

export default Perks;

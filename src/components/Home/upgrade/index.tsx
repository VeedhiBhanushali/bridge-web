import { upgradeData } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { getImagePrefix } from "@/utils/utils";

const Upgrade = () => {
  return (
    <section className="md:py-40 py-20 bg-cream" id="upgrade">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid lg:grid-cols-2 sm:gap-0 gap-10 items-center">
          <div>
            <p className="font-display font-medium text-primary sm:text-28 text-18 mb-3">Premium</p>
            <h2 className="font-display font-semibold text-midnight_text sm:text-40 text-30 tracking-tight mb-5">
              Upgrade Your Student Experience
            </h2>
            <p className="text-muted text-18 mb-7">
              Get premium mentorship, priority event access, and personalized career guidance with Bridge Premium.
            </p>
            <div className="grid sm:grid-cols-2 lg:w-70% text-nowrap sm:gap-10 gap-5">
              {upgradeData.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div>
                    <Icon
                      icon="la:check-circle-solid"
                      width="24"
                      height="24"
                      className="text-success"
                    />
                  </div>
                  <div>
                    <h4 className="text-18 text-muted">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">⭐</span>
                <p className="text-muted text-lg">Premium Features</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;

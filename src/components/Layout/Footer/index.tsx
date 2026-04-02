import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-20 pb-8 bg-primaryLight/20 border-t border-primary/15">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          <div className="lg:col-span-5">
            <Logo />
            <p className="text-muted text-16 mt-4 max-w-sm">
              Bridge tells you what matters, when it matters, so you never miss the decisions that shape your future.
            </p>
            <div className="flex gap-4 items-center mt-6">
              <Link
                href="#"
                className="p-2.5 rounded-xl bg-white/60 hover:bg-primary hover:text-white text-midnight_text transition-all duration-200"
                aria-label="Facebook"
              >
                <Icon icon="fa6-brands:facebook-f" width="20" height="20" />
              </Link>
              <Link
                href="#"
                className="p-2.5 rounded-xl bg-white/60 hover:bg-primary hover:text-white text-midnight_text transition-all duration-200"
                aria-label="Instagram"
              >
                <Icon icon="fa6-brands:instagram" width="20" height="20" />
              </Link>
              <Link
                href="#"
                className="p-2.5 rounded-xl bg-white/60 hover:bg-primary hover:text-white text-midnight_text transition-all duration-200"
                aria-label="X Twitter"
              >
                <Icon icon="fa6-brands:x-twitter" width="20" height="20" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-midnight_text text-18 mb-5 tracking-tight">Links</h4>
            <ul className="space-y-3">
              {headerData.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-primary text-16 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-midnight_text text-18 mb-5 tracking-tight">Information</h4>
            <ul className="space-y-3">
              {footerlabels.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.herf}
                    className="text-muted hover:text-primary text-16 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-midnight_text text-18 mb-5 tracking-tight">Subscribe</h4>
            <p className="text-muted text-16 mt-1 mb-4">
              Get the latest news and updates from Bridge.
            </p>
            <div className="relative">
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="Enter your email"
                className="bg-white/80 border border-border rounded-xl py-3.5 pl-5 pr-14 text-midnight_text w-full focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:text-muted"
              />
              <button
                type="button"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary text-white hover:bg-primaryDark transition-colors"
                aria-label="Subscribe"
              >
                <Icon icon="tabler:send" width="18" height="18" />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display font-medium text-muted text-14">
            © 2025 Bridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

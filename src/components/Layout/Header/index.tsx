"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { headerData } from "./Navigation/menuData";

const EARLY_ACCESS_URL = "https://forms.gle/dSHh2QcMUfAjEroB8";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex h-16 max-w-[1240px] items-center justify-between rounded-2xl border px-4 transition duration-300 sm:px-5 ${
          scrolled
            ? "border-white/80 bg-white/90 shadow-[0_14px_45px_-24px_rgba(18,46,94,0.42)] backdrop-blur-xl"
            : "border-white/55 bg-white/60 backdrop-blur-lg"
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {headerData.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-[#46556e] transition hover:bg-[#edf3fc] hover:text-[#10213f]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/login" className="rounded-lg px-4 py-2.5 text-sm font-semibold text-[#273752] transition hover:bg-[#edf3fc]">
            Sign in
          </Link>
          <Link
            href={EARLY_ACCESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#115fe4] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(17,95,228,0.9)] transition hover:-translate-y-0.5 hover:bg-[#0d53cb]"
          >
            Help shape Bridge
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-[#172641] transition hover:bg-[#edf3fc] lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-[1240px] overflow-hidden rounded-2xl border border-white bg-white/95 p-3 shadow-[0_24px_70px_-30px_rgba(18,46,94,0.55)] backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {headerData.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-[#273752] transition hover:bg-[#edf3fc]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-[#e2e9f3] pt-3">
            <Link href="/login" onClick={() => setOpen(false)} className="rounded-xl border border-[#d8e2ef] px-4 py-3 text-center text-sm font-semibold text-[#273752]">
              Sign in
            </Link>
            <Link
              href={EARLY_ACCESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-[#115fe4] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Help shape Bridge
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

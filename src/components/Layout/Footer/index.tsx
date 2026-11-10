import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "../Header/Logo";
import { headerData } from "../Header/Navigation/menuData";

const EARLY_ACCESS_URL = "https://forms.gle/dSHh2QcMUfAjEroB8";

export default function Footer() {
  return (
    <footer className="border-t border-[#dce5f1] bg-[#f7f9fc]">
      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-14 xl:px-0">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#69778e]">
              Clear, timely guidance for the decisions that shape an international student&apos;s journey.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-[#8b97aa]">
              Bridge provides educational guidance, not legal or immigration advice.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b97aa]">Explore</p>
            <ul className="mt-4 space-y-3">
              {headerData.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm font-medium text-[#46556e] transition hover:text-[#115fe4]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b97aa]">Get involved</p>
            <div className="mt-4 space-y-3">
              <Link
                href={EARLY_ACCESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-sm font-medium text-[#46556e] transition hover:text-[#115fe4]"
              >
                Help shape Bridge
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link href="/login" className="block text-sm font-medium text-[#46556e] transition hover:text-[#115fe4]">
                Sign in to Bridge
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[#dce5f1] pt-6 text-xs text-[#8b97aa] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bridge. Built with international students.</p>
          <p>Starting at San José State University.</p>
        </div>
      </div>
    </footer>
  );
}

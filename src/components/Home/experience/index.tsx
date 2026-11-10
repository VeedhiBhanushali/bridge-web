"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  GraduationCap,
  MessageCircleMore,
  Search,
  Users,
} from "lucide-react";

const RESEARCH_URL = "https://forms.gle/4mrGd4baYdK9hpvw8";

const journey = [
  { stage: "Applying", detail: "Applications, funding, documents" },
  { stage: "Admitted", detail: "Visa, housing, arrival setup" },
  { stage: "Studying", detail: "Enrollment, academics, community" },
  { stage: "Career", detail: "CPT, internships, readiness" },
];

const productSteps = [
  {
    image: "/images/bridge/student-portal.webp",
    imageAlt: "International students using a personalized student portal",
    number: "01",
    title: "Bridge learns your stage",
    copy: "The experience starts with where you actually are—not a generic student checklist.",
  },
  {
    image: "/images/bridge/student-checklist.webp",
    imageAlt: "Student checklist connecting mobile tasks with an online portal",
    number: "02",
    title: "Your week gets sequenced",
    copy: "A long journey becomes a short list of actions, ordered around timing and dependencies.",
  },
  {
    image: "/images/bridge/student-networking.webp",
    imageAlt: "International students meeting and building their campus network",
    number: "03",
    title: "The right opportunities surface",
    copy: "People, events, and resources appear in context—when they can actually move you forward.",
  },
];

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.19em] text-[#0A84FF]">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#111113] sm:text-5xl lg:text-[3.75rem]">
        {title}
      </h2>
      {copy && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6E6E73]">{copy}</p>}
    </div>
  );
}

export default function BridgeExperience() {
  const reduceMotion = useReducedMotion();
  const visible = reduceMotion
    ? {}
    : {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
      };

  return (
    <>
      <section id="home" className="relative overflow-hidden bg-[#F5FAFF] pb-14 pt-28 sm:pt-32 lg:min-h-[820px] lg:pb-0 lg:pt-28">
        <div className="absolute -left-40 top-16 h-96 w-96 rounded-full bg-[#DCEFFF] blur-[90px]" aria-hidden="true" />
        <div className="absolute right-[-8%] top-24 h-[520px] w-[520px] rounded-full bg-[#E5F4FF]" aria-hidden="true" />
        <div className="absolute right-[8%] top-[18%] h-20 w-20 rounded-full bg-[#0A84FF]/10 blur-xl" aria-hidden="true" />

        <div className="relative mx-auto grid min-h-[690px] max-w-[1240px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] xl:px-0">
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-[650px] py-12 lg:py-20">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#CFE4F8] bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#35617F] shadow-[0_5px_16px_-10px_rgba(0,73,140,0.3)]">
              <span className="h-2 w-2 rounded-full bg-[#0A84FF]" />
              Built with international students
            </div>

            <h1 className="font-display text-[3.7rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[#111113] sm:text-[4.8rem] lg:text-[5rem] xl:text-[5.5rem]">
              Your next move,
              <span className="block text-[#0A84FF]">before it becomes urgent.</span>
            </h1>

            <p className="mt-7 max-w-[600px] text-lg leading-relaxed text-[#63636A] sm:text-xl">
              Bridge gives international students a clear view of what matters this week, what comes next, and why the timing matters.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={RESEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#0A84FF] px-6 py-3.5 text-base font-semibold text-white shadow-[0_14px_30px_-15px_rgba(10,132,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#0076E8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0A84FF]/20"
              >
                Help shape Bridge
                <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#product"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#D5DCE5] bg-white px-6 py-3.5 text-base font-semibold text-[#222226] transition hover:-translate-y-0.5 hover:border-[#AFC4D8]"
              >
                See the product
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#73737A]">
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#0A84FF]" />60 student interviews</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#0A84FF]" />Starting at SJSU</span>
            </div>
          </motion.div>

          <motion.div initial={false} animate={{ opacity: 1, y: 0 }} className="relative flex h-[610px] items-end justify-center lg:h-[720px] lg:justify-end">
            <div className="absolute bottom-16 right-0 h-[470px] w-[470px] rounded-full bg-white shadow-[0_30px_100px_-60px_rgba(0,90,180,0.45)] lg:h-[560px] lg:w-[560px]" />
            <Image
              src="/images/bridge/banner-image.webp"
              alt="Bridge mobile app home screen showing personal and career progress"
              width={1224}
              height={2047}
              priority
              className="relative z-10 h-[600px] w-auto object-contain drop-shadow-[0_32px_32px_rgba(20,40,60,0.16)] lg:h-[710px]"
            />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#E6E8EB] bg-white" aria-label="Bridge foundations">
        <div className="mx-auto grid max-w-[1240px] divide-y divide-[#E6E8EB] px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 xl:px-0">
          {[
            [MessageCircleMore, "60 student interviews", "Research before roadmap"],
            [GraduationCap, "Built around real stages", "Applying through career"],
            [Clock3, "Timing over information", "What matters, when it matters"],
          ].map(([Icon, title, detail]) => {
            const IconComponent = Icon as typeof Clock3;
            return (
              <div key={String(title)} className="flex items-center gap-4 py-7 md:px-8 md:first:pl-0 md:last:pr-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF5FF] text-[#0A84FF]">
                  <IconComponent className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-[#1D1D1F]">{String(title)}</p>
                  <p className="mt-0.5 text-sm text-[#86868B]">{String(detail)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="why-bridge" className="bg-white py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 xl:px-0">
          <motion.div {...visible} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionIntro
              eyebrow="The problem"
              title="Students do not need another resource library."
              copy="They already have university pages, Reddit threads, group chats, and advice from seniors. The gap is knowing what deserves attention now."
            />
            <p className="max-w-xl text-2xl font-medium leading-snug tracking-[-0.025em] text-[#1D1D1F] lg:justify-self-end lg:text-3xl">
              “The answer existed” is not useful after the internship cycle, enrollment window, or required step has passed.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {[
              { icon: Search, title: "Scattered", copy: "The right answer is buried across tabs, chats, and documents." },
              { icon: Clock3, title: "Late", copy: "Important context often appears only when a deadline is already close." },
              { icon: Users, title: "Generic", copy: "Most guidance ignores where a student is in their specific journey." },
            ].map(({ icon: Icon, title, copy }, index) => (
              <motion.article
                key={title}
                {...visible}
                transition={{ delay: index * 0.08 }}
                className="rounded-[24px] border border-[#E6E8EB] bg-[#FAFAFA] p-7 sm:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0A84FF] shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.03em] text-[#1D1D1F]">{title}</h3>
                <p className="mt-3 leading-relaxed text-[#73737A]">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="overflow-hidden bg-[#F2F8FF] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center xl:px-0">
          <motion.div {...visible} className="lg:sticky lg:top-28">
            <SectionIntro
              eyebrow="The product"
              title="One place that follows the whole journey."
              copy="Bridge brings personal progress, career planning, events, community, checklists, and Bri into one calm mobile experience."
            />
            <div className="mt-8 space-y-4">
              {[
                "See the right next step for your stage",
                "Keep personal and career progress together",
                "Ask for help without leaving the workflow",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-base font-medium text-[#323236]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0A84FF] text-white"><Check className="h-3.5 w-3.5" /></span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...visible} className="relative rounded-[32px] bg-white p-4 shadow-[0_30px_100px_-60px_rgba(0,89,170,0.55)] sm:p-7">
            <Image
              src="/images/bridge/img-timeline.webp"
              alt="Bridge app product overview with timeline, career resources, events, community, checklist, and Bri assistant"
              width={1200}
              height={1610}
              className="h-auto w-full rounded-[22px] object-contain"
            />
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 xl:px-0">
          <SectionIntro
            eyebrow="How it works"
            title="A clear system for what comes next."
            copy="The product stays simple on the surface because the sequencing happens underneath."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {productSteps.map(({ image, imageAlt, number, title, copy }, index) => (
              <motion.article
                key={number}
                {...visible}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-[26px] border border-[#E3E5E8] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#B8D9F7] hover:shadow-[0_24px_60px_-38px_rgba(0,100,200,0.45)]"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-[#F2F8FF]">
                  <Image
                    src={image}
                    alt={imageAlt}
                    width={640}
                    height={427}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                  <span className="absolute left-5 top-5 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 font-display text-xs font-bold tracking-[0.12em] text-[#0A84FF] shadow-sm backdrop-blur">
                    {number}
                  </span>
                </div>
                <div className="p-7 sm:p-8">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-[#1D1D1F]">{title}</h3>
                  <p className="mt-4 leading-relaxed text-[#73737A]">{copy}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="border-y border-[#E6E8EB] bg-[#FAFAFA] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 xl:px-0">
          <SectionIntro
            eyebrow="One continuous journey"
            title="Your context should travel with you."
            copy="Bridge is structured around the stages already present in the product, so the experience evolves as the student does."
          />

          <div className="relative mt-14">
            <div className="absolute left-6 right-6 top-6 hidden h-0.5 bg-[#CFE8FF] lg:block" />
            <div className="grid gap-4 lg:grid-cols-4">
              {journey.map((item, index) => (
                <div key={item.stage} className="relative">
                  <div className="relative z-10 mb-6 hidden h-12 w-12 items-center justify-center rounded-full bg-[#0A84FF] font-display text-sm font-semibold text-white ring-8 ring-[#FAFAFA] lg:flex">
                    {index + 1}
                  </div>
                  <div className="rounded-[22px] border border-[#E1E3E6] bg-white p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0A84FF]">{item.stage}</p>
                    <p className="mt-3 font-display text-lg font-semibold text-[#1D1D1F]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center xl:px-0">
          <motion.div {...visible} className="order-2 overflow-hidden rounded-[30px] border border-[#E6E8EB] bg-[#F7F7F8] p-3 shadow-[0_28px_80px_-55px_rgba(20,30,45,0.45)] lg:order-1 sm:p-5">
            <Image
              src="/images/bridge/meet-bri-ai.webp"
              alt="Bri assistant screen with academic guidance, career planning, resume help, and campus life"
              width={828}
              height={1261}
              className="h-auto w-full rounded-[22px] object-contain"
            />
          </motion.div>

          <motion.div {...visible} className="order-1 lg:order-2 lg:pl-10">
            <SectionIntro
              eyebrow="Meet Bri"
              title="Help belongs inside the workflow."
              copy="Bri gives students a place to ask about academics, career planning, resumes, and campus life without turning the product into an AI gimmick."
            />
            <div className="mt-8 rounded-[22px] border border-[#CFE8FF] bg-[#F0F8FF] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#0A84FF]">Example question</p>
              <p className="mt-3 font-display text-xl font-semibold leading-snug text-[#1D1D1F]">
                “Can you guide me through the CPT application process at SJSU?”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F2F8FF] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center xl:px-0">
          <motion.div {...visible}>
            <SectionIntro
              eyebrow="Campus, in context"
              title="Discovery that fits the plan."
              copy="Events and community are still part of Bridge—but they support the student journey instead of competing with it for attention."
            />
            <Link href="#research" className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-[#0A84FF] hover:underline">
              See what shaped the roadmap <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div {...visible} className="overflow-hidden rounded-[30px] border border-white bg-white p-3 shadow-[0_30px_90px_-55px_rgba(0,90,180,0.5)] sm:p-5">
            <Image
              src="/images/bridge/student-events-interface.webp"
              alt="Bridge event discovery interface with technical, social, cultural, and fun event categories"
              width={828}
              height={1405}
              className="h-auto w-full rounded-[22px] object-contain"
            />
          </motion.div>
        </div>
      </section>

      <section id="research" className="bg-white py-24 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center xl:px-0">
          <motion.div {...visible}>
            <p className="font-display text-[6rem] font-semibold leading-none tracking-[-0.07em] text-[#0A84FF] sm:text-[8rem]">60</p>
            <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-[#1D1D1F]">student interviews</p>
            <p className="mt-4 max-w-sm leading-relaxed text-[#73737A]">The roadmap was shaped by conversations with Gen Z international students—not invented from a template.</p>
          </motion.div>

          <motion.div {...visible} className="rounded-[30px] bg-[#111113] p-7 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#64B5FF]">What the research changed</p>
            <div className="mt-7 divide-y divide-white/10">
              {[
                ["Discovery → sequencing", "Show the next useful action instead of another endless resource feed."],
                ["Reminders → timing", "Explain why something matters now and what may depend on it later."],
                ["Social-first → journey-first", "Keep community, but make personalized guidance the product core."],
              ].map(([title, copy]) => (
                <div key={title} className="py-6 first:pt-0 last:pb-0">
                  <p className="font-display text-xl font-semibold">{title}</p>
                  <p className="mt-2 leading-relaxed text-[#B6B6BB]">{copy}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[34px] bg-[#0A84FF] px-6 py-16 text-center text-white sm:px-10 sm:py-20">
          <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-36 -right-16 h-80 w-80 rounded-full border-[46px] border-white/10" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">Help shape the next version</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Built with students, not just for them.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Share your experience and help Bridge prioritize the decisions that matter most.
            </p>
            <Link
              href={RESEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-[#0A84FF] transition hover:-translate-y-0.5 hover:bg-[#F1F7FF]"
            >
              Help shape Bridge
              <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

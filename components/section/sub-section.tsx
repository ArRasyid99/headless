"use client"

import dynamic from "next/dynamic";
import { HijriCalendar } from "@/components/calender/hijriyah-calender";


const QuotesRotator = dynamic(
  () => import("@/components/section/quotes").then(m => m.QuotesRotator),
  {
    ssr: false,
    loading: () => (
      <div className="h-40 rounded-xl bg-slate-100 dark:bg-slate-900 animate-pulse" />
    ),
  }
);

export default function SubHeader() {
  return (
    <section className="py-14 px-5 md:px-10 lg:px-20 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">

          {/* KALENDER — 40% */}
          <div className="w-full lg:basis-[40%] lg:max-w-[40%] max-w-md mx-auto lg:mx-0">
            <h1 className="text-xl lg:text-2xl font-bold mb-5">
              Kalender
            </h1>
            <HijriCalendar />
            <p className="py-2 text-sm lg:text-base text-gray-600">
              Kalender hijriyah dilengkapi dengan pengingat ayyamul bidh. 
            </p>
          </div>

          {/* QUOTES — 60% */}
          <div className="w-full lg:basis-[60%] lg:max-w-[60%]">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5">
              Kutipan Hadits
            </h1>


            <div className="
              relative
              -mx-4 md:mx-0
              overflow-x-auto
              motion-safe:animate-in
              motion-safe:fade-in
              motion-safe:slide-in-from-bottom-2
              duration-500
              will-change-transform
            ">
              <QuotesRotator />

              <p className="py-2 text-sm lg:text-base text-gray-600 max-w-2xl">
                Menyajikan hadits-hadits shahih pilihan sebagai pengingat jiwa, Semoga kita dapat memperoleh pelajaran dan dapat meneladani kepribadian beliau Shalallahu A'laihi Wasalam.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

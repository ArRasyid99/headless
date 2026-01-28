"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { getHijriDate } from "@/lib/hijri";
import { useMounted } from "@/hook/use-mounted";
import { cn } from "@/lib/utils";

type HijriCalendarProps = {
  className?: string;
};

export function HijriCalendar({ className }: HijriCalendarProps) {
  const mounted = useMounted();

  const [date, setDate] = React.useState<Date>();
  const [hijri, setHijri] = React.useState<any>(null);
  const [isAyamulBidh, setIsAyamulBidh] = React.useState(false);


  React.useEffect(() => {
    if (!mounted) return;
    setDate(new Date());
  }, [mounted]);

  React.useEffect(() => {
    if (!date) return;
    getHijriDate(date).then((res) => {
    setHijri(res);

    const hijriDay = Number(res.day);
    setIsAyamulBidh([13, 14, 15].includes(hijriDay));
  });
  }, [date]);

  if (!mounted) return null; // 🔥 anti hydration error

  return (
   <div className="h-sm w-sm overflow-hidden rounded-lg border bg-background p-2 flex flex-col items-center justify-center gap-2">
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className={cn(
    "h-sm w-sm rounded-lg",
    isAyamulBidh && "ring-2 ring-green-500"
  )}
  />
      {hijri && (
       <div className="text-sm text-left font-medium flex items-center gap-2">
    <span>
      {hijri.day} {hijri.month.en} {hijri.year} H
    </span>

    {isAyamulBidh && (
      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
        🌕 Ayyamul Bidh
      </span>
    )}
  </div>
      )}
    </div>
  );
}

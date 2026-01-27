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

  React.useEffect(() => {
    if (!mounted) return;
    setDate(new Date());
  }, [mounted]);

  React.useEffect(() => {
    if (!date) return;
    getHijriDate(date).then(setHijri);
  }, [date]);

  if (!mounted) return null; // 🔥 anti hydration error

  return (
   <div className="h-sm w-sm overflow-hidden rounded-lg border bg-background p-2 flex flex-col items-center justify-center gap-2">
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className={cn(
      "h-sm w-sm [--cell-size:0.2rem]",
      "rounded-lg"
    )}
  />
      {hijri && (
        <div className="text-sm text-leading-6 text-left font-medium">
          {hijri.day} {hijri.month.en} {hijri.year} H
        </div>
      )}
    </div>
  );
}

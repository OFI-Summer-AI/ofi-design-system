import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "rounded-[1rem] border border-white/10 bg-[#1a1a1a] p-4 text-white shadow-[0_18px_60px_rgba(0,0,0,0.38)]",
        className,
      )}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-3",
        caption_label: "text-base font-semibold tracking-[-0.02em] text-white",
        month_caption: "relative flex items-center justify-center pt-1",
        nav: "absolute inset-x-0 top-1 flex items-center justify-between",
        button_previous:
          "inline-flex h-9 w-9 items-center justify-center rounded-[0.75rem] border border-white/10 bg-[#1d1d1d] text-white/60 transition-colors hover:bg-[#232323] hover:text-white aria-disabled:opacity-30",
        button_next:
          "inline-flex h-9 w-9 items-center justify-center rounded-[0.75rem] border border-white/10 bg-[#1d1d1d] text-white/60 transition-colors hover:bg-[#232323] hover:text-white aria-disabled:opacity-30",
        month_grid: "w-full border-collapse",
        weekdays: "flex w-full justify-between pt-1",
        weekday:
          "w-10 text-center text-[0.8rem] font-medium text-white/28",
        weeks: "flex flex-col gap-2",
        week: "flex w-full justify-between",
        day: "h-10 w-10 p-0 text-center text-sm",
        day_button:
          "inline-flex h-10 w-10 items-center justify-center rounded-none p-0 text-[0.9rem] font-medium text-white transition-colors hover:bg-white/6",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
        today: "bg-white/6 text-white",
        outside: "text-white/16",
        disabled: "text-white/16",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === "left" ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

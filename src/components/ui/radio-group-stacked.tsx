import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export const RadioGroupStacked = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn(
      "flex flex-col rounded-md border border-border overflow-hidden divide-y divide-border bg-card",
      className,
    )}
    {...props}
  />
))
RadioGroupStacked.displayName = "RadioGroupStacked"

export interface RadioGroupStackedItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: React.ReactNode
  description?: React.ReactNode
}

export const RadioGroupStackedItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupStackedItemProps
>(({ className, label, description, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "group flex w-full items-start gap-3 px-4 py-3 text-left transition-colors",
      "data-[state=checked]:bg-accent",
      "hover:bg-accent/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring",
      "disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <span
      className={cn(
        "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-border bg-background",
        "group-data-[state=checked]:border-primary group-data-[state=checked]:bg-primary",
      )}
    >
      <RadioGroupPrimitive.Indicator>
        <Check className="h-3 w-3 text-primary-foreground" />
      </RadioGroupPrimitive.Indicator>
    </span>
    <span className="flex flex-col gap-0.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {description && (
        <span className="text-xs text-foreground-muted">{description}</span>
      )}
    </span>
  </RadioGroupPrimitive.Item>
))
RadioGroupStackedItem.displayName = "RadioGroupStackedItem"

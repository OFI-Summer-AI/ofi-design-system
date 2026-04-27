import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export const RadioGroupCard = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn("grid gap-3", className)}
    {...props}
  />
))
RadioGroupCard.displayName = "RadioGroupCard"

export interface RadioGroupCardItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: React.ReactNode
  description?: React.ReactNode
}

export const RadioGroupCardItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupCardItemProps
>(({ className, children, label, description, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "group relative flex min-w-[160px] flex-col items-start gap-3 rounded-lg border border-border bg-card p-4 text-left shadow-sm transition-all hover:bg-accent/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring data-[state=checked]:border-primary data-[state=checked]:bg-accent/60 data-[state=checked]:shadow-[0_0_0_1px_hsl(var(--primary))] disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border border-border bg-background text-transparent transition-colors group-data-[state=checked]:border-primary group-data-[state=checked]:bg-primary group-data-[state=checked]:text-primary-foreground">
      <RadioGroupPrimitive.Indicator asChild>
        <Check className="h-3.5 w-3.5" />
      </RadioGroupPrimitive.Indicator>
    </span>
    {children ? <div className="w-full">{children}</div> : null}
    <div className="space-y-1">
      <div className="text-sm font-medium leading-none">{label}</div>
      {description ? (
        <div className="text-xs leading-relaxed text-foreground-muted">{description}</div>
      ) : null}
    </div>
  </RadioGroupPrimitive.Item>
))
RadioGroupCardItem.displayName = "RadioGroupCardItem"

export {
  RadioGroupCard as RadioGroupCard_Shadcn_,
  RadioGroupCardItem as RadioGroupCardItem_Shadcn_,
}

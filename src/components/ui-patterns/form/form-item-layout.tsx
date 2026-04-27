import * as React from "react"
import {
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"

export type FormItemLayoutVariant =
  | "vertical"
  | "horizontal"
  | "flex-row-reverse"

export interface FormItemLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode
  description?: React.ReactNode
  layout?: FormItemLayoutVariant
  children: React.ReactNode
}

export const FormItemLayout = React.forwardRef<
  HTMLDivElement,
  FormItemLayoutProps
>(
  (
    { label, description, layout = "vertical", children, className, ...props },
    ref,
  ) => {
    if (layout === "horizontal") {
      return (
        <FormItem
          ref={ref}
          className={cn("grid grid-cols-12 gap-4 space-y-0", className)}
          {...props}
        >
          <div className="col-span-6 flex flex-col gap-1">
            {label ? <FormLabel className="text-sm">{label}</FormLabel> : null}
            {description ? (
              <FormDescription>{description}</FormDescription>
            ) : null}
          </div>
          <div className="col-span-6 flex flex-col gap-1">
            {children}
            <FormMessage />
          </div>
        </FormItem>
      )
    }

    if (layout === "flex-row-reverse") {
      return (
        <FormItem
          ref={ref}
          className={cn(
            "flex flex-row-reverse items-start justify-between gap-6 space-y-0",
            className,
          )}
          {...props}
        >
          <div className="flex-1 flex flex-col gap-1 min-w-0">
            {label ? <FormLabel className="text-sm">{label}</FormLabel> : null}
            {description ? (
              <FormDescription>{description}</FormDescription>
            ) : null}
          </div>
          <div className="flex-1 flex flex-col gap-1 min-w-0">
            {children}
            <FormMessage />
          </div>
        </FormItem>
      )
    }

    return (
      <FormItem
        ref={ref}
        className={cn("flex flex-col gap-1.5 space-y-0", className)}
        {...props}
      >
        {label ? <FormLabel>{label}</FormLabel> : null}
        {children}
        {description ? <FormDescription>{description}</FormDescription> : null}
        <FormMessage />
      </FormItem>
    )
  },
)
FormItemLayout.displayName = "FormItemLayout"

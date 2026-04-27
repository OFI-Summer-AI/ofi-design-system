import * as React from "react"
import { cn } from "@/lib/utils"

export const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex w-full items-stretch rounded-md border border-border bg-background shadow-sm overflow-hidden focus-within:ring-1 focus-within:ring-ring",
      className,
    )}
    {...props}
  />
))
InputGroup.displayName = "InputGroup"

type AddonAlign = "inline-start" | "inline-end" | "block-end"

export interface InputGroupAddonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  align?: AddonAlign
}

export const InputGroupAddon = React.forwardRef<
  HTMLDivElement,
  InputGroupAddonProps
>(({ align = "inline-end", className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center bg-muted/40",
      align === "inline-start" && "border-r border-border px-3",
      align === "inline-end" && "border-l border-border px-3",
      align === "block-end" &&
        "w-full order-last border-t border-border px-3 py-1.5",
      className,
    )}
    data-align={align}
    {...props}
  />
))
InputGroupAddon.displayName = "InputGroupAddon"

export const InputGroupText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("text-xs text-foreground-muted", className)}
    {...props}
  />
))
InputGroupText.displayName = "InputGroupText"

export const InputGroupInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "flex-1 min-w-0 bg-transparent px-3 py-1 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
))
InputGroupInput.displayName = "InputGroupInput"

export const InputGroupTextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex-1 min-w-0 w-full bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
))
InputGroupTextArea.displayName = "InputGroupTextArea"

export const FormInputGroupInput = InputGroupInput
export const FormInputGroupTextArea = InputGroupTextArea

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ExpandingTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxRows?: number
}

export const ExpandingTextarea = React.forwardRef<
  HTMLTextAreaElement,
  ExpandingTextareaProps
>(({ className, maxRows, onInput, ...props }, ref) => {
  const innerRef = React.useRef<HTMLTextAreaElement | null>(null)
  React.useImperativeHandle(ref, () => innerRef.current as HTMLTextAreaElement)

  const resize = React.useCallback(() => {
    const el = innerRef.current
    if (!el) return
    el.style.height = "auto"
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight || "20")
    const max = maxRows ? lineHeight * maxRows : Infinity
    el.style.height = `${Math.min(el.scrollHeight, max)}px`
  }, [maxRows])

  React.useEffect(() => {
    resize()
  }, [resize, props.value, props.defaultValue])

  return (
    <textarea
      ref={innerRef}
      rows={1}
      onInput={(e) => {
        resize()
        onInput?.(e)
      }}
      className={cn(
        "flex w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
})
ExpandingTextarea.displayName = "ExpandingTextarea"

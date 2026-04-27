import * as React from "react"
import { Check, Copy } from "lucide-react"
import { Input as InputShadcn } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  copy?: boolean
  onCopy?: () => void
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ copy, onCopy, className, value, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = async () => {
      const text = typeof value === "string" ? value : String(value ?? "")
      try {
        await navigator.clipboard.writeText(text)
      } catch {}
      setCopied(true)
      onCopy?.()
      setTimeout(() => setCopied(false), 1200)
    }

    if (!copy) {
      return (
        <InputShadcn ref={ref} value={value} className={className} {...props} />
      )
    }

    return (
      <div className="relative w-full">
        <InputShadcn
          ref={ref}
          value={value}
          className={cn("pr-10 font-mono text-xs", className)}
          {...props}
        />
        <Button
          type="text"
          size="tiny"
          icon={copied ? <Check /> : <Copy />}
          onClick={handleCopy}
          aria-label="Copy to clipboard"
          className="absolute right-1 top-1/2 -translate-y-1/2"
        />
      </div>
    )
  },
)
Input.displayName = "Input"

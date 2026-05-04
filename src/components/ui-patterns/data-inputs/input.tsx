import * as React from "react"
import { Check, Copy, Eye, EyeOff } from "lucide-react"
import { Input as InputShadcn } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  copy?: boolean
  reveal?: boolean
  containerClassName?: string
  onCopy?: () => void
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      copy,
      reveal,
      onCopy,
      className,
      containerClassName,
      value,
      defaultValue,
      type = "text",
      ...props
    },
    ref,
  ) => {
    const [copied, setCopied] = React.useState(false)
    const [isVisible, setIsVisible] = React.useState(false)

    const handleCopy = async () => {
      const text = String(value ?? defaultValue ?? "")
      try {
        await navigator.clipboard.writeText(text)
      } catch {}
      setCopied(true)
      onCopy?.()
      setTimeout(() => setCopied(false), 1200)
    }

    const inputType = reveal && !isVisible ? "password" : type

    if (!copy && !reveal) {
      return (
        <div className={cn("w-full", containerClassName)}>
          <InputShadcn
            ref={ref}
            value={value}
            defaultValue={defaultValue}
            className={className}
            type={type}
            {...props}
          />
        </div>
      )
    }

    return (
      <div className={cn("relative w-full", containerClassName)}>
        <InputShadcn
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          type={inputType}
          className={cn("font-mono text-xs", (copy || reveal) && "pr-16", className)}
          {...props}
        />
        <div className="absolute right-1 top-1/2 flex -translate-y-1/2 gap-1">
          {reveal && (
            <Button
              htmlType="button"
              size="tiny"
              type="text"
              icon={isVisible ? <EyeOff /> : <Eye />}
              onClick={() => setIsVisible(!isVisible)}
              aria-label={isVisible ? "Hide value" : "Reveal value"}
            />
          )}
          {copy && (
            <Button
              htmlType="button"
              size="tiny"
              type="text"
              icon={copied ? <Check /> : <Copy />}
              onClick={handleCopy}
              aria-label="Copy to clipboard"
            />
          )}
        </div>
      </div>
    )
  },
)
Input.displayName = "Input"

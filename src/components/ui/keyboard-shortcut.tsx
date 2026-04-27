import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const keyboardShortcutVariants = cva(
  "inline-flex items-center whitespace-nowrap font-medium tabular-nums",
  {
    variants: {
      variant: {
        pill:
          "gap-1 rounded-md border border-border bg-card px-2 py-1 font-mono text-[11px] leading-none text-foreground-muted shadow-sm",
        inline:
          "gap-1 font-mono text-xs leading-none text-current/80",
      },
    },
    defaultVariants: {
      variant: "pill",
    },
  },
)

const APPLE_PLATFORMS = ["mac", "iphone", "ipad", "ipod"]

function isApplePlatform() {
  if (typeof navigator === "undefined") return true

  const nav = navigator as Navigator & {
    userAgentData?: {
      platform?: string
    }
  }

  const platform =
    nav.userAgentData?.platform ??
    navigator.platform ??
    navigator.userAgent

  return APPLE_PLATFORMS.some((value) => platform.toLowerCase().includes(value))
}

function normalizeKeyLabel(key: string, apple: boolean) {
  const normalized = key.trim()

  switch (normalized.toLowerCase()) {
    case "meta":
    case "cmd":
    case "command":
      return apple ? "⌘" : "Ctrl"
    case "alt":
    case "option":
      return apple ? "⌥" : "Alt"
    case "shift":
      return apple ? "⇧" : "Shift"
    case "enter":
      return apple ? "↵" : "Enter"
    case "esc":
    case "escape":
      return "Esc"
    case "tab":
      return "Tab"
    default:
      return normalized.length === 1 ? normalized.toUpperCase() : normalized
  }
}

export interface KeyboardShortcutProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof keyboardShortcutVariants> {
  keys: string[]
}

export function KeyboardShortcut({
  className,
  keys,
  variant,
  ...props
}: KeyboardShortcutProps) {
  const apple = isApplePlatform()
  const labels = keys.map((key) => normalizeKeyLabel(key, apple))

  return (
    <span
      className={cn(keyboardShortcutVariants({ variant }), className)}
      aria-label={`Keyboard shortcut: ${labels.join(" ")}`}
      {...props}
    >
      {labels.map((label, index) => (
        <span key={`${label}-${index}`}>{label}</span>
      ))}
    </span>
  )
}

export { KeyboardShortcut as KeyboardShortcut_Shadcn_ }

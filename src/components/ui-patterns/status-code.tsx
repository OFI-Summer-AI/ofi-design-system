import { cn } from "@/lib/utils"

export interface StatusCodeProps {
  code: number
  className?: string
}

export function StatusCode({ code, className }: StatusCodeProps) {
  const tone =
    code >= 500
      ? "bg-destructive/15 text-destructive border-destructive/30"
      : code >= 400
      ? "bg-amber-500/15 text-amber-500 border-amber-500/30"
      : code >= 300
      ? "bg-blue-500/15 text-blue-400 border-blue-500/30"
      : code >= 200
      ? "bg-brand/15 text-brand border-brand/30"
      : "bg-accent text-foreground-muted border-border"

  return (
    <span
      className={cn(
        "inline-flex items-center rounded border px-1.5 py-0.5 font-mono text-xs tabular-nums",
        tone,
        className,
      )}
    >
      {code}
    </span>
  )
}

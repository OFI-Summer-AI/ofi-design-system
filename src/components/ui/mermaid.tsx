import * as React from "react"
import { cn } from "@/lib/utils"

export interface MermaidProps extends React.HTMLAttributes<HTMLDivElement> {
  chart: string
}

/**
 * Lightweight placeholder that renders the raw Mermaid source inside a styled
 * frame. Wire it to a real renderer by lazy-loading `mermaid` and calling
 * `mermaid.render()` against the chart string.
 */
export function Mermaid({ chart, className, ...props }: MermaidProps) {
  return (
    <div
      className={cn(
        "relative rounded-md border border-border bg-card p-4",
        className,
      )}
      {...props}
    >
      <div className="absolute right-3 top-3 rounded bg-accent px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-foreground-muted">
        mermaid
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap break-words font-mono text-xs leading-relaxed text-foreground-muted">
        {chart}
      </pre>
    </div>
  )
}

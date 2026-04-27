import * as React from "react"
import { cn } from "@/lib/utils"

export interface TocItem {
  id: string
  label: string
  level?: 2 | 3
}

export interface TocProps {
  items: TocItem[]
  activeId?: string
  className?: string
}

export function Toc({ items, activeId, className }: TocProps) {
  return (
    <nav className={cn("flex flex-col gap-1 text-sm", className)}>
      <div className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
        On this page
      </div>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={cn(
            "py-0.5 text-foreground-muted hover:text-foreground",
            item.level === 3 && "pl-3",
            activeId === item.id && "text-foreground",
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

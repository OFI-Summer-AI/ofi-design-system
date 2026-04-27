import * as React from "react"
import { cn } from "@/lib/utils"

export interface InnerSideMenuItem {
  label: string
  href: string
  icon?: React.ReactNode
  active?: boolean
}

export interface InnerSideMenuProps {
  title?: string
  items: InnerSideMenuItem[]
  className?: string
}

export function InnerSideMenu({ title, items, className }: InnerSideMenuProps) {
  return (
    <nav className={cn("flex w-56 flex-col gap-1", className)}>
      {title && (
        <div className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-foreground-muted">
          {title}
        </div>
      )}
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-foreground-muted transition-colors hover:bg-accent hover:text-foreground",
            item.active && "bg-accent text-foreground",
          )}
        >
          {item.icon && (
            <span className="text-foreground-muted [&>svg]:h-4 [&>svg]:w-4">{item.icon}</span>
          )}
          <span className="truncate">{item.label}</span>
        </a>
      ))}
    </nav>
  )
}

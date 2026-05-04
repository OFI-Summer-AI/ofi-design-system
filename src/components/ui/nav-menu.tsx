import * as React from "react"
import { cn } from "@/lib/utils"

export interface NavMenuItem {
  label: React.ReactNode
  href: string
  active?: boolean
}

export interface NavMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  items: NavMenuItem[]
  variant?: "underline" | "pill"
}

export function NavMenu({
  items,
  variant = "underline",
  className,
  ...props
}: NavMenuProps) {
  if (variant === "pill") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-1 rounded-md border border-border bg-card p-1 text-sm",
          className,
        )}
        {...props}
      >
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            data-active={item.active || undefined}
            className={cn(
              "rounded px-3 py-1 transition-colors",
              item.active
                ? "bg-accent text-foreground"
                : "text-foreground-muted hover:text-foreground",
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "flex items-center gap-1 border-b border-border text-sm",
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          data-active={item.active || undefined}
          className={cn(
            "relative px-3 py-2 transition-colors",
            item.active
              ? "text-foreground"
              : "text-foreground-muted hover:text-foreground",
          )}
        >
          {item.label}
          {item.active && (
            <span className="absolute inset-x-0 -bottom-px h-0.5 bg-foreground" />
          )}
        </a>
      ))}
    </div>
  )
}

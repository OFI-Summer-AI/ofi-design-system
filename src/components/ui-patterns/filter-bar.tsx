import * as React from "react"
import { Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export interface FilterChip {
  id: string
  label: string
}

export interface FilterBarProps extends React.HTMLAttributes<HTMLDivElement> {
  search?: string
  onSearchChange?: (v: string) => void
  placeholder?: string
  chips?: FilterChip[]
  onRemoveChip?: (id: string) => void
  trailing?: React.ReactNode
}

export function FilterBar({
  search,
  onSearchChange,
  placeholder = "Search",
  chips,
  onRemoveChip,
  trailing,
  className,
  ...props
}: FilterBarProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 rounded-md border border-border bg-card p-2",
        className,
      )}
      {...props}
    >
      <div className="relative min-w-[200px] flex-1">
        <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-foreground-muted" />
        <Input
          value={search ?? ""}
          onChange={(e) => onSearchChange?.(e.target.value)}
          placeholder={placeholder}
          className="h-8 pl-8 text-xs"
        />
      </div>
      {chips?.map((c) => (
        <Badge key={c.id} variant="secondary" className="gap-1 pr-1">
          {c.label}
          {onRemoveChip && (
            <button
              type="button"
              onClick={() => onRemoveChip(c.id)}
              className="ml-1 rounded hover:bg-foreground/10"
              aria-label={`Remove ${c.label}`}
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </Badge>
      ))}
      {trailing && <div className="ml-auto flex items-center gap-2">{trailing}</div>}
    </div>
  )
}

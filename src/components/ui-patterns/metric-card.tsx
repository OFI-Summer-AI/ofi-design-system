import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode
  value: React.ReactNode
  delta?: { value: string; trend?: "up" | "down" | "flat" }
  icon?: React.ReactNode
}

export function MetricCard({
  label,
  value,
  delta,
  icon,
  className,
  ...props
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-lg border border-border bg-card p-4",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between text-sm text-foreground-muted">
        <span>{label}</span>
        {icon && <span className="text-foreground-muted">{icon}</span>}
      </div>
      <div className="flex items-baseline gap-2">
        <div className="text-2xl font-semibold tracking-tight tabular-nums">{value}</div>
        {delta && (
          <Badge
            variant={
              delta.trend === "down"
                ? "destructive"
                : delta.trend === "flat"
                ? "secondary"
                : "success"
            }
          >
            {delta.value}
          </Badge>
        )}
      </div>
    </div>
  )
}

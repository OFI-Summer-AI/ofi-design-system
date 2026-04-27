import * as React from "react"
import { AlertOctagon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ErrorDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  message: React.ReactNode
  actions?: React.ReactNode
}

export function ErrorDisplay({
  title = "Something went wrong",
  message,
  actions,
  className,
  ...props
}: ErrorDisplayProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm",
        className,
      )}
      {...props}
    >
      <AlertOctagon className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
      <div className="min-w-0 flex-1">
        <div className="font-medium text-destructive">{title}</div>
        <div className="mt-1 text-foreground-muted">{message}</div>
        {actions && <div className="mt-3 flex items-center gap-2">{actions}</div>}
      </div>
    </div>
  )
}

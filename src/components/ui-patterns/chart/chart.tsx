import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { HelpCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChartContext, useChart } from "./context"

export { useChart } from "./context"

/* ------------------------------------------------------------------ Chart */

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean
  isDisabled?: boolean
}

export const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  (
    { isLoading = false, isDisabled = false, className, children, ...props },
    ref,
  ) => (
    <ChartContext.Provider value={{ isLoading, isDisabled }}>
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </ChartContext.Provider>
  ),
)
Chart.displayName = "Chart"

/* -------------------------------------------------------------- ChartCard */

export interface ChartCardProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export const ChartCard = React.forwardRef<HTMLDivElement, ChartCardProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        ref={ref}
        className={cn(
          "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
          className,
        )}
        {...props}
      />
    )
  },
)
ChartCard.displayName = "ChartCard"

/* ------------------------------------------------------------ ChartHeader */

export interface ChartHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center"
}

export const ChartHeader = React.forwardRef<HTMLDivElement, ChartHeaderProps>(
  ({ align = "center", className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex gap-4 px-5 pt-5",
        align === "center" ? "items-center" : "items-start",
        "justify-between",
        className,
      )}
      {...props}
    />
  ),
)
ChartHeader.displayName = "ChartHeader"

/* ------------------------------------------------------------- ChartTitle */

export interface ChartTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  tooltip?: string
}

export const ChartTitle = React.forwardRef<HTMLDivElement, ChartTitleProps>(
  ({ tooltip, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center gap-2 text-foreground font-medium", className)}
      {...props}
    >
      <span>{children}</span>
      {tooltip ? (
        <HelpCircle
          className="h-3.5 w-3.5 text-foreground-muted"
          aria-label={tooltip}
        >
          <title>{tooltip}</title>
        </HelpCircle>
      ) : null}
    </div>
  ),
)
ChartTitle.displayName = "ChartTitle"

/* ----------------------------------------------------------- ChartActions */

export interface ChartAction {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  href?: string
  type?: "button" | "link"
  className?: string
}

export interface ChartActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  actions?: ChartAction[]
}

export const ChartActions = React.forwardRef<
  HTMLDivElement,
  ChartActionsProps
>(({ actions, className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-1", className)}
    {...props}
  >
    {children ??
      actions?.map((a) => {
        const isLink = a.type === "link" || (!a.type && a.href)
        if (isLink) {
          return (
            <Button
              key={a.label}
              asChild
              type="outline"
              size="tiny"
              icon={a.icon}
              aria-label={a.label}
              className={a.className}
            >
              <a href={a.href} target="_blank" rel="noreferrer" />
            </Button>
          )
        }
        return (
          <Button
            key={a.label}
            type="outline"
            size="tiny"
            icon={a.icon}
            onClick={a.onClick}
            aria-label={a.label}
            className={a.className}
          />
        )
      })}
  </div>
))
ChartActions.displayName = "ChartActions"

/* ------------------------------------------------------------ ChartMetric */

type MetricStatus = "positive" | "negative" | "warning" | "default"

const statusDot: Record<MetricStatus, string> = {
  positive: "bg-brand",
  negative: "bg-destructive",
  warning: "bg-amber-500",
  default: "bg-muted-foreground",
}

const statusText: Record<MetricStatus, string> = {
  positive: "text-brand",
  negative: "text-destructive",
  warning: "text-amber-400",
  default: "text-foreground-muted",
}

export interface ChartMetricProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number | null | undefined
  diffValue?: string | number | null
  status?: MetricStatus
  align?: "start" | "end"
  tooltip?: string
}

export const ChartMetric = React.forwardRef<HTMLDivElement, ChartMetricProps>(
  (
    {
      label,
      value,
      diffValue,
      status = "default",
      align = "start",
      tooltip,
      className,
      ...props
    },
    ref,
  ) => {
    const alignment = align === "end" ? "items-end text-right" : "items-start"
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1", alignment, className)}
        {...props}
      >
        <div
          className={cn(
            "flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider",
            statusText[status],
          )}
        >
          {status !== "default" && (
            <span
              aria-hidden
              className={cn("h-2 w-2 rounded-full", statusDot[status])}
            />
          )}
          <span>{label}</span>
          {tooltip ? (
            <HelpCircle className="h-3 w-3 opacity-70" aria-label={tooltip}>
              <title>{tooltip}</title>
            </HelpCircle>
          ) : null}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl md:text-3xl font-normal tracking-tight text-foreground tabular-nums">
            {value ?? "—"}
          </span>
          {diffValue != null && diffValue !== "" ? (
            <span className={cn("text-xs font-medium", statusText[status])}>
              {diffValue}
            </span>
          ) : null}
        </div>
      </div>
    )
  },
)
ChartMetric.displayName = "ChartMetric"

/* ----------------------------------------------------------- ChartContent */

export interface ChartContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isEmpty?: boolean
  emptyState?: React.ReactNode
  loadingState?: React.ReactNode
  disabledState?: React.ReactNode
  disabledActions?: ChartAction[]
}

export const ChartContent = React.forwardRef<
  HTMLDivElement,
  ChartContentProps
>(
  (
    {
      isEmpty,
      emptyState,
      loadingState,
      disabledState,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { isLoading, isDisabled } = useChart()

    let body: React.ReactNode = children
    if (isLoading) body = loadingState ?? <ChartLoadingState />
    else if (isDisabled) body = disabledState ?? null
    else if (isEmpty) body = emptyState ?? null

    return (
      <div
        ref={ref}
        className={cn("relative px-5 pb-3 pt-4", className)}
        {...props}
      >
        {body}
      </div>
    )
  },
)
ChartContent.displayName = "ChartContent"

/* -------------------------------------------------------- ChartEmptyState */

export interface ChartEmptyStateProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  icon?: React.ReactNode
}

export const ChartEmptyState = React.forwardRef<
  HTMLDivElement,
  ChartEmptyStateProps
>(({ title, description, icon, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col items-center justify-center gap-1 py-10 text-center",
      className,
    )}
    {...props}
  >
    {icon ? <div className="text-foreground-muted mb-1">{icon}</div> : null}
    <p className="text-sm text-foreground">{title}</p>
    {description ? (
      <p className="text-xs text-foreground-muted">{description}</p>
    ) : null}
  </div>
))
ChartEmptyState.displayName = "ChartEmptyState"

/* ------------------------------------------------------ ChartLoadingState */

export const ChartLoadingState: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-2 py-10 text-foreground-muted">
    <Loader2 className="h-4 w-4 animate-spin" />
    <span className="text-xs">Loading…</span>
  </div>
)
ChartLoadingState.displayName = "ChartLoadingState"

/* ------------------------------------------------------------ ChartFooter */

export const ChartFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-t border-border px-5 py-3", className)}
    {...props}
  />
))
ChartFooter.displayName = "ChartFooter"

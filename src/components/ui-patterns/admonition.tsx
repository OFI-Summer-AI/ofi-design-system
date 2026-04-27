import * as React from "react"
import { AlertCircle, AlertTriangle, Info } from "lucide-react"
import { cn } from "@/lib/utils"

export type AdmonitionType = "default" | "warning" | "destructive"
export type AdmonitionLayout = "horizontal" | "vertical" | "responsive"

export interface AdmonitionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AdmonitionType
  layout?: AdmonitionLayout
  title: string
  description: React.ReactNode
  actions?: React.ReactNode
}

const typeConfig: Record<
  AdmonitionType,
  { icon: React.ElementType; wrapperCn: string; iconCn: string }
> = {
  default: {
    icon: Info,
    wrapperCn: "border-border bg-card",
    iconCn: "text-muted-foreground",
  },
  warning: {
    icon: AlertTriangle,
    wrapperCn: "border-amber-400/60 bg-amber-400/10",
    iconCn: "text-amber-500",
  },
  destructive: {
    icon: AlertCircle,
    wrapperCn: "border-destructive/50 bg-destructive/10",
    iconCn: "text-destructive",
  },
}

function useContainerWidth(threshold: number) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isWide, setIsWide] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el || typeof ResizeObserver === "undefined") return
    const ro = new ResizeObserver(([entry]) => {
      setIsWide(entry.contentRect.width >= threshold)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [threshold])

  return [ref, isWide] as const
}

export function Admonition({
  type = "default",
  layout = "vertical",
  title,
  description,
  actions,
  className,
  ...props
}: AdmonitionProps) {
  const { icon: Icon, wrapperCn, iconCn } = typeConfig[type]
  const [containerRef, isWide] = useContainerWidth(448)

  const isHorizontal =
    layout === "horizontal" || (layout === "responsive" && isWide)

  return (
    <div
      ref={layout === "responsive" ? containerRef : undefined}
      className={cn(
        "rounded-lg border p-4",
        wrapperCn,
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "flex gap-3",
          isHorizontal ? "flex-row items-center" : "flex-col",
        )}
      >
        {/* Icon + text */}
        <div className={cn("flex gap-3", isHorizontal ? "flex-1 items-center min-w-0" : "flex-col")}>
          <div className="flex items-start gap-3 min-w-0">
            <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", iconCn)} />
            <div className="min-w-0 space-y-0.5">
              <p className="text-sm font-medium leading-snug">{title}</p>
              {!isHorizontal && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>
          {isHorizontal && (
            <p className="text-sm text-muted-foreground leading-relaxed pl-7">
              {description}
            </p>
          )}
        </div>

        {/* Actions */}
        {actions && (
          <div
            className={cn(
              "flex shrink-0 flex-wrap gap-2",
              isHorizontal ? "items-center" : "pl-7",
            )}
          >
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}

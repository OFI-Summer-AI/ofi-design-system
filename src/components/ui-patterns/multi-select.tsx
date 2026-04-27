import * as React from "react"
import { Check, ChevronDown, X } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface MultiSelectContextValue {
  values: string[]
  toggle: (value: string) => void
  remove: (value: string) => void
  size: "small" | "default"
}

const MultiSelectContext = React.createContext<MultiSelectContextValue | null>(
  null,
)
const useMultiSelect = () => {
  const ctx = React.useContext(MultiSelectContext)
  if (!ctx) throw new Error("MultiSelector components must be nested")
  return ctx
}

export interface MultiSelectorProps {
  values: string[]
  onValuesChange: (values: string[]) => void
  size?: "small" | "default"
  className?: string
  children: React.ReactNode
}

export function MultiSelector({
  values,
  onValuesChange,
  size = "default",
  className,
  children,
}: MultiSelectorProps) {
  const [open, setOpen] = React.useState(false)
  const toggle = React.useCallback(
    (value: string) => {
      onValuesChange(
        values.includes(value)
          ? values.filter((v) => v !== value)
          : [...values, value],
      )
    },
    [values, onValuesChange],
  )
  const remove = React.useCallback(
    (value: string) => onValuesChange(values.filter((v) => v !== value)),
    [values, onValuesChange],
  )

  return (
    <MultiSelectContext.Provider value={{ values, toggle, remove, size }}>
      <Popover open={open} onOpenChange={setOpen}>
        <div className={cn("w-full", className)}>{children}</div>
      </Popover>
    </MultiSelectContext.Provider>
  )
}

export interface MultiSelectorTriggerProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string
  mode?: "inline-combobox" | "button"
  badgeLimit?: "wrap" | number
  showIcon?: boolean
  deletableBadge?: boolean
}

export const MultiSelectorTrigger = React.forwardRef<
  HTMLButtonElement,
  MultiSelectorTriggerProps
>(
  (
    {
      label = "Select options",
      showIcon = true,
      deletableBadge = false,
      className,
      ...props
    },
    ref,
  ) => {
    const { values, remove } = useMultiSelect()
    return (
      <PopoverTrigger asChild>
        <button
          ref={ref}
          type="button"
          className={cn(
            "flex min-h-9 w-full items-center justify-between gap-2 rounded-md border border-border bg-background px-2 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring",
            className,
          )}
          {...props}
        >
          <div className="flex flex-wrap items-center gap-1">
            {values.length === 0 ? (
              <span className="px-1 text-muted-foreground">{label}</span>
            ) : (
              values.map((v) => (
                <span
                  key={v}
                  className="inline-flex items-center gap-1 rounded bg-muted px-1.5 py-0.5 text-xs"
                >
                  {v}
                  {deletableBadge ? (
                    <X
                      role="button"
                      tabIndex={0}
                      className="h-3 w-3 cursor-pointer opacity-60 hover:opacity-100"
                      onClick={(e) => {
                        e.stopPropagation()
                        remove(v)
                      }}
                    />
                  ) : null}
                </span>
              ))
            )}
          </div>
          {showIcon ? (
            <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
          ) : null}
        </button>
      </PopoverTrigger>
    )
  },
)
MultiSelectorTrigger.displayName = "MultiSelectorTrigger"

export function MultiSelectorContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof PopoverContent>) {
  return (
    <PopoverContent
      align="start"
      className={cn(
        "w-[var(--radix-popover-trigger-width)] p-1",
        className,
      )}
      {...props}
    >
      {children}
    </PopoverContent>
  )
}

export function MultiSelectorList({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-0.5 max-h-60 overflow-auto", className)}
      {...props}
    />
  )
}

export interface MultiSelectorItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export const MultiSelectorItem = React.forwardRef<
  HTMLDivElement,
  MultiSelectorItemProps
>(({ value, className, children, ...props }, ref) => {
  const { values, toggle } = useMultiSelect()
  const selected = values.includes(value)
  return (
    <div
      ref={ref}
      role="option"
      aria-selected={selected}
      className={cn(
        "flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-sm hover:bg-accent",
        className,
      )}
      onClick={() => toggle(value)}
      {...props}
    >
      <span>{children ?? value}</span>
      {selected ? <Check className="h-4 w-4" /> : null}
    </div>
  )
})
MultiSelectorItem.displayName = "MultiSelectorItem"

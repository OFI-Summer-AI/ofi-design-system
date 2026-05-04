import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { ChevronDown } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertCollapsibleVariants = cva(
  "w-full overflow-hidden rounded-xl border",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-[#1a1a1a] text-foreground",
        destructive: "border-destructive/40 bg-destructive/10 text-destructive",
        warning: "border-amber-500/40 bg-amber-500/10 text-amber-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

const triggerButtonVariants = cva(
  "inline-flex h-9 w-9 items-center justify-center rounded-[0.95rem] border transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-white/10 bg-[#1d1d1d] text-foreground-muted hover:bg-[#232323] hover:text-foreground",
        destructive:
          "border-destructive/30 bg-destructive/10 text-destructive hover:bg-destructive/15",
        warning:
          "border-amber-500/30 bg-amber-500/10 text-amber-500 hover:bg-amber-500/15",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface AlertCollapsibleProps
  extends Omit<React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>, "children">,
    VariantProps<typeof alertCollapsibleVariants> {
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
  contentClassName?: string
}

export function AlertCollapsible({
  trigger,
  children,
  variant,
  className,
  contentClassName,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  disabled,
  ...props
}: AlertCollapsibleProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)
  const open = openProp ?? uncontrolledOpen

  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      if (openProp === undefined) {
        setUncontrolledOpen(nextOpen)
      }
      onOpenChange?.(nextOpen)
    },
    [onOpenChange, openProp],
  )

  return (
    <CollapsiblePrimitive.Root
      open={open}
      onOpenChange={handleOpenChange}
      disabled={disabled}
      className={cn(alertCollapsibleVariants({ variant }), className)}
      {...props}
    >
      <div className="flex items-start justify-between gap-4 px-6 py-5">
        <div className="min-w-0 pt-0.5 text-[1.05rem] font-semibold leading-6 text-white">
          {trigger}
        </div>
        <CollapsiblePrimitive.Trigger asChild>
          <button
            type="button"
            aria-label={open ? "Collapse content" : "Expand content"}
            className={cn(
              triggerButtonVariants({ variant }),
              open && "bg-[#1f1f1f] text-foreground",
              disabled && "pointer-events-none opacity-50",
            )}
          >
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                open && "rotate-180",
              )}
            />
          </button>
        </CollapsiblePrimitive.Trigger>
      </div>
      <CollapsiblePrimitive.Content
        className={cn(
          "px-6 pb-5 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          contentClassName,
        )}
      >
        <div className="pb-0.5 text-[0.95rem] leading-7 text-foreground-light">{children}</div>
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  )
}

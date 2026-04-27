import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { Loader2 } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      type: {
        primary:
          "bg-brand-600 text-white border border-brand-500/80 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_1px_1px_rgba(0,0,0,0.2)] hover:bg-brand-500 hover:border-brand-400",
        default:
          "bg-card text-foreground border border-border hover:bg-accent",
        secondary:
          "bg-secondary text-secondary-foreground border border-border hover:bg-accent",
        outline:
          "bg-transparent text-foreground border border-border hover:bg-accent",
        dashed:
          "bg-transparent text-foreground border border-dashed border-border hover:bg-accent",
        link:
          "bg-transparent text-primary border border-transparent underline-offset-4 hover:underline h-auto px-0",
        text:
          "bg-transparent text-foreground border border-transparent hover:bg-accent",
        danger:
          "bg-destructive/90 text-destructive-foreground border border-destructive hover:bg-destructive",
        warning:
          "bg-amber-500 text-black border border-amber-400 hover:bg-amber-400",
      },
      size: {
        tiny: "h-6 px-2 text-xs",
        small: "h-7 px-2.5 text-xs",
        default: "h-8 px-3 text-sm",
        medium: "h-9 px-4 text-sm",
        large: "h-10 px-5 text-sm",
        huge: "h-11 px-6 text-base",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      type: "primary",
      size: "small",
      block: false,
    },
  },
)

export type ButtonType =
  | "primary"
  | "default"
  | "secondary"
  | "outline"
  | "dashed"
  | "link"
  | "text"
  | "danger"
  | "warning"

export type ButtonSize =
  | "tiny"
  | "small"
  | "default"
  | "medium"
  | "large"
  | "huge"

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  htmlType?: "button" | "submit" | "reset"
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  loading?: boolean
  loadingCentered?: boolean
}

const iconWrapperClass =
  "inline-flex items-center justify-center shrink-0 [&>svg]:h-4 [&>svg]:w-4"

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      type,
      size,
      block,
      asChild = false,
      htmlType = "button",
      icon,
      iconRight,
      loading,
      loadingCentered,
      disabled,
      tabIndex,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button"
    const isDisabled = disabled || loading
    const resolvedTabIndex =
      typeof tabIndex === "number" ? tabIndex : isDisabled ? -1 : 0

    const leading = loading ? <Loader2 className="animate-spin" /> : icon
    const showLeading = Boolean(leading)

    const content = (
      <>
        {loadingCentered && loading ? (
          <span className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-4 w-4 animate-spin" />
          </span>
        ) : null}
        <span
          className={cn(
            "inline-flex items-center gap-2",
            loadingCentered && loading && "opacity-0",
          )}
        >
          {showLeading && <span className={iconWrapperClass}>{leading}</span>}
          {children}
          {iconRight && <span className={iconWrapperClass}>{iconRight}</span>}
        </span>
      </>
    )

    const commonProps = {
      ref,
      className: cn(
        buttonVariants({ type, size, block }),
        loading && "text-current/70",
        className,
      ),
      "aria-busy": loading || undefined,
      tabIndex: resolvedTabIndex,
      ...props,
    }

    if (asChild) {
      return (
        <Slot
          {...(commonProps as React.HTMLAttributes<HTMLElement>)}
          aria-disabled={isDisabled || undefined}
        >
          {React.isValidElement(children)
            ? React.cloneElement(children, undefined, content)
            : content}
        </Slot>
      )
    }

    return (
      <button
        {...(commonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        type={htmlType}
        disabled={isDisabled}
      >
        {content}
      </button>
    )
  },
)
Button.displayName = "Button"

export { buttonVariants }

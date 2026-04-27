import * as React from "react"
import { cn } from "@/lib/utils"

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number | string
}

type SvgDefaults = Partial<
  Pick<
    React.SVGAttributes<SVGSVGElement>,
    | "fill"
    | "stroke"
    | "strokeWidth"
    | "strokeLinecap"
    | "strokeLinejoin"
  >
>

/**
 * Factory that mirrors the Supabase `icons` package behavior:
 * - Default `size={24}` (applied to both width and height)
 * - Shared stroke/fill defaults live on the root <svg>, not on child paths
 * - Any attribute the consumer passes overrides the defaults
 */
export function createIcon(
  displayName: string,
  paths: React.ReactNode,
  defaults: SvgDefaults = {},
) {
  const rootDefaults: SvgDefaults = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...defaults,
  }

  const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon(
    { size = 24, className, ...props },
    ref,
  ) {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        {...rootDefaults}
        {...props}
        className={cn("shrink-0", className)}
      >
        {paths}
      </svg>
    )
  })

  Icon.displayName = displayName
  return Icon
}

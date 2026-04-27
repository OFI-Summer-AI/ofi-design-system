import * as React from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { cn } from "@/lib/utils"
import { formatChartTimestamp } from "@/lib/format"

/* ----------------------------- shared types ----------------------------- */

export type ChartTick = {
  timestamp: string
  [key: string]: string | number | undefined
}

export type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode
    color?: string
  }
}

interface YAxisProps {
  tickFormatter?: (value: number) => string
  width?: number
}

interface CommonProps {
  data: ChartTick[]
  dataKey: string
  isFullHeight?: boolean
  showGrid?: boolean
  showYAxis?: boolean
  YAxisProps?: YAxisProps
  className?: string
  color?: string
  config?: ChartConfig
}

const BRAND_DEFAULT = "hsl(var(--brand-default))"

/* -------------------------- tooltip bubble ----------------------------- */

function ChartTooltip({
  active,
  payload,
  label,
  config,
}: {
  active?: boolean
  payload?: { dataKey: string; value: number; color: string }[]
  label?: string | number
  config?: ChartConfig
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-md border border-border bg-card/95 px-3 py-2 shadow-md text-xs">
      {label ? (
        <div className="mb-1 text-foreground-muted">
          {formatChartTimestamp(label)}
        </div>
      ) : null}
      <div className="flex flex-col gap-1">
        {payload.map((p) => (
          <div key={p.dataKey} className="flex items-center gap-2">
            <span
              aria-hidden
              className="h-2 w-2 rounded-sm"
              style={{ background: p.color }}
            />
            <span className="text-foreground-muted">
              {config?.[p.dataKey]?.label ?? p.dataKey}
            </span>
            <span className="ml-auto font-medium text-foreground tabular-nums">
              {p.value.toLocaleString("en-US")}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* -------------------------- footer timestamps -------------------------- */

function ChartDateRange({ data }: { data: ChartTick[] }) {
  if (!data.length) return null
  const start = data[0].timestamp
  const end = data[data.length - 1].timestamp
  return (
    <div className="flex justify-between text-xs text-foreground-muted mt-2 font-mono">
      <span>{formatChartTimestamp(start)}</span>
      <span>{formatChartTimestamp(end)}</span>
    </div>
  )
}

/* -------------------------------- ChartBar ----------------------------- */

export interface ChartBarProps extends CommonProps {
  hoverColor?: string
}

export const ChartBar = React.forwardRef<HTMLDivElement, ChartBarProps>(
  (
    {
      data,
      dataKey,
      color = BRAND_DEFAULT,
      isFullHeight,
      showGrid = false,
      showYAxis = false,
      YAxisProps,
      className,
      config,
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col",
        isFullHeight ? "h-full" : "h-40",
        className,
      )}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
          {showGrid ? (
            <CartesianGrid
              stroke="hsl(var(--border))"
              strokeDasharray="3 3"
              vertical={false}
            />
          ) : null}
          <XAxis dataKey="timestamp" hide />
          {showYAxis ? (
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={YAxisProps?.tickFormatter}
              width={YAxisProps?.width ?? 40}
            />
          ) : null}
          <Tooltip
            cursor={{ fill: "hsl(var(--muted) / 0.4)" }}
            content={<ChartTooltip config={config} />}
          />
          <Bar dataKey={dataKey} fill={color} radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <ChartDateRange data={data} />
    </div>
  ),
)
ChartBar.displayName = "ChartBar"

/* ------------------------------- ChartLine ----------------------------- */

export interface ChartLineProps extends CommonProps {
  dataKeys?: string[]
  strokeWidth?: number
  hoverColor?: string
}

export const ChartLine = React.forwardRef<HTMLDivElement, ChartLineProps>(
  (
    {
      data,
      dataKey,
      dataKeys,
      color = BRAND_DEFAULT,
      isFullHeight,
      showGrid = false,
      showYAxis = false,
      YAxisProps,
      strokeWidth = 1.5,
      className,
      config,
    },
    ref,
  ) => {
    const keys = dataKeys ?? [dataKey]
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col",
          isFullHeight ? "h-full" : "h-40",
          className,
        )}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 4, right: 4, left: 0, bottom: 0 }}
          >
            {showGrid ? (
              <CartesianGrid
                stroke="hsl(var(--border))"
                strokeDasharray="3 3"
                vertical={false}
              />
            ) : null}
            <XAxis dataKey="timestamp" hide />
            {showYAxis ? (
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                tickFormatter={YAxisProps?.tickFormatter}
                width={YAxisProps?.width ?? 40}
              />
            ) : null}
            <Tooltip
              cursor={{ stroke: "hsl(var(--border))" }}
              content={<ChartTooltip config={config} />}
            />
            {keys.map((k, i) => (
              <Line
                key={k}
                type="stepAfter"
                dataKey={k}
                dot={false}
                strokeWidth={strokeWidth}
                stroke={config?.[k]?.color ?? (i === 0 ? color : BRAND_DEFAULT)}
                isAnimationActive={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
        <ChartDateRange data={data} />
      </div>
    )
  },
)
ChartLine.displayName = "ChartLine"

/* ---------------------------- LogsBarChart ----------------------------- */

export interface LogsBarChartDatum extends ChartTick {
  ok_count?: number
  warning_count?: number
  error_count?: number
}

export interface LogsBarChartProps {
  data: LogsBarChartDatum[]
  isFullHeight?: boolean
  className?: string
}

export const LogsBarChart = React.forwardRef<HTMLDivElement, LogsBarChartProps>(
  ({ data, isFullHeight, className }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col",
        isFullHeight ? "h-full" : "h-40",
        className,
      )}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 4, right: 4, left: 4, bottom: 0 }}>
          <XAxis dataKey="timestamp" hide />
          <YAxis hide />
          <Tooltip
            cursor={{ fill: "hsl(var(--muted) / 0.3)" }}
            content={
              <ChartTooltip
                config={{
                  ok_count: { label: "OK", color: BRAND_DEFAULT },
                  warning_count: {
                    label: "Warn",
                    color: "hsl(var(--chart-3))",
                  },
                  error_count: {
                    label: "Err",
                    color: "hsl(var(--chart-5))",
                  },
                }}
              />
            }
          />
          <Bar
            dataKey="error_count"
            stackId="a"
            fill="hsl(var(--chart-5))"
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="warning_count"
            stackId="a"
            fill="hsl(var(--chart-3))"
          />
          <Bar
            dataKey="ok_count"
            stackId="a"
            fill="hsl(var(--brand-default))"
            radius={[2, 2, 0, 0]}
          >
            {data.map((_, i) => (
              <Cell key={i} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <ChartDateRange data={data} />
    </div>
  ),
)
LogsBarChart.displayName = "LogsBarChart"

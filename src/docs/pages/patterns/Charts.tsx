import { useState, useEffect } from "react"
import { BarChart2, ExternalLink } from "lucide-react"
import PageHeader from "../../components/PageHeader"
import { H2, H3, P, InlineCode } from "../../components/Section"
import ComponentPreview from "../../components/ComponentPreview"
import {
  Chart,
  ChartCard,
  ChartHeader,
  ChartTitle,
  ChartActions,
  ChartContent,
  ChartMetric,
  ChartBar,
  ChartLine,
  ChartEmptyState,
  ChartLoadingState,
  LogsBarChart,
} from "@/components/ui-patterns/chart"

// ── sample data helpers ───────────────────────────────────────────────────────

function generateSeries(count: number, base: number, spread: number) {
  const now = Date.now()
  return Array.from({ length: count }, (_, i) => ({
    timestamp: new Date(now - (count - i) * 3_600_000).toISOString(),
    value: Math.round(base + Math.random() * spread),
  }))
}

function generateLogsData() {
  const now = Date.now()
  return Array.from({ length: 30 }, (_, i) => ({
    timestamp: new Date(now - (30 - i) * 3_600_000).toISOString(),
    ok_count: Math.round(Math.random() * 800 + 200),
    warning_count: Math.round(Math.random() * 60),
    error_count: Math.round(Math.random() * 30),
  }))
}

// ── live preview components ───────────────────────────────────────────────────

function BarChartPreview() {
  const [isLoading, setIsLoading] = useState(true)
  const [data] = useState(() => generateSeries(48, 200, 300))
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="w-full">
      <Chart isLoading={isLoading}>
        <ChartCard>
          <ChartHeader>
            <ChartTitle tooltip="Events aggregated by hour">Bar Chart</ChartTitle>
            <ChartActions
              actions={[{ label: "View details", icon: <ExternalLink />, href: "#" }]}
            />
          </ChartHeader>
          <ChartContent>
            <ChartBar data={data} dataKey="value" showGrid showYAxis YAxisProps={{ width: 36 }} />
          </ChartContent>
        </ChartCard>
      </Chart>
    </div>
  )
}

function LineChartPreview() {
  const [isLoading, setIsLoading] = useState(true)
  const [data] = useState(() => generateSeries(48, 800, 400))
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="w-full">
      <Chart isLoading={isLoading}>
        <ChartCard>
          <ChartHeader>
            <ChartTitle>Line Chart</ChartTitle>
            <ChartActions
              actions={[{ label: "View details", icon: <ExternalLink />, href: "#" }]}
            />
          </ChartHeader>
          <ChartContent>
            <ChartLine data={data} dataKey="value" showGrid showYAxis YAxisProps={{ width: 36 }} />
          </ChartContent>
        </ChartCard>
      </Chart>
    </div>
  )
}

function MultiLinePreview() {
  const [isLoading, setIsLoading] = useState(true)
  const [data] = useState(() => {
    const series = generateSeries(48, 400, 300)
    const series2 = generateSeries(48, 200, 200)
    return series.map((d, i) => ({ ...d, value2: series2[i].value }))
  })
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="w-full">
      <Chart isLoading={isLoading}>
        <ChartCard>
          <ChartHeader>
            <ChartTitle tooltip="Two series comparison">Multi-line Chart</ChartTitle>
          </ChartHeader>
          <ChartContent>
            <ChartLine
              data={data}
              dataKey="value"
              dataKeys={["value", "value2"]}
              showGrid
              showYAxis
              YAxisProps={{ width: 36 }}
              config={{
                value: { label: "Series A", color: "hsl(var(--brand-default))" },
                value2: { label: "Series B", color: "hsl(var(--chart-3))" },
              }}
            />
          </ChartContent>
        </ChartCard>
      </Chart>
    </div>
  )
}

function LogsChartPreview() {
  const [isLoading, setIsLoading] = useState(true)
  const [logs] = useState(() => generateLogsData())
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(t)
  }, [])
  const totals = logs.reduce(
    (acc, d) => ({
      ok: acc.ok + (d.ok_count ?? 0),
      warn: acc.warn + (d.warning_count ?? 0),
      err: acc.err + (d.error_count ?? 0),
    }),
    { ok: 0, warn: 0, err: 0 },
  )
  return (
    <div className="w-full">
      <Chart isLoading={isLoading}>
        <ChartCard>
          <ChartHeader>
            <ChartMetric
              label="Total Requests"
              value={(totals.ok + totals.warn + totals.err).toLocaleString("en-US")}
              tooltip="Total request volume in window"
            />
            <div className="flex items-center gap-8">
              <ChartMetric label="Warn" value={totals.warn.toLocaleString("en-US")} status="warning" align="end" />
              <ChartMetric label="Err" value={totals.err.toLocaleString("en-US")} status="negative" align="end" />
            </div>
          </ChartHeader>
          <ChartContent
            isEmpty={!logs.length}
            emptyState={
              <ChartEmptyState
                title="No events in this window"
                description="Logs will appear here once traffic is captured."
                icon={<BarChart2 className="h-5 w-5" />}
              />
            }
            loadingState={<ChartLoadingState />}
          >
            <div className="h-40">
              <LogsBarChart data={logs} isFullHeight />
            </div>
          </ChartContent>
        </ChartCard>
      </Chart>
    </div>
  )
}

function EmptyStatePreview() {
  return (
    <div className="w-full">
      <Chart>
        <ChartCard>
          <ChartHeader>
            <ChartTitle>No data</ChartTitle>
          </ChartHeader>
          <ChartContent
            isEmpty
            emptyState={
              <ChartEmptyState
                title="No events in this window"
                description="Data will appear here once events are captured."
                icon={<BarChart2 className="h-5 w-5" />}
              />
            }
          >
            {null}
          </ChartContent>
        </ChartCard>
      </Chart>
    </div>
  )
}

// ── page ─────────────────────────────────────────────────────────────────────

export default function ChartsPattern() {
  return (
    <>
      <PageHeader
        title="Charts"
        description="Charts live in components/ui-patterns/chart and wrap recharts in a compound-component API. Subcomponents share state through chart context so the loading state, empty state, and series stay in sync."
      />

      <H2>Bar chart</H2>
      <P>
        Use <InlineCode>ChartBar</InlineCode> for discrete bucketed values like event counts or
        request throughput. Pass <InlineCode>showGrid</InlineCode> and{" "}
        <InlineCode>showYAxis</InlineCode> for a more detailed view.
      </P>
      <ComponentPreview
        previewClassName="p-6 block"
        preview={<BarChartPreview />}
        code={`import { Chart, ChartCard, ChartHeader, ChartTitle, ChartActions, ChartContent, ChartBar } from "@/components/ui-patterns/chart"

<Chart>
  <ChartCard>
    <ChartHeader>
      <ChartTitle>Bar Chart</ChartTitle>
      <ChartActions actions={[{ label: "View details", icon: <ExternalLink />, href: "#" }]} />
    </ChartHeader>
    <ChartContent>
      <ChartBar data={data} dataKey="value" showGrid showYAxis />
    </ChartContent>
  </ChartCard>
</Chart>`}
      />

      <H2>Line chart</H2>
      <P>
        Use <InlineCode>ChartLine</InlineCode> for continuous metrics like latency, memory, or
        active users over time.
      </P>
      <ComponentPreview
        previewClassName="p-6 block"
        preview={<LineChartPreview />}
        code={`import { Chart, ChartCard, ChartHeader, ChartTitle, ChartContent, ChartLine } from "@/components/ui-patterns/chart"

<Chart>
  <ChartCard>
    <ChartHeader>
      <ChartTitle>Line Chart</ChartTitle>
    </ChartHeader>
    <ChartContent>
      <ChartLine data={data} dataKey="value" showGrid showYAxis />
    </ChartContent>
  </ChartCard>
</Chart>`}
      />

      <H2>Multi-line chart</H2>
      <P>
        Pass <InlineCode>dataKeys</InlineCode> (array) alongside a <InlineCode>config</InlineCode>{" "}
        map to render multiple series with distinct colors and tooltip labels.
      </P>
      <ComponentPreview
        previewClassName="p-6 block"
        preview={<MultiLinePreview />}
        code={`<ChartLine
  data={data}
  dataKey="value"
  dataKeys={["value", "value2"]}
  showGrid
  showYAxis
  config={{
    value:  { label: "Series A", color: "hsl(var(--brand-default))" },
    value2: { label: "Series B", color: "hsl(var(--chart-3))" },
  }}
/>`}
      />

      <H2>Logs bar chart</H2>
      <P>
        <InlineCode>LogsBarChart</InlineCode> is a stacked variant pre-configured for{" "}
        <InlineCode>ok_count</InlineCode>, <InlineCode>warning_count</InlineCode>, and{" "}
        <InlineCode>error_count</InlineCode> buckets. Pair it with{" "}
        <InlineCode>ChartMetric</InlineCode> in the header to surface totals at a glance.
      </P>
      <ComponentPreview
        previewClassName="p-6 block"
        preview={<LogsChartPreview />}
        code={`import { Chart, ChartCard, ChartHeader, ChartMetric, ChartContent, LogsBarChart } from "@/components/ui-patterns/chart"

<Chart>
  <ChartCard>
    <ChartHeader>
      <ChartMetric label="Total Requests" value={total} />
      <div className="flex items-center gap-8">
        <ChartMetric label="Warn" value={warns} status="warning" align="end" />
        <ChartMetric label="Err"  value={errs}  status="negative" align="end" />
      </div>
    </ChartHeader>
    <ChartContent>
      <div className="h-40">
        <LogsBarChart data={logs} isFullHeight />
      </div>
    </ChartContent>
  </ChartCard>
</Chart>`}
      />

      <H2>Loading and empty states</H2>
      <P>
        Wrap any chart in <InlineCode>{"<Chart isLoading>"}</InlineCode> to show a spinner. Pass{" "}
        <InlineCode>isEmpty</InlineCode> and <InlineCode>emptyState</InlineCode> to{" "}
        <InlineCode>ChartContent</InlineCode> to display a placeholder when there are no data
        points. Both states keep the card height stable and prevent layout shift.
      </P>
      <ComponentPreview
        previewClassName="p-6 block"
        preview={<EmptyStatePreview />}
        code={`<Chart>
  <ChartCard>
    <ChartHeader>
      <ChartTitle>No data</ChartTitle>
    </ChartHeader>
    <ChartContent
      isEmpty
      emptyState={
        <ChartEmptyState
          title="No events in this window"
          description="Data will appear here once events are captured."
          icon={<BarChart2 className="h-5 w-5" />}
        />
      }
    >
      {null}
    </ChartContent>
  </ChartCard>
</Chart>`}
      />

      <H2>Anatomy</H2>
      <H3>Chart (context root)</H3>
      <P>
        The <InlineCode>Chart</InlineCode> component provides <InlineCode>isLoading</InlineCode>{" "}
        and <InlineCode>isDisabled</InlineCode> state to all descendants via context.
      </P>
      <H3>ChartCard / ChartHeader / ChartTitle</H3>
      <P>
        Structural wrappers. <InlineCode>ChartCard</InlineCode> renders the bordered card surface.{" "}
        <InlineCode>ChartHeader</InlineCode> lays out the title and actions row.{" "}
        <InlineCode>ChartTitle</InlineCode> accepts an optional <InlineCode>tooltip</InlineCode>{" "}
        prop that renders a help icon.
      </P>
      <H3>ChartMetric</H3>
      <P>
        Displays a labelled value with an optional diff and semantic status (
        <InlineCode>positive</InlineCode>, <InlineCode>negative</InlineCode>,{" "}
        <InlineCode>warning</InlineCode>, <InlineCode>default</InlineCode>). Use in{" "}
        <InlineCode>ChartHeader</InlineCode> to surface KPIs above the chart.
      </P>
      <H3>ChartContent</H3>
      <P>
        The padded area below the header. Handles the <InlineCode>isLoading</InlineCode> →{" "}
        <InlineCode>loadingState</InlineCode> and <InlineCode>isEmpty</InlineCode> →{" "}
        <InlineCode>emptyState</InlineCode> fallbacks automatically.
      </P>
    </>
  )
}

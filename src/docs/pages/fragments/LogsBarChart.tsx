import PageHeader from "../../components/PageHeader"
import { H2, P } from "../../components/Section"
import CodeBlock from "../../components/CodeBlock"

export default function LogsBarChartDoc() {
  return (
    <>
      <PageHeader
        title="Logs bar chart"
        description="A compact bar chart for visualizing event volume over time. Designed for log explorers — emphasizes density and scrubbability over individual data point fidelity."
      />
      <H2>Usage</H2>
      <P>Pass a series of bucketed counts. Hover reveals exact values per bucket.</P>
      <CodeBlock
        code={`import { LogsBarChart } from "@/components/ui-patterns/chart"

<LogsBarChart data={buckets} />`}
      />
    </>
  )
}

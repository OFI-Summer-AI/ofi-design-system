import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { H2 } from "../../components/Section"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MetricCardDoc() {
  return (
    <>
      <PageHeader
        title="Metric card"
        description="A compact stat tile combining a title, the current value, and a delta against a previous period. Use on dashboards where many metrics live side by side."
      />
      <H2>Example</H2>
      <ComponentPreview
        preview={
          <Card className="w-full max-w-xs">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-foreground-muted">
                Active users
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="text-3xl font-semibold tracking-tight tabular-nums">
                12,488
              </div>
              <Badge variant="success">+8.2%</Badge>
            </CardContent>
          </Card>
        }
        code={`<Card>
  <CardHeader>
    <CardTitle>Active users</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="text-3xl font-semibold tabular-nums">12,488</div>
    <Badge variant="success">+8.2%</Badge>
  </CardContent>
</Card>`}
      />
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { StatusCode } from "@/components/ui-patterns/status-code"

export default function StatusCodeDoc() {
  return (
    <>
      <PageHeader
        title="Status Code"
        description="A monospace HTTP status badge with semantic tone. 2xx is brand, 3xx is blue, 4xx is amber, 5xx is destructive — so log tables and request inspectors stay scannable."
      />

      <H2>Tones</H2>
      <ComponentPreview
        preview={
          <div className="flex flex-wrap items-center gap-2">
            <StatusCode code={200} />
            <StatusCode code={201} />
            <StatusCode code={301} />
            <StatusCode code={400} />
            <StatusCode code={404} />
            <StatusCode code={500} />
            <StatusCode code={503} />
          </div>
        }
        code={`<StatusCode code={200} />
<StatusCode code={301} />
<StatusCode code={404} />
<StatusCode code={500} />`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "code", type: "number", description: "Required. HTTP status code. Tone is derived from the range." },
          { name: "className", type: "string" },
        ]}
      />
    </>
  )
}

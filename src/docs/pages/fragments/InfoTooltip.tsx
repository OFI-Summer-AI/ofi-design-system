import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { InfoTooltip } from "@/components/ui-patterns/info-tooltip"

export default function InfoTooltipDoc() {
  return (
    <>
      <PageHeader
        title="Info Tooltip"
        description='A small "i" icon that reveals a definition or hint on hover. Use it for inline glossary terms next to labels, table headers, or metric names — never for critical information.'
      />

      <H2>Inline with a label</H2>
      <ComponentPreview
        preview={
          <div className="flex items-center gap-2 text-sm">
            <span>Latency p95</span>
            <InfoTooltip>
              The 95th percentile request duration in the selected window.
            </InfoTooltip>
          </div>
        }
        code={`<span>Latency p95</span>
<InfoTooltip>
  The 95th percentile request duration in the selected window.
</InfoTooltip>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "children", type: "ReactNode", description: "Required. The hover content." },
          { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"top"' },
          { name: "className", type: "string", description: "Forwarded to the trigger button." },
        ]}
      />
    </>
  )
}

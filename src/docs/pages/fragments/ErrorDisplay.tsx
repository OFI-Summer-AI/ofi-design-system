import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { ErrorDisplay } from "@/components/ui-patterns/error-display"
import { Button } from "@/components/ui/button"

export default function ErrorDisplayDoc() {
  return (
    <>
      <PageHeader
        title="Error Display"
        description="An inline error block for failed loads or partial outages. Reach for this when an entire section can't render — for transient toasts use Sonner; for confirmations use Admonition."
      />

      <H2>Default</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-lg">
            <ErrorDisplay message="We couldn't reach the agent runtime. Try again in a moment." />
          </div>
        }
        code={`<ErrorDisplay message="We couldn't reach the agent runtime. Try again in a moment." />`}
      />

      <H2>With retry action</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-lg">
            <ErrorDisplay
              title="Failed to load metrics"
              message="The dashboard query timed out after 30s."
              actions={<Button type="outline" size="small">Retry</Button>}
            />
          </div>
        }
        code={`<ErrorDisplay
  title="Failed to load metrics"
  message="The dashboard query timed out after 30s."
  actions={<Button type="outline" size="small">Retry</Button>}
/>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "title", type: "string", default: '"Something went wrong"' },
          { name: "message", type: "ReactNode", description: "Required. Description of what failed." },
          { name: "actions", type: "ReactNode", description: "Optional retry / dismiss buttons." },
        ]}
      />
    </>
  )
}

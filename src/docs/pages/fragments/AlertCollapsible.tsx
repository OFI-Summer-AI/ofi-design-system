import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { AlertCollapsible } from "@/components/ui-patterns/alert-collapsible"

export default function AlertCollapsibleDoc() {
  return (
    <>
      <PageHeader
        title="Alert Collapsible"
        description="An alert-styled block with a collapsible content section, toggled by an icon button."
      />

      <ComponentPreview
        preview={
          <div className="w-full max-w-md">
            <AlertCollapsible trigger="Need help?" defaultOpen>
              <p className="text-sm text-foreground-light">
                Try a different browser or disable extensions that block network requests.
              </p>
            </AlertCollapsible>
          </div>
        }
        code={`<AlertCollapsible trigger="Need help?">
  <p className="text-sm text-foreground-light">
    Try a different browser or disable extensions that block network requests.
  </p>
</AlertCollapsible>`}
      />

      <section className="mt-10 space-y-6">
        <h2 className="text-lg font-semibold text-foreground">Examples</h2>

        <ComponentPreview
          preview={
            <div className="w-full max-w-md">
              <AlertCollapsible trigger="Details" defaultOpen>
                <p className="text-sm text-foreground-light">
                  This section is expanded by default.
                </p>
              </AlertCollapsible>
            </div>
          }
          code={`<AlertCollapsible trigger="Details" defaultOpen>
  <p>This section is expanded by default.</p>
</AlertCollapsible>`}
        />

        <ComponentPreview
          preview={
            <div className="w-full max-w-md">
              <AlertCollapsible trigger="Warning" variant="warning">
                <p className="text-sm text-foreground-light">
                  Something needs attention.
                </p>
              </AlertCollapsible>
            </div>
          }
          code={`<AlertCollapsible trigger="Warning" variant="warning">
  <p>Something needs attention.</p>
</AlertCollapsible>`}
        />
      </section>
    </>
  )
}

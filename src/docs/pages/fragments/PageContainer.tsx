import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { PageContainer } from "@/components/ui-patterns/page-layout"

export default function PageContainerDoc() {
  return (
    <>
      <PageHeader
        title="Page Container"
        description="The outermost wrapper for any application page. Centers content, applies the standard 6xl max-width, and adds consistent horizontal/vertical padding."
      />

      <H2>Example</H2>
      <ComponentPreview
        preview={
          <div className="w-full rounded-md border border-dashed border-border bg-muted/20">
            <PageContainer>
              <div className="rounded-md border border-border bg-card p-6 text-sm">
                Page content lives here. The container caps width at <code>max-w-6xl</code> and pads it.
              </div>
            </PageContainer>
          </div>
        }
        code={`<PageContainer>
  <PageHeader title="Agents" description="..." />
  <PageSection>
    {/* page content */}
  </PageSection>
</PageContainer>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "...HTMLAttributes", type: "div", description: "All standard div props (className, style, etc.) are forwarded." },
        ]}
      />
    </>
  )
}

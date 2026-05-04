import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { PageSection } from "@/components/ui-patterns/page-layout"

export default function PageSectionDoc() {
  return (
    <>
      <PageHeader
        title="Page Section"
        description="A titled subsection inside a page. Provides consistent spacing between groups of content (cards, tables, forms) without forcing a hard divider."
      />

      <H2>Example</H2>
      <ComponentPreview
        preview={
          <div className="w-full rounded-md border border-border bg-card p-6">
            <PageSection
              title="Recent runs"
              description="The most recent agent executions across all projects."
            >
              <div className="rounded-md border border-dashed border-border p-6 text-sm text-foreground-muted">
                Section content (table, list, chart…)
              </div>
            </PageSection>
          </div>
        }
        code={`<PageSection
  title="Recent runs"
  description="The most recent agent executions across all projects."
>
  <RunsTable />
</PageSection>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "title", type: "ReactNode", description: "Optional section heading." },
          { name: "description", type: "ReactNode", description: "Optional supporting copy under the heading." },
          { name: "children", type: "ReactNode", description: "Section content." },
          { name: "...HTMLAttributes", type: "div", description: "Standard div props are forwarded." },
        ]}
      />
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { Toc } from "@/components/ui-patterns/toc"

export default function TocDoc() {
  return (
    <>
      <PageHeader
        title="Table of Contents"
        description="A right-rail table of contents for long-form pages: docs, runbooks, change logs. Pair it with a scroll spy hook to keep activeId in sync as the user scrolls."
      />

      <H2>Example</H2>
      <ComponentPreview
        preview={
          <div className="rounded-md border border-border p-4">
            <Toc
              activeId="forms"
              items={[
                { id: "overview", label: "Overview", level: 2 },
                { id: "installation", label: "Installation", level: 2 },
                { id: "forms", label: "Forms", level: 2 },
                { id: "validation", label: "Validation", level: 3 },
                { id: "submission", label: "Submission", level: 3 },
                { id: "charts", label: "Charts", level: 2 },
              ]}
            />
          </div>
        }
        code={`<Toc
  activeId={activeHeading}
  items={[
    { id: "overview", label: "Overview", level: 2 },
    { id: "forms", label: "Forms", level: 2 },
    { id: "validation", label: "Validation", level: 3 },
  ]}
/>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "items", type: "TocItem[]", description: "Required. { id, label, level? }. Levels 2 and 3 are visually distinguished." },
          { name: "activeId", type: "string", description: "Currently highlighted heading. Drive this from a scroll-spy effect." },
          { name: "className", type: "string" },
        ]}
      />
    </>
  )
}

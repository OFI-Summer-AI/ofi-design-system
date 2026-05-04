import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2, P } from "../../components/Section"
import { Mermaid } from "@/components/ui/mermaid"

export default function MermaidDoc() {
  return (
    <>
      <PageHeader
        title="Mermaid"
        description="A frame for Mermaid diagrams used in agent runbooks, architecture diagrams, and decision trees."
      />
      <P>
        The shipped component renders the source as a code block. Wire a real renderer by lazy-loading <code>mermaid</code> inside <code>useEffect</code> and replacing the inner <code>pre</code> with the rendered SVG.
      </P>
      <H2>Example</H2>
      <ComponentPreview
        preview={
          <div className="w-full">
            <Mermaid
              chart={`graph LR
  A[Invoice received] --> B{Vendor known?}
  B -- yes --> C[Auto-classify]
  B -- no --> D[Queue for review]
  C --> E[Post to ledger]`}
            />
          </div>
        }
        code={`<Mermaid chart={\`graph LR
  A[Invoice received] --> B{Vendor known?}
  B -- yes --> C[Auto-classify]
  B -- no --> D[Queue for review]
\`} />`}
      />
      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "chart", type: "string", description: "Required. Raw Mermaid source." },
          { name: "...HTMLDiv", type: "div", description: "Standard div props are forwarded to the wrapper." },
        ]}
      />
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { Admonition } from "@/components/ui-patterns/admonition"
import { Button } from "@/components/ui/button"

export default function AdmonitionDoc() {
  return (
    <>
      <PageHeader
        title="Admonition"
        description="A callout that draws attention to information, warnings, or destructive consequences. Use sparingly — when every paragraph is highlighted, none of them are."
      />
      <H2>Variants</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-md space-y-3">
            <Admonition title="Heads up" description="This is a default informational admonition." />
            <Admonition type="warning" title="Take care" description="This action will rotate the API key for all team members." />
            <Admonition type="destructive" title="Cannot undo" description="Deleting this project removes every related resource permanently." />
          </div>
        }
        code={`<Admonition title="Heads up" description="..." />
<Admonition type="warning" title="Take care" description="..." />
<Admonition type="destructive" title="Cannot undo" description="..." />`}
      />

      <H2>With actions</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-md">
            <Admonition
              type="warning"
              title="Billing alert"
              description="You're approaching your monthly request limit."
              actions={<Button size="small" type="outline">Upgrade plan</Button>}
            />
          </div>
        }
        code={`<Admonition
  type="warning"
  title="Billing alert"
  description="You're approaching your monthly request limit."
  actions={<Button size="small" type="outline">Upgrade plan</Button>}
/>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "type", type: '"default" | "warning" | "destructive"', default: '"default"' },
          { name: "layout", type: '"horizontal" | "vertical" | "responsive"', default: '"vertical"', description: "responsive switches based on container width." },
          { name: "title", type: "string", description: "Required. Short heading." },
          { name: "description", type: "ReactNode", description: "Body content." },
          { name: "actions", type: "ReactNode", description: "Optional action slot rendered next to or below the body." },
        ]}
      />
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import ImportBlock from "../../components/ImportBlock"
import { H2 } from "../../components/Section"
import { Badge } from "@/components/ui/badge"

export default function BadgeDoc() {
  return (
    <>
      <PageHeader
        title="Badge"
        description="A compact label used to indicate status, count, or category. Badges should be readable on their own — pair them with an icon when the variant alone could be ambiguous."
      />
      <ImportBlock imports={["Badge"]} />

      <H2>Variants</H2>
      <ComponentPreview
        preview={
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        }
        code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          {
            name: "variant",
            type: '"default" | "secondary" | "success" | "warning" | "destructive" | "outline"',
            default: '"default"',
            description: "Color treatment.",
          },
        ]}
      />
    </>
  )
}

import { Plus, Trash2 } from "lucide-react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2, P, InlineCode } from "../../components/Section"
import { Button } from "@/components/ui/button"

export default function ButtonDoc() {
  return (
    <>
      <PageHeader
        title="Button"
        description="Buttons trigger actions. The Button component composes three independent axes: type (visual treatment), size, and block (full-width)."
      />

      <H2>Variants</H2>
      <P>
        The <InlineCode>type</InlineCode> prop selects the visual treatment. Use{" "}
        <InlineCode>primary</InlineCode> for the principal action on a surface; reserve
        it for one button per view.
      </P>
      <ComponentPreview
        preview={
          <div className="flex flex-wrap items-center gap-2">
            <Button type="primary">Primary</Button>
            <Button type="default">Default</Button>
            <Button type="secondary">Secondary</Button>
            <Button type="outline">Outline</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="link">Link</Button>
            <Button type="danger">Danger</Button>
            <Button type="warning">Warning</Button>
          </div>
        }
        code={`<Button type="primary">Primary</Button>
<Button type="default">Default</Button>
<Button type="secondary">Secondary</Button>
<Button type="outline">Outline</Button>
<Button type="dashed">Dashed</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>
<Button type="danger">Danger</Button>
<Button type="warning">Warning</Button>`}
      />

      <H2>Sizes</H2>
      <ComponentPreview
        preview={
          <div className="flex flex-wrap items-center gap-2">
            <Button size="tiny">Tiny</Button>
            <Button size="small">Small</Button>
            <Button size="default">Default</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
            <Button size="huge">Huge</Button>
          </div>
        }
        code={`<Button size="tiny" />
<Button size="small" />
<Button size="default" />
<Button size="medium" />
<Button size="large" />
<Button size="huge" />`}
      />

      <H2>With icons</H2>
      <ComponentPreview
        preview={
          <div className="flex flex-wrap items-center gap-2">
            <Button icon={<Plus />}>Create</Button>
            <Button type="danger" icon={<Trash2 />}>Delete</Button>
            <Button type="outline" loading>Saving</Button>
          </div>
        }
        code={`<Button icon={<Plus />}>Create</Button>
<Button type="danger" icon={<Trash2 />}>Delete</Button>
<Button type="outline" loading>Saving</Button>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "type", type: '"primary" | "default" | "secondary" | "outline" | "dashed" | "link" | "text" | "danger" | "warning"', default: '"primary"', description: "Visual treatment." },
          { name: "size", type: '"tiny" | "small" | "default" | "medium" | "large" | "huge"', default: '"default"', description: "Height and padding." },
          { name: "block", type: "boolean", default: "false", description: "Stretches to fill the parent's width." },
          { name: "icon", type: "ReactNode", description: "Leading icon. Auto-sized to 16px." },
          { name: "iconRight", type: "ReactNode", description: "Trailing icon." },
          { name: "loading", type: "boolean", default: "false", description: "Replaces the leading icon with a spinner and disables the button." },
          { name: "loadingCentered", type: "boolean", default: "false", description: "Overlays a centered spinner and dims content." },
          { name: "asChild", type: "boolean", default: "false", description: "Renders the variant styling onto a child element via Radix Slot." },
          { name: "htmlType", type: '"button" | "submit" | "reset"', default: '"button"', description: "Proxied to the underlying <button type>. Renamed because type is a variant." },
        ]}
      />
    </>
  )
}

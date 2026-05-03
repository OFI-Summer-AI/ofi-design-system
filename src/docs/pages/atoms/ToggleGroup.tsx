import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleGroupDoc() {
  return (
    <>
      <PageHeader
        title="Toggle Group"
        description="A set of two-state buttons where one or many can be pressed. Use single mode for mutually exclusive choices (alignment) and multiple for independent flags (text formatting)."
      />

      <H2>Multiple selection</H2>
      <ComponentPreview
        preview={
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="bold" aria-label="Bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        }
        code={`<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold"><Bold /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><Italic /></ToggleGroupItem>
  <ToggleGroupItem value="underline"><Underline /></ToggleGroupItem>
</ToggleGroup>`}
      />

      <H2>Single selection</H2>
      <ComponentPreview
        preview={
          <ToggleGroup type="single" defaultValue="left">
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        }
        code={`<ToggleGroup type="single" defaultValue="left">
  <ToggleGroupItem value="left"><AlignLeft /></ToggleGroupItem>
  <ToggleGroupItem value="center"><AlignCenter /></ToggleGroupItem>
  <ToggleGroupItem value="right"><AlignRight /></ToggleGroupItem>
</ToggleGroup>`}
      />

      <H2>Outline variant</H2>
      <ComponentPreview
        preview={
          <ToggleGroup type="single" variant="outline" defaultValue="bold">
            <ToggleGroupItem value="bold" aria-label="Bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        }
        code={`<ToggleGroup type="single" variant="outline" defaultValue="bold">
  <ToggleGroupItem value="bold"><Bold /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><Italic /></ToggleGroupItem>
  <ToggleGroupItem value="underline"><Underline /></ToggleGroupItem>
</ToggleGroup>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "type", type: '"single" | "multiple"', description: "Required. Whether one or many items can be pressed." },
          { name: "variant", type: '"default" | "outline"', default: '"default"' },
          { name: "size", type: '"default" | "sm" | "lg"', default: '"default"' },
          { name: "value / defaultValue", type: "string | string[]", description: "Controlled / uncontrolled state of pressed items." },
          { name: "onValueChange", type: "(value) => void", description: "Fires when the pressed set changes." },
          { name: "disabled", type: "boolean", description: "Disables every item in the group." },
        ]}
      />
    </>
  )
}

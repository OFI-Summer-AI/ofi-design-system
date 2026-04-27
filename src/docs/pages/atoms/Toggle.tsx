import { Bold, Italic, Underline } from "lucide-react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleDoc() {
  return (
    <>
      <PageHeader
        title="Toggle"
        description="A two-state button that visually represents an on/off state. Pair with a Toggle Group when the user picks one of several styling options (e.g. text formatting)."
      />
      <ComponentPreview
        preview={
          <div className="flex items-center gap-4">
            <Toggle aria-label="Bold">
              <Bold className="h-4 w-4" />
            </Toggle>
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
          </div>
        }
        code={`<Toggle aria-label="Bold"><Bold /></Toggle>

<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold"><Bold /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><Italic /></ToggleGroupItem>
</ToggleGroup>`}
      />
    </>
  )
}

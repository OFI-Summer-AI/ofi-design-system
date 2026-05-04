import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import ImportBlock from "../../components/ImportBlock"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxDoc() {
  return (
    <>
      <PageHeader
        title="Checkbox"
        description="A binary control built on Radix Checkbox. Supports indeterminate state for tri-state lists."
      />
      <ImportBlock imports={["Checkbox", "Label"]} />
      <ComponentPreview
        preview={
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">I agree to the terms</Label>
          </div>
        }
        code={`<Checkbox id="terms" />
<Label htmlFor="terms">I agree to the terms</Label>`}
      />
    </>
  )
}

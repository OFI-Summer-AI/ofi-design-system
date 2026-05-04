import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import ImportBlock from "../../components/ImportBlock"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function LabelDoc() {
  return (
    <>
      <PageHeader
        title="Label"
        description="A label for form controls. Built on Radix Label so clicking the label focuses the associated control."
      />
      <ImportBlock imports={["Label", "Input"]} />
      <ComponentPreview
        preview={
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" placeholder="Ada Lovelace" />
          </div>
        }
        code={`<Label htmlFor="name">Full name</Label>
<Input id="name" placeholder="Ada Lovelace" />`}
      />
    </>
  )
}

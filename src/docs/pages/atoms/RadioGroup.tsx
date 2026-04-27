import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function RadioGroupDoc() {
  return (
    <>
      <PageHeader
        title="Radio group"
        description="Mutually exclusive choices. Use a radio group when there are 2–6 options and the user must pick exactly one. Past 6 options, prefer a Select."
      />
      <ComponentPreview
        preview={
          <RadioGroup defaultValue="monthly" className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="monthly" id="monthly" />
              <Label htmlFor="monthly">Monthly</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="annual" id="annual" />
              <Label htmlFor="annual">Annual</Label>
            </div>
          </RadioGroup>
        }
        code={`<RadioGroup defaultValue="monthly">
  <RadioGroupItem value="monthly" id="monthly" />
  <Label htmlFor="monthly">Monthly</Label>
  <RadioGroupItem value="annual" id="annual" />
  <Label htmlFor="annual">Annual</Label>
</RadioGroup>`}
      />
    </>
  )
}

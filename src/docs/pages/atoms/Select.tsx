import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectDoc() {
  return (
    <>
      <PageHeader
        title="Select"
        description="A single-select dropdown built on Radix Select. Use when there are 6+ mutually exclusive options or when the options should be hidden until needed."
      />
      <ComponentPreview
        preview={
          <Select>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Pick a region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us-east">US East</SelectItem>
              <SelectItem value="us-west">US West</SelectItem>
              <SelectItem value="eu-central">EU Central</SelectItem>
              <SelectItem value="ap-southeast">AP Southeast</SelectItem>
            </SelectContent>
          </Select>
        }
        code={`<Select>
  <SelectTrigger className="w-[220px]">
    <SelectValue placeholder="Pick a region" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="us-east">US East</SelectItem>
    <SelectItem value="us-west">US West</SelectItem>
    <SelectItem value="eu-central">EU Central</SelectItem>
    <SelectItem value="ap-southeast">AP Southeast</SelectItem>
  </SelectContent>
</Select>`}
      />
    </>
  )
}

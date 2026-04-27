import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { Slider } from "@/components/ui/slider"

export default function SliderDoc() {
  return (
    <>
      <PageHeader
        title="Slider"
        description="A range input for picking a value (or pair of values) from a continuous range. Best when relative position matters more than the exact number."
      />
      <ComponentPreview
        preview={
          <div className="w-full max-w-sm space-y-6">
            <Slider defaultValue={[33]} max={100} step={1} />
            <Slider defaultValue={[20, 70]} max={100} step={1} />
          </div>
        }
        code={`<Slider defaultValue={[33]} max={100} step={1} />
<Slider defaultValue={[20, 70]} max={100} step={1} />`}
      />
    </>
  )
}

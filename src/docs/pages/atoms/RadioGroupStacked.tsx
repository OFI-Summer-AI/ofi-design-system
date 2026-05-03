import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import {
  RadioGroupStacked,
  RadioGroupStackedItem,
} from "@/components/ui/radio-group-stacked"

export default function RadioGroupStackedDoc() {
  return (
    <>
      <PageHeader
        title="Radio Group Stacked"
        description="Vertical, full-width radio options with descriptions — perfect for plan selection, billing intervals, and any short list of mutually exclusive choices that benefits from explanatory copy."
      />
      <H2>Example</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-md">
            <RadioGroupStacked defaultValue="standard">
              <RadioGroupStackedItem
                value="starter"
                label="Starter"
                description="Up to 3 agents and 1k runs per month."
              />
              <RadioGroupStackedItem
                value="standard"
                label="Standard"
                description="Up to 25 agents and 50k runs per month."
              />
              <RadioGroupStackedItem
                value="enterprise"
                label="Enterprise"
                description="Unlimited agents, dedicated support, custom SLAs."
              />
            </RadioGroupStacked>
          </div>
        }
        code={`<RadioGroupStacked defaultValue="standard">
  <RadioGroupStackedItem
    value="starter"
    label="Starter"
    description="Up to 3 agents and 1k runs per month."
  />
  <RadioGroupStackedItem
    value="standard"
    label="Standard"
    description="Up to 25 agents and 50k runs per month."
  />
</RadioGroupStacked>`}
      />
      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "RadioGroupStacked", type: "RadioGroupRoot", description: "Forwards every Radix RadioGroup prop (value, defaultValue, onValueChange, etc.)." },
          { name: "RadioGroupStackedItem.value", type: "string", description: "Required. Item value." },
          { name: "RadioGroupStackedItem.label", type: "ReactNode", description: "Bold heading copy." },
          { name: "RadioGroupStackedItem.description", type: "ReactNode", description: "Optional secondary copy." },
        ]}
      />
    </>
  )
}

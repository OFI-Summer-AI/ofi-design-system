import { useState } from "react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { H2, P } from "../../components/Section"
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui-patterns/multi-select"

export default function MultiSelectDoc() {
  function Demo() {
    const [values, setValues] = useState<string[]>(["us-east"])
    return (
      <div className="w-full max-w-sm">
        <MultiSelector values={values} onValuesChange={setValues}>
          <MultiSelectorTrigger label="Select regions" />
          <MultiSelectorContent>
            <MultiSelectorList>
              <MultiSelectorItem value="us-east">US East</MultiSelectorItem>
              <MultiSelectorItem value="us-west">US West</MultiSelectorItem>
              <MultiSelectorItem value="eu-central">EU Central</MultiSelectorItem>
              <MultiSelectorItem value="ap-southeast">AP Southeast</MultiSelectorItem>
            </MultiSelectorList>
          </MultiSelectorContent>
        </MultiSelector>
      </div>
    )
  }
  return (
    <>
      <PageHeader
        title="Multi select"
        description="A multi-value selector with chip-style display of chosen items. Built from a Popover and a Command-style list."
      />
      <H2>Usage</H2>
      <P>State is controlled via values + onValuesChange.</P>
      <ComponentPreview
        preview={<Demo />}
        code={`const [values, setValues] = useState<string[]>([])

<MultiSelector values={values} onValuesChange={setValues}>
  <MultiSelectorTrigger placeholder="Select regions" />
  <MultiSelectorContent>
    <MultiSelectorList>
      <MultiSelectorItem value="us-east">US East</MultiSelectorItem>
      <MultiSelectorItem value="us-west">US West</MultiSelectorItem>
    </MultiSelectorList>
  </MultiSelectorContent>
</MultiSelector>`}
      />
    </>
  )
}

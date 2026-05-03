import { useState } from "react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import ImportBlock from "../../components/ImportBlock"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

export default function CollapsibleDoc() {
  function Demo() {
    const [open, setOpen] = useState(false)
    return (
      <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-sm space-y-2">
        <CollapsibleTrigger asChild>
          <Button type="outline">{open ? "Hide details" : "Show details"}</Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="rounded-md border border-border bg-card p-3 text-sm text-foreground-muted">
          Hidden content shown only when expanded.
        </CollapsibleContent>
      </Collapsible>
    )
  }
  return (
    <>
      <PageHeader
        title="Collapsible"
        description="An expand/collapse primitive without the visual chrome of an Accordion. Use when you need progressive disclosure of a single block of content."
      />
      <ImportBlock imports={["Collapsible", "CollapsibleContent", "CollapsibleTrigger", "Button"]} />
      <ComponentPreview
        preview={<Demo />}
        code={`<Collapsible>
  <CollapsibleTrigger asChild><Button>Toggle</Button></CollapsibleTrigger>
  <CollapsibleContent>...</CollapsibleContent>
</Collapsible>`}
      />
    </>
  )
}

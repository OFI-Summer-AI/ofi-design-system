import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export default function PopoverDoc() {
  return (
    <>
      <PageHeader
        title="Popover"
        description="An inline overlay anchored to a trigger. Use a Popover for non-modal pickers (date, color, mention) — for modal interactions, use a Dialog or Sheet."
      />
      <ComponentPreview
        preview={
          <Popover>
            <PopoverTrigger asChild>
              <Button type="outline">Open</Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 text-sm">
              <div className="font-medium">Quick note</div>
              <p className="mt-1 text-foreground-muted">
                Popovers dismiss on outside click and Escape.
              </p>
            </PopoverContent>
          </Popover>
        }
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button type="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent>...</PopoverContent>
</Popover>`}
      />
    </>
  )
}

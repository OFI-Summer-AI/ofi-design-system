import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ScrollAreaDoc() {
  return (
    <>
      <PageHeader
        title="Scroll area"
        description="A scroll container with custom-styled scrollbars that match the system's aesthetic. Use when you need consistent scrollbar treatment across browsers."
      />
      <ComponentPreview
        preview={
          <ScrollArea className="h-40 w-72 rounded-md border border-border p-3 text-sm">
            <div className="space-y-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="text-foreground-muted">
                  Item {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea>
        }
        code={`<ScrollArea className="h-40 w-72 rounded-md border p-3">
  ...
</ScrollArea>`}
      />
    </>
  )
}

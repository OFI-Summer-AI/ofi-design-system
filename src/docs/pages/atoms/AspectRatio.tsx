import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function AspectRatioDoc() {
  return (
    <>
      <PageHeader
        title="Aspect ratio"
        description="Locks a child element to a specified width-to-height ratio. Useful for media, video embeds, and image placeholders that should not jump as content loads."
      />
      <ComponentPreview
        preview={
          <div className="w-full max-w-sm">
            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md bg-accent">
              <div className="flex h-full w-full items-center justify-center text-sm text-foreground-muted">
                16:9
              </div>
            </AspectRatio>
          </div>
        }
        code={`<AspectRatio ratio={16 / 9}>
  <img src="..." />
</AspectRatio>`}
      />
    </>
  )
}

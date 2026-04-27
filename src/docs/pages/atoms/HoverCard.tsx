import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export default function HoverCardDoc() {
  return (
    <>
      <PageHeader
        title="Hover card"
        description="A non-modal popup shown on hover. Use to preview rich detail (user profile, link metadata) without forcing the user to navigate."
      />
      <ComponentPreview
        preview={
          <HoverCard>
            <HoverCardTrigger className="cursor-pointer underline-offset-4 hover:underline">
              @ada
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="text-sm font-medium">Ada Lovelace</div>
              <div className="text-xs text-foreground-muted">
                The first computer programmer.
              </div>
            </HoverCardContent>
          </HoverCard>
        }
        code={`<HoverCard>
  <HoverCardTrigger>@ada</HoverCardTrigger>
  <HoverCardContent>...</HoverCardContent>
</HoverCard>`}
      />
    </>
  )
}

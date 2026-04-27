import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { Separator } from "@/components/ui/separator"

export default function SeparatorDoc() {
  return (
    <>
      <PageHeader
        title="Separator"
        description="A thin rule used to divide content. Prefer whitespace first; reach for a Separator only when grouping needs explicit reinforcement."
      />
      <ComponentPreview
        preview={
          <div className="w-full max-w-sm">
            <div className="text-sm font-medium">Account</div>
            <div className="text-xs text-foreground-muted">Manage your profile and billing</div>
            <Separator className="my-4" />
            <div className="text-sm font-medium">Workspace</div>
            <div className="text-xs text-foreground-muted">Members, integrations, and limits</div>
          </div>
        }
        code={`<Separator className="my-4" />`}
      />
    </>
  )
}

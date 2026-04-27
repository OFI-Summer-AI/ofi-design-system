import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SwitchDoc() {
  return (
    <>
      <PageHeader
        title="Switch"
        description="A toggle for instant on/off state. Use a Switch when the change applies immediately — for settings that require a save step, prefer a Checkbox."
      />
      <ComponentPreview
        preview={
          <div className="flex items-center gap-2">
            <Switch id="airplane" />
            <Label htmlFor="airplane">Airplane mode</Label>
          </div>
        }
        code={`<Switch id="airplane" />
<Label htmlFor="airplane">Airplane mode</Label>`}
      />
    </>
  )
}

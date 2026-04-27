import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function TextareaDoc() {
  return (
    <>
      <PageHeader
        title="Textarea"
        description="A multi-line text input. Use when the expected response is longer than a sentence; otherwise use Input."
      />
      <ComponentPreview
        preview={
          <div className="w-full max-w-md space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" rows={4} placeholder="Tell us about yourself" />
          </div>
        }
        code={`<Label htmlFor="bio">Bio</Label>
<Textarea id="bio" rows={4} placeholder="Tell us about yourself" />`}
      />
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { H2 } from "../../components/Section"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InputDoc() {
  return (
    <>
      <PageHeader
        title="Input"
        description="A single-line text input. Always pair with a Label for accessibility — never rely on placeholder as the only label."
      />

      <H2>Default</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
        }
        code={`<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="you@example.com" />`}
      />

      <H2>Disabled</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-sm">
            <Input placeholder="Read only" disabled />
          </div>
        }
        code={`<Input placeholder="Read only" disabled />`}
      />
    </>
  )
}

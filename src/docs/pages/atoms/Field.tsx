import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function FieldDoc() {
  return (
    <>
      <PageHeader
        title="Field"
        description="A label/control/description/error layout primitive for non-react-hook-form forms. Use Field when you don't need RHF; reach for Form when you do."
      />
      <H2>Example</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-sm">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" placeholder="Daivy Morales" />
                <FieldDescription>Shown to your teammates.</FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" placeholder="you@ofi.services" />
                <FieldError>Enter a valid email address.</FieldError>
              </Field>
            </FieldGroup>
          </div>
        }
        code={`<FieldGroup>
  <Field>
    <FieldLabel htmlFor="name">Name</FieldLabel>
    <Input id="name" />
    <FieldDescription>Shown to your teammates.</FieldDescription>
  </Field>
  <Field>
    <FieldLabel htmlFor="email">Email</FieldLabel>
    <Input id="email" />
    <FieldError>Enter a valid email address.</FieldError>
  </Field>
</FieldGroup>`}
      />
      <H2>Anatomy</H2>
      <PropTable
        rows={[
          { name: "FieldGroup", type: "div", description: "Vertical stack of Fields with consistent gap." },
          { name: "Field", type: "div", description: "Single label + control + description/error." },
          { name: "FieldLabel", type: "Label", description: "Linked to the control via htmlFor." },
          { name: "FieldDescription", type: "p", description: "Optional helper text." },
          { name: "FieldError", type: "p", description: "Validation message in destructive tone." },
        ]}
      />
    </>
  )
}

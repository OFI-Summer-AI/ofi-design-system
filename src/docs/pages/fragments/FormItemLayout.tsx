import PageHeader from "../../components/PageHeader"
import { H2, P, InlineCode } from "../../components/Section"
import CodeBlock from "../../components/CodeBlock"

export default function FormItemLayoutDoc() {
  return (
    <>
      <PageHeader
        title="Form item layout"
        description="The canonical label / control / description / error stack used by every form in the system. Pairs with react-hook-form's FormField."
      />
      <H2>Anatomy</H2>
      <P>
        The label sits above the control. Description text — when present — sits below
        the label. Validation errors replace the description when the field is invalid.
        Use <InlineCode>FormItemLayout</InlineCode> rather than recreating this layout
        per form.
      </P>
      <CodeBlock
        code={`<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItemLayout label="Email" description="We'll never share this.">
      <Input {...field} />
    </FormItemLayout>
  )}
/>`}
      />
    </>
  )
}

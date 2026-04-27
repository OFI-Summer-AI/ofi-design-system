import PageHeader from "../../components/PageHeader"
import { H2, P, InlineCode } from "../../components/Section"
import CodeBlock from "../../components/CodeBlock"

export default function KeyValueFieldArrayDoc() {
  return (
    <>
      <PageHeader
        title="Key/Value field array"
        description="A repeating editor for arrays of key/value pairs. Common use cases: HTTP headers, environment variables, query parameters."
      />
      <H2>Wiring</H2>
      <P>
        Backed by react-hook-form's <InlineCode>useFieldArray</InlineCode>. The component
        manages add/remove buttons; you supply the field name and an initial row shape.
      </P>
      <CodeBlock
        code={`<KeyValueFieldArray name="headers" form={form} />`}
      />
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import { H2, P } from "../../components/Section"
import CodeBlock from "../../components/CodeBlock"

export default function SingleValueFieldArrayDoc() {
  return (
    <>
      <PageHeader
        title="Single value field array"
        description="A repeating editor for arrays of scalar values. Use when the user needs to enter a list of strings such as allowed origins, redirect URLs, or tag names."
      />
      <H2>Usage</H2>
      <P>Combines an input row, an add button, and per-row remove buttons.</P>
      <CodeBlock code={`<SingleValueFieldArray name="origins" form={form} />`} />
    </>
  )
}

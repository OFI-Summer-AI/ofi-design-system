import ComponentPreview from "@/docs/components/ComponentPreview"
import PageHeader from "@/docs/components/PageHeader"
import { H2 as Section } from "@/docs/components/Section"
import {
  DataInputDemo,
  DataInputWithCopy,
  DataInputWithRevealCopy,
  DataInputWithRevealEditable,
  DataInputWithCopySecret,
} from "./DataInput"

export default function DataInputPage() {
  return (
    <>
      <PageHeader
        title="Data Input"
        description="Set, read, or copy a value on a single line."
      />
      <Section>Basic usage</Section>
      <ComponentPreview
        preview={<DataInputDemo />}
        code={`import { Input } from 'ui-patterns/DataInputs/Input'

export function DataInputDemo() {
  return <Input containerClassName="w-full max-w-sm" placeholder="Hello world" />
}`}
      />
      <Section>Read-only values</Section>
      <ComponentPreview
        preview={<DataInputWithCopy />}
        code={`import { Input } from 'ui-patterns/DataInputs/Input'

export function DataInputWithCopy() {
  return <Input containerClassName="w-full max-w-sm" readOnly copy value="1234567890" />
}`}
      />
      <Section>Sensitive values</Section>
      <ComponentPreview
        preview={<DataInputWithRevealCopy />}
        code={`import { Input } from 'ui-patterns/DataInputs/Input'

export function DataInputWithRevealCopy() {
  return <Input containerClassName="w-full max-w-sm" readOnly reveal copy value="1234567890" />
}`}
      />
      <Section>Editable sensitive values</Section>
      <ComponentPreview
        preview={<DataInputWithRevealEditable />}
        code={`import { Input } from 'ui-patterns/DataInputs/Input'

export function DataInputWithRevealEditable() {
  return <Input containerClassName="w-full max-w-sm" reveal copy defaultValue="1234567890" />
}`}
      />
      <Section>Masked values</Section>
      <ComponentPreview
        preview={<DataInputWithCopySecret />}
        code={`import { Input } from 'ui-patterns/DataInputs/Input'

export function DataInputWithCopySecret() {
  const actualValue = 'sb_secret_1234567890'
  const maskedValue = 'sb_secret_123•••••••'
 
  return (
    <Input
      containerClassName="w-full max-w-sm"
      readOnly
      copy
      value={maskedValue}
      onCopy={() => {
        navigator.clipboard.writeText(actualValue)
      }}
    />
  )
}`}
      />
    </>
  )
}

import { Input } from "@/components/ui-patterns/data-inputs/input"

export function DataInputDemo() {
  return <Input containerClassName="w-full max-w-sm" placeholder="Hello world" />
}

export function DataInputWithCopy() {
  return <Input containerClassName="w-full max-w-sm" readOnly copy value="1234567890" />
}

export function DataInputWithRevealCopy() {
  return <Input containerClassName="w-full max-w-sm" readOnly reveal copy value="1234567890" />
}

export function DataInputWithRevealEditable() {
  return <Input containerClassName="w-full max-w-sm" reveal copy defaultValue="1234567890" />
}

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
}

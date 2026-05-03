import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { TextConfirmDialog } from "@/components/ui-patterns/text-confirm-dialog"
import { Button } from "@/components/ui/button"

export default function TextConfirmDialogDoc() {
  return (
    <>
      <PageHeader
        title="Text Confirm Dialog"
        description="A high-friction confirmation that requires the user to type a specific string before the destructive action enables. Use it for irreversible operations: deletion, key rotation, force-unlinking."
      />

      <H2>Example</H2>
      <ComponentPreview
        preview={
          <TextConfirmDialog
            trigger={<Button type="danger">Delete project</Button>}
            title="Delete invoice-agent?"
            description="This permanently removes the project and every dataset it owns."
            confirmText="invoice-agent"
            confirmLabel="Delete project"
          />
        }
        code={`<TextConfirmDialog
  trigger={<Button type="danger">Delete project</Button>}
  title="Delete invoice-agent?"
  description="This permanently removes..."
  confirmText="invoice-agent"
  confirmLabel="Delete project"
/>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "trigger", type: "ReactNode", description: "Required. The element that opens the dialog." },
          { name: "title", type: "string", description: "Required. Headline question." },
          { name: "description", type: "ReactNode", description: "Optional supporting copy." },
          { name: "confirmText", type: "string", description: "Required. Exact string the user must type to enable the confirm button." },
          { name: "confirmLabel", type: "string", default: '"Confirm"' },
          { name: "cancelLabel", type: "string", default: '"Cancel"' },
          { name: "onConfirm", type: "() => void", description: "Fires on confirm. Dialog closes automatically." },
        ]}
      />
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { ConfirmationModal } from "@/components/ui-patterns/confirmation-modal"
import { Button } from "@/components/ui/button"

export default function ConfirmationModalDoc() {
  return (
    <>
      <PageHeader
        title="Confirmation Modal"
        description="A pre-wired AlertDialog for one-click confirmations. Use it when an action is meaningful but doesn't need a typed confirmation — for that, see Text Confirm Dialog."
      />

      <H2>Default</H2>
      <ComponentPreview
        preview={
          <ConfirmationModal
            trigger={<Button type="outline">Archive project</Button>}
            title="Archive this project?"
            description="The project will be hidden from dashboards. You can restore it later from settings."
            confirmLabel="Archive"
          />
        }
        code={`<ConfirmationModal
  trigger={<Button type="outline">Archive project</Button>}
  title="Archive this project?"
  description="The project will be hidden..."
  confirmLabel="Archive"
/>`}
      />

      <H2>Destructive</H2>
      <ComponentPreview
        preview={
          <ConfirmationModal
            destructive
            trigger={<Button type="danger">Delete agent</Button>}
            title="Delete this agent?"
            description="This permanently removes the agent and all its run history."
            confirmLabel="Delete"
          />
        }
        code={`<ConfirmationModal
  destructive
  trigger={<Button type="danger">Delete agent</Button>}
  title="Delete this agent?"
  description="This permanently removes..."
  confirmLabel="Delete"
/>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "trigger", type: "ReactNode", description: "Required. The element that opens the modal." },
          { name: "title", type: "string", description: "Required. Headline question." },
          { name: "description", type: "ReactNode", description: "Body copy explaining the consequence." },
          { name: "confirmLabel", type: "string", default: '"Confirm"' },
          { name: "cancelLabel", type: "string", default: '"Cancel"' },
          { name: "destructive", type: "boolean", description: "Styles the confirm button in destructive tones." },
          { name: "onConfirm", type: "() => void", description: "Fires when the user clicks the confirm button." },
        ]}
      />
    </>
  )
}

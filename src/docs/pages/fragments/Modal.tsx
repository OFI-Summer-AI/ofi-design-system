import { useState } from "react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2, P } from "../../components/Section"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function ModalDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invite a teammate</DialogTitle>
            <DialogDescription>
              They'll receive an email with a link to join your workspace.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="teammate@ofi.services" />
          </div>
          <DialogFooter>
            <Button type="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Send invite</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default function ModalDoc() {
  return (
    <>
      <PageHeader
        title="Modal"
        description="A controlled modal pattern built on Dialog. Use Modal when the user needs to commit to a discrete action — invite a user, configure a resource, edit a record — without leaving the current page."
      />
      <P>
        Modal is a thin convention on top of <code>Dialog</code>: header (title + description), body (form, copy, summary), and footer (cancel + primary action). Keep it focused — one job per modal.
      </P>

      <H2>Example</H2>
      <ComponentPreview
        preview={<ModalDemo />}
        code={`const [open, setOpen] = useState(false)

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Invite a teammate</DialogTitle>
      <DialogDescription>...</DialogDescription>
    </DialogHeader>
    <Field>
      <Label htmlFor="email">Email</Label>
      <Input id="email" />
    </Field>
    <DialogFooter>
      <Button type="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={save}>Send invite</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      />

      <H2>When to use what</H2>
      <PropTable
        rows={[
          { name: "Modal", type: "—", description: "General-purpose blocking task with a form or summary." },
          { name: "Confirmation Modal", type: "—", description: 'One-click "are you sure?" — no typed input.' },
          { name: "Text Confirm Dialog", type: "—", description: "Destructive action requiring the user to type a string to enable the confirm button." },
          { name: "Sheet", type: "—", description: "Side-drawer alternative for longer forms or multi-step flows." },
        ]}
      />
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import ImportBlock from "../../components/ImportBlock"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function DialogDoc() {
  return (
    <>
      <PageHeader
        title="Dialog"
        description="A modal overlay used for short, focused interactions. Built on Radix Dialog with focus trapping, scroll locking, and dismiss-on-Escape baked in."
      />
      <ImportBlock imports={["Dialog", "DialogContent", "DialogDescription", "DialogFooter", "DialogHeader", "DialogTitle", "DialogTrigger", "Button"]} />
      <ComponentPreview
        preview={
          <Dialog>
            <DialogTrigger asChild>
              <Button type="outline">Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Invite a teammate</DialogTitle>
                <DialogDescription>
                  Send an invitation to a new collaborator on this workspace.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button type="outline">Cancel</Button>
                <Button>Send invite</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
        code={`<Dialog>
  <DialogTrigger asChild><Button type="outline">Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>...</DialogTitle>
      <DialogDescription>...</DialogDescription>
    </DialogHeader>
    <DialogFooter>...</DialogFooter>
  </DialogContent>
</Dialog>`}
      />
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { Button } from "@/components/ui/button"
import { Toaster, toast } from "@/components/ui/sonner"

export default function SonnerDoc() {
  return (
    <>
      <PageHeader
        title="Toast"
        description="A transient notification anchored to a corner of the viewport. Use for confirmations and recoverable errors that don't require an immediate response."
      />
      <ComponentPreview
        preview={
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => toast("Saved", { description: "Your changes are live." })}>
              Show toast
            </Button>
            <Button
              type="danger"
              onClick={() => toast.error("Failed to save", { description: "Try again in a moment." })}
            >
              Show error
            </Button>
            <Toaster />
          </div>
        }
        code={`import { Toaster, toast } from "@/components/ui/sonner"

// in your app root
<Toaster />

// from anywhere
toast("Saved", { description: "Your changes are live." })`}
      />
    </>
  )
}

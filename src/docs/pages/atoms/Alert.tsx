import { Terminal } from "lucide-react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertDoc() {
  return (
    <>
      <PageHeader
        title="Alert"
        description="Alert forms the core primitives for Admonition. Use the Admonition component unless you must deviate from our consistent patterns."
      />
      <div className="mb-6 max-w-3xl text-sm text-foreground-muted">
        <p>
          Examples where Alert might make sense include:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Bespoke icon requirement</li>
          <li>Highly custom internal contents</li>
        </ul>
      </div>
      <ComponentPreview
        preview={
          <Alert className="w-full max-w-md">
            <Terminal size={16} />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can also add components to your app using the CLI.
            </AlertDescription>
          </Alert>
        }
        code={`<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the CLI.
  </AlertDescription>
</Alert>`}
      />
    </>
  )
}

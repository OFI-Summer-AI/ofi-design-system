import { Info, AlertTriangle, AlertCircle } from "lucide-react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertDoc() {
  return (
    <>
      <PageHeader
        title="Alert"
        description="An inline message used to surface information, warnings, or errors. For interactive callouts that the user should respond to, use Admonition instead."
      />
      <ComponentPreview
        preview={
          <div className="w-full max-w-md space-y-3">
            <Alert>
              <Info />
              <AlertTitle>Heads up</AlertTitle>
              <AlertDescription>
                You can configure environment variables under project settings.
              </AlertDescription>
            </Alert>
            <Alert variant="warning">
              <AlertTriangle />
              <AlertTitle>Approaching limit</AlertTitle>
              <AlertDescription>
                You've used 80% of this month's API quota.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle />
              <AlertTitle>Couldn't save</AlertTitle>
              <AlertDescription>
                The request timed out. Try again in a moment.
              </AlertDescription>
            </Alert>
          </div>
        }
        code={`<Alert>
  <Info />
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>...</AlertDescription>
</Alert>`}
      />
    </>
  )
}

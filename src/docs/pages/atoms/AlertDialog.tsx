import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function AlertDialogDoc() {
  return (
    <>
      <PageHeader
        title="Alert dialog"
        description="A modal dialog for critical confirmations and acknowledgements that require an explicit user decision."
      />

      <div className="mb-6 space-y-3 text-sm text-foreground-muted">
        <p>This component uses Radix UI.</p>
        <p>
          Alert Dialog interrupts the user&apos;s workflow to communicate critical information or
          confirm an action that cannot be taken lightly. It presents a short, focused message and
          requires the user to explicitly confirm or cancel before proceeding.
        </p>
        <p>
          Use Alert Dialog for actions such as deleting data, performing irreversible changes, or
          acknowledging important warnings where dismissal without a decision would be unsafe.
        </p>
      </div>

      <ComponentPreview
        preview={
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button type="outline">Show Alert Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Create new API keys</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
                This will create a default publishable key and a default secret key both named{" "}
                <code className="rounded bg-accent px-1 py-0.5 text-xs text-foreground">
                  default
                </code>
                . These keys are required to connect your application to your Supabase project.
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Create keys</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        }
        code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button type="outline">Show Alert Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Create new API keys</AlertDialogTitle>
    </AlertDialogHeader>
    <AlertDialogDescription>
      This will create a default publishable key and a default secret key both named
      <code>default</code>. These keys are required to connect your application to your Supabase
      project.
    </AlertDialogDescription>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Create keys</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
      />

      <section className="mt-10 space-y-3 text-sm text-foreground-muted">
        <h2 className="text-lg font-semibold text-foreground">Behavior</h2>
        <p>
          Unlike a generic Dialog, an Alert Dialog cannot be dismissed by clicking outside the
          modal. The user must take an explicit action by confirming, cancelling, or pressing
          Escape.
        </p>
        <p>
          This enforced decision helps prevent accidental dismissal of critical warnings or
          destructive actions.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-foreground-muted">
        <h2 className="text-lg font-semibold text-foreground">Guidelines</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Keep content concise: <code>AlertDialogDescription</code> renders as a single paragraph
            and should not contain lists, multiple paragraphs, or complex layouts.
          </li>
          <li>
            Use for critical decisions only: reserve Alert Dialog for destructive or irreversible
            actions, or for warnings that require explicit acknowledgement.
          </li>
          <li>
            Use for dirty-form discard confirmation: a short discard-confirmation step after a
            dirty form dismissal attempt is a valid Alert Dialog pattern.
          </li>
          <li>
            Always provide a cancel action: include <code>AlertDialogCancel</code> so users can
            safely back out, in addition to supporting the Escape key.
          </li>
          <li>
            Avoid rich content: if the dialog requires detailed explanations, callouts, or form
            inputs, use Confirmation Modal or Dialog instead.
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-lg font-semibold text-foreground">Examples</h2>

        <ComponentPreview
          preview={
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button type="outline">Close only</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Application submitted</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                  Thank you for your submission! Please check your email for a confirmation link
                  to complete your application.
                </AlertDialogDescription>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          }
          code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button type="outline">Show Alert Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Application submitted</AlertDialogTitle>
    </AlertDialogHeader>
    <AlertDialogDescription>
      Thank you for your submission! Please check your email for a confirmation link to complete
      your application.
    </AlertDialogDescription>
    <AlertDialogFooter>
      <AlertDialogCancel>Close</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
        />

        <ComponentPreview
          preview={
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button type="warning">Warning</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Update branch</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                  This branch has 3 modified edge functions that will be overwritten when updating
                  with the latest functions from the production branch. This action cannot be
                  undone.
                </AlertDialogDescription>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className={cn(buttonVariants({ type: "warning" }))}>
                    Update
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          }
          code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button type="warning">Show Alert Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Update branch</AlertDialogTitle>
    </AlertDialogHeader>
    <AlertDialogDescription>
      This branch has 3 modified edge functions that will be overwritten when updating with the
      latest functions from the production branch. This action cannot be undone.
    </AlertDialogDescription>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className={buttonVariants({ type: "warning" })}>
        Update
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
        />
      </section>
    </>
  )
}

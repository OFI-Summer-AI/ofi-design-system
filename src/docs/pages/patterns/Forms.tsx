import PageHeader from "../../components/PageHeader"
import { H2, P, InlineCode } from "../../components/Section"

export default function FormsPattern() {
  return (
    <>
      <PageHeader
        title="Forms"
        description="Forms use react-hook-form for state and zod for schema validation. The Form, FormField, FormItem, FormLabel, FormControl, FormDescription, and FormMessage primitives bridge RHF context to the UI."
      />
      <H2>Layout</H2>
      <P>
        Use <InlineCode>FormItemLayout</InlineCode> from the fragments layer to render the
        canonical label / control / description / error stack. Fields are vertical by
        default; switch to a two-column layout only when the form exceeds ten fields and
        screen real estate is wide.
      </P>
      <H2>Validation</H2>
      <P>
        Validate on blur for individual fields and on submit for cross-field rules.
        Inline errors should explain what to do, not just what is wrong: "Use at least 8
        characters" beats "Invalid".
      </P>
      <H2>Submission</H2>
      <P>
        Disable the submit button while the form is submitting and show a loading state
        on the button itself. Never disable the entire form — keyboard users should still
        be able to read what they entered.
      </P>
    </>
  )
}

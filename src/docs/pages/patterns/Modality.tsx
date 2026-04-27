import PageHeader from "../../components/PageHeader"
import { H2, P } from "../../components/Section"

export default function ModalityPattern() {
  return (
    <>
      <PageHeader
        title="Modality"
        description="Modal surfaces (Dialog, Drawer, Sheet, Popover) interrupt the user. Use them sparingly and only when the action genuinely needs to be confirmed or completed before the user returns to the previous context."
      />
      <H2>Pick the right surface</H2>
      <P>
        Use a Dialog for short, focused confirmations. Use a Sheet or Drawer for forms
        that need real estate without leaving the page. Use a Popover for inline pickers
        that should dismiss as soon as the user moves on.
      </P>
      <H2>Destructive confirmation</H2>
      <P>
        Destructive actions (delete, revoke, leave) require an explicit confirmation step
        with a clearly labeled primary button. For high-stakes destructions, use the Text
        Confirm Dialog so the user must type the resource name.
      </P>
    </>
  )
}

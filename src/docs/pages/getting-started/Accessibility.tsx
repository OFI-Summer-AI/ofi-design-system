import PageHeader from "../../components/PageHeader"
import { H2, P, InlineCode } from "../../components/Section"

export default function Accessibility() {
  return (
    <>
      <PageHeader
        title="Accessibility"
        description="Accessibility is a default, not a bonus. Every primitive must be operable with a keyboard, expose meaningful labels to assistive technology, and pass color contrast targets."
      />

      <H2>Keyboard navigation</H2>
      <P>
        All interactive elements are focusable in document order. Custom widgets built on
        Radix primitives (Select, Popover, Dialog) ship with focus trapping and roving
        tabindex out of the box — do not override these unless you are replacing the
        underlying behavior.
      </P>

      <H2>Labels and descriptions</H2>
      <P>
        Form controls must be paired with a <InlineCode>{`<Label>`}</InlineCode>. Icon-only
        buttons require <InlineCode>aria-label</InlineCode>. Use{" "}
        <InlineCode>FormDescription</InlineCode> for help text and{" "}
        <InlineCode>FormMessage</InlineCode> for validation errors so they are correctly
        wired through <InlineCode>aria-describedby</InlineCode>.
      </P>

      <H2>Color and contrast</H2>
      <P>
        Body text targets WCAG AA contrast against its background. Do not rely on color
        alone to communicate state — pair color cues with an icon, label, or shape.
      </P>

      <H2>Motion</H2>
      <P>
        Animations are subtle by default and respect{" "}
        <InlineCode>prefers-reduced-motion</InlineCode>. Avoid introducing new motion
        without confirming it degrades cleanly when the user has motion disabled.
      </P>
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import { H2, P } from "../../components/Section"

export default function Copywriting() {
  return (
    <>
      <PageHeader
        title="Copywriting"
        description="UI copy should sound like a competent teammate explaining the product, not a marketing brochure or a server log. Keep it short, plain, and action-oriented."
      />

      <H2>Voice</H2>
      <P>
        Direct, calm, and free of hype. Use second person ("you") when addressing the user.
        Avoid jargon unless the user is already deep in the relevant context.
      </P>

      <H2>Buttons</H2>
      <P>
        Lead with a verb that describes the outcome: "Save changes", "Invite member",
        "Delete project". Avoid generic labels like "OK" or "Submit".
      </P>

      <H2>Errors</H2>
      <P>
        State what went wrong, then what the user can do about it. Don't blame the user
        and don't expose stack traces. If the error is not actionable, say so and provide
        a path to support.
      </P>

      <H2>Empty states</H2>
      <P>
        Explain what the surface is for, then offer the next step. A blank table without
        explanation feels broken; a blank table with one sentence and a primary action
        feels intentional.
      </P>
    </>
  )
}

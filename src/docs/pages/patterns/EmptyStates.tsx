import PageHeader from "../../components/PageHeader"
import { H2, P } from "../../components/Section"

export default function EmptyStatesPattern() {
  return (
    <>
      <PageHeader
        title="Empty states"
        description="An empty state should answer three questions in order: what is this surface, why is it empty, and what should the user do next."
      />
      <H2>Structure</H2>
      <P>
        Lead with a one-line title that names the surface. Follow with a single sentence
        of context. End with a primary call-to-action that creates the first item, or a
        secondary link to documentation if no creation flow exists.
      </P>
      <H2>Tone</H2>
      <P>
        Empty states are an onboarding moment. Avoid sounding apologetic ("Sorry, no
        data") — instead orient the user toward the action that will fill the surface.
      </P>
    </>
  )
}

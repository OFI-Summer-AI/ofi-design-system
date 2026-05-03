import PageHeader from "../../components/PageHeader"
import { H2, P } from "../../components/Section"

export default function FragmentsIntroductionDoc() {
  return (
    <>
      <PageHeader
        title="Fragment components"
        description="Compositions of atoms into ready-to-drop product blocks: empty states, page headers, filter bars, assistant chat. Reach for fragments first — fall back to atoms only when you need something custom."
      />
      <H2>Why fragments exist</H2>
      <P>
        Every agent surface needs the same handful of building blocks: a page header, a filter bar, a confirmation modal, an empty state. Fragments package those compositions so each team isn't reinventing them.
      </P>
      <H2>Layering</H2>
      <P>
        Fragments live in <code>src/components/ui-patterns/</code>. They consume atoms from <code>src/components/ui/</code> and may pull in <code>react-hook-form</code>, <code>recharts</code>, etc. Atoms must stay light — only fragments can take on opinionated dependencies.
      </P>
    </>
  )
}

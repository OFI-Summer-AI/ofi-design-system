import PageHeader from "../../components/PageHeader"
import { H2, P } from "../../components/Section"

export default function AtomsIntroductionDoc() {
  return (
    <>
      <PageHeader
        title="Atom components"
        description="The lowest-level building blocks of the system: buttons, inputs, dialogs, menus. Every page in this section documents a single primitive that lives in src/components/ui/."
      />
      <H2>What's an atom?</H2>
      <P>
        Atoms are vendored shadcn/ui primitives built on Radix UI, restyled with the OFI tokens. They have no business logic and no opinions about layout — they're meant to be composed.
      </P>
      <H2>How to use these docs</H2>
      <P>
        Each atom doc shows a live preview, a copy-pasteable code sample, and a props table. If a component takes variants, the variants are demoed inline. Open <code>src/components/ui/&lt;name&gt;.tsx</code> to see the implementation.
      </P>
    </>
  )
}

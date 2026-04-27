import PageHeader from "../../components/PageHeader"
import { H2, P } from "../../components/Section"

export default function PatternsIntro() {
  return (
    <>
      <PageHeader
        title="UI patterns"
        description="Patterns are recipes — opinionated combinations of atoms and fragments that solve a recurring product problem. They are not exported components; they are guidelines."
      />
      <H2>How to read these pages</H2>
      <P>
        Each pattern page describes the problem, the canonical layout, and the components
        that make it up. When implementing a feature that fits one of these patterns,
        match the pattern first; deviate only when the product surface genuinely calls
        for something different.
      </P>
    </>
  )
}

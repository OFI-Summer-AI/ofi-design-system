import PageHeader from "../../components/PageHeader"
import { H2, P, InlineCode } from "../../components/Section"

export default function LayoutPattern() {
  return (
    <>
      <PageHeader
        title="Layout"
        description="Pages share a consistent skeleton: a top bar, an optional left navigation, a page header with title and actions, and a content column constrained to a comfortable reading width."
      />
      <H2>Page container</H2>
      <P>
        Wrap each page in a <InlineCode>PageContainer</InlineCode> to apply consistent
        horizontal padding and max width. Pages that are dense data dashboards may opt
        out of the max-width constraint, but most product surfaces should keep it.
      </P>
      <H2>Spacing</H2>
      <P>
        Vertical rhythm uses an 8px base. Sections within a page are separated by 32px
        (<InlineCode>space-y-8</InlineCode>); items within a section by 16px or 24px
        depending on density.
      </P>
    </>
  )
}

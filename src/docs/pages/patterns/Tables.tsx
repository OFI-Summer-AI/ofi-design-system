import PageHeader from "../../components/PageHeader"
import { H2, P } from "../../components/Section"

export default function TablesPattern() {
  return (
    <>
      <PageHeader
        title="Tables"
        description="Tables are the workhorse of admin and dashboard surfaces. They prioritize scan-ability over decoration: tight rows, left-aligned text, right-aligned numbers, and a clear sort affordance on every sortable header."
      />
      <H2>Density</H2>
      <P>
        Default to comfortable density (40–44px rows). Drop to compact density only when
        the user is power-using a long list — never compact by default.
      </P>
      <H2>Empty and loading</H2>
      <P>
        Replace the table body with an empty state when there are no rows, and a skeleton
        of the same height when fetching. Don't render an empty striped table with no
        explanation — it reads as broken.
      </P>
      <H2>Selection and bulk actions</H2>
      <P>
        When rows are selectable, expose bulk actions in a sticky bar that appears only
        when at least one row is selected. The bar should disappear when the selection
        is cleared.
      </P>
    </>
  )
}

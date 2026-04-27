import PageHeader from "../../components/PageHeader"
import { H2, P, InlineCode } from "../../components/Section"

export default function ChartsPattern() {
  return (
    <>
      <PageHeader
        title="Charts"
        description="Charts live in components/ui-patterns/chart and wrap recharts in a compound-component API. Subcomponents share state through chart context so the legend, tooltip, and series stay in sync."
      />
      <H2>Anatomy</H2>
      <P>
        A chart card composes a header (<InlineCode>ChartHeader</InlineCode>,{" "}
        <InlineCode>ChartTitle</InlineCode>, <InlineCode>ChartActions</InlineCode>) with a
        content area (<InlineCode>ChartContent</InlineCode>) holding the actual{" "}
        <InlineCode>Chart</InlineCode> and series elements like{" "}
        <InlineCode>ChartLine</InlineCode> or <InlineCode>ChartBar</InlineCode>.
      </P>
      <H2>Loading and empty</H2>
      <P>
        Always render <InlineCode>ChartLoadingState</InlineCode> while fetching and{" "}
        <InlineCode>ChartEmptyState</InlineCode> when there are no points. They keep card
        height stable and prevent layout shift as data arrives.
      </P>
    </>
  )
}

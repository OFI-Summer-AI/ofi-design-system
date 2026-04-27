import PageHeader from "../../components/PageHeader"
import { H2, P } from "../../components/Section"

export default function NavigationPattern() {
  return (
    <>
      <PageHeader
        title="Navigation"
        description="Navigation answers two questions for the user: where am I, and where can I go next. The system supports a top bar for product-level navigation and a left side menu for feature-level navigation."
      />
      <H2>Hierarchy</H2>
      <P>
        Top-level destinations live in the top bar. Feature-level destinations live in
        the inner side menu. Avoid stacking three levels of persistent navigation — if a
        page needs deeper structure, use tabs within the page rather than another nav
        rail.
      </P>
      <H2>Active state</H2>
      <P>
        Exactly one item in each navigation surface should appear active for any given
        URL. Active items use the foreground color and a subtle background, never bold
        weight or color shifts that fight the rest of the UI.
      </P>
    </>
  )
}

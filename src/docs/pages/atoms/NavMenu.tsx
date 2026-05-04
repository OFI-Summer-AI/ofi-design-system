import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { NavMenu } from "@/components/ui/nav-menu"

export default function NavMenuDoc() {
  return (
    <>
      <PageHeader
        title="Nav Menu"
        description="A horizontal in-page tab strip for switching between sibling views inside the same resource (Overview / Logs / Settings). For top-level app navigation use Navigation Menu instead."
      />
      <H2>Underline variant</H2>
      <ComponentPreview
        preview={
          <NavMenu
            items={[
              { label: "Overview", href: "#", active: true },
              { label: "Logs", href: "#" },
              { label: "Triggers", href: "#" },
              { label: "Settings", href: "#" },
            ]}
          />
        }
        code={`<NavMenu
  items={[
    { label: "Overview", href: "/overview", active: true },
    { label: "Logs", href: "/logs" },
    { label: "Settings", href: "/settings" },
  ]}
/>`}
      />
      <H2>Pill variant</H2>
      <ComponentPreview
        preview={
          <NavMenu
            variant="pill"
            items={[
              { label: "Day", href: "#", active: true },
              { label: "Week", href: "#" },
              { label: "Month", href: "#" },
            ]}
          />
        }
        code={`<NavMenu variant="pill" items={[
  { label: "Day", href: "#", active: true },
  { label: "Week", href: "#" },
  { label: "Month", href: "#" },
]} />`}
      />
      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "items", type: "NavMenuItem[]", description: "Required. { label, href, active? }." },
          { name: "variant", type: '"underline" | "pill"', default: '"underline"' },
        ]}
      />
    </>
  )
}

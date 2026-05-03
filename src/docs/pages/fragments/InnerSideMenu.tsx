import { Activity, Settings, Users, Zap } from "lucide-react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { InnerSideMenu } from "@/components/ui-patterns/inner-side-menu"

export default function InnerSideMenuDoc() {
  return (
    <>
      <PageHeader
        title="Inner Side Menu"
        description="A secondary navigation rail used inside a page (settings, project sub-sections). Keep the primary app nav separate — this is for in-page subsections, not top-level routes."
      />

      <H2>Example</H2>
      <ComponentPreview
        preview={
          <div className="rounded-md border border-border p-4">
            <InnerSideMenu
              title="Settings"
              items={[
                { label: "Overview", href: "#", icon: <Activity />, active: true },
                { label: "Members", href: "#", icon: <Users /> },
                { label: "Integrations", href: "#", icon: <Zap /> },
                { label: "Preferences", href: "#", icon: <Settings /> },
              ]}
            />
          </div>
        }
        code={`<InnerSideMenu
  title="Settings"
  items={[
    { label: "Overview", href: "/overview", icon: <Activity />, active: true },
    { label: "Members", href: "/members", icon: <Users /> },
    { label: "Integrations", href: "/integrations", icon: <Zap /> },
  ]}
/>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "title", type: "string", description: "Optional uppercase section heading." },
          { name: "items", type: "InnerSideMenuItem[]", description: "Required. { label, href, icon?, active? }." },
          { name: "className", type: "string" },
        ]}
      />
    </>
  )
}

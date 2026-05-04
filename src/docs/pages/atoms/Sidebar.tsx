import { Activity, FileText, Settings, Users } from "lucide-react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarItem,
} from "@/components/ui/sidebar"
import BrandLogo from "@/components/BrandLogo"

export default function SidebarDoc() {
  return (
    <>
      <PageHeader
        title="Sidebar"
        description="A persistent left rail with header, scrollable content, and footer. Use it for the primary in-app navigation of agent dashboards, settings consoles, and project browsers."
      />
      <H2>Example</H2>
      <ComponentPreview
        preview={
          <div className="h-[420px] w-full">
            <Sidebar>
              <SidebarHeader>
                <BrandLogo imageClassName="h-5" />
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                  <SidebarItem icon={<Activity />} active>
                    Overview
                  </SidebarItem>
                  <SidebarItem icon={<FileText />}>Runs</SidebarItem>
                  <SidebarItem icon={<Users />}>Members</SidebarItem>
                </SidebarGroup>
                <SidebarGroup>
                  <SidebarGroupLabel>Settings</SidebarGroupLabel>
                  <SidebarItem icon={<Settings />}>Preferences</SidebarItem>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <div className="text-xs text-foreground-muted">v1.0.0</div>
              </SidebarFooter>
            </Sidebar>
          </div>
        }
        code={`<Sidebar>
  <SidebarHeader>
    <BrandLogo />
  </SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>Workspace</SidebarGroupLabel>
      <SidebarItem icon={<Activity />} active>Overview</SidebarItem>
      <SidebarItem icon={<FileText />}>Runs</SidebarItem>
    </SidebarGroup>
  </SidebarContent>
  <SidebarFooter>v1.0.0</SidebarFooter>
</Sidebar>`}
      />
      <H2>Anatomy</H2>
      <PropTable
        rows={[
          { name: "Sidebar", type: "aside", description: "Outer container. Width fixed at w-64." },
          { name: "SidebarHeader", type: "div", description: "Top row — typically the brand mark." },
          { name: "SidebarContent", type: "div", description: "Scrollable middle." },
          { name: "SidebarFooter", type: "div", description: "Bottom row." },
          { name: "SidebarGroup", type: "div", description: "Vertical stack of items with optional label." },
          { name: "SidebarGroupLabel", type: "div", description: "Mono-uppercase section heading." },
          { name: "SidebarItem", type: "button", description: "Selectable nav row. icon + active props." },
        ]}
      />
    </>
  )
}

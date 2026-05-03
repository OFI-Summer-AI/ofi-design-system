import { FolderOpen, Inbox } from "lucide-react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { EmptyState } from "@/components/ui-patterns/empty-state"
import { Button } from "@/components/ui/button"

export default function EmptyStatePresentationalDoc() {
  return (
    <>
      <PageHeader
        title="Empty State"
        description="A presentational empty state for lists, dashboards, and tabs that have no data yet. Lead with the next action — empty states are an opportunity to onboard, not just to apologize."
      />

      <H2>Basic</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-md">
            <EmptyState
              icon={<Inbox />}
              title="No runs yet"
              description="When this agent executes, the most recent runs will appear here."
            />
          </div>
        }
        code={`<EmptyState
  icon={<Inbox />}
  title="No runs yet"
  description="When this agent executes..."
/>`}
      />

      <H2>With actions</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-md">
            <EmptyState
              icon={<FolderOpen />}
              title="No projects"
              description="Create a project to start grouping your agents and dashboards."
              actions={
                <>
                  <Button type="outline">Import</Button>
                  <Button>New project</Button>
                </>
              }
            />
          </div>
        }
        code={`<EmptyState
  icon={<FolderOpen />}
  title="No projects"
  description="Create a project to start grouping..."
  actions={
    <>
      <Button type="outline">Import</Button>
      <Button>New project</Button>
    </>
  }
/>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "title", type: "string", description: "Required. Short, plain-language headline." },
          { name: "description", type: "ReactNode", description: "Optional supporting copy." },
          { name: "icon", type: "ReactNode", description: "Lucide icon or local icon component. Auto-sized inside the badge." },
          { name: "actions", type: "ReactNode", description: "Buttons or links rendered below the description." },
        ]}
      />
    </>
  )
}

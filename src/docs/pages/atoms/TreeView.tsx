import { File, Folder } from "lucide-react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { TreeView } from "@/components/ui/tree-view"

export default function TreeViewDoc() {
  return (
    <>
      <PageHeader
        title="Tree View"
        description="A hierarchical, expandable list — file browsers, taxonomy editors, agent decision trees. Each node can have an icon, children, and a selected state."
      />
      <H2>Example</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-sm rounded-md border border-border p-2">
            <TreeView
              defaultExpandedIds={["agents", "invoice"]}
              selectedId="prompt"
              data={[
                {
                  id: "agents",
                  label: "agents",
                  icon: <Folder />,
                  children: [
                    {
                      id: "invoice",
                      label: "invoice-agent",
                      icon: <Folder />,
                      children: [
                        { id: "prompt", label: "prompt.md", icon: <File /> },
                        { id: "schema", label: "schema.json", icon: <File /> },
                      ],
                    },
                    {
                      id: "tax",
                      label: "tax-agent",
                      icon: <Folder />,
                      children: [
                        { id: "tax-prompt", label: "prompt.md", icon: <File /> },
                      ],
                    },
                  ],
                },
                { id: "readme", label: "README.md", icon: <File /> },
              ]}
            />
          </div>
        }
        code={`<TreeView
  defaultExpandedIds={["agents", "invoice"]}
  selectedId="prompt"
  data={[
    { id: "agents", label: "agents", icon: <Folder />, children: [
      { id: "invoice", label: "invoice-agent", icon: <Folder />, children: [
        { id: "prompt", label: "prompt.md", icon: <File /> },
      ]},
    ]},
  ]}
/>`}
      />
      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "data", type: "TreeNode[]", description: "Required. { id, label, icon?, children? }." },
          { name: "defaultExpandedIds", type: "string[]", description: "Initially-open node ids." },
          { name: "selectedId", type: "string", description: "Currently selected node id." },
          { name: "onSelect", type: "(id) => void", description: "Fires when a node is clicked." },
        ]}
      />
    </>
  )
}

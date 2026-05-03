import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function ResizableDoc() {
  return (
    <>
      <PageHeader
        title="Resizable"
        description="Resizable split panes built on react-resizable-panels. Use it for IDE-style layouts: editor + preview, list + detail, code + terminal."
      />
      <H2>Horizontal</H2>
      <ComponentPreview
        preview={
          <div className="h-48 w-full">
            <ResizablePanelGroup direction="horizontal" className="rounded-md border border-border">
              <ResizablePanel defaultSize={30}>
                <div className="flex h-full items-center justify-center p-6 text-sm">
                  Sidebar
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={70}>
                <div className="flex h-full items-center justify-center p-6 text-sm">
                  Content
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        }
        code={`<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={30}>Sidebar</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={70}>Content</ResizablePanel>
</ResizablePanelGroup>`}
      />
      <H2>Vertical</H2>
      <ComponentPreview
        preview={
          <div className="h-64 w-full">
            <ResizablePanelGroup direction="vertical" className="rounded-md border border-border">
              <ResizablePanel defaultSize={70}>
                <div className="flex h-full items-center justify-center p-6 text-sm">
                  Editor
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={30}>
                <div className="flex h-full items-center justify-center p-6 text-sm">
                  Terminal
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        }
        code={`<ResizablePanelGroup direction="vertical">
  <ResizablePanel defaultSize={70}>Editor</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={30}>Terminal</ResizablePanel>
</ResizablePanelGroup>`}
      />
      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "ResizablePanelGroup.direction", type: '"horizontal" | "vertical"', description: "Required." },
          { name: "ResizablePanel.defaultSize", type: "number", description: "Initial size in percent." },
          { name: "ResizablePanel.minSize / maxSize", type: "number", description: "Bounds in percent." },
          { name: "ResizableHandle.withHandle", type: "boolean", description: "Renders the visible grip indicator." },
        ]}
      />
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export default function ContextMenuDoc() {
  return (
    <>
      <PageHeader
        title="Context Menu"
        description="A right-click menu for desktop power-users. Mirror critical actions in another surface (toolbar, dropdown) — never make context menu the only entry point."
      />
      <H2>Example</H2>
      <ComponentPreview
        preview={
          <ContextMenu>
            <ContextMenuTrigger className="flex h-32 w-72 items-center justify-center rounded-md border border-dashed border-border text-sm text-foreground-muted">
              Right-click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
              <ContextMenuItem>
                Back
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Forward
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Reload</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Save as...</ContextMenuItem>
              <ContextMenuItem>Copy link</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        }
        code={`<ContextMenu>
  <ContextMenuTrigger>Right-click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back<ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem>
    <ContextMenuItem>Forward</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Save as...</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
      />
      <H2>Anatomy</H2>
      <PropTable
        rows={[
          { name: "ContextMenuTrigger", type: "primitive", description: "Element that opens the menu on right-click / long-press." },
          { name: "ContextMenuContent", type: "primitive", description: "The popover panel." },
          { name: "ContextMenuItem", type: "primitive", description: "Selectable row. onSelect fires on click." },
          { name: "ContextMenuCheckboxItem", type: "primitive", description: "Toggleable item." },
          { name: "ContextMenuRadioItem", type: "primitive", description: "Radio-grouped item." },
          { name: "ContextMenuShortcut", type: "primitive", description: "Right-aligned keyboard hint." },
        ]}
      />
    </>
  )
}

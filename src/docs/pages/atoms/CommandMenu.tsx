import { useEffect, useState } from "react"
import { Calculator, Calendar, Settings, User } from "lucide-react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2, P } from "../../components/Section"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"

function CommandMenuDemo() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <Button type="outline" onClick={() => setOpen(true)}>
        Open command menu (⌘K)
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" /> Calendar
            </CommandItem>
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4" /> Calculator
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" /> Profile
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" /> Settings
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default function CommandMenuDoc() {
  return (
    <>
      <PageHeader
        title="Command Menu (cmdk)"
        description="A global command palette opened with ⌘K. Use it for power-user navigation: jumping between pages, running actions, searching across resources."
      />
      <P>
        Built on top of the <code>Command</code> primitive (cmdk). The pattern: bind ⌘K at the app root, render a <code>CommandDialog</code> with grouped <code>CommandItem</code>s and <code>CommandShortcut</code> hints.
      </P>
      <H2>Example</H2>
      <ComponentPreview
        preview={<CommandMenuDemo />}
        code={`useEffect(() => {
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen(v => !v)
    }
  }
  document.addEventListener("keydown", onKeyDown)
  return () => document.removeEventListener("keydown", onKeyDown)
}, [])

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandGroup heading="Suggestions">
      <CommandItem><Calendar /> Calendar</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`}
      />
      <H2>Anatomy</H2>
      <PropTable
        rows={[
          { name: "CommandDialog", type: "primitive", description: "Modal-shaped wrapper. Pass open + onOpenChange." },
          { name: "CommandInput", type: "primitive", description: "Search field — auto-filters items." },
          { name: "CommandGroup", type: "primitive", description: "Heading-labeled section." },
          { name: "CommandItem", type: "primitive", description: "Selectable row. onSelect fires with the item value." },
          { name: "CommandShortcut", type: "primitive", description: "Right-aligned shortcut hint." },
        ]}
      />
    </>
  )
}

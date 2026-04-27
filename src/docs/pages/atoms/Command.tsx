import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export default function CommandDoc() {
  return (
    <>
      <PageHeader
        title="Command"
        description="A keyboard-first command palette built on cmdk. Powers quick navigation, search, and action menus across the product."
      />
      <ComponentPreview
        preview={
          <Command className="w-full max-w-md rounded-lg border border-border">
            <CommandInput placeholder="Type a command…" />
            <CommandList>
              <CommandEmpty>No results.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Create project</CommandItem>
                <CommandItem>Invite teammate</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>Profile</CommandItem>
                <CommandItem>Billing</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        }
        code={`<Command>
  <CommandInput placeholder="Type a command…" />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Create project</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
      />
    </>
  )
}

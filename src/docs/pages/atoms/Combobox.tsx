import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "vite", label: "Vite" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

function ComboboxDemo() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const selected = frameworks.find((f) => f.value === value)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="outline"
          className="w-[220px] justify-between"
          iconRight={<ChevronsUpDown className="h-4 w-4 opacity-50" />}
        >
          {selected ? selected.label : "Select framework..."}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[220px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((f) => (
                <CommandItem
                  key={f.value}
                  value={f.value}
                  onSelect={(v) => {
                    setValue(v === value ? "" : v)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === f.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {f.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default function ComboboxDoc() {
  return (
    <>
      <PageHeader
        title="Combobox"
        description="A searchable single-select built by composing Popover + Command. Use it when a Select would have more than ~10 options or when typing-to-filter saves the user from scrolling."
      />
      <H2>Example</H2>
      <ComponentPreview
        preview={<ComboboxDemo />}
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button type="outline">{selected?.label ?? "Select..."}</Button>
  </PopoverTrigger>
  <PopoverContent className="p-0">
    <Command>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandGroup>
          {options.map(o => (
            <CommandItem key={o.value} value={o.value} onSelect={...}>
              {o.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>`}
      />
      <H2>Anatomy</H2>
      <PropTable
        rows={[
          { name: "Popover", type: "primitive", description: "Owns open/close state." },
          { name: "Command", type: "primitive", description: "cmdk-powered filterable list." },
          { name: "CommandInput", type: "primitive", description: "Search field." },
          { name: "CommandItem", type: "primitive", description: "Selectable row. Pass value + onSelect." },
        ]}
      />
    </>
  )
}

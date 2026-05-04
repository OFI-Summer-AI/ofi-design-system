import { useState } from "react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { FilterBar, type FilterChip } from "@/components/ui-patterns/filter-bar"
import { Button } from "@/components/ui/button"

function FilterBarDemo() {
  const [search, setSearch] = useState("")
  const [chips, setChips] = useState<FilterChip[]>([
    { id: "status", label: "Status: failed" },
    { id: "vendor", label: "Vendor: Acme" },
  ])
  return (
    <FilterBar
      search={search}
      onSearchChange={setSearch}
      placeholder="Search runs..."
      chips={chips}
      onRemoveChip={(id) => setChips((cs) => cs.filter((c) => c.id !== id))}
      trailing={<Button size="tiny" type="outline">Add filter</Button>}
    />
  )
}

export default function FilterBarDoc() {
  return (
    <>
      <PageHeader
        title="Filter Bar"
        description="A search input plus removable filter chips for tables and lists. Use it as the entry point to any data view that supports faceted browsing."
      />

      <H2>Example</H2>
      <ComponentPreview
        preview={<FilterBarDemo />}
        code={`const [search, setSearch] = useState("")
const [chips, setChips] = useState([
  { id: "status", label: "Status: failed" },
])

<FilterBar
  search={search}
  onSearchChange={setSearch}
  placeholder="Search runs..."
  chips={chips}
  onRemoveChip={(id) => setChips(cs => cs.filter(c => c.id !== id))}
  trailing={<Button size="tiny" type="outline">Add filter</Button>}
/>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "search", type: "string", description: "Controlled value of the search input." },
          { name: "onSearchChange", type: "(value) => void", description: "Fires on every keystroke." },
          { name: "placeholder", type: "string", default: '"Search"' },
          { name: "chips", type: "FilterChip[]", description: "{ id, label } — currently active filters rendered as removable badges." },
          { name: "onRemoveChip", type: "(id) => void", description: "Required when chips are interactive. Drops the chip from your state." },
          { name: "trailing", type: "ReactNode", description: 'Right-aligned slot — typically an "Add filter" button or sort menu.' },
        ]}
      />
    </>
  )
}

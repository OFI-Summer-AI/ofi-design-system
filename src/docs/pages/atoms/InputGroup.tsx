import { Search } from "lucide-react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextArea,
} from "@/components/ui/input-group"

export default function InputGroupDoc() {
  return (
    <>
      <PageHeader
        title="Input Group"
        description="An input wrapper that lets you attach prefixes, suffixes, or footers — units, currency symbols, search icons, character counters — without breaking the focus ring."
      />

      <H2>Inline addons</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-sm space-y-3">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="ofi.services" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <Search className="h-3.5 w-3.5 text-foreground-muted" />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search projects" />
            </InputGroup>
            <InputGroup>
              <InputGroupInput placeholder="0.00" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>USD</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
        }
        code={`<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>https://</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="ofi.services" />
</InputGroup>

<InputGroup>
  <InputGroupInput placeholder="0.00" />
  <InputGroupAddon align="inline-end">
    <InputGroupText>USD</InputGroupText>
  </InputGroupAddon>
</InputGroup>`}
      />

      <H2>Block addon (footer)</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-sm">
            <InputGroup>
              <InputGroupTextArea placeholder="Describe your agent..." rows={3} />
              <InputGroupAddon align="block-end">
                <InputGroupText>Markdown supported</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
        }
        code={`<InputGroup>
  <InputGroupTextArea placeholder="Describe your agent..." rows={3} />
  <InputGroupAddon align="block-end">
    <InputGroupText>Markdown supported</InputGroupText>
  </InputGroupAddon>
</InputGroup>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "InputGroup", type: "div", description: "Wrapper that owns the border and focus ring." },
          { name: "InputGroupAddon", type: "div", description: 'Slot for icons or text. align: "inline-start" | "inline-end" | "block-end".' },
          { name: "InputGroupInput", type: "input", description: "The text input. Inherits all native input props." },
          { name: "InputGroupTextArea", type: "textarea", description: "Multi-line variant. Pair with align=\"block-end\" addons for footer captions." },
          { name: "InputGroupText", type: "span", description: "Muted label styling for addon copy (units, prefixes)." },
        ]}
      />
    </>
  )
}

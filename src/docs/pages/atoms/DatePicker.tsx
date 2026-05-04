import { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="outline" icon={<CalendarIcon className="h-4 w-4" />}>
          {date ? format(date, "PPP") : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  )
}

export default function DatePickerDoc() {
  return (
    <>
      <PageHeader
        title="Date Picker"
        description="A button that opens a Calendar inside a Popover. Use it for filters, scheduling, and any field that needs a single date."
      />
      <H2>Example</H2>
      <ComponentPreview
        preview={<DatePickerDemo />}
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button type="outline" icon={<CalendarIcon />}>
      {date ? format(date, "PPP") : "Pick a date"}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0" align="start">
    <Calendar mode="single" selected={date} onSelect={setDate} />
  </PopoverContent>
</Popover>`}
      />
      <H2>Anatomy</H2>
      <PropTable
        rows={[
          { name: "Popover", type: "primitive", description: "Owns open state." },
          { name: "Calendar", type: "primitive", description: "react-day-picker wrapper. mode supports single, multiple, range." },
          { name: "Button", type: "primitive", description: 'Trigger — wrap with PopoverTrigger asChild.' },
        ]}
      />
    </>
  )
}

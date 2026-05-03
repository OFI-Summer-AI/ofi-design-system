import { useState } from "react"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import ImportBlock from "../../components/ImportBlock"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarDoc() {
  function Demo() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return <Calendar mode="single" selected={date} onSelect={setDate} />
  }
  return (
    <>
      <PageHeader
        title="Calendar"
        description="A date picker calendar built on react-day-picker. Most product surfaces should use the Date Picker fragment instead, which combines this calendar with a Popover trigger."
      />
      <ImportBlock imports={["Calendar"]} />
      <ComponentPreview
        preview={<Demo />}
        code={`const [date, setDate] = useState<Date | undefined>(new Date())

<Calendar mode="single" selected={date} onSelect={setDate} />`}
      />
    </>
  )
}

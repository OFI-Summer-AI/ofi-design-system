import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDoc() {
  return (
    <>
      <PageHeader
        title="Accordion"
        description="A vertical stack of expandable sections. Best for FAQ-style content or settings panels where most rows are collapsed by default."
      />
      <ComponentPreview
        preview={
          <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="a">
              <AccordionTrigger>What is the OFI Design System?</AccordionTrigger>
              <AccordionContent>
                A React + TypeScript component library for building OFI's product surfaces.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionTrigger>Is it themeable?</AccordionTrigger>
              <AccordionContent>
                Yes — every color is a CSS variable, and dark mode is class-based.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        }
        code={`<Accordion type="single" collapsible>
  <AccordionItem value="a">
    <AccordionTrigger>Question</AccordionTrigger>
    <AccordionContent>Answer</AccordionContent>
  </AccordionItem>
</Accordion>`}
      />
    </>
  )
}

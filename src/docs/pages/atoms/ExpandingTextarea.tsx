import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { ExpandingTextarea } from "@/components/ui/expanding-textarea"

export default function ExpandingTextareaDoc() {
  return (
    <>
      <PageHeader
        title="Expanding Textarea"
        description="A textarea that grows with its content up to an optional row cap. Use it for chat composers, comment fields, and inline editors where the user can't predict how much they'll write."
      />
      <H2>Example</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-md">
            <ExpandingTextarea
              placeholder="Type a long message and watch it grow..."
              maxRows={6}
            />
          </div>
        }
        code={`<ExpandingTextarea
  placeholder="Type a long message..."
  maxRows={6}
/>`}
      />
      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "maxRows", type: "number", description: "Caps the height. Once reached, the textarea scrolls instead of growing." },
          { name: "...HTMLTextarea", type: "textarea", description: "All native textarea props are forwarded." },
        ]}
      />
    </>
  )
}

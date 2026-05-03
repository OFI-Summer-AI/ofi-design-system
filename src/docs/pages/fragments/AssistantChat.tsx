import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { AssistantChat } from "@/components/ui-patterns/assistant-chat"

export default function AssistantChatDoc() {
  return (
    <>
      <PageHeader
        title="Assistant Chat"
        description="A minimal transcript view for AI agent conversations — alternating user and assistant turns with avatars, role labels, and breathing room. Drop it into any agent surface that needs to surface a back-and-forth."
      />

      <H2>Example</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-lg">
            <AssistantChat
              messages={[
                { id: "1", role: "user", content: "Summarize the latest invoice run." },
                {
                  id: "2",
                  role: "assistant",
                  content: "Processed 1,284 invoices. 12 failed validation — all flagged for review.",
                },
                { id: "3", role: "user", content: "Group the failures by vendor." },
              ]}
            />
          </div>
        }
        code={`<AssistantChat
  messages={[
    { id: "1", role: "user", content: "Summarize the latest invoice run." },
    { id: "2", role: "assistant", content: "Processed 1,284 invoices..." },
  ]}
/>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "messages", type: "AssistantChatMessage[]", description: "Required. { id, role, content }. role is \"user\" or \"assistant\"." },
          { name: "className", type: "string", description: "Forwarded to the wrapping div." },
        ]}
      />
    </>
  )
}

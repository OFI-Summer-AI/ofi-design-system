import PageHeader from "../../components/PageHeader"
import { H2, P, InlineCode } from "../../components/Section"
import CodeBlock from "../../components/CodeBlock"

export default function IconsPage() {
  return (
    <>
      <PageHeader
        title="Icons"
        description="The system ships two icon sources: a local set authored through the createIcon factory, and lucide-react for generic glyphs. Prefer the local set when a matching icon exists."
      />

      <H2>Authoring an icon</H2>
      <P>
        Local icons default to a 24px box and inherit stroke from{" "}
        <InlineCode>currentColor</InlineCode>. Stroke and fill defaults are declared on the
        root <InlineCode>{`<svg>`}</InlineCode>, never on child paths, so any prop the
        consumer passes overrides them cleanly.
      </P>

      <CodeBlock
        code={`import { createIcon } from "@/components/icons/create-icon"

export const Sparkles = createIcon(
  "Sparkles",
  <>
    <path d="M12 3v18" />
    <path d="M3 12h18" />
  </>,
  { stroke: "currentColor", strokeWidth: 1.5 },
)`}
      />

      <H2>Sizing</H2>
      <P>
        Pass <InlineCode>size</InlineCode> for both width and height, or pass Tailwind
        classes for full control. Inside a Button, leading/trailing icon slots auto-size
        to 16px regardless of the icon's intrinsic size.
      </P>
    </>
  )
}

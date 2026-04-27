import PageHeader from "../../components/PageHeader"
import { H2, P, InlineCode } from "../../components/Section"

export default function Typography() {
  return (
    <>
      <PageHeader
        title="Typography"
        description="The system uses DM Sans as the default sans-serif with a system fallback chain. Type is tuned for product UI first: compact, legible, and stable across dashboards, forms, and data-dense views."
      />

      <H2>Font stack</H2>
      <P>
        <InlineCode>DM Sans</InlineCode> is loaded globally and mapped to Tailwind's{" "}
        <InlineCode>font-sans</InlineCode> token. The fallback chain (
        <InlineCode>ui-sans-serif</InlineCode>, <InlineCode>system-ui</InlineCode>,{" "}
        <InlineCode>-apple-system</InlineCode>) keeps rendering acceptable when the web
        font fails to load.
      </P>

      <H2>Scale</H2>
      <div className="my-6 space-y-3">
        {[
          { cls: "text-xs", label: "text-xs · 12px", sample: "Caption · table cells · helper text" },
          { cls: "text-sm", label: "text-sm · 14px", sample: "Default body and form controls" },
          { cls: "text-base", label: "text-base · 16px", sample: "Lead paragraphs in marketing" },
          { cls: "text-lg", label: "text-lg · 18px", sample: "Section subheadings" },
          { cls: "text-xl", label: "text-xl · 20px", sample: "Card titles" },
          { cls: "text-2xl", label: "text-2xl · 24px", sample: "Page subtitles" },
          { cls: "text-3xl", label: "text-3xl · 30px", sample: "Page titles" },
        ].map((row) => (
          <div
            key={row.cls}
            className="flex items-baseline justify-between gap-6 border-b border-border pb-2"
          >
            <div className={row.cls}>{row.sample}</div>
            <div className="font-mono text-xs text-foreground-muted">{row.label}</div>
          </div>
        ))}
      </div>

      <H2>Weight</H2>
      <P>
        Stick to three weights: regular for body, medium for UI labels and emphasis,
        semibold for headings. Bold is reserved for the rare case where a single word
        needs to dominate a sentence.
      </P>
    </>
  )
}

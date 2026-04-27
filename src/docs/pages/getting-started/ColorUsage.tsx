import PageHeader from "../../components/PageHeader"
import { H2, P, InlineCode } from "../../components/Section"

const swatches = [
  { name: "background", token: "--background" },
  { name: "foreground", token: "--foreground" },
  { name: "card", token: "--card" },
  { name: "muted", token: "--muted" },
  { name: "muted-foreground", token: "--muted-foreground" },
  { name: "accent", token: "--accent" },
  { name: "border", token: "--border" },
  { name: "primary", token: "--primary" },
  { name: "destructive", token: "--destructive" },
]

export default function ColorUsage() {
  return (
    <>
      <PageHeader
        title="Color usage"
        description="Colors are expressed as HSL CSS variables. Compose them through the semantic Tailwind utilities — never reference raw hex values except for the static brand palette."
      />

      <H2>Semantic tokens</H2>
      <P>
        Tokens describe a role, not a value. <InlineCode>bg-background</InlineCode>,{" "}
        <InlineCode>text-foreground</InlineCode>, and <InlineCode>border-border</InlineCode>{" "}
        will always resolve to the correct color in the active theme.
      </P>

      <div className="my-6 grid grid-cols-3 gap-3">
        {swatches.map((s) => (
          <div
            key={s.token}
            className="overflow-hidden rounded-md border border-border"
          >
            <div
              className="h-16"
              style={{ background: `hsl(var(${s.token}))` }}
            />
            <div className="px-3 py-2 text-xs">
              <div className="font-medium text-foreground">{s.name}</div>
              <div className="font-mono text-foreground-muted">{s.token}</div>
            </div>
          </div>
        ))}
      </div>

      <H2>Brand palette</H2>
      <P>
        OFI's brand color is yellow. The static <InlineCode>brand-*</InlineCode> palette in{" "}
        <InlineCode>tailwind.config.js</InlineCode> exposes a 50→900 ramp for marketing
        surfaces, badges, and accents. Use semantic <InlineCode>primary</InlineCode>{" "}
        utilities for product UI so the theme remains controllable.
      </P>

      <div className="my-6 grid grid-cols-10 gap-1">
        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((step) => (
          <div key={step} className="text-center">
            <div className={`h-12 rounded bg-brand-${step}`} />
            <div className="mt-1 text-[10px] text-foreground-muted">{step}</div>
          </div>
        ))}
      </div>

      <H2>Don't</H2>
      <P>
        Don't hard-code hex colors in component files. Don't introduce new tokens without
        adding the variable to both <InlineCode>index.css</InlineCode> and the Tailwind
        config — the two are a single contract.
      </P>
    </>
  )
}

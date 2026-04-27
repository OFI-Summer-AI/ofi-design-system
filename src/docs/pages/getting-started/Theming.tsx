import PageHeader from "../../components/PageHeader"
import { H2, P, InlineCode } from "../../components/Section"
import CodeBlock from "../../components/CodeBlock"

export default function Theming() {
  return (
    <>
      <PageHeader
        title="Theming"
        description="Theming is driven by HSL CSS variables declared in src/index.css and mapped to Tailwind utilities in tailwind.config.js. The two files form a single contract."
      />

      <H2>Light and dark</H2>
      <P>
        Dark mode is class-based. Add <InlineCode>dark</InlineCode> to{" "}
        <InlineCode>{`<html>`}</InlineCode> (or any ancestor of the tree you want themed)
        and every semantic utility flips automatically. There is no JS-level theme
        provider — the class is the source of truth.
      </P>

      <H2>Adding a token</H2>
      <P>
        Adding a token is a two-file change: declare the variable in both{" "}
        <InlineCode>:root</InlineCode> and <InlineCode>.dark</InlineCode> blocks, then
        expose it in <InlineCode>tailwind.config.js</InlineCode> under the right scale.
      </P>

      <CodeBlock
        code={`/* index.css */
:root  { --info: 200 90% 50%; }
.dark  { --info: 200 90% 60%; }

/* tailwind.config.js */
colors: {
  info: { DEFAULT: "hsl(var(--info))" },
}`}
      />

      <H2>Overriding the brand</H2>
      <P>
        OFI's primary is yellow. To rebrand a downstream surface, override{" "}
        <InlineCode>--primary</InlineCode> on a wrapping selector — every component reading
        the token will inherit the new color without further changes.
      </P>
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import { H2, P, InlineCode } from "../../components/Section"

export default function Introduction() {
  return (
    <>
      <PageHeader
        title="Introduction"
        description="OfiUI is a React + TypeScript component library that powers OFI's product surfaces. It is built on top of shadcn/ui, Radix primitives, and Tailwind CSS — inspired by the Supabase Design System."
      />

      <H2>What's inside</H2>
      <P>
        The system is split into three layers: <InlineCode>atoms</InlineCode> (low-level
        primitives like Button or Input), <InlineCode>fragments</InlineCode> (opinionated
        compositions such as Form Item Layout or Multi Select), and <InlineCode>icons</InlineCode>{" "}
        (a hand-curated SVG set plus access to Lucide).
      </P>

      <H2>Design principles</H2>
      <P>
        We optimize for clarity over decoration. Surfaces are flat, motion is restrained,
        and density favors information over whitespace. Every component is themeable through
        CSS variables so a single token change re-skins the entire application. The visual
        language and component architecture draw heavy inspiration from the{" "}
        <a
          href="https://ui.supabase.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground transition-colors"
        >
          Supabase Design System
        </a>
        .
      </P>

      <H2>Author</H2>
      <P>
        OfiUI was designed and built by{" "}
        <a
          href="mailto:d.morales@ofiservices.com"
          className="underline underline-offset-2 hover:text-foreground transition-colors"
        >
          Daivy Morales
        </a>
        , AI &amp; Innovation Intern at Ofi Services in Latin America. It
        started as an internal initiative to give every AI Agent a consistent,
        premium frontend — and grew into this system.
      </P>

      <H2>Getting set up</H2>
      <P>
        Install dependencies with <InlineCode>npm install</InlineCode> and run{" "}
        <InlineCode>npm run dev</InlineCode> to start the Vite server. The path alias{" "}
        <InlineCode>@/*</InlineCode> resolves to <InlineCode>src/*</InlineCode>; always
        import via the alias rather than relative paths.
      </P>
    </>
  )
}

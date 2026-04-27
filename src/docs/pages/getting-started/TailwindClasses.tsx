import PageHeader from "../../components/PageHeader"
import { H2, P, InlineCode } from "../../components/Section"
import CodeBlock from "../../components/CodeBlock"

export default function TailwindClasses() {
  return (
    <>
      <PageHeader
        title="Tailwind classes"
        description="The system uses Tailwind 3 with the class-variance-authority + tailwind-merge pattern. Class strings are always composed through the cn() helper so prop overrides win."
      />

      <H2>The cn() helper</H2>
      <P>
        <InlineCode>cn()</InlineCode> runs <InlineCode>clsx</InlineCode> for conditional
        joining followed by <InlineCode>tailwind-merge</InlineCode> to dedupe conflicting
        utilities. Without it, prop-driven overrides like{" "}
        <InlineCode>className="px-4"</InlineCode> silently lose to the component's base.
      </P>

      <CodeBlock
        code={`import { cn } from "@/lib/utils"

<div className={cn("px-3 py-2", isActive && "bg-accent", className)} />`}
      />

      <H2>Variants with CVA</H2>
      <P>
        Branching styles by prop should always go through <InlineCode>cva()</InlineCode>.
        The first argument is the base; each variants group is independent and combinable.
        Always export the <InlineCode>*Variants</InlineCode> function alongside the
        component so consumers can apply the same styling to a different element.
      </P>

      <CodeBlock
        code={`const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs",
  {
    variants: {
      variant: {
        default: "bg-primary/15 text-primary",
        outline: "text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
)`}
      />
    </>
  )
}

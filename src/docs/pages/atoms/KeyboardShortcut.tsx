import { Button } from "@/components/ui/button"
import { KeyboardShortcut } from "@/components/ui/keyboard-shortcut"
import ComponentPreview from "../../components/ComponentPreview"
import PageHeader from "../../components/PageHeader"
import PropTable from "../../components/PropTable"
import { H2, H3, InlineCode, P } from "../../components/Section"
import CodeBlock from "../../components/CodeBlock"

const shortcuts = [
  { label: "Open command menu", keys: ["Meta", "K"] },
  { label: "Prettify SQL", keys: ["Alt", "Shift", "F"] },
  { label: "Download CSV", keys: ["Shift", "Meta", "D"] },
] satisfies Array<{ label: string; keys: string[] }>

const pillShortcuts = [
  { label: "Open command menu", keys: ["Meta", "K"] },
  { label: "Prettify SQL", keys: ["Alt", "Shift", "F"] },
  { label: "Download Markdown", keys: ["Shift", "Meta", "M"] },
] satisfies Array<{ label: string; keys: string[] }>

export default function KeyboardShortcutDoc() {
  return (
    <>
      <PageHeader
        title="Keyboard Shortcut"
        description="Displays a platform-aware keyboard shortcut label for buttons, menus, tooltips, and helper text."
      />

      <ComponentPreview
        preview={
          <div className="flex w-full max-w-2xl flex-col gap-6">
            <div className="flex flex-wrap gap-3">
              <Button
                iconRight={<KeyboardShortcut keys={["Meta", "S"]} variant="inline" />}
              >
                Save
              </Button>
              <Button
                type="default"
                iconRight={
                  <KeyboardShortcut keys={["Meta", "Enter"]} variant="inline" />
                }
              >
                Run query
              </Button>
            </div>

            <div className="w-full max-w-md rounded-lg border bg-background p-1.5">
              {shortcuts.map((shortcut) => (
                <div
                  key={shortcut.label}
                  className="flex items-center justify-between rounded-md px-3 py-2 text-sm"
                >
                  <span>{shortcut.label}</span>
                  <KeyboardShortcut keys={shortcut.keys} />
                </div>
              ))}
            </div>

            <p className="flex items-center gap-1.5 text-xs text-foreground-muted">
              Hit <KeyboardShortcut keys={["Meta", "K"]} variant="inline" /> to open
              search
            </p>
          </div>
        }
        code={`import { Button, KeyboardShortcut } from "ui"

const shortcuts = [
  { label: "Open command menu", keys: ["Meta", "K"] },
  { label: "Prettify SQL", keys: ["Alt", "Shift", "F"] },
  { label: "Download CSV", keys: ["Shift", "Meta", "D"] },
]

export function KeyboardShortcutDemo() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        <Button
          iconRight={<KeyboardShortcut keys={["Meta", "S"]} variant="inline" />}
        >
          Save
        </Button>
        <Button
          type="default"
          iconRight={<KeyboardShortcut keys={["Meta", "Enter"]} variant="inline" />}
        >
          Run query
        </Button>
      </div>

      <div className="w-full max-w-md rounded-lg border bg-background p-1.5">
        {shortcuts.map((shortcut) => (
          <div
            key={shortcut.label}
            className="flex items-center justify-between rounded-md px-3 py-2 text-sm"
          >
            <span>{shortcut.label}</span>
            <KeyboardShortcut keys={shortcut.keys} />
          </div>
        ))}
      </div>

      <p className="flex items-center gap-1.5 text-xs text-foreground-muted">
        Hit <KeyboardShortcut keys={["Meta", "K"]} variant="inline" /> to open
        search
      </p>
    </div>
  )
}`}
      />

      <P>
        <InlineCode>KeyboardShortcut</InlineCode> renders a compact, platform-aware
        shortcut label from logical key names.
      </P>
      <P>
        Use it for button accessories, menu shortcuts, tooltips, and helper copy.
        Avoid placing it directly inside button label text; render it in a right-side
        accessory slot such as <InlineCode>iconRight</InlineCode> instead.
      </P>

      <H2>Usage</H2>
      <CodeBlock
        className="max-w-3xl"
        code={`import { KeyboardShortcut } from "ui"`}
      />
      <CodeBlock className="max-w-3xl" code={`<KeyboardShortcut keys={["Meta", "S"]} />`} />

      <H2>Props</H2>

      <H3>keys</H3>
      <P>An ordered array of logical key names.</P>
      <CodeBlock
        className="max-w-3xl"
        code={`<KeyboardShortcut keys={["Meta", "Enter"]} />`}
      />
      <P>Supported special keys currently include:</P>
      <P>
        <InlineCode>Meta</InlineCode>, <InlineCode>Alt</InlineCode>,{" "}
        <InlineCode>Shift</InlineCode>, <InlineCode>Enter</InlineCode>,{" "}
        <InlineCode>Esc</InlineCode> / <InlineCode>Escape</InlineCode>, and{" "}
        <InlineCode>Tab</InlineCode>. Single-character keys are uppercased
        automatically.
      </P>

      <H3>Variants</H3>
      <P>
        <InlineCode>pill</InlineCode> is the default for menus, tooltips, and
        standalone shortcut chips. <InlineCode>inline</InlineCode> keeps the label
        visually lighter when it needs to sit inside a button accessory slot or
        helper sentence.
      </P>
      <PropTable
        rows={[
          {
            name: "keys",
            type: "string[]",
            description: "Ordered logical key names to render.",
          },
          {
            name: "variant",
            type: '"pill" | "inline"',
            default: '"pill"',
            description: "Visual treatment for standalone versus inline placement.",
          },
          {
            name: "className",
            type: "string",
            description: "Additional classes applied to the root element.",
          },
        ]}
      />

      <H2>Examples</H2>

      <H3>Pill</H3>
      <ComponentPreview
        preview={
          <div className="w-full max-w-md rounded-lg border bg-background p-1.5">
            {pillShortcuts.map((shortcut) => (
              <div
                key={shortcut.label}
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm"
              >
                <span>{shortcut.label}</span>
                <KeyboardShortcut keys={shortcut.keys} />
              </div>
            ))}
          </div>
        }
        code={`import { KeyboardShortcut } from "ui"

const shortcuts = [
  { label: "Open command menu", keys: ["Meta", "K"] },
  { label: "Prettify SQL", keys: ["Alt", "Shift", "F"] },
  { label: "Download Markdown", keys: ["Shift", "Meta", "M"] },
]

export function KeyboardShortcutPill() {
  return (
    <div className="w-full max-w-md rounded-lg border bg-background p-1.5">
      {shortcuts.map((shortcut) => (
        <div
          key={shortcut.label}
          className="flex items-center justify-between rounded-md px-3 py-2 text-sm"
        >
          <span>{shortcut.label}</span>
          <KeyboardShortcut keys={shortcut.keys} />
        </div>
      ))}
    </div>
  )
}`}
      />

      <H3>Inline</H3>
      <ComponentPreview
        preview={
          <div className="flex w-full max-w-xl flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              <Button
                iconRight={<KeyboardShortcut keys={["Meta", "S"]} variant="inline" />}
              >
                Save
              </Button>
              <Button
                type="default"
                iconRight={
                  <KeyboardShortcut keys={["Meta", "Enter"]} variant="inline" />
                }
              >
                Apply
              </Button>
            </div>

            <p className="flex items-center gap-1.5 text-xs text-foreground-muted">
              Hit <KeyboardShortcut keys={["Meta", "K"]} variant="inline" /> to edit
              with the Assistant
            </p>
          </div>
        }
        code={`import { Button, KeyboardShortcut } from "ui"

export function KeyboardShortcutInline() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <div className="flex flex-wrap gap-3">
        <Button
          iconRight={<KeyboardShortcut keys={["Meta", "S"]} variant="inline" />}
        >
          Save
        </Button>
        <Button
          type="default"
          iconRight={<KeyboardShortcut keys={["Meta", "Enter"]} variant="inline" />}
        >
          Apply
        </Button>
      </div>

      <p className="flex items-center gap-1.5 text-xs text-foreground-muted">
        Hit <KeyboardShortcut keys={["Meta", "K"]} variant="inline" /> to edit
        with the Assistant
      </p>
    </div>
  )
}`}
      />
    </>
  )
}

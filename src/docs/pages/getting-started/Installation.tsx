import PageHeader from "../../components/PageHeader"
import { H2, P, InlineCode } from "../../components/Section"
import CodeBlock from "../../components/CodeBlock"

export default function Installation() {
  return (
    <>
      <PageHeader
        title="Installation"
        description="Follow these steps to consume @daivymoralesofi/ofiui in your React + Tailwind project."
      />

      <H2>Step 1 — Install the package</H2>
      <P>
        Install the package using your preferred package manager. Ensure <InlineCode>react</InlineCode> and <InlineCode>react-dom</InlineCode> (^18 or ^19) are already present in your dependencies.
      </P>
      <CodeBlock lang="bash" code={`npm install @daivymoralesofi/ofiui
# or
pnpm add @daivymoralesofi/ofiui`} />

      <H2>Step 2 — Install Tailwind CSS</H2>
      <P>
        If your project does not already have Tailwind set up, install it first:
      </P>
      <CodeBlock lang="bash" code={`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`} />

      <H2>Step 3 — Wire up the Tailwind preset</H2>
      <P>
        Extend your <InlineCode>tailwind.config.js</InlineCode> to use the OfiUI preset.
      </P>
      <CodeBlock lang="js" code={`import ofiuiPreset from "@daivymoralesofi/ofiui/tailwind.preset"

/** @type {import('tailwindcss').Config} */
export default {
  presets: [ofiuiPreset],
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    // IMPORTANT: include the published library so its class names are not purged
    "./node_modules/@daivymoralesofi/ofiui/dist/**/*.{js,mjs}",
  ],
}`} />

      <H2>Step 4 — Import the stylesheet</H2>
      <P>
        Import the prebuilt OfiUI stylesheet once at the entry point of your app (typically <InlineCode>main.tsx</InlineCode>, <InlineCode>_app.tsx</InlineCode>, or <InlineCode>layout.tsx</InlineCode>):
      </P>
      <CodeBlock lang="tsx" code={`import "@daivymoralesofi/ofiui/styles.css"`} />

      <H2>Step 5 — Enable dark mode</H2>
      <P>
        Dark mode is class-based. Add the <InlineCode>dark</InlineCode> class to <InlineCode>&lt;html&gt;</InlineCode> or any ancestor to flip every semantic token.
      </P>
      <CodeBlock lang="html" code={`<html class="dark">`} />
      <P>
        If using <b>Next.js</b>, we recommend using <InlineCode>next-themes</InlineCode> to handle theme state and avoid hydration flickering:
      </P>
      <CodeBlock lang="tsx" code={`import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`} />

      <P>
        To allow users to switch themes, use the <InlineCode>useTheme</InlineCode> hook:
      </P>
      <CodeBlock lang="tsx" code={`"use client"
import { useTheme } from "next-themes"
import { Button } from "@daivymoralesofi/ofiui"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle theme
    </Button>
  )
}`} />

      <H2>Step 6 — Use a component</H2>
      <CodeBlock lang="tsx" code={`import { Button } from "@daivymoralesofi/ofiui"
import { Plus } from "lucide-react"

export function CreateButton() {
  return (
    <Button type="primary" icon={<Plus />}>
      Create agent
    </Button>
  )
}`} />
    </>
  )
}

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

# OFI Design System

A React + TypeScript design system built on top of [shadcn/ui](https://ui.shadcn.com), [Radix UI](https://www.radix-ui.com), and [Tailwind CSS](https://tailwindcss.com). The repo doubles as a living showcase: `src/App.tsx` renders every primitive and pattern as documentation, and `src/LandingPage.tsx` demonstrates a full marketing layout assembled from the same building blocks.

This document is the canonical reference for installing, configuring, extending, and consuming the system.

---

## About Ofi Services

Ofi Services is a global leader in process mining and automation services, offering end-to-end support from implementation to value realization. Ofi holds the prestigious **Celonis Platinum Partner** title (2025) and operates with a lean global model — delivery teams in emerging markets — to bring world-class expertise at competitive pricing.

The tech team at Ofi builds **AI Agents** that frequently need a frontend layer: dashboards, forms, landing pages, and other interfaces that surface agent output to end users. This design system exists to solve that problem.

## Purpose of this library

This library gives every agent builder at Ofi a consistent, premium frontend without writing any bespoke UI code. Instead of hardcoding styles or reinventing components for each agent, teams pull from this system and get:

- **Brand consistency** — colors, typography, and tone aligned with Ofi Services' visual identity
- **Speed** — pre-built primitives and patterns mean agents ship with polished UI from day one
- **Quality** — no more ad-hoc frontend; every surface looks and feels the same regardless of who built the agent

When building or extending this system, always ask: *does this component help an agent builder ship a frontend faster while keeping it on-brand?* That is the north star.

---

## 1. Getting started

### Requirements

- Node.js 18+ (Vite 5 requirement)
- npm (the repo ships `package-lock.json`)

### Installation

```bash
npm install
```

### Scripts

| Command           | What it does                                                      |
| ----------------- | ----------------------------------------------------------------- |
| `npm run dev`     | Starts the Vite dev server with HMR.                              |
| `npm run build`   | Runs `tsc -b` (project-wide type-check) then a production build.  |
| `npm run preview` | Serves the production build locally for smoke-testing.           |

There is no separate `lint` or `test` script — `npm run build` is the gate that catches type errors before shipping.

---

## 2. Project layout

```
src/
├── App.tsx              # Component showcase / playground
├── LandingPage.tsx      # End-to-end marketing page example
├── main.tsx             # React entrypoint
├── index.css            # Tailwind layers + CSS-variable tokens
├── lib/
│   ├── utils.ts         # `cn()` helper (clsx + tailwind-merge)
│   └── format.ts        # Misc formatting utilities
└── components/
    ├── ui/              # Vendored shadcn/ui primitives
    ├── ui-patterns/     # Opinionated compositions on top of `ui/`
    └── icons/           # Custom SVG icons via `createIcon`
```

The path alias `@/*` resolves to `src/*` and is wired through `tsconfig.app.json` + `vite-tsconfig-paths`. **Always import via `@/...`**, never with deep relative paths.

```ts
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

---

## 3. The three component layers

The system is intentionally layered. Place new components in the layer that matches their level of abstraction.

### Layer 1 — `components/ui/` (primitives)

Vendored [shadcn/ui](https://ui.shadcn.com) components built on Radix UI. They are **copied into the repo, not consumed as a dependency** — edit them freely.

Configuration lives in `components.json`:

```json
{
  "style": "default",
  "tailwind": { "baseColor": "neutral", "cssVariables": true },
  "aliases": {
    "components": "@/components",
    "ui":         "@/components/ui",
    "lib":        "@/lib",
    "utils":      "@/lib/utils",
    "hooks":      "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

To pull in a new shadcn component:

```bash
npx shadcn@latest add dialog
```

It will be written to `src/components/ui/dialog.tsx`. Once added, treat it as project source — refactor it to match the system (variants, tokens, naming) before merging.

### Layer 2 — `components/ui-patterns/` (compositions)

Opinionated, app-level building blocks composed from `ui/` primitives. Examples:

- `chart/` — compound-component chart toolkit on top of `recharts`
- `multi-select.tsx` — Radix Popover + Command-style multi-selector
- `admonition.tsx` — callout/banner with semantic variants
- `form/` — `react-hook-form` field arrays and item layouts
- `data-inputs/` — higher-order form inputs

Patterns may pull in `react-hook-form`, `zod`, `recharts`, etc. — primitives in `ui/` should not.

### Layer 3 — `components/icons/` (icon set)

Custom SVG icons generated by the `createIcon` factory in `create-icon.tsx`. The factory mirrors Supabase's `icons` package:

- Default `size={24}` applied to both width and height
- Stroke / fill defaults declared on the root `<svg>`, not on child paths
- Any prop the consumer passes overrides the defaults

```tsx
// src/components/icons/index.tsx
export const TableEditor = createIcon(
  "TableEditor",
  <>
    <path d="..." />
    <path d="..." />
  </>,
  { stroke: "currentColor", strokeWidth: 1.5 },
)
```

`lucide-react` is also available for generic glyphs — prefer the local set whenever a matching icon exists.

---

## 4. Styling system

### Tailwind + CSS variables

Theming is driven by HSL CSS variables declared in `src/index.css` and mapped to Tailwind utilities in `tailwind.config.js`. The two files are a single contract — adding a token requires touching both.

`src/index.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 9%;
  --primary:   45 93% 47%;
  --muted:     0 0% 96%;
  --radius:    0.5rem;
  /* … */
}

.dark { /* same keys, dark values */ }
```

`tailwind.config.js`:

```js
colors: {
  background: "hsl(var(--background))",
  foreground: {
    DEFAULT: "hsl(var(--foreground))",
    muted:   "hsl(var(--muted-foreground))",
    light:   "hsl(var(--muted-foreground) / 0.85)",
  },
  primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
  brand: { DEFAULT: "#eab308", 50: "#fefce8", /* … */ 900: "#713f12" },
}
```

Use semantic utilities (`bg-background`, `text-foreground`, `border-border`, `text-primary`) for anything theme-aware. Use the static `brand-*` palette only for hard-coded brand surfaces (logos, marketing accents).

### Dark mode

Class-based: `darkMode: ["class"]`. Toggle by adding/removing `dark` on `<html>` or any ancestor. All semantic utilities flip automatically.

### The `cn()` helper

Always compose class strings through `cn()` from `@/lib/utils`:

```ts
import { cn } from "@/lib/utils"

<div className={cn("px-3 py-2", isActive && "bg-accent", className)} />
```

It runs `clsx` (conditional joining) then `tailwind-merge` (de-dupes conflicting Tailwind classes so `px-2` + `px-4` resolves to `px-4`). This is non-negotiable — without it, prop-driven overrides silently fail.

### Typography

Font stack defaults to **Inter** with system fallbacks. Container utility is centered with `2rem` padding and a `1400px` cap at the `2xl` breakpoint.

---

## 5. Variants — the standard pattern

Every variant-bearing component uses [`class-variance-authority`](https://cva.style) (CVA) plus `VariantProps` for type-safe props. Follow this template when authoring new components:

```tsx
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default:     "border-transparent bg-primary/15 text-primary",
        secondary:   "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive/15 text-destructive",
        warning:     "border-transparent bg-amber-500/15 text-amber-400",
        success:     "border-transparent bg-brand/15 text-brand",
        outline:     "text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { badgeVariants }
```

Rules of thumb:

- The first argument to `cva` is the **base** — classes that always apply.
- Each `variants` group is independent; combinations are valid.
- Always export the `*Variants` function alongside the component so consumers can reuse the styling on a different element.
- Always spread `className` last and pipe through `cn()` so user overrides win.

### Reference: the `Button` API

`Button` is the most expressive variant component in the system. It composes three axes:

| Prop    | Values                                                                                 | Default     |
| ------- | -------------------------------------------------------------------------------------- | ----------- |
| `type`  | `primary`, `default`, `secondary`, `outline`, `dashed`, `link`, `text`, `danger`, `warning` | `primary`   |
| `size`  | `tiny`, `small`, `default`, `medium`, `large`, `huge`                                  | `default`   |
| `block` | `true` / `false` (full-width)                                                          | `false`     |

It also exposes:

- `icon` / `iconRight` — leading or trailing icon slots (sized to 16px automatically)
- `loading` — swaps `icon` for a spinning `Loader2`
- `loadingCentered` — overlays a centered spinner and dims content (good for fixed-width buttons)
- `asChild` — uses `@radix-ui/react-slot` to render the variant styling onto a child element (e.g. an `<a>`)
- `htmlType` — proxied to the underlying `<button type="…">` (renamed because `type` is a variant)

```tsx
<Button type="primary" size="medium" icon={<Plus />}>Create</Button>
<Button type="outline" loading>Saving…</Button>
<Button asChild type="link"><a href="/docs">Read the docs</a></Button>
```

---

## 6. Forms

Forms are powered by [`react-hook-form`](https://react-hook-form.com) + [`zod`](https://zod.dev) via `@hookform/resolvers`.

- `components/ui/form.tsx` — the shadcn `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormMessage` primitives that bridge RHF context to the UI.
- `components/ui-patterns/form/form-item-layout.tsx` — standard label / description / error layout used across the system.
- `components/ui-patterns/form/key-value-field-array.tsx` and `single-value-field-array.tsx` — RHF `useFieldArray` editors for dynamic key/value pairs and repeating single values.

Typical usage:

```tsx
const schema = z.object({ email: z.string().email() })

function MyForm() {
  const form = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
```

---

## 7. Charts

Charts live in `components/ui-patterns/chart/` and wrap [`recharts`](https://recharts.org) in a compound-component API. State is shared through `chart/context.ts` so subcomponents can read the active series, dimensions, etc. Re-export every public piece from `chart/index.ts`.

```tsx
import {
  Chart, ChartCard, ChartHeader, ChartTitle, ChartActions,
  ChartContent, ChartLine, ChartBar, ChartMetric,
  ChartEmptyState, ChartLoadingState, LogsBarChart,
} from "@/components/ui-patterns/chart"

<ChartCard>
  <ChartHeader>
    <ChartTitle>Active users</ChartTitle>
    <ChartActions>{/* … */}</ChartActions>
  </ChartHeader>
  <ChartContent>
    <Chart data={data}>
      <ChartLine dataKey="users" />
    </Chart>
  </ChartContent>
</ChartCard>
```

Use `ChartEmptyState` and `ChartLoadingState` for the corresponding lifecycle states — they keep card heights stable and prevent layout shift.

---

## 8. Adding a new component — checklist

1. Decide the layer: primitive (`ui/`), composition (`ui-patterns/`), or icon (`icons/`).
2. If it's a shadcn primitive, run `npx shadcn@latest add <name>` and align the result with the system (CVA variants, semantic tokens, `cn()`).
3. Use **CVA** for any prop-driven styling — never branch on classes inline.
4. Reference colors through CSS-variable utilities (`bg-primary`, `text-foreground`) rather than raw Tailwind colors. The static `brand` palette is only for branded surfaces.
5. Forward `ref` with `React.forwardRef` whenever the component renders a DOM node consumers may need to focus or measure.
6. Spread `className` last and merge through `cn()` so overrides win.
7. Set `displayName` on forwarded-ref components — it makes React DevTools readable.
8. Add a usage example to `src/App.tsx` so the component appears in the showcase.
9. Run `npm run build` to confirm types pass.

---

## 9. Dependencies at a glance

| Area                | Package(s)                                                                 |
| ------------------- | -------------------------------------------------------------------------- |
| Framework           | `react` 18, `react-dom` 18                                                 |
| Build / dev         | `vite` 5, `@vitejs/plugin-react`, `vite-tsconfig-paths`                    |
| Types               | `typescript` 5, `@types/react`, `@types/react-dom`                         |
| Styling             | `tailwindcss` 3, `tailwindcss-animate`, `postcss`, `autoprefixer`          |
| Class composition   | `clsx`, `tailwind-merge`, `class-variance-authority`                       |
| Primitives          | `@radix-ui/react-*` (avatar, checkbox, dialog, label, popover, progress, radio-group, select, separator, slot, switch) |
| Icons               | `lucide-react` + the local `components/icons` set                          |
| Forms               | `react-hook-form`, `@hookform/resolvers`, `zod`                            |
| Dates               | `date-fns`, `react-day-picker`                                             |
| Charts              | `recharts`                                                                 |

---

## 10. Conventions cheat-sheet

- Imports use `@/...`, never `../../...`.
- Class strings flow through `cn()`.
- Variants are declared with `cva` and typed with `VariantProps`.
- Theme colors are HSL CSS variables; never hard-code hex except inside the `brand` palette.
- Dark mode is class-based (`<html class="dark">`).
- Icons default to 24px via `createIcon`; stroke defaults live on the root `<svg>`.
- `npm run build` is the source of truth for "does it compile?".

<p align="center">
  <img src="./public/ofi-design-system.svg" alt="OfiUI" width="180" />
</p>

# OfiUI

A React component library for [Ofi Services](https://ofiservices.com) — built on [shadcn/ui](https://ui.shadcn.com), [Radix UI](https://www.radix-ui.com), and [Tailwind CSS](https://tailwindcss.com). Gives every Ofi AI agent builder a consistent, premium frontend without writing bespoke UI code.

[![npm](https://img.shields.io/npm/v/@daivymoralesofi/ofiui)](https://www.npmjs.com/package/@daivymoralesofi/ofiui)

---

## Installation

```bash
npm install @daivymoralesofi/ofiui
# or
pnpm add @daivymoralesofi/ofiui
# or
yarn add @daivymoralesofi/ofiui
```

`react` and `react-dom` are peer dependencies (`^18` or `^19`).

---

## Setup

### 1 — Tailwind CSS

OfiUI requires Tailwind CSS. If your project doesn't have it yet:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2 — Tailwind preset

OfiUI ships a preset that contains the design tokens, color scales, and plugins the components rely on. Extend your `tailwind.config.js`:

```js
// tailwind.config.js
import ofiuiPreset from "@daivymoralesofi/ofiui/tailwind.preset"

export default {
  presets: [ofiuiPreset],
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    // Required — prevents Tailwind from purging OfiUI's class names
    "./node_modules/@daivymoralesofi/ofiui/dist/**/*.{js,mjs}",
  ],
}
```

### 3 — Stylesheet

Import the prebuilt stylesheet once at your app entry point (`main.tsx`, `_app.tsx`, `layout.tsx`, etc.) **before** your own global styles:

```ts
import "@daivymoralesofi/ofiui/styles.css"
```

This file contains the CSS-variable theme tokens (`--background`, `--foreground`, `--primary`, `--radius`, …) for both light and dark mode.

### 4 — Dark mode (optional)

Dark mode is class-based. Add the `dark` class to `<html>` or any ancestor:

```html
<html class="dark">
```

Or toggle it dynamically:

```ts
document.documentElement.classList.toggle("dark")
```

---

## Usage

```tsx
import { Button } from "@daivymoralesofi/ofiui"
import { Plus } from "lucide-react"

export function CreateButton() {
  return (
    <Button type="primary" icon={<Plus />}>
      Create agent
    </Button>
  )
}
```

All primitives, patterns, and icons are exported from the package root. Use autocomplete from `@daivymoralesofi/ofiui` to discover what's available.

The `cn()` class-merging helper is also exported:

```ts
import { cn } from "@daivymoralesofi/ofiui"

<div className={cn("px-3 py-2", isActive && "bg-accent", className)} />
```

---

## What's included

### Primitives (`ui/`)

Vendored shadcn/ui components built on Radix UI — Avatar, Badge, Button, Calendar, Card, Checkbox, Input, Label, Popover, Progress, Radio Group, Select, Separator, Sheet, Switch, Table, Textarea, and more.

### Patterns (`ui-patterns/`)

Higher-level compositions:

- **Charts** — compound-component chart toolkit on top of Recharts (`ChartCard`, `ChartLine`, `ChartBar`, `ChartMetric`, `LogsBarChart`, …)
- **Forms** — React Hook Form + Zod field arrays and item layouts
- **Admonition** — callout/banner with semantic variants
- **Multi-select** — Radix Popover + Command-style multi-selector
- **Metric card** — stat display with trend indicators
- **Data inputs** — higher-order form inputs

### Icons (`icons/`)

Custom SVG icons via the `createIcon` factory, plus `lucide-react` for generic glyphs.

---

## Button API

`Button` is the most expressive component in the system.

| Prop    | Values | Default |
|---------|--------|---------|
| `type`  | `primary` `default` `secondary` `outline` `dashed` `link` `text` `danger` `warning` | `primary` |
| `size`  | `tiny` `small` `default` `medium` `large` `huge` | `default` |
| `block` | `true` / `false` | `false` |

Additional props: `icon`, `iconRight`, `loading`, `loadingCentered`, `asChild`, `htmlType`.

```tsx
<Button type="primary" size="medium" icon={<Plus />}>Create</Button>
<Button type="outline" loading>Saving…</Button>
<Button asChild type="link"><a href="/docs">Read the docs</a></Button>
```

---

## Troubleshooting

**Components render without styles** — make sure you imported `@daivymoralesofi/ofiui/styles.css` and added `./node_modules/@daivymoralesofi/ofiui/dist/**/*.{js,mjs}` to your Tailwind `content` array.

**Dark colors don't apply** — confirm the `dark` class is on `<html>` and that `tailwind.config.js` has `darkMode: ["class"]`.

**TypeScript can't find the module** — ensure `moduleResolution` is `"bundler"` or `"node16"` in `tsconfig.json` so it resolves the package `exports` map.

---

## Local development

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Scripts

| Command | What it does |
|---------|-------------|
| `npm run dev` | Starts the Vite dev server with HMR |
| `npm run build` | Type-checks and builds the docs site |
| `npm run build:lib` | Builds the publishable library bundle to `dist/` |
| `npm run preview` | Serves the production build locally |

### Publish

`prepublishOnly` runs `build:lib` automatically. The published files are `dist/`, `tailwind.preset.js`, and `README.md`.

### Project structure

```text
src/
├── components/
│   ├── ui/              # Primitives (vendored shadcn/ui)
│   ├── ui-patterns/     # Compositions
│   └── icons/           # Custom SVG icons
├── docs/                # Living docs app (dev reference)
├── lib/
│   ├── utils.ts         # cn() helper
│   └── format.ts
├── App.tsx              # Docs app entry
├── LandingPage.tsx      # Marketing page
└── index.css            # Tailwind layers + CSS-variable tokens
```

Path alias `@/*` → `src/*`. Always import via `@/...`.

### Adding a new component

1. Pick the layer: primitive (`ui/`), composition (`ui-patterns/`), or icon (`icons/`).
2. For shadcn primitives: `npx shadcn@latest add <name>`, then align with system conventions.
3. Use CVA for variant-driven styling; reference colors via CSS-variable utilities (`bg-primary`, `text-foreground`).
4. Forward `ref`, set `displayName`, spread `className` last through `cn()`.
5. Add a usage example to the docs app and run `npm run build:lib` to confirm.

---

## License

Private — Ofi Services internal use.

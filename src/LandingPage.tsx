import {
  ArrowRight,
  Check,
  Code2,
  Layers,
  Palette,
  Shield,
  Terminal,
  Zap,
  Moon,
  Package,
} from "lucide-react"
import BrandLogo from "@/components/BrandLogo"
import { Admonition } from "@/components/ui-patterns/admonition"
import {
  Chart,
  ChartCard,
  ChartContent,
  ChartHeader,
  ChartTitle,
  ChartMetric,
  ChartLine,
  ChartBar,
} from "@/components/ui-patterns/chart"
import type { ChartTick } from "@/components/ui-patterns/chart"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

// ─── Shared helpers ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      {children}
    </p>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15]">
      {children}
    </h2>
  )
}

function SectionSub({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-relaxed text-muted-foreground max-w-lg">
      {children}
    </p>
  )
}

// ─── Code block ───────────────────────────────────────────────────────────────

function CodeBlock({
  label,
  useTerminal = false,
  children,
}: {
  label: string
  useTerminal?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-white/8 bg-[#0c0c0c] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6">
        {useTerminal ? (
          <Terminal className="h-3.5 w-3.5 text-white/25" />
        ) : (
          <Code2 className="h-3.5 w-3.5 text-white/25" />
        )}
        <span className="font-mono text-[11px] text-white/25">{label}</span>
      </div>
      <pre className="p-5 font-mono text-[13px] leading-7 overflow-x-auto">
        {children}
      </pre>
    </div>
  )
}

// ─── Hero preview — Analytics dashboard ──────────────────────────────────────

const revenueData: ChartTick[] = [
  { timestamp: "2026-03-01", revenue: 9200 },
  { timestamp: "2026-03-03", revenue: 11400 },
  { timestamp: "2026-03-05", revenue: 10100 },
  { timestamp: "2026-03-08", revenue: 13200 },
  { timestamp: "2026-03-10", revenue: 12400 },
  { timestamp: "2026-03-12", revenue: 15600 },
  { timestamp: "2026-03-14", revenue: 14200 },
  { timestamp: "2026-03-17", revenue: 16800 },
  { timestamp: "2026-03-19", revenue: 15400 },
  { timestamp: "2026-03-21", revenue: 18900 },
  { timestamp: "2026-03-23", revenue: 17600 },
  { timestamp: "2026-03-25", revenue: 20100 },
  { timestamp: "2026-03-27", revenue: 21800 },
  { timestamp: "2026-03-29", revenue: 20400 },
  { timestamp: "2026-03-31", revenue: 23600 },
]

const usersData: ChartTick[] = [
  { timestamp: "2026-03-18", users: 1840 },
  { timestamp: "2026-03-19", users: 2210 },
  { timestamp: "2026-03-20", users: 1980 },
  { timestamp: "2026-03-21", users: 2560 },
  { timestamp: "2026-03-22", users: 890  },
  { timestamp: "2026-03-23", users: 760  },
  { timestamp: "2026-03-24", users: 2940 },
  { timestamp: "2026-03-25", users: 3120 },
  { timestamp: "2026-03-26", users: 2880 },
  { timestamp: "2026-03-27", users: 3400 },
  { timestamp: "2026-03-28", users: 1020 },
  { timestamp: "2026-03-29", users: 1100 },
  { timestamp: "2026-03-30", users: 3760 },
  { timestamp: "2026-03-31", users: 3580 },
]

const recentActivity = [
  { name: "New subscription",  plan: "Pro",       amount: "+$49",  time: "2m ago"  },
  { name: "Churn detected",    plan: "Starter",   amount: "-$19",  time: "14m ago" },
  { name: "New subscription",  plan: "Business",  amount: "+$149", time: "31m ago" },
  { name: "Plan upgrade",      plan: "Pro → Biz", amount: "+$100", time: "1h ago"  },
]

function HeroPreview() {
  return (
    <div className="rounded-2xl border border-white/8 bg-[#111111] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-white/6 bg-[#0d0d0d]">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/40" />
        <span className="ml-auto font-mono text-[11px] text-white/20">
          analytics · March 2026
        </span>
      </div>

      <div className="dark bg-[#111111] p-4 space-y-3 relative">
        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 z-10 rounded-b-2xl bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent" />

        {/* KPI metrics row */}
        <div className="grid grid-cols-3 gap-3">
          <ChartCard>
            <div className="px-4 py-3">
              <ChartMetric label="Revenue" value="$23.6k" diffValue="+18.4%" status="positive" />
            </div>
          </ChartCard>
          <ChartCard>
            <div className="px-4 py-3">
              <ChartMetric label="Active users" value="3,580" diffValue="+12.1%" status="positive" />
            </div>
          </ChartCard>
          <ChartCard>
            <div className="px-4 py-3">
              <ChartMetric label="Churn rate" value="1.8%" diffValue="-0.4%" status="positive" />
            </div>
          </ChartCard>
        </div>

        {/* Line chart + activity */}
        <div className="grid grid-cols-5 gap-3">
          <ChartCard className="col-span-3">
            <ChartHeader align="start">
              <ChartTitle>Revenue trend</ChartTitle>
              <div className="flex gap-1">
                <Badge variant="default" className="text-[10px] cursor-pointer">30d</Badge>
                <Badge variant="outline" className="text-[10px] cursor-pointer">7d</Badge>
              </div>
            </ChartHeader>
            <Chart>
              <ChartContent>
                <ChartLine
                  data={revenueData}
                  dataKey="revenue"
                  showGrid
                  showYAxis
                  className="h-32"
                  YAxisProps={{
                    tickFormatter: (v) => `$${(v / 1000).toFixed(0)}k`,
                    width: 36,
                  }}
                />
              </ChartContent>
            </Chart>
          </ChartCard>

          <ChartCard className="col-span-2">
            <ChartHeader align="start">
              <ChartTitle>Recent activity</ChartTitle>
            </ChartHeader>
            <div className="px-4 pb-3 pt-2 space-y-2">
              {recentActivity.map((item) => (
                <div key={item.time + item.name} className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-foreground truncate leading-snug">
                      {item.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{item.plan}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className={`text-xs font-semibold tabular-nums ${
                      item.amount.startsWith("+") ? "text-brand" : "text-destructive"
                    }`}>
                      {item.amount}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>

        {/* Bar chart */}
        <ChartCard>
          <ChartHeader align="start">
            <ChartTitle>Daily active users</ChartTitle>
            <Badge variant="success" className="text-[10px]">+12.1% vs last period</Badge>
          </ChartHeader>
          <Chart>
            <ChartContent>
              <ChartBar
                data={usersData}
                dataKey="users"
                showGrid
                showYAxis
                className="h-24"
                YAxisProps={{
                  tickFormatter: (v) => `${(v / 1000).toFixed(1)}k`,
                  width: 36,
                }}
              />
            </ChartContent>
          </Chart>
        </ChartCard>
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero({ onEnterDocs }: { onEnterDocs: () => void }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#070707",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Glows */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{ background: "hsl(45,93%,47%)", opacity: 0.08 }}
      />

      {/* Nav */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-5 border-b border-white/5">
        <BrandLogo imageClassName="h-9" />
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-sm text-white/30 font-medium">
            Open Source · MIT
          </span>
          <Button type="outline" size="small" onClick={onEnterDocs}>
            Browse components
          </Button>
        </div>
      </nav>

      {/* Copy */}
      <div className="relative z-10 mx-auto max-w-4xl px-8 pt-24 pb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-xs font-medium text-primary mb-9">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          React 18 · TypeScript · Tailwind CSS · Radix UI
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-bold leading-[1.04] tracking-tight mb-6">
          <span className="bg-gradient-to-b from-white via-white/90 to-white/55 bg-clip-text text-transparent">
            The design system
            <br />
            built for modern
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-amber-300 to-yellow-400 bg-clip-text text-transparent">
            software products.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/45 leading-relaxed max-w-2xl mx-auto mb-10">
          A complete, accessible, and composable component library assembled on
          top of shadcn/ui, Radix UI, and Tailwind CSS. Copy what you need and
          make it yours.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Button
            type="primary"
            size="large"
            iconRight={<ArrowRight />}
            onClick={onEnterDocs}
          >
            Browse components
          </Button>
          <Button type="outline" size="large">
            View on GitHub
          </Button>
        </div>
      </div>

      {/* Preview */}
      <div className="relative z-10 mx-auto max-w-5xl px-8 pb-0">
        <HeroPreview />
      </div>

      {/* Fade to bg */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

// ─── Stats strip ─────────────────────────────────────────────────────────────

function StatsStrip() {
  const stats = [
    { value: "44+", label: "UI primitives" },
    { value: "15",  label: "Pattern components" },
    { value: "13",  label: "Custom icons" },
    { value: "3",   label: "Composable layers" },
    { value: "100%",label: "Accessible" },
  ]

  return (
    <div className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-8 py-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <div key={s.label} className="relative text-center">
              {i > 0 && (
                <div className="absolute -left-4 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-border lg:block" />
              )}
              <div className="text-3xl font-bold tracking-tight text-foreground">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── About / Architecture ─────────────────────────────────────────────────────

function About() {
  const layers = [
    {
      icon: Package,
      label: "Layer 1 — Primitives",
      name: "components/ui/",
      description:
        "Vendored shadcn/ui components built on Radix UI. Copied directly into your project so you own the source — edit freely, no dependency lock-in.",
      items: ["Button", "Input", "Badge", "Dialog", "Select", "Table", "Tabs", "…and 37 more"],
    },
    {
      icon: Layers,
      label: "Layer 2 — Patterns",
      name: "components/ui-patterns/",
      description:
        "Opinionated compositions that wire up react-hook-form, recharts, or custom logic on top of the primitives. Higher-level building blocks ready to drop in.",
      items: ["Chart toolkit", "Multi-select", "Admonition", "Form layouts", "Data inputs", "Metric card"],
    },
    {
      icon: Zap,
      label: "Layer 3 — Icons",
      name: "components/icons/",
      description:
        "Custom SVG icons via a createIcon factory. Every icon defaults to 24px, inherits stroke from currentColor, and accepts all standard SVG props.",
      items: ["TableEditor", "Reports", "SQL", "Auth", "Functions", "…and more"],
    },
  ]

  return (
    <section className="py-28 px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <SectionLabel>About the project</SectionLabel>
          <div className="mt-4 mb-5">
            <SectionHeading>
              One system.
              <br />
              Three composable layers.
            </SectionHeading>
          </div>
          <SectionSub>
            OFI Design System is a React + TypeScript component library that
            provides everything you need to build consistent, accessible product
            interfaces — from low-level primitives to high-level patterns.
          </SectionSub>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {layers.map((layer) => (
            <div
              key={layer.label}
              className="group rounded-2xl border border-border bg-card p-7 space-y-5 transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <layer.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {layer.label}
                  </p>
                  <code className="text-xs font-mono text-foreground/70">
                    {layer.name}
                  </code>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {layer.description}
              </p>

              <ul className="space-y-1.5">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              heading: "Own your components",
              body: "Components are copied into the repo, not imported from a package. No version conflicts, no breaking upgrades — you control the source.",
            },
            {
              heading: "Semantic design tokens",
              body: "All colors are HSL CSS variables mapped to Tailwind utilities. Dark mode, brand theming, and overrides work with zero JavaScript.",
            },
            {
              heading: "Type-safe by default",
              body: "CVA powers every variant-bearing component so all props are fully typed. Autocompletion and inline docs come out of the box.",
            },
          ].map(({ heading, body }) => (
            <div key={heading} className="space-y-2">
              <h4 className="text-sm font-semibold">{heading}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Features ────────────────────────────────────────────────────────────────

function Features() {
  const features = [
    {
      icon: Shield,
      title: "Accessible by default",
      description:
        "Every component follows WAI-ARIA patterns via Radix UI. Keyboard navigation, focus management, and screen reader support come out of the box.",
      tag: "WAI-ARIA",
    },
    {
      icon: Palette,
      title: "Fully themeable",
      description:
        "Theming is driven by HSL CSS custom properties. Swap the entire color palette from a single set of variables in index.css. Dark mode is class-based and included.",
      tag: "CSS variables",
    },
    {
      icon: Code2,
      title: "Type-safe throughout",
      description:
        "First-class TypeScript with strict prop types. Variants are declared with class-variance-authority so every variant and combination is inferred and autocompleted.",
      tag: "TypeScript",
    },
    {
      icon: Layers,
      title: "Composable primitives",
      description:
        "Small, focused components that combine naturally into complex patterns. Each layer only depends on the layer below it — use the pieces you need, skip the rest.",
      tag: "Composable",
    },
  ]

  return (
    <section className="py-28 px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <SectionLabel>Why OFI Design</SectionLabel>
          <div className="mt-4 mb-5">
            <SectionHeading>Built on solid foundations.</SectionHeading>
          </div>
          <SectionSub>
            Every decision made to help you ship faster without sacrificing
            quality, consistency, or accessibility.
          </SectionSub>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-7 space-y-5 transition-all duration-200 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between">
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <f.icon className="h-4 w-4 text-primary" />
                </div>
                <Badge variant="outline" className="text-[10px]">{f.tag}</Badge>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold leading-snug">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Getting started ──────────────────────────────────────────────────────────

function GettingStarted() {
  return (
    <section
      className="relative overflow-hidden py-28 px-8"
      style={{
        backgroundColor: "#080808",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[120px]"
        style={{ background: "hsl(45,93%,47%)", opacity: 0.07 }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 items-start lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <SectionLabel>Getting started</SectionLabel>
              <div className="mt-4 mb-5">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-white">
                  Up and running
                  <br />
                  in minutes.
                </h2>
              </div>
              <p className="text-base leading-relaxed text-white/45 max-w-md">
                Clone the repo, install dependencies, and the dev server is
                ready. Every component is local source — copy, rename, and
                adapt without constraints.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  step: "01",
                  title: "Install dependencies",
                  detail: "npm install sets up Vite, Tailwind, Radix UI, and the entire component stack.",
                },
                {
                  step: "02",
                  title: "Start the dev server",
                  detail: "npm run dev launches the component showcase at localhost:5173 with full HMR.",
                },
                {
                  step: "03",
                  title: "Import and build",
                  detail: "Import components via the @/ alias. Run npm run build to type-check and bundle.",
                },
              ].map(({ step, title, detail }) => (
                <div key={step} className="flex gap-5">
                  <div className="shrink-0 w-8 h-8 rounded-full border border-primary/30 bg-primary/8 flex items-center justify-center">
                    <span className="font-mono text-[10px] font-bold text-primary">{step}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/80">{title}</p>
                    <p className="text-sm text-white/35 mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <CodeBlock label="terminal" useTerminal>
              <span className="text-white/25">$</span>
              <span className="text-white/70"> git clone</span>
              <span className="text-primary/70"> https://github.com/…/ofi-design-system</span>
              {"\n"}
              <span className="text-white/25">$</span>
              <span className="text-white/70"> npm install</span>
              {"\n"}
              <span className="text-white/25">$</span>
              <span className="text-white/70"> npm run dev</span>
              {"\n\n"}
              <span className="text-white/20">{"  "}VITE v5 ready in 342ms</span>
              {"\n"}
              <span className="text-white/20">{"  "}➜ Local: http://localhost:5173/</span>
            </CodeBlock>

            <CodeBlock label="button.usage.tsx">
              <span className="text-primary/60">import</span>
              <span className="text-white/65"> {"{ Button }"} </span>
              <span className="text-primary/60">from</span>
              <span className="text-amber-300/60"> "@/components/ui/button"</span>
              {"\n"}
              <span className="text-primary/60">import</span>
              <span className="text-white/65"> {"{ Badge }"} </span>
              <span className="text-primary/60">from</span>
              <span className="text-amber-300/60"> "@/components/ui/badge"</span>
              {"\n\n"}
              <span className="text-primary/60">export function</span>
              <span className="text-white/80"> MyPage</span>
              <span className="text-white/50">() {"{"}</span>
              {"\n"}
              <span className="text-white/50">{"  "}return (</span>
              {"\n"}
              <span className="text-white/50">{"    <"}</span>
              <span className="text-primary/70">Button</span>
              <span className="text-amber-300/60"> type</span>
              <span className="text-white/50">="</span>
              <span className="text-white/70">primary</span>
              <span className="text-white/50">" </span>
              <span className="text-amber-300/60">size</span>
              <span className="text-white/50">="</span>
              <span className="text-white/70">large</span>
              <span className="text-white/50">{">"}</span>
              {"\n"}
              <span className="text-white/50">{"      "}</span>
              <span className="text-white/65">Get started</span>
              {"\n"}
              <span className="text-white/50">{"    </"}</span>
              <span className="text-primary/70">Button</span>
              <span className="text-white/50">{">"}</span>
              {"\n"}
              <span className="text-white/50">{"  })"}</span>
              {"\n"}
              <span className="text-white/50">{"}"}</span>
            </CodeBlock>

            <CodeBlock label="index.css — tokens">
              <span className="text-white/35">:root {"{"}</span>
              {"\n"}
              <span className="text-white/35">{"  "}</span>
              <span className="text-primary/60">--background</span>
              <span className="text-white/35">: </span>
              <span className="text-white/60">0 0% 100%</span>
              <span className="text-white/35">;</span>
              {"\n"}
              <span className="text-white/35">{"  "}</span>
              <span className="text-primary/60">--foreground</span>
              <span className="text-white/35">: </span>
              <span className="text-white/60">0 0% 9%</span>
              <span className="text-white/35">;</span>
              {"\n"}
              <span className="text-white/35">{"  "}</span>
              <span className="text-primary/60">--primary</span>
              <span className="text-white/35">: </span>
              <span className="text-amber-300/70">45 93% 47%</span>
              <span className="text-white/35">;</span>
              {"\n"}
              <span className="text-white/35">{"  "}</span>
              <span className="text-primary/60">--radius</span>
              <span className="text-white/35">: </span>
              <span className="text-white/60">0.5rem</span>
              <span className="text-white/35">;</span>
              {"\n"}
              <span className="text-white/35">{"  "}/* … */</span>
              {"\n"}
              <span className="text-white/35">{"}"}</span>
              {"\n\n"}
              <span className="text-white/25">.dark {"{"}</span>
              <span className="text-white/20"> /* same keys, dark values */ </span>
              <span className="text-white/25">{"}"}</span>
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Component showcase ───────────────────────────────────────────────────────

function ComponentShowcase() {
  return (
    <section
      className="dark relative overflow-hidden py-28 px-8"
      style={{
        backgroundColor: "#090909",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <SectionLabel>Component library</SectionLabel>
          <div className="mt-4 mb-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-foreground">
              Every component you need.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground max-w-lg">
            Handcrafted to work together — from simple inputs to complex
            visualisations. Live, interactive, and styled with your tokens.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="sm:col-span-2 lg:col-span-2">
            <CardContent className="p-6 space-y-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Button</p>
              <div className="space-y-2.5">
                <div className="flex flex-wrap gap-2">
                  <Button type="primary" size="small">Primary</Button>
                  <Button type="default" size="small">Default</Button>
                  <Button type="secondary" size="small">Secondary</Button>
                  <Button type="outline" size="small">Outline</Button>
                  <Button type="dashed" size="small">Dashed</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button type="warning" size="small">Warning</Button>
                  <Button type="danger" size="small">Danger</Button>
                  <Button type="text" size="small">Ghost</Button>
                  <Button type="link" size="small">Link</Button>
                  <Button type="primary" size="small" loading>Loading</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Badge</p>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Input</p>
              <div className="space-y-2.5">
                <div className="space-y-1">
                  <Label className="text-xs" htmlFor="sc-email">Email address</Label>
                  <Input id="sc-email" placeholder="you@example.com" type="email" />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs" htmlFor="sc-pass">Password</Label>
                  <Input id="sc-pass" placeholder="••••••••" type="password" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Progress</p>
              <div className="space-y-3">
                {[24, 51, 72, 91].map((v) => (
                  <div key={v} className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Storage used</span>
                      <span>{v}%</span>
                    </div>
                    <Progress value={v} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Controls</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-xs">Email notifications</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-xs">Dark mode</Label>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center gap-2">
                  <Checkbox id="lp-cb1" defaultChecked />
                  <Label htmlFor="lp-cb1" className="text-xs">Remember me</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="lp-cb2" />
                  <Label htmlFor="lp-cb2" className="text-xs">Subscribe to updates</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Avatar</p>
              <div className="space-y-5">
                <div className="flex -space-x-2">
                  {["DM", "JD", "SK", "AB", "TK"].map((initials, i) => (
                    <Avatar key={initials} className="h-8 w-8 border-2 border-card" style={{ zIndex: 5 - i }}>
                      <AvatarFallback className="text-[10px]">{initials}</AvatarFallback>
                    </Avatar>
                  ))}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-muted text-[10px] text-muted-foreground" style={{ zIndex: 0 }}>
                    +12
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>DM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Daivy Morales</p>
                    <p className="text-xs text-muted-foreground">Admin</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// ─── Theming section ──────────────────────────────────────────────────────────

function ThemingSection() {
  const tokens = [
    { name: "--background",  value: "0 0% 100%",   swatch: "bg-white border"    },
    { name: "--foreground",  value: "0 0% 9%",     swatch: "bg-neutral-900"     },
    { name: "--primary",     value: "45 93% 47%",  swatch: "bg-amber-500"       },
    { name: "--card",        value: "0 0% 100%",   swatch: "bg-white border"    },
    { name: "--muted",       value: "0 0% 96%",    swatch: "bg-neutral-100 border" },
    { name: "--destructive", value: "0 74% 42%",   swatch: "bg-red-700"         },
  ]

  return (
    <section className="py-28 px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 items-start lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <SectionLabel>Theming</SectionLabel>
              <div className="mt-4 mb-5">
                <SectionHeading>
                  One palette.
                  <br />
                  Every mode.
                </SectionHeading>
              </div>
              <SectionSub>
                All colors are HSL CSS custom properties declared in index.css
                and mapped to Tailwind utilities. Adding a new theme means
                changing a single file — no JavaScript required.
              </SectionSub>
            </div>

            <ul className="space-y-3">
              {[
                {
                  icon: Moon,
                  title: "Dark mode built in",
                  detail: "Class-based toggle. Add dark to any ancestor and all semantic utilities flip instantly.",
                },
                {
                  icon: Palette,
                  title: "Semantic utilities",
                  detail: "Use bg-background, text-foreground, border-border — never hard-code hex values.",
                },
                {
                  icon: Zap,
                  title: "Static brand palette",
                  detail: "The brand-* scale is reserved for logos and marketing surfaces, not theme-sensitive UI.",
                },
              ].map(({ icon: Icon, title, detail }) => (
                <li key={title} className="flex items-start gap-3">
                  <div className="shrink-0 h-7 w-7 rounded-md bg-primary/10 flex items-center justify-center mt-0.5">
                    <Icon className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="px-5 py-4 border-b border-border flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Design tokens
              </p>
              <Badge variant="outline" className="text-[10px]">index.css</Badge>
            </div>
            <div className="divide-y divide-border">
              {tokens.map(({ name, value, swatch }) => (
                <div
                  key={name}
                  className="flex items-center justify-between px-5 py-3 hover:bg-muted/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-5 w-5 rounded shrink-0 ${swatch}`} />
                    <code className="text-xs font-mono text-foreground">{name}</code>
                  </div>
                  <code className="text-xs font-mono text-muted-foreground">{value}</code>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 border-t border-border bg-muted/30">
              <p className="text-xs text-muted-foreground">
                + 18 more tokens in <code className="font-mono">index.css</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Patterns section ─────────────────────────────────────────────────────────

function PatternsSection({ onEnterDocs }: { onEnterDocs: () => void }) {
  return (
    <section className="py-28 px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-7">
            <div>
              <SectionLabel>Patterns</SectionLabel>
              <div className="mt-4 mb-5">
                <SectionHeading>
                  Smart compositions,
                  <br />
                  ready to use.
                </SectionHeading>
              </div>
              <SectionSub>
                Beyond primitives — higher-level patterns like{" "}
                <span className="font-medium text-foreground">Admonition</span>,{" "}
                <span className="font-medium text-foreground">Multi-select</span>, and{" "}
                <span className="font-medium text-foreground">Chart toolkit</span>{" "}
                give you consistent callouts, selectors, and data visualisations
                without wiring things up from scratch.
              </SectionSub>
            </div>

            <ul className="space-y-2 text-sm">
              {[
                "Admonition — 3 semantic types, 3 layouts",
                "Chart toolkit — compound API over recharts",
                "Multi-select — Radix Popover + Command",
                "Form layouts — react-hook-form field arrays",
                "Metric card, empty state, error display",
                "Inner side menu, page layout, filter bar",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <Button type="default" iconRight={<ArrowRight />} onClick={onEnterDocs}>
              Browse all patterns
            </Button>
          </div>

          <div className="space-y-3">
            <Admonition
              type="default"
              layout="horizontal"
              title="OAuth Server is disabled"
              description="Enable OAuth Server to make your project act as an identity provider for third-party applications."
              actions={<Button type="default" size="small">Settings</Button>}
            />
            <Admonition
              type="warning"
              layout="horizontal"
              title="Set up custom SMTP"
              description="You're using the built-in email service. This service has rate limits that may affect delivery."
              actions={<Button type="default" size="small">Set up SMTP</Button>}
            />
            <Admonition
              type="destructive"
              layout="horizontal"
              title="This action is irreversible"
              description="All project data will be permanently deleted from our servers."
              actions={<Button type="danger" size="small">Delete project</Button>}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function CTASection({ onEnterDocs }: { onEnterDocs: () => void }) {
  return (
    <section
      className="relative overflow-hidden py-32 px-8"
      style={{
        backgroundColor: "#070707",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{ background: "hsl(45,93%,47%)", opacity: 0.18 }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center space-y-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Open source · MIT License
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Start building today.
          </h2>
          <p className="text-lg text-white/40 leading-relaxed max-w-lg mx-auto">
            Free and open source. Copy the components you need, adapt them to
            your brand, and ship with confidence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <Button type="primary" size="large" iconRight={<ArrowRight />} onClick={onEnterDocs}>
            Browse components
          </Button>
          <Button type="outline" size="large">
            View on GitHub
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 pt-2">
          {[
            { icon: Package, label: "npm install" },
            { icon: Code2,   label: "TypeScript first" },
            { icon: Shield,  label: "WAI-ARIA" },
            { icon: Moon,    label: "Dark mode" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-xs text-white/25">
              <Icon className="h-3.5 w-3.5" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const links = [
    { group: "System",  items: ["Components", "Patterns", "Icons", "Theming"] },
    { group: "Stack",   items: ["React 18", "TypeScript 5", "Tailwind CSS 3", "Radix UI"] },
    { group: "Project", items: ["GitHub", "MIT License", "Changelog", "Contributing"] },
  ]

  return (
    <footer
      className="border-t px-8 pt-14 pb-10"
      style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "#070707" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-14">
          <div className="space-y-4">
            <BrandLogo imageClassName="h-8" />
            <p className="text-sm text-white/30 leading-relaxed max-w-xs">
              A React + TypeScript design system built on top of shadcn/ui,
              Radix UI, and Tailwind CSS.
            </p>
            <p className="text-xs text-white/20">MIT License · Open Source</p>
          </div>

          {links.map(({ group, items }) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/25 mb-4">
                {group}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <span className="text-sm text-white/35 hover:text-white/60 transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator style={{ backgroundColor: "rgba(255,255,255,0.05)" }} className="mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">
            Built with React · TypeScript · Tailwind CSS · Radix UI
          </p>
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} OFI Design System
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── Landing page ─────────────────────────────────────────────────────────────

export function LandingPage({ onEnterDocs }: { onEnterDocs: () => void }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero onEnterDocs={onEnterDocs} />
      <StatsStrip />
      <About />
      <Features />
      <GettingStarted />
      <ComponentShowcase />
      <ThemingSection />
      <PatternsSection onEnterDocs={onEnterDocs} />
      <CTASection onEnterDocs={onEnterDocs} />
      <Footer />
    </div>
  )
}

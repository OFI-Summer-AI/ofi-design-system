import { ArrowRight, Check, Code2, Layers, Palette, Shield, TrendingUp } from "lucide-react"
import { Admonition } from "@/components/ui-patterns/admonition"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"

// ─── Shared ───────────────────────────────────────────────────────────────────

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(234,179,8,0.4)]">
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary-foreground" fill="currentColor">
          <path d="M13.8 2L3 14h8l-.8 8 10.8-12h-8z" />
        </svg>
      </div>
      <span className={`text-sm font-semibold tracking-tight ${light ? "text-white" : "text-foreground"}`}>
        ofi / design
      </span>
    </div>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroPreview() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#161616] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8 bg-[#121212]">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
        <span className="ml-auto font-mono text-[11px] text-white/30">dashboard.tsx</span>
      </div>

      {/* Inner app — wraps in dark so components auto-use dark tokens */}
      <div className="dark p-5 space-y-4 bg-[#161616]">
        {/* Badge row */}
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="success">Paid</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="destructive">Refunded</Badge>
          <Badge variant="default">Active</Badge>
        </div>

        {/* Stat card */}
        <Card>
          <CardContent className="p-4 space-y-2.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Revenue</span>
              <span className="font-semibold">$48,249</span>
            </div>
            <Progress value={72} />
            <div className="flex items-center gap-1 text-xs text-brand">
              <TrendingUp className="h-3 w-3" />
              <span>12.4% vs last month</span>
            </div>
          </CardContent>
        </Card>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2">
          <Button type="primary" size="small">Deploy</Button>
          <Button type="default" size="small">Preview</Button>
          <Button type="outline" size="small">Cancel</Button>
        </div>

        {/* Admonition */}
        <Admonition
          type="warning"
          title="OAuth Server is disabled"
          description="Enable OAuth Server to make your project act as an identity provider for third-party apps."
        />
      </div>
    </div>
  )
}

function Hero({ onEnterDocs }: { onEnterDocs: () => void }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#080808",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute right-[15%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full blur-[140px]"
        style={{ background: "hsl(45,93%,47%)", opacity: 0.12 }}
      />
      <div
        className="pointer-events-none absolute left-[10%] bottom-0 h-[300px] w-[300px] rounded-full blur-[100px]"
        style={{ background: "hsl(45,93%,47%)", opacity: 0.06 }}
      />

      {/* Nav */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Logo light />
        <Button type="outline" size="small" onClick={onEnterDocs}>
          Browse components
        </Button>
      </nav>

      {/* Hero body */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 pb-28 pt-16">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left — copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Open Source · MIT License
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl font-bold leading-[1.08] tracking-tight bg-gradient-to-br from-white via-white/90 to-primary bg-clip-text text-transparent">
                The design system built for modern products.
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-white/50">
                A complete set of accessible, composable UI components and
                patterns — built on React, Tailwind CSS, and Radix UI
                primitives.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
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

            <div className="flex flex-wrap items-center gap-5 text-xs text-white/35">
              {["React 18", "TypeScript", "Tailwind CSS", "Radix UI"].map((tech) => (
                <div key={tech} className="flex items-center gap-1.5">
                  <Check className="h-3 w-3 text-primary" />
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Right — live preview */}
          <div className="relative">
            <HeroPreview />
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
    </section>
  )
}

// ─── Stats strip ─────────────────────────────────────────────────────────────

function StatsStrip() {
  const stats = [
    { label: "Components", value: "19" },
    { label: "Patterns", value: "3" },
    { label: "Custom icons", value: "11" },
    { label: "Accessible", value: "100%" },
  ]

  return (
    <div className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-8 py-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="relative text-center">
              {i > 0 && (
                <div className="absolute -left-4 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-border sm:block" />
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

// ─── Features ────────────────────────────────────────────────────────────────

function Features() {
  const features = [
    {
      icon: Shield,
      title: "Accessible by default",
      description:
        "Every component follows WAI-ARIA patterns via Radix UI. Keyboard navigation and screen reader support come out of the box.",
    },
    {
      icon: Palette,
      title: "Fully themeable",
      description:
        "Built on CSS custom properties. Swap the entire color palette from a single set of variables. Dark mode included.",
    },
    {
      icon: Code2,
      title: "Type-safe throughout",
      description:
        "First-class TypeScript with strict prop types, autocompletion, and inline docs on every component and pattern.",
    },
    {
      icon: Layers,
      title: "Composable primitives",
      description:
        "Small, focused components that combine naturally into complex patterns. Use the pieces you need, skip the rest.",
    },
  ]

  return (
    <section className="py-24 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-xl space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Why ofi design
          </p>
          <h2 className="text-3xl font-bold tracking-tight">
            Built on solid foundations
          </h2>
          <p className="text-muted-foreground">
            Every decision made to help you ship faster without sacrificing
            quality or accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-border bg-card p-6 space-y-4 transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                <f.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Component showcase ───────────────────────────────────────────────────────

function ComponentShowcase() {
  return (
    <section
      className="dark relative overflow-hidden py-24 px-8"
      style={{
        backgroundColor: "#090909",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-xl space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Component library
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Every component you need
          </h2>
          <p className="text-muted-foreground">
            Handcrafted to work together — from simple inputs to complex
            visualisations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Buttons — spans 2 cols */}
          <Card className="sm:col-span-2 lg:col-span-2">
            <CardContent className="p-6 space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Button
              </p>
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

          {/* Badges */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Badge
              </p>
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

          {/* Input */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Input
              </p>
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

          {/* Progress */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Progress
              </p>
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

          {/* Controls */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Controls
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-xs">Email notifications</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-xs">Dark mode</Label>
                  <Switch />
                </div>
                <div className="flex items-center gap-2 pt-1">
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

          {/* Avatar */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Avatar
              </p>
              <div className="space-y-5">
                {/* Stacked row */}
                <div className="flex -space-x-2">
                  {["DM", "JD", "SK", "AB", "TK"].map((initials, i) => (
                    <Avatar
                      key={initials}
                      className="h-8 w-8 border-2 border-card"
                      style={{ zIndex: 5 - i }}
                    >
                      <AvatarFallback className="text-[10px]">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-muted text-[10px] text-muted-foreground"
                    style={{ zIndex: 0 }}
                  >
                    +12
                  </div>
                </div>
                {/* Profile row */}
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

// ─── Admonition highlight ─────────────────────────────────────────────────────

function AdmonitionHighlight({ onEnterDocs }: { onEnterDocs: () => void }) {
  return (
    <section className="py-24 px-8 bg-muted/40">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left — copy */}
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Patterns
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Smart patterns, ready to use.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Beyond primitives — higher-level patterns like{" "}
              <span className="font-medium text-foreground">Admonition</span>{" "}
              give you consistent callouts, multi-selects, and chart layouts
              without wiring things up from scratch.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Three semantic types: default, warning, destructive",
                "Horizontal, vertical, and container-responsive layouts",
                "Sandwiched inside Card or Dialog with no extra markup",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button type="default" iconRight={<ArrowRight />} onClick={onEnterDocs}>
              Browse all patterns
            </Button>
          </div>

          {/* Right — live demos */}
          <div className="space-y-3">
            <Admonition
              type="default"
              layout="horizontal"
              title="OAuth Server is disabled"
              description="Enable OAuth Server to make your project act as an identity provider for third-party applications."
              actions={
                <Button type="default" size="small">
                  Settings
                </Button>
              }
            />
            <Admonition
              type="warning"
              layout="horizontal"
              title="Set up custom SMTP"
              description="You're using the built-in email service. This service has rate limits."
              actions={
                <Button type="default" size="small">
                  Set up SMTP
                </Button>
              }
            />
            <Admonition
              type="destructive"
              layout="horizontal"
              title="This action is irreversible"
              description="All project data will be permanently deleted from our servers."
              actions={
                <Button type="danger" size="small">
                  Delete
                </Button>
              }
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
      className="relative overflow-hidden py-28 px-8"
      style={{
        backgroundColor: "#080808",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Central glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{ background: "hsl(45,93%,47%)", opacity: 0.18 }}
      />

      <div className="relative z-10 mx-auto max-w-2xl space-y-7 text-center">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Start building today.
          </h2>
          <p className="text-lg text-white/45">
            Open source and free to use. Copy the components you need and make
            them yours.
          </p>
        </div>
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
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="border-t px-8 py-8"
      style={{ borderColor: "rgba(255,255,255,0.07)", backgroundColor: "#080808" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Logo light />
        <p className="text-xs text-white/30">
          Built with React · TypeScript · Tailwind CSS · Radix UI
        </p>
        <p className="text-xs text-white/30">MIT License</p>
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
      <Features />
      <ComponentShowcase />
      <AdmonitionHighlight onEnterDocs={onEnterDocs} />
      <CTASection onEnterDocs={onEnterDocs} />
      <Footer />
    </div>
  )
}

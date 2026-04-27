import { useEffect, useRef, useState } from "react"
import { LandingPage } from "@/LandingPage"
import BrandLogo from "@/components/BrandLogo"
import DocsApp from "@/docs/DocsApp"
import {
  BarChart2,
  Bell,
  ChevronRight,
  ExternalLink,
  Mail,
  Search,
  TrendingDown,
  TrendingUp,
  Users,
  ShoppingCart,
  AtSign,
  Globe,
} from "lucide-react"
import {
  Chart,
  ChartActions,
  ChartBar,
  ChartCard,
  ChartContent,
  ChartEmptyState,
  ChartHeader,
  ChartLine,
  ChartLoadingState,
  ChartMetric,
  ChartTitle,
  LogsBarChart,
} from "@/components/ui-patterns/chart"
import { Admonition } from "@/components/ui-patterns/admonition"
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui-patterns/multi-select"
import {
  Auth,
  BucketAdd,
  Database,
  EdgeFunctions,
  Home,
  InsertCode,
  Reports,
  ReplaceCode,
  SqlEditor,
  Storage,
  TableEditor,
} from "@/components/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

// ─── Types ───────────────────────────────────────────────────────────────────

type PageId =
  | "introduction"
  | "avatar"
  | "badge"
  | "button"
  | "card"
  | "checkbox"
  | "input"
  | "input-group"
  | "label"
  | "progress"
  | "radio-group"
  | "select"
  | "separator"
  | "switch"
  | "table"
  | "textarea"
  | "admonition"
  | "charts"
  | "multi-select"
  | "icons"

interface NavItem {
  id: PageId
  label: string
}

interface NavGroup {
  title: string
  items: NavItem[]
}

// ─── Sidebar navigation ───────────────────────────────────────────────────────

const navGroups: NavGroup[] = [
  {
    title: "Getting Started",
    items: [{ id: "introduction", label: "Introduction" }],
  },
  {
    title: "Components",
    items: [
      { id: "avatar", label: "Avatar" },
      { id: "badge", label: "Badge" },
      { id: "button", label: "Button" },
      { id: "card", label: "Card" },
      { id: "checkbox", label: "Checkbox" },
      { id: "input", label: "Input" },
      { id: "input-group", label: "Input Group" },
      { id: "label", label: "Label" },
      { id: "progress", label: "Progress" },
      { id: "radio-group", label: "Radio Group" },
      { id: "select", label: "Select" },
      { id: "separator", label: "Separator" },
      { id: "switch", label: "Switch" },
      { id: "table", label: "Table" },
      { id: "textarea", label: "Textarea" },
    ],
  },
  {
    title: "Patterns",
    items: [
      { id: "admonition", label: "Admonition" },
      { id: "charts", label: "Charts" },
      { id: "multi-select", label: "Multi Select" },
    ],
  },
  {
    title: "Icons",
    items: [{ id: "icons", label: "Icons" }],
  },
]

// ─── Layout helpers ───────────────────────────────────────────────────────────

function PageHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="mb-8 space-y-1 border-b border-border pb-6">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
        {title}
      </h2>
      <div className="rounded-lg border border-border bg-card p-6">
        {children}
      </div>
    </section>
  )
}

// ─── Pages ────────────────────────────────────────────────────────────────────

function IntroductionPage() {
  const allComponents = navGroups
    .flatMap((g) => g.items)
    .filter((i) => i.id !== "introduction")

  return (
    <div>
      <PageHeader
        title="ofi Design System"
        description="A collection of accessible, reusable UI components built with React, Tailwind CSS, and Radix UI primitives."
      />
      <div className="space-y-6">
        <Section title="Overview">
          <p className="text-sm text-muted-foreground leading-relaxed">
            This design system provides a set of primitives and patterns to help
            you build consistent, high-quality interfaces. All components are
            fully accessible and customisable via Tailwind CSS utility classes.
          </p>
        </Section>
        <Section title="Components">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {allComponents.map((c) => (
              <div
                key={c.id}
                className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              >
                {c.label}
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}

function AvatarPage() {
  return (
    <div>
      <PageHeader
        title="Avatar"
        description="An image element with a fallback for representing the user."
      />
      <div className="space-y-6">
        <Section title="Sizes">
          <div className="flex items-center gap-4">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://i.pravatar.cc/100?u=a" />
              <AvatarFallback className="text-[10px]">XS</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/100?u=b" />
              <AvatarFallback className="text-xs">SM</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/100?u=c" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://i.pravatar.cc/100?u=d" />
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://i.pravatar.cc/100?u=e" />
              <AvatarFallback className="text-base">XL</AvatarFallback>
            </Avatar>
          </div>
        </Section>
        <Section title="Fallback">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>DM</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        </Section>
      </div>
    </div>
  )
}

function BadgePage() {
  const variants = [
    "default",
    "secondary",
    "outline",
    "success",
    "warning",
    "destructive",
  ] as const

  return (
    <div>
      <PageHeader
        title="Badge"
        description="Small status descriptors for UI elements."
      />
      <div className="space-y-6">
        <Section title="Variants">
          <div className="flex flex-wrap gap-3">
            {variants.map((v) => (
              <Badge key={v} variant={v}>
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </Badge>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}

function ButtonPage() {
  const types = [
    { key: "primary", label: "Primary" },
    { key: "default", label: "Default" },
    { key: "secondary", label: "Secondary" },
    { key: "outline", label: "Outline" },
    { key: "dashed", label: "Dashed" },
    { key: "warning", label: "Warning" },
    { key: "danger", label: "Danger" },
    { key: "text", label: "Ghost" },
    { key: "link", label: "Link" },
  ] as const

  return (
    <div>
      <PageHeader
        title="Button"
        description="Triggers an action or event, such as submitting a form or opening a dialog."
      />
      <div className="space-y-6">
        <Section title="Sizes">
          <div className="flex flex-wrap items-center gap-3">
            <Button type="primary" size="tiny">Tiny</Button>
            <Button type="primary" size="small">Small</Button>
            <Button type="primary">Default</Button>
            <Button type="primary" size="medium">Medium</Button>
            <Button type="primary" size="large">Large</Button>
            <Button type="primary" size="huge">Huge</Button>
          </div>
        </Section>

        {types.map((t) => (
          <Section key={t.key} title={t.label}>
            <div className="flex flex-wrap items-center gap-3">
              <Button type={t.key}>Button</Button>
              <Button type={t.key} loading>Loading</Button>
              <Button type={t.key} icon={<Mail />}>With icon</Button>
              <Button type={t.key} iconRight={<ChevronRight />}>Icon right</Button>
            </div>
          </Section>
        ))}

        <Section title="Icon only">
          <div className="flex items-center gap-3">
            <Button type="outline" icon={<Search />} aria-label="Search" />
            <Button type="default" icon={<Bell />} aria-label="Notifications" />
            <Button type="text" icon={<Mail />} aria-label="Mail" />
          </div>
        </Section>

        <Section title="Block">
          <Button type="primary" block>Full width button</Button>
        </Section>

        <Section title="As Child">
          <Button asChild type="default">
            <a href="#">Link styled as button</a>
          </Button>
        </Section>
      </div>
    </div>
  )
}

function CardPage() {
  return (
    <div>
      <PageHeader
        title="Card"
        description="Displays content in a contained, structured surface."
      />
      <div className="space-y-6">
        <Section title="Default">
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Card title</CardTitle>
              <CardDescription>
                A short description of what this card contains.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Card content goes here. You can put any component inside.
              </p>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button type="outline" size="small">Cancel</Button>
              <Button type="primary" size="small">Confirm</Button>
            </CardFooter>
          </Card>
        </Section>

        <Section title="Without footer">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            {[
              { title: "Total Users", value: "9,421", change: 3.1, icon: Users },
              { title: "Orders", value: "1,284", change: -1.8, icon: ShoppingCart },
            ].map((s) => (
              <Card key={s.title}>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">{s.title}</div>
                    <s.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight">{s.value}</div>
                  <div className={cn("mt-1 inline-flex items-center gap-1 text-xs font-medium", s.change > 0 ? "text-brand" : "text-destructive")}>
                    {s.change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {Math.abs(s.change)}% vs last month
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}

function CheckboxPage() {
  const [checked, setChecked] = useState<boolean>(true)

  return (
    <div>
      <PageHeader
        title="Checkbox"
        description="A control that allows the user to toggle between checked and not checked."
      />
      <div className="space-y-6">
        <Section title="States">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="cb-unchecked" />
              <Label htmlFor="cb-unchecked">Unchecked</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="cb-checked"
                checked={checked}
                onCheckedChange={(v) => setChecked(Boolean(v))}
              />
              <Label htmlFor="cb-checked">Checked (interactive)</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cb-disabled" disabled />
              <Label htmlFor="cb-disabled" className="opacity-50">Disabled</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cb-disabled-checked" disabled checked />
              <Label htmlFor="cb-disabled-checked" className="opacity-50">Disabled checked</Label>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}

function InputPage() {
  return (
    <div>
      <PageHeader
        title="Input"
        description="Displays a form input field or a component that looks like an input field."
      />
      <div className="space-y-6">
        <Section title="Default">
          <div className="max-w-sm space-y-3">
            <Input placeholder="Enter value…" />
          </div>
        </Section>
        <Section title="With label">
          <div className="max-w-sm space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
        </Section>
        <Section title="Disabled">
          <div className="max-w-sm">
            <Input placeholder="Disabled input" disabled />
          </div>
        </Section>
        <Section title="Types">
          <div className="max-w-sm space-y-3">
            <Input type="text" placeholder="Text" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="number" placeholder="Number" />
            <Input type="search" placeholder="Search" />
          </div>
        </Section>
      </div>
    </div>
  )
}

function InputGroupPage() {
  return (
    <div>
      <PageHeader
        title="Input Group"
        description="Combine inputs with addons to build URL fields, search bars, and more."
      />
      <div className="space-y-6">
        <Section title="With prefix addon">
          <div className="max-w-sm">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="your-project.supabase.co" />
            </InputGroup>
          </div>
        </Section>
        <Section title="With suffix addon">
          <div className="max-w-sm">
            <InputGroup>
              <InputGroupInput placeholder="username" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>@example.com</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </Section>
        <Section title="With icon addon">
          <div className="max-w-sm">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <AtSign className="h-4 w-4 text-muted-foreground" />
              </InputGroupAddon>
              <InputGroupInput placeholder="handle" />
            </InputGroup>
          </div>
        </Section>
        <Section title="Both sides">
          <div className="max-w-sm">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <Globe className="h-4 w-4 text-muted-foreground" />
              </InputGroupAddon>
              <InputGroupInput placeholder="domain" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>.com</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </Section>
      </div>
    </div>
  )
}

function LabelPage() {
  return (
    <div>
      <PageHeader
        title="Label"
        description="Renders an accessible label associated with controls."
      />
      <div className="space-y-6">
        <Section title="Default">
          <div className="space-y-2">
            <Label>Default label</Label>
          </div>
        </Section>
        <Section title="Paired with input">
          <div className="max-w-sm space-y-2">
            <Label htmlFor="label-demo">Project name</Label>
            <Input id="label-demo" placeholder="my-project" />
          </div>
        </Section>
        <Section title="Disabled state">
          <div className="flex items-center gap-2">
            <Checkbox id="label-cb" disabled />
            <Label htmlFor="label-cb" className="opacity-50">
              Disabled option
            </Label>
          </div>
        </Section>
      </div>
    </div>
  )
}

function ProgressPage() {
  return (
    <div>
      <PageHeader
        title="Progress"
        description="Displays an indicator showing the completion progress of a task."
      />
      <div className="space-y-6">
        <Section title="Values">
          <div className="max-w-sm space-y-4">
            {[0, 25, 50, 75, 100].map((v) => (
              <div key={v} className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Progress</span>
                  <span>{v}%</span>
                </div>
                <Progress value={v} />
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}

function RadioGroupPage() {
  const [value, setValue] = useState("option-1")

  return (
    <div>
      <PageHeader
        title="Radio Group"
        description="A set of checkable buttons where no more than one can be checked at a time."
      />
      <div className="space-y-6">
        <Section title="Default">
          <RadioGroup value={value} onValueChange={setValue} className="gap-3">
            {["option-1", "option-2", "option-3"].map((opt) => (
              <div key={opt} className="flex items-center gap-2">
                <RadioGroupItem value={opt} id={opt} />
                <Label htmlFor={opt}>
                  {opt.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </Section>
        <Section title="Disabled">
          <RadioGroup defaultValue="a" className="gap-3">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="a" id="r-a" />
              <Label htmlFor="r-a">Enabled</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="b" id="r-b" disabled />
              <Label htmlFor="r-b" className="opacity-50">Disabled</Label>
            </div>
          </RadioGroup>
        </Section>
      </div>
    </div>
  )
}

function SelectPage() {
  return (
    <div>
      <PageHeader
        title="Select"
        description="Displays a list of options for the user to pick from, triggered by a button."
      />
      <div className="space-y-6">
        <Section title="Default">
          <div className="max-w-xs">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
                <SelectItem value="solid">Solid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Section>
        <Section title="With label">
          <div className="max-w-xs space-y-2">
            <Label htmlFor="select-region">Region</Label>
            <Select>
              <SelectTrigger id="select-region">
                <SelectValue placeholder="Choose region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us-east-1">US East (N. Virginia)</SelectItem>
                <SelectItem value="us-west-2">US West (Oregon)</SelectItem>
                <SelectItem value="eu-west-1">EU (Ireland)</SelectItem>
                <SelectItem value="ap-southeast-1">Asia Pacific (Singapore)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Section>
        <Section title="Disabled">
          <div className="max-w-xs">
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="x">Item</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Section>
      </div>
    </div>
  )
}

function SeparatorPage() {
  return (
    <div>
      <PageHeader
        title="Separator"
        description="Visually or semantically separates content."
      />
      <div className="space-y-6">
        <Section title="Horizontal">
          <div className="space-y-4">
            <p className="text-sm">Above the separator</p>
            <Separator />
            <p className="text-sm">Below the separator</p>
          </div>
        </Section>
        <Section title="Vertical">
          <div className="flex items-center gap-4 h-6">
            <span className="text-sm">Left</span>
            <Separator orientation="vertical" />
            <span className="text-sm">Middle</span>
            <Separator orientation="vertical" />
            <span className="text-sm">Right</span>
          </div>
        </Section>
      </div>
    </div>
  )
}

function SwitchPage() {
  const [on, setOn] = useState(true)

  return (
    <div>
      <PageHeader
        title="Switch"
        description="A control that allows the user to toggle between checked and not checked."
      />
      <div className="space-y-6">
        <Section title="States">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Switch
                id="sw-interactive"
                checked={on}
                onCheckedChange={setOn}
              />
              <Label htmlFor="sw-interactive">
                {on ? "Enabled" : "Disabled"} (interactive)
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="sw-off" />
              <Label htmlFor="sw-off">Off by default</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="sw-disabled" disabled />
              <Label htmlFor="sw-disabled" className="opacity-50">Disabled</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="sw-disabled-on" disabled checked />
              <Label htmlFor="sw-disabled-on" className="opacity-50">Disabled checked</Label>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}

function TablePage() {
  const rows = [
    { id: "#10293", customer: "Alicia Moreno", status: "Paid", amount: "$429.00" },
    { id: "#10294", customer: "Tom Bradford", status: "Pending", amount: "$129.50" },
    { id: "#10295", customer: "Sana Kapoor", status: "Paid", amount: "$899.99" },
    { id: "#10296", customer: "Jae Park", status: "Refunded", amount: "$49.99" },
    { id: "#10297", customer: "Lena Hoffmann", status: "Paid", amount: "$1,299.00" },
  ]

  const statusVariant: Record<string, "success" | "warning" | "destructive"> = {
    Paid: "success",
    Pending: "warning",
    Refunded: "destructive",
  }

  return (
    <div>
      <PageHeader
        title="Table"
        description="A responsive table component for displaying tabular data."
      />
      <div className="space-y-6">
        <Section title="Default">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-7 w-7">
                        <AvatarFallback>
                          {r.customer.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span>{r.customer}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[r.status]}>{r.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">{r.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Section>
      </div>
    </div>
  )
}

function TextareaPage() {
  return (
    <div>
      <PageHeader
        title="Textarea"
        description="Displays a multi-line plain-text editing control."
      />
      <div className="space-y-6">
        <Section title="Default">
          <div className="max-w-sm">
            <Textarea placeholder="Write something…" rows={4} />
          </div>
        </Section>
        <Section title="With label">
          <div className="max-w-sm space-y-2">
            <Label htmlFor="ta-description">Description</Label>
            <Textarea
              id="ta-description"
              placeholder="Describe your project…"
              rows={4}
            />
          </div>
        </Section>
        <Section title="Disabled">
          <div className="max-w-sm">
            <Textarea
              placeholder="Read-only content"
              disabled
              rows={3}
            />
          </div>
        </Section>
      </div>
    </div>
  )
}

// ─── Admonition page ─────────────────────────────────────────────────────────

function AdmonitionPage() {
  return (
    <div>
      <PageHeader
        title="Admonition"
        description="Displays a callout for situations that require user attention. Prefer Admonition over raw Alert unless you specifically need the primitives."
      />
      <div className="space-y-6">
        <Section title="Default">
          <Admonition
            type="default"
            layout="horizontal"
            title="OAuth Server is disabled"
            description="Enable OAuth Server to make your project act as an identity provider for third-party applications."
            actions={<Button type="default" size="small">OAuth Server Settings</Button>}
          />
        </Section>

        <Section title="Warning">
          <Admonition
            type="warning"
            layout="horizontal"
            title="Set up custom SMTP"
            description="You're using the built-in email service. This service has rate limits and is not meant to be used for production apps."
            actions={<Button type="default" size="small">Set up SMTP</Button>}
          />
        </Section>

        <Section title="Destructive">
          <Admonition
            type="destructive"
            layout="horizontal"
            title="Deleting this organization will also remove its projects"
            description="Make sure you have made a backup of your projects if you want to keep your data."
            actions={<Button type="danger" size="small">Delete organization</Button>}
          />
        </Section>

        <Section title="Vertical layout">
          <div className="space-y-3">
            <Admonition
              type="default"
              layout="vertical"
              title="Is it accessible?"
              description="Yes. It adheres to the WAI-ARIA design pattern."
            />
            <Admonition
              type="warning"
              layout="vertical"
              title="This is a warning"
              description="This is a warning description."
              actions={<Button type="default" size="small">Take action</Button>}
            />
            <Admonition
              type="destructive"
              layout="vertical"
              title="This is a destructive admonition"
              description="This is a destructive admonition description."
              actions={<Button type="danger" size="small">Confirm</Button>}
            />
          </div>
        </Section>

        <Section title="Responsive layout">
          <p className="text-xs text-muted-foreground mb-3">
            Resize the preview — the admonition switches from vertical to horizontal when its own width reaches ~448 px, independent of the page width.
          </p>
          <Admonition
            type="default"
            layout="responsive"
            title="Disk management has moved"
            description="Disk management is now handled alongside Project Compute on the Compute and Disk page."
            actions={<Button type="default" size="small">Go to Compute and Disk</Button>}
          />
        </Section>

        <Section title="Sandwiched (full-bleed inside a Card)">
          <Card className="max-w-md overflow-hidden">
            <CardHeader>
              <CardTitle>Card with Admonition</CardTitle>
            </CardHeader>
            <Admonition
              type="warning"
              layout="vertical"
              title="Sandwiched Admonition"
              description="This Admonition is sandwiched between other content in a Card component. Note how the top border and all radii are reset."
              className="rounded-none border-x-0"
            />
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">
                This is the subsequent content of this Card.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                It might be disabled due to some condition that the Admonition above explains.
              </p>
            </CardContent>
          </Card>
        </Section>
      </div>
    </div>
  )
}

// ─── Charts page ──────────────────────────────────────────────────────────────

function generateLogsData(points = 60, intervalMs = 5 * 60 * 1000) {
  const now = Date.now()
  return Array.from({ length: points }, (_, i) => {
    const t = now - (points - 1 - i) * intervalMs
    const ok = Math.floor(40 + Math.random() * 60)
    const warning = Math.random() > 0.6 ? Math.floor(Math.random() * 8) : 0
    const error = Math.random() > 0.85 ? Math.floor(Math.random() * 4) : 0
    return {
      timestamp: new Date(t).toISOString(),
      ok_count: ok,
      warning_count: warning,
      error_count: error,
    }
  })
}

function generateSeries(points = 48, base = 500, spread = 200) {
  const now = Date.now()
  return Array.from({ length: points }, (_, i) => ({
    timestamp: new Date(now - (points - 1 - i) * 60 * 60 * 1000).toISOString(),
    value: Math.round(base + Math.random() * spread),
  }))
}

function ChartsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [logs, setLogs] = useState(() => generateLogsData())
  const [bar] = useState(() => generateSeries(48, 200, 300))
  const [line] = useState(() => generateSeries(48, 800, 400))

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setLogs(generateLogsData()), 60_000)
    return () => clearInterval(t)
  }, [])

  const totals = logs.reduce(
    (acc, d) => ({
      ok: acc.ok + (d.ok_count ?? 0),
      warn: acc.warn + (d.warning_count ?? 0),
      err: acc.err + (d.error_count ?? 0),
    }),
    { ok: 0, warn: 0, err: 0 },
  )

  return (
    <div>
      <PageHeader
        title="Charts"
        description="Data visualisation components built on Recharts with a consistent API."
      />
      <div className="space-y-6">
        <Section title="Logs bar chart">
          <Chart isLoading={isLoading}>
            <ChartCard>
              <ChartHeader>
                <ChartMetric
                  label="Total Requests"
                  value={(totals.ok + totals.warn + totals.err).toLocaleString("en-US")}
                  tooltip="Total request volume in window"
                />
                <div className="flex items-center gap-8">
                  <ChartMetric label="Warn" value={totals.warn.toLocaleString("en-US")} status="warning" align="end" />
                  <ChartMetric label="Err" value={totals.err.toLocaleString("en-US")} status="negative" align="end" />
                </div>
              </ChartHeader>
              <ChartContent
                isEmpty={!logs.length}
                emptyState={
                  <ChartEmptyState
                    title="No events in this window"
                    description="Logs will appear here once traffic is captured."
                    icon={<BarChart2 className="h-5 w-5" />}
                  />
                }
                loadingState={<ChartLoadingState />}
              >
                <div className="h-40">
                  <LogsBarChart data={logs} isFullHeight />
                </div>
              </ChartContent>
            </ChartCard>
          </Chart>
        </Section>

        <Section title="Bar chart">
          <Chart isLoading={isLoading}>
            <ChartCard>
              <ChartHeader>
                <ChartTitle tooltip="Events aggregated by hour">Bar Chart</ChartTitle>
                <ChartActions
                  actions={[{ label: "Open in Logs Explorer", icon: <ExternalLink />, href: "#" }]}
                />
              </ChartHeader>
              <ChartContent>
                <ChartBar data={bar} dataKey="value" showGrid showYAxis YAxisProps={{ width: 32 }} />
              </ChartContent>
            </ChartCard>
          </Chart>
        </Section>

        <Section title="Line chart">
          <Chart isLoading={isLoading}>
            <ChartCard>
              <ChartHeader>
                <ChartTitle>Line Chart</ChartTitle>
                <ChartActions
                  actions={[{ label: "Open in Logs Explorer", icon: <ExternalLink />, href: "#" }]}
                />
              </ChartHeader>
              <ChartContent>
                <ChartLine data={line} dataKey="value" showGrid showYAxis YAxisProps={{ width: 32 }} />
              </ChartContent>
            </ChartCard>
          </Chart>
        </Section>
      </div>
    </div>
  )
}

// ─── Multi Select page ────────────────────────────────────────────────────────

function MultiSelectPage() {
  const [values, setValues] = useState<string[]>(["React"])
  const options = ["React", "Vue", "Svelte", "Solid", "Angular", "Qwik"]

  return (
    <div>
      <PageHeader
        title="Multi Select"
        description="Select multiple options from a dropdown list using a popover-based picker."
      />
      <div className="space-y-6">
        <Section title="Default">
          <div className="max-w-xs">
            <MultiSelector values={values} onValuesChange={setValues}>
              <MultiSelectorTrigger label="Select frameworks" deletableBadge />
              <MultiSelectorContent>
                <MultiSelectorList>
                  {options.map((opt) => (
                    <MultiSelectorItem key={opt} value={opt}>
                      {opt}
                    </MultiSelectorItem>
                  ))}
                </MultiSelectorList>
              </MultiSelectorContent>
            </MultiSelector>
          </div>
        </Section>
      </div>
    </div>
  )
}

// ─── Icons page ───────────────────────────────────────────────────────────────

function IconsPage() {
  const icons = [
    { Icon: Home, name: "Home" },
    { Icon: TableEditor, name: "TableEditor" },
    { Icon: SqlEditor, name: "SqlEditor" },
    { Icon: Database, name: "Database" },
    { Icon: Auth, name: "Auth" },
    { Icon: EdgeFunctions, name: "EdgeFunctions" },
    { Icon: Storage, name: "Storage" },
    { Icon: Reports, name: "Reports" },
    { Icon: BucketAdd, name: "BucketAdd" },
    { Icon: InsertCode, name: "InsertCode" },
    { Icon: ReplaceCode, name: "ReplaceCode" },
  ] as const

  return (
    <div>
      <PageHeader
        title="Icons"
        description="Custom icons built with createIcon. Tint with text utilities, resize with the size prop."
      />
      <div className="space-y-6">
        <Section title="All icons">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
            {icons.map(({ Icon, name }) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center gap-2 rounded-md border border-border bg-background/50 p-4 hover:bg-accent transition-colors"
              >
                <Icon size={24} className="text-foreground-muted" />
                <span className="text-xs text-muted-foreground text-center">{name}</span>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Sizes">
          <div className="flex items-end gap-6">
            {[12, 16, 20, 24, 32].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <Home size={s} />
                <span className="text-xs text-muted-foreground">{s}px</span>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Colors">
          <div className="flex items-center gap-6">
            <Home size={24} className="text-primary" />
            <Home size={24} className="text-destructive" />
            <Home size={24} className="text-brand" />
            <Home size={24} className="text-muted-foreground" />
            <Home size={24} className="text-foreground" />
          </div>
        </Section>
      </div>
    </div>
  )
}

// ─── Page router ─────────────────────────────────────────────────────────────

function PageContent({ page }: { page: PageId }) {
  switch (page) {
    case "introduction": return <IntroductionPage />
    case "avatar": return <AvatarPage />
    case "badge": return <BadgePage />
    case "button": return <ButtonPage />
    case "card": return <CardPage />
    case "checkbox": return <CheckboxPage />
    case "input": return <InputPage />
    case "input-group": return <InputGroupPage />
    case "label": return <LabelPage />
    case "progress": return <ProgressPage />
    case "radio-group": return <RadioGroupPage />
    case "select": return <SelectPage />
    case "separator": return <SeparatorPage />
    case "switch": return <SwitchPage />
    case "table": return <TablePage />
    case "textarea": return <TextareaPage />
    case "admonition": return <AdmonitionPage />
    case "charts": return <ChartsPage />
    case "multi-select": return <MultiSelectPage />
    case "icons": return <IconsPage />
  }
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar({
  active,
  onNavigate,
  onGoHome,
}: {
  active: PageId
  onNavigate: (id: PageId) => void
  onGoHome: () => void
}) {
  return (
    <aside className="hidden md:flex md:w-60 shrink-0 flex-col border-r border-border bg-card overflow-y-auto">
      <div className="sticky top-0 z-10 bg-card border-b border-border px-4 py-3">
        <button
          onClick={onGoHome}
          className="flex items-center gap-2 w-full rounded-md hover:opacity-80 transition-opacity"
        >
          <BrandLogo imageClassName="h-6" />
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-6">
        {navGroups.map((group) => (
          <div key={group.title}>
            <p className="px-2 mb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
              {group.title}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={cn(
                    "w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors",
                    active === item.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [view, setView] = useState<"landing" | "docs">("landing")

  if (view === "landing") {
    return <LandingPage onEnterDocs={() => setView("docs")} />
  }

  return <DocsApp />
}

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroupCard, RadioGroupCardItem } from "@/components/ui/radio-group-card"
import { Toaster, toast } from "@/components/ui/sonner"
import CodeBlock from "../../components/CodeBlock"
import ComponentPreview from "../../components/ComponentPreview"
import ImportBlock from "../../components/ImportBlock"
import PageHeader from "../../components/PageHeader"
import { H2, H3 } from "../../components/Section"

const formSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    error: "You need to select a notification type.",
  }),
})

function RadioGroupCardDemo() {
  return (
    <RadioGroupCard defaultValue="comfortable" className="flex flex-wrap gap-3">
      <RadioGroupCardItem value="default" id="r1" label="Default" />
      <RadioGroupCardItem value="comfortable" id="r2" label="Comfortable" />
      <RadioGroupCardItem value="compact" id="r3" label="Compact" />
    </RadioGroupCard>
  )
}

function ThemePreview({ tone }: { tone: "dark" | "classic-dark" | "light" | "system" }) {
  const themes = {
    dark: "bg-[#0f172a]",
    "classic-dark": "bg-[#111827]",
    light: "bg-[#f8fafc]",
    system: "bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#f8fafc]",
  } as const

  const panelTone =
    tone === "light" ? "bg-white/90 border-black/10" : "bg-white/10 border-white/10"

  return (
    <div className={cn("overflow-hidden rounded-md border", themes[tone])}>
      <div className="flex h-20 items-stretch">
        <div className="w-8 border-r border-black/10 bg-black/10" />
        <div className="flex-1 p-2">
          <div className={cn("mb-2 h-3 w-20 rounded-sm border", panelTone)} />
          <div className="grid grid-cols-2 gap-2">
            <div className={cn("h-10 rounded-sm border", panelTone)} />
            <div className={cn("h-10 rounded-sm border", panelTone)} />
          </div>
        </div>
      </div>
    </div>
  )
}

function RadioGroupCardChildrenDemo() {
  const singleThemes = [
    { name: "Dark", value: "dark" },
    { name: "Classic dark", value: "classic-dark" },
    { name: "Light", value: "light" },
    { name: "System", value: "system" },
  ] as const

  return (
    <RadioGroupCard defaultValue="dark" className="flex flex-wrap gap-3">
      {singleThemes.map((theme) => (
        <RadioGroupCardItem key={theme.value} value={theme.value} label={theme.name}>
          <ThemePreview tone={theme.value} />
        </RadioGroupCardItem>
      ))}
    </RadioGroupCard>
  )
}

function RadioGroupCardFormDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel>Notify me about...</FormLabel>
                <FormControl>
                  <RadioGroupCard
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-wrap gap-3"
                  >
                    <RadioGroupCardItem value="all" label="All new messages" />
                    <RadioGroupCardItem
                      value="mentions"
                      label="Direct messages and mentions"
                    />
                    <RadioGroupCardItem value="none" label="Nothing" />
                  </RadioGroupCard>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button htmlType="submit" type="secondary" size="small">
            Submit
          </Button>
        </form>
      </Form>
      <Toaster />
    </>
  )
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

export default function RadioGroupCardDoc() {
  return (
    <>
      <PageHeader
        title="Radio Group Card"
        description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
      />
      <ImportBlock imports={["Button", "Form", "FormControl", "FormField", "FormItem", "FormLabel", "FormMessage", "RadioGroupCard", "RadioGroupCardItem", "Toaster", "toast"]} />

      <ComponentPreview
        preview={<RadioGroupCardDemo />}
        code={`import { RadioGroupCard, RadioGroupCardItem } from "ui"

export function RadioGroupDemo() {
  return (
    <RadioGroupCard defaultValue="comfortable" className="flex flex-wrap gap-3">
      <RadioGroupCardItem value="default" id="r1" label="Default" />
      <RadioGroupCardItem value="comfortable" id="r2" label="Comfortable" />
      <RadioGroupCardItem value="compact" id="r3" label="Compact" />
    </RadioGroupCard>
  )
}`}
      />

      <H2>Usage</H2>
      <CodeBlock
        className="max-w-3xl"
        code={`import { RadioGroupCard, RadioGroupCardItem } from "ui"`}
      />
      <CodeBlock
        className="max-w-3xl"
        code={`<RadioGroupCard defaultValue="comfortable">
  <RadioGroupCardItem value="default" id="r1" label="Default" />
  <RadioGroupCardItem value="comfortable" id="r2" label="Comfortable" />
  <RadioGroupCardItem value="compact" id="r3" label="Compact" />
</RadioGroupCard>`}
      />

      <H2>Examples</H2>
      <H3>With children</H3>
      <ComponentPreview
        preview={<RadioGroupCardChildrenDemo />}
        previewClassName="justify-start"
        code={`import { RadioGroupCard, RadioGroupCardItem } from "ui"

export function RadioGroupDemo() {
  const singleThemes = [
    { name: "Dark", value: "dark" },
    { name: "Classic dark", value: "classic-dark" },
    { name: "Light", value: "light" },
    { name: "System", value: "system" },
  ] as const

  return (
    <RadioGroupCard defaultValue="dark" className="flex flex-wrap gap-3">
      {singleThemes.map((theme) => (
        <RadioGroupCardItem key={theme.value} value={theme.value} label={theme.name}>
          <ThemePreview tone={theme.value} />
        </RadioGroupCardItem>
      ))}
    </RadioGroupCard>
  )
}`}
      />

      <H3>Form</H3>
      <ComponentPreview
        preview={<RadioGroupCardFormDemo />}
        code={`'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroupCard,
  RadioGroupCardItem,
} from "ui"
import { z } from "zod"

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    error: "You need to select a notification type.",
  }),
})

export function RadioGroupForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroupCard
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-wrap gap-3"
                >
                  <RadioGroupCardItem value="all" label="All new messages" />
                  <RadioGroupCardItem
                    value="mentions"
                    label="Direct messages and mentions"
                  />
                  <RadioGroupCardItem value="none" label="Nothing" />
                </RadioGroupCard>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button htmlType="submit" type="secondary" size="small">
          Submit
        </Button>
      </form>
    </Form>
  )
}`}
      />
    </>
  )
}

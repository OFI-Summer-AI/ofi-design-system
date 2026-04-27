import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Toaster, toast } from "@/components/ui/sonner"
import CodeBlock from "../../components/CodeBlock"
import ComponentPreview from "../../components/ComponentPreview"
import PageHeader from "../../components/PageHeader"
import { H2, H3, InlineCode, P } from "../../components/Section"

const inputFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

function InputDemo() {
  return <Input type="email" placeholder="Email" />
}

function InputFileDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  )
}

function InputDisabledDemo() {
  return <Input disabled type="email" placeholder="Email" />
}

function InputWithLabelDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}

function InputWithButtonDemo() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button htmlType="submit" type="secondary">
        Subscribe
      </Button>
    </div>
  )
}

function InputFormDemo() {
  const form = useForm<z.infer<typeof inputFormSchema>>({
    resolver: zodResolver(inputFormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof inputFormSchema>) {
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button htmlType="submit" type="secondary">
            Submit
          </Button>
        </form>
      </Form>
      <Toaster />
    </>
  )
}

export default function InputDoc() {
  return (
    <>
      <PageHeader
        title="Input"
        description="Displays a form input field or a component that looks like an input field."
      />

      <ComponentPreview
        preview={<div className="w-full max-w-sm"><InputDemo /></div>}
        code={`import { Input_Shadcn_ } from "ui"

export function InputDemo() {
  return <Input_Shadcn_ type="email" placeholder="Email" />
}`}
      />

      <H2>Installation</H2>
      <H3>CLI</H3>
      <CodeBlock language="bash" code="npx shadcn-ui@latest add input" />
      <H3>Manual</H3>
      <P>
        The primitive lives at <InlineCode>src/components/ui/input.tsx</InlineCode> and
        can be imported directly where needed.
      </P>

      <H2>Usage</H2>
      <CodeBlock
        className="max-w-3xl"
        code={`import { Input } from "@/components/ui/input"`}
      />
      <CodeBlock className="max-w-3xl" code={`<Input />`} />

      <H2>Examples</H2>

      <H2>Default</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-sm">
            <InputDemo />
          </div>
        }
        code={`import { Input_Shadcn_ } from "ui"

export function InputDemo() {
  return <Input_Shadcn_ type="email" placeholder="Email" />
}`}
      />

      <H2>File</H2>
      <ComponentPreview
        preview={<InputFileDemo />}
        code={`import { Input_Shadcn_, Label_Shadcn_ } from "ui"

export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label_Shadcn_ htmlFor="picture">Picture</Label_Shadcn_>
      <Input_Shadcn_ id="picture" type="file" />
    </div>
  )
}`}
      />

      <H2>Disabled</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-sm">
            <InputDisabledDemo />
          </div>
        }
        code={`import { Input_Shadcn_ } from "ui"

export function InputDisabled() {
  return <Input_Shadcn_ disabled type="email" placeholder="Email" />
}`}
      />

      <H2>With Label</H2>
      <ComponentPreview
        preview={<InputWithLabelDemo />}
        code={`import { Input_Shadcn_, Label_Shadcn_ } from "ui"

export function InputWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label_Shadcn_ htmlFor="email">Email</Label_Shadcn_>
      <Input_Shadcn_ type="email" id="email" placeholder="Email" />
    </div>
  )
}`}
      />

      <H2>With Button</H2>
      <ComponentPreview
        preview={<InputWithButtonDemo />}
        code={`import { Button, Input_Shadcn_ } from "ui"

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input_Shadcn_ type="email" placeholder="Email" />
      <Button htmlType="submit" type="secondary">
        Subscribe
      </Button>
    </div>
  )
}`}
      />

      <H2>Form</H2>
      <ComponentPreview
        preview={<InputFormDemo />}
        code={`import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "ui"
import { z } from "zod"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button htmlType="submit" type="secondary">
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

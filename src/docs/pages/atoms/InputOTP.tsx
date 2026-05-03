import { zodResolver } from "@hookform/resolvers/zod"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { useState } from "react"
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Toaster, toast } from "@/components/ui/sonner"
import CodeBlock from "../../components/CodeBlock"
import ComponentPreview from "../../components/ComponentPreview"
import ImportBlock from "../../components/ImportBlock"
import PageHeader from "../../components/PageHeader"
import { H2, H3, InlineCode, P } from "../../components/Section"

const inputOtpFormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}

function InputOTPPatternDemo() {
  return (
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}

function InputOTPSeparatorDemo() {
  return (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  )
}

function InputOTPControlledDemo() {
  const [value, setValue] = useState("")

  return (
    <div className="space-y-3">
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-foreground-muted">Enter your one-time password.</p>
      <p className="font-mono text-xs text-foreground-muted">
        {value === "" ? "Value: -" : `Value: ${value}`}
      </p>
    </div>
  )
}

function InputOTPFormDemo() {
  const form = useForm<z.infer<typeof inputOtpFormSchema>>({
    resolver: zodResolver(inputOtpFormSchema),
    defaultValues: {
      pin: "",
    },
  })

  function onSubmit(data: z.infer<typeof inputOtpFormSchema>) {
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
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Please enter the one-time password sent to your phone.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button htmlType="submit">Submit</Button>
        </form>
      </Form>
      <Toaster />
    </>
  )
}

export default function InputOTPDoc() {
  return (
    <>
      <PageHeader
        title="Input OTP"
        description="Accessible one-time password component with copy paste functionality."
      />
      <ImportBlock imports={["Button", "Form", "FormControl", "FormDescription", "FormField", "FormItem", "FormLabel", "FormMessage", "InputOTP", "InputOTPGroup", "InputOTPSeparator", "InputOTPSlot", "Toaster", "toast"]} />

      <ComponentPreview
        preview={<InputOTPDemo />}
        code={`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "ui"

export function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}`}
      />

      <H2>About</H2>
      <P>
        <InlineCode>Input OTP</InlineCode> is built on top of{" "}
        <InlineCode>input-otp</InlineCode> by <InlineCode>@guilherme_rodz</InlineCode>.
      </P>

      <H2>Installation</H2>
      <H3>CLI</H3>
      <CodeBlock language="bash" code="npx shadcn-ui@latest add input-otp" />

      <H3>Manual</H3>
      <P>
        The primitive lives at <InlineCode>src/components/ui/input-otp.tsx</InlineCode>.
        It also requires the caret blink animation in <InlineCode>tailwind.config.js</InlineCode>.
      </P>

      <H2>Usage</H2>
      <CodeBlock
        className="max-w-3xl"
        code={`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"`}
      />
      <CodeBlock
        className="max-w-3xl"
        code={`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
      />

      <H2>Examples</H2>

      <H3>Pattern</H3>
      <P>
        Use the <InlineCode>pattern</InlineCode> prop to constrain accepted
        characters.
      </P>
      <ComponentPreview
        preview={<InputOTPPatternDemo />}
        code={`import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
      />

      <H3>Separator</H3>
      <ComponentPreview
        preview={<InputOTPSeparatorDemo />}
        code={`<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>`}
      />

      <H3>Controlled</H3>
      <ComponentPreview
        preview={<InputOTPControlledDemo />}
        code={`const [value, setValue] = React.useState("")

<InputOTP maxLength={6} value={value} onChange={setValue}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
      />

      <H3>Form</H3>
      <ComponentPreview
        preview={<InputOTPFormDemo />}
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
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "ui"
import { z } from "zod"

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

export function InputOTPForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
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
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button htmlType="submit">Submit</Button>
      </form>
    </Form>
  )
}`}
      />
    </>
  )
}

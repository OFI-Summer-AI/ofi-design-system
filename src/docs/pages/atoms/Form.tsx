import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
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
import { Button } from "@/components/ui/button"

const schema = z.object({
  email: z.string().email("Enter a valid email"),
})

function FormDemo() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  })
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => {})}
        className="w-full max-w-sm space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@ofi.services" {...field} />
              </FormControl>
              <FormDescription>We'll never share your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button htmlType="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default function FormDoc() {
  return (
    <>
      <PageHeader
        title="Form"
        description="React Hook Form bridge with shadcn primitives. Use it to wire validation, accessible labels, and error messages with a single, consistent layout."
      />

      <H2>Example</H2>
      <ComponentPreview
        preview={<FormDemo />}
        code={`const schema = z.object({ email: z.string().email() })

const form = useForm({ resolver: zodResolver(schema) })

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl><Input {...field} /></FormControl>
          <FormDescription>We'll never share your email.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button htmlType="submit">Submit</Button>
  </form>
</Form>`}
      />

      <H2>Anatomy</H2>
      <PropTable
        rows={[
          { name: "Form", type: "FormProvider", description: "Spreads the useForm() return value into context." },
          { name: "FormField", type: "Controller", description: "Connects a single field to react-hook-form. Provide control + name." },
          { name: "FormItem", type: "div", description: "Groups label, control, description, and message; supplies a stable id." },
          { name: "FormLabel", type: "Label", description: "Linked to the control via htmlFor; flips to destructive when an error is set." },
          { name: "FormControl", type: "Slot", description: "Wraps the actual input. Wires aria-describedby and aria-invalid." },
          { name: "FormDescription", type: "p", description: "Optional helper text shown under the field." },
          { name: "FormMessage", type: "p", description: "Renders the validation error, or children if there's no error." },
        ]}
      />
    </>
  )
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import CodeBlock from "../../components/CodeBlock"
import ComponentPreview from "../../components/ComponentPreview"
import PageHeader from "../../components/PageHeader"
import { H2, H3, InlineCode, P } from "../../components/Section"

function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="max-width">Max. width</Label>
              <Input id="max-width" defaultValue="300px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="max-height">Max. height</Label>
              <Input id="max-height" defaultValue="none" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default function PopoverDoc() {
  return (
    <>
      <PageHeader
        title="Popover"
        description="Displays rich content in a portal, triggered by a button."
      />

      <ComponentPreview
        preview={<PopoverDemo />}
        code={`import {
  Button,
  Input_Shadcn_,
  Label,
  Popover_Shadcn_,
  PopoverContent_Shadcn_,
  PopoverTrigger_Shadcn_,
} from "ui"

export function PopoverDemo() {
  return (
    <Popover_Shadcn_>
      <PopoverTrigger_Shadcn_ asChild>
        <Button type="outline">Open popover</Button>
      </PopoverTrigger_Shadcn_>
      <PopoverContent_Shadcn_ className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input_Shadcn_ id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input_Shadcn_ id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input_Shadcn_ id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input_Shadcn_ id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent_Shadcn_>
    </Popover_Shadcn_>
  )
}`}
      />

      <H2>Installation</H2>
      <H3>CLI</H3>
      <CodeBlock language="bash" code="npx shadcn-ui@latest add popover" />
      <H3>Manual</H3>
      <P>
        The primitive lives at <InlineCode>src/components/ui/popover.tsx</InlineCode> and
        is built on Radix UI.
      </P>

      <H2>Usage</H2>
      <CodeBlock
        className="max-w-3xl"
        code={`import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"`}
      />
      <CodeBlock
        className="max-w-3xl"
        code={`<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>`}
      />
    </>
  )
}

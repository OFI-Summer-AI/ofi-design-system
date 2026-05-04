import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CodeBlock from "../../components/CodeBlock"
import ComponentPreview from "../../components/ComponentPreview"
import PageHeader from "../../components/PageHeader"
import { H2, H3, InlineCode, P } from "../../components/Section"

function BasicSelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

function ScrollableSelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
          <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
          <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
          <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
          <SelectItem value="cst-china">China Standard Time (CST)</SelectItem>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
          <SelectItem value="wita">Indonesia Central Standard Time (WITA)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

function SelectFormDemo() {
  return (
    <div className="w-full max-w-md space-y-5">
      <div className="space-y-1.5">
        <Label>Email</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a verified email to display" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="m@example.com">m@example.com</SelectItem>
            <SelectItem value="m@google.com">m@google.com</SelectItem>
            <SelectItem value="m@support.com">m@support.com</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-foreground-muted">
          You can manage email addresses in your email settings.
        </p>
      </div>
      <Button type="secondary" htmlType="submit">
        Submit
      </Button>
    </div>
  )
}

export default function SelectDoc() {
  return (
    <>
      <PageHeader
        title="Select"
        description="Displays a list of options for the user to pick from in a button-triggered overlay."
      />

      <ComponentPreview
        preview={<BasicSelectDemo />}
        code={`import * as React from "react"
import {
  Select_Shadcn_,
  SelectContent_Shadcn_,
  SelectGroup_Shadcn_,
  SelectItem_Shadcn_,
  SelectLabel_Shadcn_,
  SelectTrigger_Shadcn_,
  SelectValue_Shadcn_,
} from "ui"

export function SelectDemo() {
  return (
    <Select_Shadcn_>
      <SelectTrigger_Shadcn_ className="w-[180px]">
        <SelectValue_Shadcn_ placeholder="Select a fruit" />
      </SelectTrigger_Shadcn_>
      <SelectContent_Shadcn_>
        <SelectGroup_Shadcn_>
          <SelectLabel_Shadcn_>Fruits</SelectLabel_Shadcn_>
          <SelectItem_Shadcn_ value="apple">Apple</SelectItem_Shadcn_>
          <SelectItem_Shadcn_ value="banana">Banana</SelectItem_Shadcn_>
          <SelectItem_Shadcn_ value="blueberry">Blueberry</SelectItem_Shadcn_>
          <SelectItem_Shadcn_ value="grapes">Grapes</SelectItem_Shadcn_>
          <SelectItem_Shadcn_ value="pineapple">Pineapple</SelectItem_Shadcn_>
        </SelectGroup_Shadcn_>
      </SelectContent_Shadcn_>
    </Select_Shadcn_>
  )
}`}
      />

      <H2>Installation</H2>
      <H3>CLI</H3>
      <CodeBlock language="bash" code="npx shadcn-ui@latest add select" />

      <H2>Usage</H2>
      <P>
        Import the select primitives directly from <InlineCode>@/components/ui/select</InlineCode>.
      </P>
      <H3>Import</H3>
      <CodeBlock
        className="max-w-3xl"
        code={`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"`}
      />
      <H3>Basic usage</H3>
      <CodeBlock
        className="max-w-3xl"
        code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`}
      />

      <H2>Examples</H2>

      <H3>Scrollable</H3>
      <ComponentPreview
        preview={<ScrollableSelectDemo />}
        code={`export function SelectScrollable() {
  return (
    <Select_Shadcn_>
      <SelectTrigger_Shadcn_ className="w-[280px]">
        <SelectValue_Shadcn_ placeholder="Select a timezone" />
      </SelectTrigger_Shadcn_>
      <SelectContent_Shadcn_>
        <SelectGroup_Shadcn_>
          <SelectLabel_Shadcn_>North America</SelectLabel_Shadcn_>
          <SelectItem_Shadcn_ value="est">Eastern Standard Time (EST)</SelectItem_Shadcn_>
          <SelectItem_Shadcn_ value="cst">Central Standard Time (CST)</SelectItem_Shadcn_>
          <SelectItem_Shadcn_ value="mst">Mountain Standard Time (MST)</SelectItem_Shadcn_>
          <SelectItem_Shadcn_ value="pst">Pacific Standard Time (PST)</SelectItem_Shadcn_>
          <SelectItem_Shadcn_ value="akst">Alaska Standard Time (AKST)</SelectItem_Shadcn_>
          <SelectItem_Shadcn_ value="hst">Hawaii Standard Time (HST)</SelectItem_Shadcn_>
        </SelectGroup_Shadcn_>
        <SelectGroup_Shadcn_>
          <SelectLabel_Shadcn_>Europe & Africa</SelectLabel_Shadcn_>
          <SelectItem_Shadcn_ value="gmt">Greenwich Mean Time (GMT)</SelectItem_Shadcn_>
          <SelectItem_Shadcn_ value="cet">Central European Time (CET)</SelectItem_Shadcn_>
          <SelectItem_Shadcn_ value="eet">Eastern European Time (EET)</SelectItem_Shadcn_>
        </SelectGroup_Shadcn_>
      </SelectContent_Shadcn_>
    </Select_Shadcn_>
  )
}`}
      />

      <H3>Form</H3>
      <P>
        Use select inside forms when a value must be constrained to a verified or
        pre-approved list of options.
      </P>
      <ComponentPreview
        preview={<SelectFormDemo />}
        code={`export function SelectForm() {
  return (
    <div className="w-full max-w-md space-y-5">
      <div className="space-y-1.5">
        <Label>Email</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a verified email to display" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="m@example.com">m@example.com</SelectItem>
            <SelectItem value="m@google.com">m@google.com</SelectItem>
            <SelectItem value="m@support.com">m@support.com</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-foreground-muted">
          You can manage email addresses in your email settings.
        </p>
      </div>
      <Button type="secondary" htmlType="submit">
        Submit
      </Button>
    </div>
  )
}`}
      />
    </>
  )
}

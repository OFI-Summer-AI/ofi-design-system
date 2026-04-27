import * as React from "react"
import { Progress } from "@/components/ui/progress"
import CodeBlock from "../../components/CodeBlock"
import ComponentPreview from "../../components/ComponentPreview"
import PageHeader from "../../components/PageHeader"
import { H2, H3, InlineCode, P } from "../../components/Section"

function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = window.setTimeout(() => setProgress(66), 500)
    return () => window.clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}

export default function ProgressDoc() {
  return (
    <>
      <PageHeader
        title="Progress"
        description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      />

      <ComponentPreview
        preview={<ProgressDemo />}
        code={`'use client'

import * as React from 'react'
import { Progress } from 'ui'

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}`}
      />

      <H2>Installation</H2>
      <H3>CLI</H3>
      <CodeBlock language="bash" code="npx shadcn-ui@latest add progress" />
      <H3>Manual</H3>
      <P>
        The primitive lives at <InlineCode>src/components/ui/progress.tsx</InlineCode>{" "}
        and is built on Radix UI.
      </P>

      <H2>Usage</H2>
      <CodeBlock className="max-w-3xl" code={`import { Progress } from "@/components/ui/progress"`} />
      <CodeBlock className="max-w-3xl" code={`<Progress value={33} />`} />
    </>
  )
}

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import CodeBlock from "./CodeBlock"

type Align = "center" | "start" | "end"

export default function ComponentPreview({
  preview,
  code,
  className,
  align = "center",
  showDottedGrid = true,
  showGrid = false,
  hideCode = false,
  wide = false,
  allowPreviewOverflow = false,
  previewClassName,
}: {
  preview: React.ReactNode
  code: string
  className?: string
  align?: Align
  showDottedGrid?: boolean
  showGrid?: boolean
  hideCode?: boolean
  wide?: boolean
  allowPreviewOverflow?: boolean
  previewClassName?: string
}) {
  const wideClasses = wide ? "2xl:-ml-20 2xl:-mr-20" : ""

  const previewBlock = (
    <div
      className={cn(
        "preview flex min-h-[256px] w-full justify-center p-10",
        align === "center" && "items-center",
        align === "start" && "items-start",
        align === "end" && "items-end",
        allowPreviewOverflow && "overflow-visible",
        previewClassName,
      )}
    >
      {preview}
    </div>
  )

  return (
    <div className={cn("mt-4 mb-12 animate-fade-in", wideClasses, className)}>
      <div
        className={cn(
          "relative bg-studio overflow-hidden border-border",
          hideCode
            ? "rounded-md border"
            : "rounded-tl-md rounded-tr-md border-t border-l border-r",
        )}
      >
        {showGrid && (
          <div className="pointer-events-none absolute inset-0 preview-grid-lined" />
        )}
        {showDottedGrid && (
          <div className="pointer-events-none absolute inset-0 preview-grid-dotted" />
        )}
        <div className="relative z-10">{previewBlock}</div>
      </div>

      {!hideCode && (
        <Collapsible>
          <CollapsibleTrigger
            className={cn(
              "group flex w-full items-center gap-3 border border-border px-4 py-4",
              "font-mono text-xs text-foreground-light",
              "data-[state=closed]:rounded-bl-md data-[state=closed]:rounded-br-md",
              "transition-colors hover:bg-surface-100",
            )}
          >
            <ChevronRight
              size={14}
              className="text-foreground-lighter transition-transform group-data-[state=open]:rotate-90"
            />
            View code
          </CollapsibleTrigger>
          <CollapsibleContent
            className={cn(
              "overflow-hidden",
              "data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up",
            )}
          >
            <div className="relative w-full">
              <CodeBlock
                code={code}
                className="rounded-tl-none rounded-tr-none border-t-0"
              />
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  )
}

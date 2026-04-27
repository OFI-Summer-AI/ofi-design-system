import { useState } from "react"
import { cn } from "@/lib/utils"
import CodeBlock from "./CodeBlock"

export default function ComponentPreview({
  preview,
  code,
  className,
  previewClassName,
  allowPreviewOverflow = false,
}: {
  preview: React.ReactNode
  code: string
  className?: string
  previewClassName?: string
  allowPreviewOverflow?: boolean
}) {
  const [tab, setTab] = useState<"preview" | "code">("preview")

  return (
    <div
      className={cn(
        "my-6 rounded-lg border border-border",
        allowPreviewOverflow ? "overflow-visible" : "overflow-hidden",
        className,
      )}
    >
      <div className="flex items-center gap-1 border-b border-border bg-card/50 px-3 py-1.5">
        {(["preview", "code"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={cn(
              "rounded px-3 py-1 text-xs capitalize transition-colors",
              tab === t
                ? "bg-accent text-foreground"
                : "text-foreground-muted hover:text-foreground",
            )}
          >
            {t}
          </button>
        ))}
      </div>
      {tab === "preview" ? (
        <div
          className={cn(
            "flex min-h-[160px] items-center justify-center bg-background p-8",
            allowPreviewOverflow && "overflow-visible",
            previewClassName,
          )}
        >
          {preview}
        </div>
      ) : (
        <CodeBlock code={code} className="rounded-none border-0" />
      )}
    </div>
  )
}

import { useState } from "react"
import { cn } from "@/lib/utils"
import CodeBlock from "./CodeBlock"

export default function ComponentPreview({
  preview,
  code,
  className,
}: {
  preview: React.ReactNode
  code: string
  className?: string
}) {
  const [tab, setTab] = useState<"preview" | "code">("preview")

  return (
    <div className={cn("my-6 overflow-hidden rounded-lg border border-border", className)}>
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
        <div className="flex min-h-[160px] items-center justify-center bg-background p-8">
          {preview}
        </div>
      ) : (
        <CodeBlock code={code} className="rounded-none border-0" />
      )}
    </div>
  )
}

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

const TOKEN_STYLES = {
  comment: "text-[#8a8a8a] italic",
  keyword: "text-primary",
  string: "text-[#f4dc8b]",
  number: "text-primary",
  function: "text-[#8be0a8]",
  type: "text-primary",
  plain: "text-foreground",
} as const

const TOKEN_PATTERN =
  /(\/\/.*$|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b(?:import|export|from|return|const|let|var|function|if|else|for|while|switch|case|default|new|true|false|null|undefined|async|await|type|interface)\b|\b\d+(?:\.\d+)?\b|\b[A-Z][A-Za-z0-9_]*\b|\b[a-zA-Z_][A-Za-z0-9_]*(?=\())/gm

function getTokenClass(token: string) {
  if (token.startsWith("//")) return TOKEN_STYLES.comment
  if (
    token.startsWith('"') ||
    token.startsWith("'")
  )
    return TOKEN_STYLES.string
  if (/^\d/.test(token)) return TOKEN_STYLES.number
  if (
    /^(import|export|from|return|const|let|var|function|if|else|for|while|switch|case|default|new|true|false|null|undefined|async|await|type|interface)$/.test(
      token,
    )
  )
    return TOKEN_STYLES.keyword
  if (/^[A-Z]/.test(token)) return TOKEN_STYLES.type
  return TOKEN_STYLES.function
}

function renderHighlightedCode(code: string) {
  const matches = Array.from(code.matchAll(TOKEN_PATTERN))
  const parts: Array<{ text: string; className: string }> = []
  let lastIndex = 0

  for (const match of matches) {
    const token = match[0]
    const index = match.index ?? 0

    if (index > lastIndex) {
      parts.push({
        text: code.slice(lastIndex, index),
        className: TOKEN_STYLES.plain,
      })
    }

    parts.push({ text: token, className: getTokenClass(token) })
    lastIndex = index + token.length
  }

  if (lastIndex < code.length) {
    parts.push({
      text: code.slice(lastIndex),
      className: TOKEN_STYLES.plain,
    })
  }

  return parts.map((part, index) => (
    <span key={`${index}-${part.text.slice(0, 12)}`} className={part.className}>
      {part.text}
    </span>
  ))
}

export default function CodeBlock({
  code,
  language = "tsx",
  className,
}: {
  code: string
  language?: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      className={cn(
        "group/code-block relative overflow-hidden rounded-md border border-border bg-studio",
        className,
      )}
    >
      <button
        type="button"
        onClick={onCopy}
        aria-label="Copy code"
        className={cn(
          "absolute right-3 top-3 z-10 inline-flex h-6 w-6 items-center justify-center rounded border border-border bg-surface-100 text-foreground-muted",
          "opacity-0 transition-opacity hover:bg-surface-200 hover:text-foreground group-hover/code-block:opacity-100 focus-visible:opacity-100",
        )}
      >
        {copied ? (
          <Check className="h-3 w-3 text-brand-600" />
        ) : (
          <Copy className="h-3 w-3" />
        )}
      </button>
      <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-relaxed text-foreground max-h-[420px]">
        <code className="font-mono">{renderHighlightedCode(code)}</code>
      </pre>
    </div>
  )
}

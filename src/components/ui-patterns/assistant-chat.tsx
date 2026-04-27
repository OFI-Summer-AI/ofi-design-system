import * as React from "react"
import { Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

export type AssistantChatRole = "user" | "assistant"

export interface AssistantChatMessage {
  id: string
  role: AssistantChatRole
  content: React.ReactNode
}

export interface AssistantChatProps extends React.HTMLAttributes<HTMLDivElement> {
  messages: AssistantChatMessage[]
}

export function AssistantChat({ messages, className, ...props }: AssistantChatProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      {messages.map((m) => (
        <div key={m.id} className="flex items-start gap-3">
          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground-muted">
            {m.role === "user" ? (
              <User className="h-3.5 w-3.5" />
            ) : (
              <Bot className="h-3.5 w-3.5" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
              {m.role}
            </div>
            <div className="mt-1 text-sm leading-relaxed">{m.content}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

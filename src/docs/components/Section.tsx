import { cn } from "@/lib/utils"

export function H2({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn("mt-10 mb-3 text-xl font-semibold tracking-tight", className)}>
      {children}
    </h2>
  )
}

export function H3({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn("mt-6 mb-2 text-base font-semibold tracking-tight", className)}>
      {children}
    </h3>
  )
}

export function P({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("my-3 text-sm leading-7 text-foreground-muted", className)}>{children}</p>
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-accent px-1.5 py-0.5 font-mono text-[12px] text-foreground">
      {children}
    </code>
  )
}

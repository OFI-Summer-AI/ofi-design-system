import * as React from "react"
import { cn } from "@/lib/utils"

export function PageContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6 py-6", className)} {...props} />
}

export interface PageHeaderProps {
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  breadcrumbs?: React.ReactNode
  className?: string
}

export function PageHeader({
  title,
  description,
  actions,
  breadcrumbs,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("mb-6 flex flex-col gap-2 border-b border-border pb-4", className)}>
      {breadcrumbs}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
          {description && (
            <p className="mt-1 text-sm text-foreground-muted">{description}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </header>
  )
}

export interface PageSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode
  description?: React.ReactNode
}

export function PageSection({
  title,
  description,
  className,
  children,
  ...props
}: PageSectionProps) {
  return (
    <section className={cn("mb-8 grid gap-3", className)} {...props}>
      {(title || description) && (
        <div>
          {title && (
            <h2 className="text-base font-semibold tracking-tight">{title}</h2>
          )}
          {description && (
            <p className="mt-1 text-sm text-foreground-muted">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}

import { ChevronRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export type BreadcrumbSegment = { title: string; href?: string }

export default function PageHeader({
  title,
  description,
  breadcrumbs = [],
}: {
  title: string
  description?: React.ReactNode
  breadcrumbs?: BreadcrumbSegment[]
}) {
  const allSegments: BreadcrumbSegment[] = [
    { title: "Docs", href: "#/introduction" },
    ...breadcrumbs,
  ]
  return (
    <header className="mb-8 animate-fade-up">
      <nav
        className="mb-4 flex items-center space-x-1 text-sm text-foreground-lighter"
        aria-label="Breadcrumb"
      >
        {allSegments.map((segment, index) => (
          <span key={`${segment.title}-${index}`} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 shrink-0 text-foreground-muted" />
            )}
            {segment.href ? (
              <a
                href={segment.href}
                className="overflow-hidden text-ellipsis whitespace-nowrap hover:text-foreground transition-colors"
              >
                {segment.title}
              </a>
            ) : (
              <span className="overflow-hidden text-ellipsis whitespace-nowrap text-foreground-lighter">
                {segment.title}
              </span>
            )}
          </span>
        ))}
        {allSegments.length > 0 && (
          <ChevronRight className="h-4 w-4 shrink-0 text-foreground-muted/50" />
        )}
        <span className="overflow-hidden text-ellipsis whitespace-nowrap text-foreground-muted">
          {title}
        </span>
      </nav>
      <div className="space-y-2 mb-5">
        <h1 className="scroll-m-20 text-4xl tracking-tight">{title}</h1>
        {description && (
          <p className="text-lg text-foreground-light text-balance">{description}</p>
        )}
      </div>
      <Separator className="mb-6" />
    </header>
  )
}

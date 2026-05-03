import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { flatRoutes, type DocRoute } from "../routes"

export function getPagerForSlug(slug: string): {
  prev: DocRoute | null
  next: DocRoute | null
} {
  const idx = flatRoutes.findIndex((r) => r.slug === slug)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx > 0 ? flatRoutes[idx - 1] : null,
    next: idx < flatRoutes.length - 1 ? flatRoutes[idx + 1] : null,
  }
}

export default function Pager({ slug }: { slug: string }) {
  const { prev, next } = getPagerForSlug(slug)
  if (!prev && !next) return null
  const hasBoth = prev && next

  return (
    <div
      className={cn(
        "mt-12 flex flex-row items-center pt-6 border-t border-border",
        hasBoth ? "justify-between" : "justify-end",
      )}
    >
      {prev && (
        <a
          href={`#/${prev.slug}`}
          className="group flex gap-3 text-foreground-light hover:text-foreground"
        >
          <ChevronLeft className="mr-2 h-4 w-4 self-end mb-1 text-foreground-muted group-hover:text-foreground-lighter" />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono uppercase tracking-wider text-foreground-muted group-hover:text-foreground-lighter">
              Previous
            </span>
            {prev.title}
          </div>
        </a>
      )}
      {next && (
        <a
          href={`#/${next.slug}`}
          className="group flex gap-3 text-foreground-light hover:text-foreground"
        >
          <div className="flex flex-col gap-1 text-right">
            <span className="text-xs font-mono uppercase tracking-wider text-foreground-muted group-hover:text-foreground-lighter">
              Next
            </span>
            {next.title}
          </div>
          <ChevronRight className="ml-2 h-4 w-4 self-end mb-1 text-foreground-muted group-hover:text-foreground-lighter" />
        </a>
      )}
    </div>
  )
}

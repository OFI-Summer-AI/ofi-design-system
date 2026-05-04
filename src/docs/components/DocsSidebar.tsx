import { cn } from "@/lib/utils"
import type { DocSection } from "../routes"

export default function DocsSidebar({
  sections,
  activeSlug,
  onNavigate,
}: {
  sections: DocSection[]
  activeSlug: string
  onNavigate?: () => void
}) {
  return (
    <nav className="min-w-[220px] py-6 lg:py-8">
      {sections.map((section, i) => (
        <div key={`${section.title}-${i}`} className="pb-10 space-y-0.5">
          <div className="font-mono uppercase text-xs text-foreground-lighter/75 mb-2 px-6 tracking-widest">
            {section.title}
          </div>
          {section.routes.map((r) => {
            const active = r.slug === activeSlug
            return (
              <a
                key={r.slug}
                href={`#/${r.slug}`}
                onClick={() => onNavigate?.()}
                className={cn(
                  "relative flex items-center h-6 text-sm px-6 transition-all",
                  active
                    ? "bg-surface-200 text-foreground"
                    : "text-foreground-lighter hover:bg-surface-100 hover:text-foreground",
                )}
              >
                <div
                  className={cn(
                    "transition absolute left-0 w-1 h-full bg-foreground",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
                {r.title}
              </a>
            )
          })}
        </div>
      ))}
    </nav>
  )
}

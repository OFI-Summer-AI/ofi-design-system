import { cn } from "@/lib/utils"
import type { DocSection } from "../routes"

export default function DocsSidebar({
  sections,
  activeSlug,
}: {
  sections: DocSection[]
  activeSlug: string
}) {
  return (
    <nav className="flex flex-col gap-6 text-sm">
      {sections.map((section) => (
        <div key={section.title}>
          <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-foreground-muted">
            {section.title}
          </div>
          <ul className="flex flex-col">
            {section.routes.map((r) => {
              const active = r.slug === activeSlug
              return (
                <li key={r.slug}>
                  <a
                    href={`#/${r.slug}`}
                    className={cn(
                      "block rounded-md px-2 py-1.5 text-foreground-muted transition-colors hover:bg-accent hover:text-foreground",
                      active && "bg-accent text-foreground",
                    )}
                  >
                    {r.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}

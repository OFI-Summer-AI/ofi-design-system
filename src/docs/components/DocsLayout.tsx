import { useEffect, useMemo, useRef } from "react"
import { cn } from "@/lib/utils"
import { docSections, flatRoutes } from "../routes"
import { useHashRoute } from "../router"
import DocsSidebar from "./DocsSidebar"
import DocsTOC from "./DocsTOC"

export default function DocsLayout() {
  const [slug] = useHashRoute()
  const route = useMemo(
    () => flatRoutes.find((r) => r.slug === slug) ?? flatRoutes[0],
    [slug],
  )
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0 })
  }, [slug])

  const Page = route.Component

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-6 backdrop-blur">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-brand text-[11px] font-bold text-black">
            O
          </div>
          OFI Design System
        </div>
        <nav className="ml-6 flex items-center gap-4 text-sm text-foreground-muted">
          <a className="text-foreground" href="#/introduction">Docs</a>
          <a href="https://github.com" className="hover:text-foreground">GitHub</a>
        </nav>
      </header>

      <div className="grid grid-cols-[260px_minmax(0,1fr)_240px] gap-0">
        <aside className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-border px-4 py-6">
          <DocsSidebar sections={docSections} activeSlug={route.slug} />
        </aside>

        <main
          ref={contentRef}
          className={cn(
            "max-h-[calc(100vh-3.5rem)] overflow-y-auto px-10 py-10",
          )}
        >
          <article className="mx-auto max-w-3xl">
            <Page />
          </article>
        </main>

        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] overflow-y-auto px-4 py-10 lg:block">
          <DocsTOC key={route.slug} />
        </aside>
      </div>
    </div>
  )
}

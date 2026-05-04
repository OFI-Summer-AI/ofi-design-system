import { useEffect, useMemo, useState } from "react"
import { docSections, flatRoutes } from "../routes"
import { useHashRoute } from "../router"
import DocsSidebar from "./DocsSidebar"
import DocsTOC from "./DocsTOC"
import TopNavigation from "./TopNavigation"
import Pager from "./Pager"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function DocsLayout() {
  const [slug] = useHashRoute()
  const [mobileOpen, setMobileOpen] = useState(false)

  const route = useMemo(
    () => flatRoutes.find((r) => r.slug === slug) ?? flatRoutes[0],
    [slug],
  )

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setMobileOpen(false)
  }, [slug])

  const Page = route.Component

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNavigation onToggleSidebar={() => setMobileOpen((o) => !o)} />

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-[280px] p-0">
          <ScrollArea className="h-full">
            <DocsSidebar
              sections={docSections}
              activeSlug={route.slug}
              onNavigate={() => setMobileOpen(false)}
            />
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <main className="flex-1 max-w-site mx-auto w-full border-l border-r border-b border-border">
        <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="fixed top-12 z-30 hidden h-[calc(100vh-3rem)] w-full shrink-0 md:sticky md:block border-r border-border">
            <ScrollArea className="h-full">
              <DocsSidebar sections={docSections} activeSlug={route.slug} />
            </ScrollArea>
          </aside>

          <div
            key={route.slug}
            className="relative xl:grid xl:grid-cols-[1fr_180px] gap-4 px-6 py-6 lg:py-8 animate-fade-in"
          >
            <article className="mx-auto w-full min-w-0 max-w-4xl flex-1">
              <Page />
              <Pager slug={route.slug} />
            </article>

            <div className="hidden text-sm xl:block">
              <div className="sticky top-20 -mt-10 pt-8">
                <ScrollArea className="pb-10">
                  <div className="h-[calc(100vh-3.5rem)] py-14">
                    <DocsTOC key={route.slug} />
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

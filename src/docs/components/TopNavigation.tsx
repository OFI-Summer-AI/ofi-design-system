import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import BrandLogo from "@/components/BrandLogo"
import DocsSearch from "./DocsSearch"
import ThemeToggle from "./ThemeToggle"

export default function TopNavigation({
  onToggleSidebar,
  className,
}: {
  onToggleSidebar?: () => void
  className?: string
}) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-studio/95 backdrop-blur-sm supports-[backdrop-filter]:bg-studio/60 border-b border-l border-r border-border",
        className,
      )}
    >
      <nav className="py-3 w-full flex">
        <div className="max-w-site w-full flex flex-row items-center gap-6 mx-auto md:px-6 px-4 justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleSidebar}
              aria-label="Toggle navigation menu"
              className="md:hidden inline-flex h-7 w-7 items-center justify-center rounded text-foreground-lighter hover:bg-surface-100 hover:text-foreground transition-colors"
            >
              <Menu size={16} />
            </button>
            <a href="#/introduction" className="flex items-center lg:gap-6 gap-4">
              <BrandLogo imageClassName="h-7 w-auto" />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <DocsSearch />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}

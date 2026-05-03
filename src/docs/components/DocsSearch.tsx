import { useEffect, useState } from "react"
import { Search } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { docSections } from "../routes"
import { useHashRoute } from "../router"

export default function DocsSearch({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const [, navigate] = useHashRoute()

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const select = (slug: string) => {
    navigate(slug)
    setOpen(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex h-9 w-full items-center gap-2 rounded-md border border-border bg-background px-3 text-sm text-foreground-muted shadow-sm transition-colors hover:bg-accent hover:text-foreground sm:w-64",
          className,
        )}
      >
        <Search className="h-4 w-4 shrink-0" />
        <span className="flex-1 text-left">Search components…</span>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-foreground-muted sm:inline-flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0">
          <Command>
            <CommandInput placeholder="Search components, patterns, guides…" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {docSections.map((section, i) => (
                <div key={section.title}>
                  {i > 0 && <CommandSeparator />}
                  <CommandGroup heading={section.title}>
                    {section.routes.map((route) => (
                      <CommandItem
                        key={route.slug}
                        value={`${section.title} ${route.title} ${route.slug}`}
                        onSelect={() => select(route.slug)}
                      >
                        <span>{route.title}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </div>
              ))}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}

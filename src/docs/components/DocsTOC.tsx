import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type Heading = { id: string; text: string; level: number }

export default function DocsTOC() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("article h2, article h3"),
    )
    const items = nodes.map((node) => {
      if (!node.id) {
        node.id = (node.textContent ?? "")
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .trim()
          .replace(/\s+/g, "-")
      }
      return {
        id: node.id,
        text: node.textContent ?? "",
        level: node.tagName === "H2" ? 2 : 3,
      }
    })
    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 },
    )
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) return null

  return (
    <nav className="flex flex-col gap-2 text-sm">
      <div className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
        On this page
      </div>
      <ul className="flex flex-col gap-1">
        {headings.map((h) => (
          <li key={h.id} className={cn(h.level === 3 && "pl-3")}>
            <a
              href={`#${h.id}`}
              className={cn(
                "block py-0.5 text-foreground-muted transition-colors hover:text-foreground",
                active === h.id && "text-foreground",
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

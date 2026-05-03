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
    <div className="space-y-2 text-sm">
      <p className="font-medium text-foreground-light">On This Page</p>
      <ul className="m-0 list-none">
        {headings.map((h) => (
          <li key={h.id} className={cn("mt-0 pt-2", h.level === 3 && "pl-4")}>
            <a
              href={`#${h.id}`}
              className={cn(
                "inline-block no-underline transition-colors hover:text-foreground",
                active === h.id
                  ? "font-medium text-foreground"
                  : "text-foreground-muted",
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

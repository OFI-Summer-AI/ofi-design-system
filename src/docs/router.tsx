import { useEffect, useState } from "react"

function readHash(): string {
  const raw = window.location.hash.replace(/^#\/?/, "")
  return raw || "introduction"
}

export function useHashRoute(): [string, (slug: string) => void] {
  const [slug, setSlug] = useState<string>(() => readHash())

  useEffect(() => {
    const onChange = () => setSlug(readHash())
    window.addEventListener("hashchange", onChange)
    return () => window.removeEventListener("hashchange", onChange)
  }, [])

  const navigate = (next: string) => {
    window.location.hash = `/${next}`
  }

  return [slug, navigate]
}

export function DocLink({
  slug,
  className,
  children,
  onNavigate,
}: {
  slug: string
  className?: string
  children: React.ReactNode
  onNavigate?: () => void
}) {
  return (
    <a
      href={`#/${slug}`}
      className={className}
      onClick={() => onNavigate?.()}
    >
      {children}
    </a>
  )
}

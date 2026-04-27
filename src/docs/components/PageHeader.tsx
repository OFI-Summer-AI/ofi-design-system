export default function PageHeader({
  title,
  description,
}: {
  title: string
  description?: React.ReactNode
}) {
  return (
    <header className="mb-8 border-b border-border pb-6">
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      {description && (
        <p className="mt-2 text-base text-foreground-muted">{description}</p>
      )}
    </header>
  )
}

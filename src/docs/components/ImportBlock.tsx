import CodeBlock from "./CodeBlock"

export default function ImportBlock({
  imports,
  pkg = "@daivymoralesofi/ofiui",
  showInstall = true,
}: {
  imports: string[]
  pkg?: string
  showInstall?: boolean
}) {
  const importLine = `import { ${imports.join(", ")} } from "${pkg}"`

  return (
    <div className="my-6 space-y-3">
      {showInstall && (
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-foreground-muted">
            Install
          </p>
          <CodeBlock language="bash" code={`npm install ${pkg}`} />
        </div>
      )}
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-foreground-muted">
          Import
        </p>
        <CodeBlock language="tsx" code={importLine} />
      </div>
    </div>
  )
}

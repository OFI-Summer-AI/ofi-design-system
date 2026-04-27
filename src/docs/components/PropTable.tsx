export type PropRow = {
  name: string
  type: string
  default?: string
  description?: string
}

export default function PropTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-md border border-border">
      <table className="w-full text-sm">
        <thead className="bg-card text-left text-foreground-muted">
          <tr>
            <th className="px-4 py-2 font-medium">Prop</th>
            <th className="px-4 py-2 font-medium">Type</th>
            <th className="px-4 py-2 font-medium">Default</th>
            <th className="px-4 py-2 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-t border-border">
              <td className="px-4 py-2 font-mono text-xs">{row.name}</td>
              <td className="px-4 py-2 font-mono text-xs text-foreground-muted">
                {row.type}
              </td>
              <td className="px-4 py-2 font-mono text-xs text-foreground-muted">
                {row.default ?? "—"}
              </td>
              <td className="px-4 py-2 text-foreground-muted">
                {row.description ?? ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

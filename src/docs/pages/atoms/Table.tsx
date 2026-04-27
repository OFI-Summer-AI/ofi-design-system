import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const rows = [
  { id: "u_1", name: "Ada Lovelace", role: "Admin", status: "Active" },
  { id: "u_2", name: "Alan Turing", role: "Editor", status: "Invited" },
  { id: "u_3", name: "Grace Hopper", role: "Viewer", status: "Active" },
]

export default function TableDoc() {
  return (
    <>
      <PageHeader
        title="Table"
        description="A semantic HTML table styled for product surfaces. For interactive tables (sort, filter, paginate) wrap with TanStack Table or pair with the Filter Bar fragment."
      />
      <ComponentPreview
        preview={
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>{r.name}</TableCell>
                  <TableCell>{r.role}</TableCell>
                  <TableCell>{r.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
        code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Role</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {rows.map((r) => (
      <TableRow key={r.id}>
        <TableCell>{r.name}</TableCell>
        <TableCell>{r.role}</TableCell>
        <TableCell>{r.status}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
      />
    </>
  )
}

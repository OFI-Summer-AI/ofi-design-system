import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import ImportBlock from "../../components/ImportBlock"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function PaginationDoc() {
  return (
    <>
      <PageHeader
        title="Pagination"
        description="A navigation control for paged collections. Use when results would otherwise exceed a comfortable scroll length."
      />
      <ImportBlock imports={["Pagination", "PaginationContent", "PaginationEllipsis", "PaginationItem", "PaginationLink", "PaginationNext", "PaginationPrevious"]} />
      <ComponentPreview
        preview={
          <Pagination>
            <PaginationContent>
              <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
              <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
              <PaginationItem><PaginationEllipsis /></PaginationItem>
              <PaginationItem><PaginationNext href="#" /></PaginationItem>
            </PaginationContent>
          </Pagination>
        }
        code={`<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`}
      />
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import { PageHeader as PagePageHeader } from "@/components/ui-patterns/page-layout"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function PageHeaderFragmentDoc() {
  return (
    <>
      <PageHeader
        title="Page Header"
        description="The standardized page-level title block: breadcrumbs, title, description, and a right-aligned action slot. Use one per page, immediately inside Page Container."
      />

      <H2>With actions and breadcrumbs</H2>
      <ComponentPreview
        preview={
          <div className="w-full rounded-md border border-border bg-card p-6">
            <PagePageHeader
              breadcrumbs={
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Projects</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Invoice agent</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              }
              title="Invoice agent"
              description="Process incoming invoices and post results to the data warehouse."
              actions={
                <>
                  <Button type="outline">Settings</Button>
                  <Button>Run now</Button>
                </>
              }
            />
          </div>
        }
        code={`<PageHeader
  breadcrumbs={<Breadcrumb>...</Breadcrumb>}
  title="Invoice agent"
  description="Process incoming invoices..."
  actions={
    <>
      <Button type="outline">Settings</Button>
      <Button>Run now</Button>
    </>
  }
/>`}
      />

      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "title", type: "ReactNode", description: "Required. Page title." },
          { name: "description", type: "ReactNode", description: "Subtitle / one-line context." },
          { name: "breadcrumbs", type: "ReactNode", description: "Slot rendered above the title — typically a Breadcrumb." },
          { name: "actions", type: "ReactNode", description: "Right-aligned button cluster." },
          { name: "className", type: "string" },
        ]}
      />
    </>
  )
}

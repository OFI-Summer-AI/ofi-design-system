import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonDoc() {
  return (
    <>
      <PageHeader
        title="Skeleton"
        description="A placeholder shape rendered while real content is loading. Match the size and rough shape of the content it's standing in for to avoid layout shift."
      />
      <ComponentPreview
        preview={
          <div className="flex w-full max-w-sm items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3 w-2/3" />
              <Skeleton className="h-3 w-full" />
            </div>
          </div>
        }
        code={`<Skeleton className="h-10 w-10 rounded-full" />
<Skeleton className="h-3 w-2/3" />`}
      />
    </>
  )
}

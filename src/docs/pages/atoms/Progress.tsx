import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { Progress } from "@/components/ui/progress"

export default function ProgressDoc() {
  return (
    <>
      <PageHeader
        title="Progress"
        description="A determinate progress indicator. Use for operations with a known duration or completion percentage; for unknown durations, use a Skeleton or spinner."
      />
      <ComponentPreview
        preview={
          <div className="w-full max-w-sm space-y-2">
            <Progress value={32} />
            <Progress value={68} />
            <Progress value={100} />
          </div>
        }
        code={`<Progress value={32} />
<Progress value={68} />
<Progress value={100} />`}
      />
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CardDoc() {
  return (
    <>
      <PageHeader
        title="Card"
        description="A surface that groups related content. Cards establish hierarchy on a page; avoid nesting cards inside cards — use Separator instead."
      />
      <ComponentPreview
        preview={
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Project usage</CardTitle>
              <CardDescription>Last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold tracking-tight">12,488</div>
              <div className="text-xs text-foreground-muted">requests</div>
            </CardContent>
            <CardFooter>
              <Button type="outline" size="small">View report</Button>
            </CardFooter>
          </Card>
        }
        code={`<Card>
  <CardHeader>
    <CardTitle>Project usage</CardTitle>
    <CardDescription>Last 30 days</CardDescription>
  </CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>...</CardFooter>
</Card>`}
      />
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export default function TooltipDoc() {
  return (
    <>
      <PageHeader
        title="Tooltip"
        description="A short label that appears on hover or focus. Use only for non-essential information — anything the user must read should live in the UI itself."
      />
      <ComponentPreview
        preview={
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button type="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>Sends a verification email</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        }
        code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button type="outline">Hover</Button></TooltipTrigger>
    <TooltipContent>Sends a verification email</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      />
    </>
  )
}

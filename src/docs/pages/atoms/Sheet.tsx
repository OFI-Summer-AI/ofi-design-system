import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function SheetDoc() {
  return (
    <>
      <PageHeader
        title="Sheet"
        description="A side panel that slides in from an edge of the viewport. Use for forms or detail views that need real estate without leaving the page."
      />
      <ComponentPreview
        preview={
          <Sheet>
            <SheetTrigger asChild>
              <Button type="outline">Open sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile. Click save when done.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        }
        code={`<Sheet>
  <SheetTrigger asChild><Button type="outline">Open</Button></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>...</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
      />
    </>
  )
}

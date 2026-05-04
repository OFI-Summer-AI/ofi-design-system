import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import ImportBlock from "../../components/ImportBlock"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

export default function DrawerDoc() {
  return (
    <>
      <PageHeader
        title="Drawer"
        description="A bottom-anchored sheet built on vaul. Optimized for mobile-style interactions where the user can drag to dismiss."
      />
      <ImportBlock imports={["Drawer", "DrawerContent", "DrawerDescription", "DrawerFooter", "DrawerHeader", "DrawerTitle", "DrawerTrigger", "Button"]} />
      <ComponentPreview
        preview={
          <Drawer>
            <DrawerTrigger asChild>
              <Button type="outline">Open drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Filter</DrawerTitle>
                <DrawerDescription>Refine the list of results.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Apply</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        }
        code={`<Drawer>
  <DrawerTrigger asChild><Button type="outline">Open</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Filter</DrawerTitle>
      <DrawerDescription>...</DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer>`}
      />
    </>
  )
}

import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function DropdownMenuDoc() {
  return (
    <>
      <PageHeader
        title="Dropdown menu"
        description="A short list of actions or options anchored to a trigger. Use for row-level actions in tables, profile menus, and command-bar overflow."
      />
      <ComponentPreview
        preview={
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button type="outline">Actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        }
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild><Button type="outline">Actions</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Sign out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      />
    </>
  )
}

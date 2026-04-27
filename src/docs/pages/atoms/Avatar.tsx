import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarDoc() {
  return (
    <>
      <PageHeader
        title="Avatar"
        description="A circular image used to represent a user or workspace. Always provide a fallback so the avatar still renders when the image fails to load."
      />
      <ComponentPreview
        preview={
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/80?img=12" alt="Ada" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>OF</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<Avatar>
  <AvatarImage src="..." alt="Ada" />
  <AvatarFallback>AD</AvatarFallback>
</Avatar>`}
      />
    </>
  )
}

import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  imageClassName?: string
}

export default function BrandLogo({
  className,
  imageClassName,
}: BrandLogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src="/ofi-design-system.svg"
        alt="OfiUI"
        className={cn("h-8 shrink-0 object-contain", imageClassName)}
      />
    </div>
  )
}

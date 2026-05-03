import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import PropTable from "../../components/PropTable"
import { H2 } from "../../components/Section"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselDoc() {
  return (
    <>
      <PageHeader
        title="Carousel"
        description="A horizontally swipeable slider built on Embla. Use it for onboarding tours, image galleries, and dashboard tip carousels — never for primary navigation."
      />
      <H2>Default</H2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-md px-12">
            <Carousel>
              <CarouselContent>
                {[1, 2, 3, 4, 5].map((n) => (
                  <CarouselItem key={n}>
                    <div className="flex h-32 items-center justify-center rounded-md border border-border bg-card text-2xl font-semibold">
                      Slide {n}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        }
        code={`<Carousel>
  <CarouselContent>
    {slides.map(s => (
      <CarouselItem key={s.id}>{s.content}</CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      />
      <H2>Props</H2>
      <PropTable
        rows={[
          { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"' },
          { name: "opts", type: "EmblaOptionsType", description: "Forwarded to embla-carousel-react." },
          { name: "plugins", type: "EmblaPluginType[]", description: "Embla plugins (autoplay, fade, etc.)." },
          { name: "setApi", type: "(api) => void", description: "Receives the Embla API for external control." },
        ]}
      />
    </>
  )
}

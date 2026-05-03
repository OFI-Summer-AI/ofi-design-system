import * as React from "react"
import { buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import CodeBlock from "../../components/CodeBlock"
import ComponentPreview from "../../components/ComponentPreview"
import ImportBlock from "../../components/ImportBlock"
import PageHeader from "../../components/PageHeader"
import { H2, H3, InlineCode, P } from "../../components/Section"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll Area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content known as tab panels that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives focus or hover.",
  },
]

const repeatedComponents = Array.from({ length: 4 }, (_, index) => ({
  key: `components-${index}`,
  label: "Components",
}))

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-foreground-muted">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

function NavigationMenuDemo() {
  return (
    <div className="w-full max-w-[720px]">
      <NavigationMenu className="w-full max-w-none justify-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(buttonVariants({ type: "text", size: "small" }))}
            >
              Getting started
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md border bg-gradient-to-b from-background to-muted/40 p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                      <p className="text-sm leading-tight text-foreground-muted">
                        Beautifully designed components that you can copy and paste
                        into your apps. Accessible. Customizable. Open Source.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists, and other written content.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(buttonVariants({ type: "text", size: "small" }))}
            >
              Components
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/docs"
              className={buttonVariants({ type: "text", size: "small" })}
            >
              Documentation
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

function NavigationMenuScrollDemo() {
  return (
    <div className="w-full max-w-[720px]">
      <NavigationMenu renderViewport={false} className="w-full max-w-none rounded-md border">
        <ScrollArea className="w-full whitespace-nowrap">
          <NavigationMenuList className="w-max min-w-full justify-start p-3">
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(buttonVariants({ type: "text", size: "small" }))}
              >
                Getting started
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 text-base font-medium">shadcn/ui</div>
                        <p className="text-sm leading-tight text-foreground-muted">
                          Beautifully designed components that you can copy and paste
                          into your apps.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {repeatedComponents.map((item) => (
              <NavigationMenuItem key={item.key}>
                <NavigationMenuTrigger
                  className={cn(buttonVariants({ type: "text", size: "small" }))}
                >
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={`${item.key}-${component.title}`}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/docs"
                className={buttonVariants({ type: "text", size: "small" })}
              >
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <NavigationMenuViewport containerProps={{ className: "w-full" }} />
      </NavigationMenu>
    </div>
  )
}

export default function NavigationMenuDoc() {
  return (
    <>
      <PageHeader
        title="Navigation Menu"
        description="A collection of links for navigating websites."
      />
      <ImportBlock imports={["buttonVariants", "NavigationMenu", "NavigationMenuContent", "NavigationMenuItem", "NavigationMenuLink", "NavigationMenuList", "NavigationMenuTrigger", "NavigationMenuViewport", "navigationMenuTriggerStyle", "ScrollArea", "ScrollBar", "cn"]} />

      <P>This component uses Radix UI.</P>

      <ComponentPreview
        allowPreviewOverflow
        preview={
          <div className="flex w-full justify-center py-24">
            <NavigationMenuDemo />
          </div>
        }
        code={`import * as React from "react"
import {
  buttonVariants,
  cn,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "ui"

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
]

export function NavigationMenuDemo() {
  return (
    <div>
      <NavigationMenu className="w-fit">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={cn(buttonVariants({ type: "text", size: "small" }))}>
              Getting started
            </NavigationMenuTrigger>
            <NavigationMenuContent>{/* ... */}</NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/docs"
              className={buttonVariants({ type: "text", size: "small" })}
            >
              Documentation
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}`}
      />

      <H2>Installation</H2>
      <H3>CLI</H3>
      <CodeBlock language="bash" code="npx shadcn-ui@latest add navigation-menu" />

      <H3>Manual</H3>
      <P>
        The primitive lives at{" "}
        <InlineCode>src/components/ui/navigation-menu.tsx</InlineCode>.
      </P>

      <H2>Usage</H2>
      <CodeBlock
        className="max-w-3xl"
        code={`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"`}
      />
      <CodeBlock
        className="max-w-3xl"
        code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
      />

      <H2>Examples</H2>

      <H3>Link Component</H3>
      <P>
        When using a client-side routing link component, use{" "}
        <InlineCode>navigationMenuTriggerStyle()</InlineCode> to apply the correct
        styles to the trigger-like link.
      </P>
      <CodeBlock
        className="max-w-3xl"
        code={`import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

<NavigationMenuItem>
  <NavigationMenuLink href="/docs" className={navigationMenuTriggerStyle()}>
    Documentation
  </NavigationMenuLink>
</NavigationMenuItem>`}
      />

      <H3>With horizontal scroll</H3>
      <P>
        Wrap the <InlineCode>NavigationMenuList</InlineCode> in a scroll container
        when the trigger set can overflow on smaller viewports. Set{" "}
        <InlineCode>renderViewport=&#123;false&#125;</InlineCode> and render your own{" "}
        <InlineCode>NavigationMenuViewport</InlineCode> outside the scroll region so
        content panels position correctly.
      </P>
      <ComponentPreview
        allowPreviewOverflow
        preview={<NavigationMenuScrollDemo />}
        code={`<NavigationMenu renderViewport={false} className="max-w-[500px] rounded-md border">
  <ScrollArea className="w-full whitespace-nowrap">
    <NavigationMenuList className="w-max min-w-full justify-start p-3">
      {/* items */}
    </NavigationMenuList>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
  <NavigationMenuViewport containerProps={{ className: "w-full" }} />
</NavigationMenu>`}
      />
    </>
  )
}

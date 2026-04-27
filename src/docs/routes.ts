import type { ComponentType } from "react"

import Introduction from "./pages/getting-started/Introduction"
import Accessibility from "./pages/getting-started/Accessibility"
import ColorUsage from "./pages/getting-started/ColorUsage"
import Copywriting from "./pages/getting-started/Copywriting"
import IconsPage from "./pages/getting-started/Icons"
import TailwindClasses from "./pages/getting-started/TailwindClasses"
import Theming from "./pages/getting-started/Theming"
import Typography from "./pages/getting-started/Typography"

import PatternsIntro from "./pages/patterns/Introduction"
import ChartsPattern from "./pages/patterns/Charts"
import EmptyStatesPattern from "./pages/patterns/EmptyStates"
import FormsPattern from "./pages/patterns/Forms"
import LayoutPattern from "./pages/patterns/Layout"
import ModalityPattern from "./pages/patterns/Modality"
import NavigationPattern from "./pages/patterns/Navigation"
import TablesPattern from "./pages/patterns/Tables"

import ButtonDoc from "./pages/atoms/Button"
import BadgeDoc from "./pages/atoms/Badge"
import AccordionDoc from "./pages/atoms/Accordion"
import AlertDoc from "./pages/atoms/Alert"
import AlertDialogDoc from "./pages/atoms/AlertDialog"
import AspectRatioDoc from "./pages/atoms/AspectRatio"
import InputDoc from "./pages/atoms/Input"
import InputOTPDoc from "./pages/atoms/InputOTP"
import KeyboardShortcutDoc from "./pages/atoms/KeyboardShortcut"
import LabelDoc from "./pages/atoms/Label"
import MenubarDoc from "./pages/atoms/Menubar"
import NavigationMenuDoc from "./pages/atoms/NavigationMenu"
import CheckboxDoc from "./pages/atoms/Checkbox"
import CollapsibleDoc from "./pages/atoms/Collapsible"
import CommandDoc from "./pages/atoms/Command"
import BreadcrumbDoc from "./pages/atoms/Breadcrumb"
import DialogDoc from "./pages/atoms/Dialog"
import DrawerDoc from "./pages/atoms/Drawer"
import DropdownMenuDoc from "./pages/atoms/DropdownMenu"
import HoverCardDoc from "./pages/atoms/HoverCard"
import RadioGroupDoc from "./pages/atoms/RadioGroup"
import RadioGroupCardDoc from "./pages/atoms/RadioGroupCard"
import SwitchDoc from "./pages/atoms/Switch"
import SelectDoc from "./pages/atoms/Select"
import TextareaDoc from "./pages/atoms/Textarea"
import AvatarDoc from "./pages/atoms/Avatar"
import CardDoc from "./pages/atoms/Card"
import PaginationDoc from "./pages/atoms/Pagination"
import SeparatorDoc from "./pages/atoms/Separator"
import ProgressDoc from "./pages/atoms/Progress"
import ScrollAreaDoc from "./pages/atoms/ScrollArea"
import SkeletonDoc from "./pages/atoms/Skeleton"
import SliderDoc from "./pages/atoms/Slider"
import TableDoc from "./pages/atoms/Table"
import CalendarDoc from "./pages/atoms/Calendar"
import PopoverDoc from "./pages/atoms/Popover"
import SheetDoc from "./pages/atoms/Sheet"
import SonnerDoc from "./pages/atoms/Sonner"
import TabsDoc from "./pages/atoms/Tabs"
import ToggleDoc from "./pages/atoms/Toggle"
import TooltipDoc from "./pages/atoms/Tooltip"

import AdmonitionDoc from "./pages/fragments/Admonition"
import MultiSelectDoc from "./pages/fragments/MultiSelect"
import FormItemLayoutDoc from "./pages/fragments/FormItemLayout"
import KeyValueFieldArrayDoc from "./pages/fragments/KeyValueFieldArray"
import SingleValueFieldArrayDoc from "./pages/fragments/SingleValueFieldArray"
import LogsBarChartDoc from "./pages/fragments/LogsBarChart"
import MetricCardDoc from "./pages/fragments/MetricCard"
import AlertCollapsibleDoc from "./pages/fragments/AlertCollapsible"

export type DocRoute = {
  slug: string
  title: string
  Component: ComponentType
}

export type DocSection = {
  title: string
  routes: DocRoute[]
}

export const docSections: DocSection[] = [
  {
    title: "Getting started",
    routes: [
      { slug: "introduction", title: "Introduction", Component: Introduction },
      { slug: "accessibility", title: "Accessibility", Component: Accessibility },
      { slug: "color-usage", title: "Color usage", Component: ColorUsage },
      { slug: "copywriting", title: "Copywriting", Component: Copywriting },
      { slug: "icons", title: "Icons", Component: IconsPage },
      { slug: "tailwind", title: "Tailwind classes", Component: TailwindClasses },
      { slug: "theming", title: "Theming", Component: Theming },
      { slug: "typography", title: "Typography", Component: Typography },
    ],
  },
  {
    title: "UI patterns",
    routes: [
      { slug: "patterns/introduction", title: "Introduction", Component: PatternsIntro },
      { slug: "patterns/charts", title: "Charts", Component: ChartsPattern },
      { slug: "patterns/empty-states", title: "Empty states", Component: EmptyStatesPattern },
      { slug: "patterns/forms", title: "Forms", Component: FormsPattern },
      { slug: "patterns/layout", title: "Layout", Component: LayoutPattern },
      { slug: "patterns/modality", title: "Modality", Component: ModalityPattern },
      { slug: "patterns/navigation", title: "Navigation", Component: NavigationPattern },
      { slug: "patterns/tables", title: "Tables", Component: TablesPattern },
    ],
  },
  {
    title: "Fragments",
    routes: [
      { slug: "fragments/admonition", title: "Admonition", Component: AdmonitionDoc },
      { slug: "fragments/alert-collapsible", title: "Alert collapsible", Component: AlertCollapsibleDoc },
      { slug: "fragments/multi-select", title: "Multi select", Component: MultiSelectDoc },
      { slug: "fragments/form-item-layout", title: "Form item layout", Component: FormItemLayoutDoc },
      { slug: "fragments/key-value-field-array", title: "Key/Value field array", Component: KeyValueFieldArrayDoc },
      { slug: "fragments/single-value-field-array", title: "Single value field array", Component: SingleValueFieldArrayDoc },
      { slug: "fragments/logs-bar-chart", title: "Logs bar chart", Component: LogsBarChartDoc },
      { slug: "fragments/metric-card", title: "Metric card", Component: MetricCardDoc },
    ],
  },
  {
    title: "Atoms",
    routes: [
      { slug: "atoms/accordion", title: "Accordion", Component: AccordionDoc },
      { slug: "atoms/alert", title: "Alert", Component: AlertDoc },
      { slug: "atoms/alert-dialog", title: "Alert dialog", Component: AlertDialogDoc },
      { slug: "atoms/aspect-ratio", title: "Aspect ratio", Component: AspectRatioDoc },
      { slug: "atoms/avatar", title: "Avatar", Component: AvatarDoc },
      { slug: "atoms/badge", title: "Badge", Component: BadgeDoc },
      { slug: "atoms/breadcrumb", title: "Breadcrumb", Component: BreadcrumbDoc },
      { slug: "atoms/button", title: "Button", Component: ButtonDoc },
      { slug: "atoms/calendar", title: "Calendar", Component: CalendarDoc },
      { slug: "atoms/card", title: "Card", Component: CardDoc },
      { slug: "atoms/checkbox", title: "Checkbox", Component: CheckboxDoc },
      { slug: "atoms/collapsible", title: "Collapsible", Component: CollapsibleDoc },
      { slug: "atoms/command", title: "Command", Component: CommandDoc },
      { slug: "atoms/dialog", title: "Dialog", Component: DialogDoc },
      { slug: "atoms/drawer", title: "Drawer", Component: DrawerDoc },
      { slug: "atoms/dropdown-menu", title: "Dropdown menu", Component: DropdownMenuDoc },
      { slug: "atoms/hover-card", title: "Hover card", Component: HoverCardDoc },
      { slug: "atoms/input", title: "Input", Component: InputDoc },
      { slug: "atoms/input-otp", title: "Input OTP", Component: InputOTPDoc },
      { slug: "atoms/keyboard-shortcut", title: "Keyboard shortcut", Component: KeyboardShortcutDoc },
      { slug: "atoms/label", title: "Label", Component: LabelDoc },
      { slug: "atoms/menubar", title: "Menubar", Component: MenubarDoc },
      { slug: "atoms/navigation-menu", title: "Navigation menu", Component: NavigationMenuDoc },
      { slug: "atoms/pagination", title: "Pagination", Component: PaginationDoc },
      { slug: "atoms/popover", title: "Popover", Component: PopoverDoc },
      { slug: "atoms/progress", title: "Progress", Component: ProgressDoc },
      { slug: "atoms/radio-group", title: "Radio group", Component: RadioGroupDoc },
      { slug: "atoms/radio-group-card", title: "Radio group card", Component: RadioGroupCardDoc },
      { slug: "atoms/scroll-area", title: "Scroll area", Component: ScrollAreaDoc },
      { slug: "atoms/select", title: "Select", Component: SelectDoc },
      { slug: "atoms/separator", title: "Separator", Component: SeparatorDoc },
      { slug: "atoms/sheet", title: "Sheet", Component: SheetDoc },
      { slug: "atoms/skeleton", title: "Skeleton", Component: SkeletonDoc },
      { slug: "atoms/slider", title: "Slider", Component: SliderDoc },
      { slug: "atoms/sonner", title: "Sonner", Component: SonnerDoc },
      { slug: "atoms/switch", title: "Switch", Component: SwitchDoc },
      { slug: "atoms/table", title: "Table", Component: TableDoc },
      { slug: "atoms/tabs", title: "Tabs", Component: TabsDoc },
      { slug: "atoms/textarea", title: "Textarea", Component: TextareaDoc },
      { slug: "atoms/toggle", title: "Toggle", Component: ToggleDoc },
      { slug: "atoms/tooltip", title: "Tooltip", Component: TooltipDoc },
    ],
  },
]

export const flatRoutes: DocRoute[] = docSections.flatMap((s) => s.routes)

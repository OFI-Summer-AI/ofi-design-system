import type { ComponentType } from "react"

import Installation from "./pages/getting-started/Installation"
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
import DataInputDoc from "./pages/fragments/DataInputPage"
import AssistantChatDoc from "./pages/fragments/AssistantChat"
import ConfirmationModalDoc from "./pages/fragments/ConfirmationModal"
import EmptyStatePresentationalDoc from "./pages/fragments/EmptyStatePresentational"
import ErrorDisplayDoc from "./pages/fragments/ErrorDisplay"
import FilterBarDoc from "./pages/fragments/FilterBar"
import InfoTooltipDoc from "./pages/fragments/InfoTooltip"
import InnerSideMenuDoc from "./pages/fragments/InnerSideMenu"
import PageContainerDoc from "./pages/fragments/PageContainer"
import PageHeaderFragmentDoc from "./pages/fragments/PageHeaderFragment"
import PageSectionDoc from "./pages/fragments/PageSection"
import StatusCodeDoc from "./pages/fragments/StatusCode"
import TextConfirmDialogDoc from "./pages/fragments/TextConfirmDialog"
import TocDoc from "./pages/fragments/Toc"
import FormDoc from "./pages/atoms/Form"
import ToggleGroupDoc from "./pages/atoms/ToggleGroup"
import InputGroupDoc from "./pages/atoms/InputGroup"
import AtomsIntroductionDoc from "./pages/atoms/Introduction"
import CarouselDoc from "./pages/atoms/Carousel"
import ComboboxDoc from "./pages/atoms/Combobox"
import CommandMenuDoc from "./pages/atoms/CommandMenu"
import ContextMenuDoc from "./pages/atoms/ContextMenu"
import DatePickerDoc from "./pages/atoms/DatePicker"
import ExpandingTextareaDoc from "./pages/atoms/ExpandingTextarea"
import FieldDoc from "./pages/atoms/Field"
import MermaidDoc from "./pages/atoms/Mermaid"
import NavMenuDoc from "./pages/atoms/NavMenu"
import RadioGroupStackedDoc from "./pages/atoms/RadioGroupStacked"
import ResizableDoc from "./pages/atoms/Resizable"
import SidebarDoc from "./pages/atoms/Sidebar"
import TreeViewDoc from "./pages/atoms/TreeView"
import FragmentsIntroductionDoc from "./pages/fragments/Introduction"
import ModalDoc from "./pages/fragments/Modal"

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
    title: "Getting Started",
    routes: [
      { slug: "introduction", title: "Introduction", Component: Introduction },
      { slug: "accessibility", title: "Accessibility", Component: Accessibility },
      { slug: "color-usage", title: "Color Usage", Component: ColorUsage },
      { slug: "copywriting", title: "Copywriting", Component: Copywriting },
      { slug: "icons", title: "Icons", Component: IconsPage },
      { slug: "tailwind", title: "Tailwind Classes", Component: TailwindClasses },
      { slug: "theming", title: "Theming", Component: Theming },
      { slug: "typography", title: "Typography", Component: Typography },
      { slug: "installation", title: "Installation", Component: Installation },
    ],
  },
  {
    title: "UI Patterns",
    routes: [
      { slug: "patterns/introduction", title: "Introduction", Component: PatternsIntro },
      { slug: "patterns/charts", title: "Charts", Component: ChartsPattern },
      { slug: "patterns/empty-states", title: "Empty States", Component: EmptyStatesPattern },
      { slug: "patterns/forms", title: "Forms", Component: FormsPattern },
      { slug: "patterns/layout", title: "Layout", Component: LayoutPattern },
      { slug: "patterns/modality", title: "Modality", Component: ModalityPattern },
      { slug: "patterns/navigation", title: "Navigation", Component: NavigationPattern },
      { slug: "patterns/tables", title: "Tables", Component: TablesPattern },
    ],
  },
  {
    title: "Fragment Components",
    routes: [
      { slug: "fragments/introduction", title: "Introduction", Component: FragmentsIntroductionDoc },
      { slug: "fragments/admonition", title: "Admonition", Component: AdmonitionDoc },
      { slug: "fragments/assistant-chat", title: "Assistant Chat", Component: AssistantChatDoc },
      { slug: "fragments/confirmation-modal", title: "Confirmation Modal", Component: ConfirmationModalDoc },
      { slug: "fragments/data-input", title: "Data Input", Component: DataInputDoc },
      { slug: "fragments/empty-state", title: "Empty State Presentational", Component: EmptyStatePresentationalDoc },
      { slug: "fragments/error-display", title: "Error Display", Component: ErrorDisplayDoc },
      { slug: "fragments/filter-bar", title: "Filter Bar", Component: FilterBarDoc },
      { slug: "fragments/form-item-layout", title: "Form Item Layout", Component: FormItemLayoutDoc },
      { slug: "fragments/info-tooltip", title: "Info Tooltip", Component: InfoTooltipDoc },
      { slug: "fragments/inner-side-menu", title: "Inner Side Menu", Component: InnerSideMenuDoc },
      { slug: "fragments/key-value-field-array", title: "Key/Value Field Array", Component: KeyValueFieldArrayDoc },
      { slug: "fragments/logs-bar-chart", title: "Logs Bar Chart", Component: LogsBarChartDoc },
      { slug: "fragments/metric-card", title: "Metric Card", Component: MetricCardDoc },
      { slug: "fragments/modal", title: "Modal", Component: ModalDoc },
      { slug: "fragments/multi-select", title: "Multi Select", Component: MultiSelectDoc },
      { slug: "fragments/page-container", title: "Page Container", Component: PageContainerDoc },
      { slug: "fragments/page-header", title: "Page Header", Component: PageHeaderFragmentDoc },
      { slug: "fragments/page-section", title: "Page Section", Component: PageSectionDoc },
      { slug: "fragments/single-value-field-array", title: "Single Value Field Array", Component: SingleValueFieldArrayDoc },
      { slug: "fragments/status-code", title: "Status Codes", Component: StatusCodeDoc },
      { slug: "fragments/toc", title: "Table of Contents (TOC)", Component: TocDoc },
      { slug: "fragments/text-confirm-dialog", title: "Text Confirm Dialog", Component: TextConfirmDialogDoc },
      { slug: "fragments/alert-collapsible", title: "Alert Collapsible", Component: AlertCollapsibleDoc },
    ],
  },
  {
    title: "Atom Components",
    routes: [
      { slug: "atoms/introduction", title: "Introduction", Component: AtomsIntroductionDoc },
      { slug: "atoms/accordion", title: "Accordion", Component: AccordionDoc },
      { slug: "atoms/alert", title: "Alert", Component: AlertDoc },
      { slug: "atoms/alert-dialog", title: "Alert Dialog", Component: AlertDialogDoc },
      { slug: "atoms/aspect-ratio", title: "Aspect Ratio", Component: AspectRatioDoc },
      { slug: "atoms/avatar", title: "Avatar", Component: AvatarDoc },
      { slug: "atoms/badge", title: "Badge", Component: BadgeDoc },
      { slug: "atoms/breadcrumb", title: "Breadcrumb", Component: BreadcrumbDoc },
      { slug: "atoms/button", title: "Button", Component: ButtonDoc },
      { slug: "atoms/calendar", title: "Calendar", Component: CalendarDoc },
      { slug: "atoms/card", title: "Card", Component: CardDoc },
      { slug: "atoms/carousel", title: "Carousel", Component: CarouselDoc },
      { slug: "atoms/checkbox", title: "Checkbox", Component: CheckboxDoc },
      { slug: "atoms/collapsible", title: "Collapsible", Component: CollapsibleDoc },
      { slug: "atoms/combobox", title: "Combobox", Component: ComboboxDoc },
      { slug: "atoms/command", title: "Command", Component: CommandDoc },
      { slug: "atoms/command-menu", title: "Command Menu (cmdk)", Component: CommandMenuDoc },
      { slug: "atoms/context-menu", title: "Context Menu", Component: ContextMenuDoc },
      { slug: "atoms/date-picker", title: "Date Picker", Component: DatePickerDoc },
      { slug: "atoms/dialog", title: "Dialog", Component: DialogDoc },
      { slug: "atoms/drawer", title: "Drawer", Component: DrawerDoc },
      { slug: "atoms/dropdown-menu", title: "Dropdown Menu", Component: DropdownMenuDoc },
      { slug: "atoms/expanding-textarea", title: "Expanding Textarea", Component: ExpandingTextareaDoc },
      { slug: "atoms/field", title: "Field", Component: FieldDoc },
      { slug: "atoms/form", title: "Form", Component: FormDoc },
      { slug: "atoms/hover-card", title: "Hover Card", Component: HoverCardDoc },
      { slug: "atoms/input", title: "Input", Component: InputDoc },
      { slug: "atoms/input-group", title: "Input Group", Component: InputGroupDoc },
      { slug: "atoms/input-otp", title: "Input OTP", Component: InputOTPDoc },
      { slug: "atoms/keyboard-shortcut", title: "Keyboard Shortcut", Component: KeyboardShortcutDoc },
      { slug: "atoms/label", title: "Label", Component: LabelDoc },
      { slug: "atoms/menubar", title: "Menubar", Component: MenubarDoc },
      { slug: "atoms/mermaid", title: "Mermaid", Component: MermaidDoc },
      { slug: "atoms/nav-menu", title: "Nav Menu", Component: NavMenuDoc },
      { slug: "atoms/navigation-menu", title: "Navigation Menu", Component: NavigationMenuDoc },
      { slug: "atoms/pagination", title: "Pagination", Component: PaginationDoc },
      { slug: "atoms/popover", title: "Popover", Component: PopoverDoc },
      { slug: "atoms/progress", title: "Progress", Component: ProgressDoc },
      { slug: "atoms/radio-group", title: "Radio Group", Component: RadioGroupDoc },
      { slug: "atoms/radio-group-card", title: "Radio Group Card", Component: RadioGroupCardDoc },
      { slug: "atoms/radio-group-stacked", title: "Radio Group Stacked", Component: RadioGroupStackedDoc },
      { slug: "atoms/resizable", title: "Resizable", Component: ResizableDoc },
      { slug: "atoms/scroll-area", title: "Scroll Area", Component: ScrollAreaDoc },
      { slug: "atoms/select", title: "Select", Component: SelectDoc },
      { slug: "atoms/separator", title: "Separator", Component: SeparatorDoc },
      { slug: "atoms/sheet", title: "Sheet", Component: SheetDoc },
      { slug: "atoms/sidebar", title: "Sidebar", Component: SidebarDoc },
      { slug: "atoms/skeleton", title: "Skeleton", Component: SkeletonDoc },
      { slug: "atoms/slider", title: "Slider", Component: SliderDoc },
      { slug: "atoms/sonner", title: "Sonner", Component: SonnerDoc },
      { slug: "atoms/switch", title: "Switch", Component: SwitchDoc },
      { slug: "atoms/table", title: "Table", Component: TableDoc },
      { slug: "atoms/tabs", title: "Tabs", Component: TabsDoc },
      { slug: "atoms/textarea", title: "Textarea", Component: TextareaDoc },
      { slug: "atoms/toggle", title: "Toggle", Component: ToggleDoc },
      { slug: "atoms/toggle-group", title: "Toggle Group", Component: ToggleGroupDoc },
      { slug: "atoms/tooltip", title: "Tooltip", Component: TooltipDoc },
      { slug: "atoms/tree-view", title: "Tree View", Component: TreeViewDoc },
    ],
  },
]

export const flatRoutes: DocRoute[] = docSections.flatMap((s) => s.routes)

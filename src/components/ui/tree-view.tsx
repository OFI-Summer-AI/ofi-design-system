import * as React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TreeNode {
  id: string
  label: React.ReactNode
  icon?: React.ReactNode
  children?: TreeNode[]
}

export interface TreeViewProps
  extends Omit<React.HTMLAttributes<HTMLUListElement>, "onSelect"> {
  data: TreeNode[]
  defaultExpandedIds?: string[]
  selectedId?: string
  onSelect?: (id: string) => void
}

export function TreeView({
  data,
  defaultExpandedIds = [],
  selectedId,
  onSelect,
  className,
  ...props
}: TreeViewProps) {
  return (
    <ul
      role="tree"
      className={cn("flex flex-col text-sm", className)}
      {...props}
    >
      {data.map((node) => (
        <TreeViewNode
          key={node.id}
          node={node}
          level={0}
          defaultExpandedIds={defaultExpandedIds}
          selectedId={selectedId}
          onSelect={onSelect}
        />
      ))}
    </ul>
  )
}

function TreeViewNode({
  node,
  level,
  defaultExpandedIds,
  selectedId,
  onSelect,
}: {
  node: TreeNode
  level: number
  defaultExpandedIds: string[]
  selectedId?: string
  onSelect?: (id: string) => void
}) {
  const [open, setOpen] = React.useState(defaultExpandedIds.includes(node.id))
  const hasChildren = !!node.children?.length
  const selected = selectedId === node.id

  return (
    <li role="treeitem" aria-expanded={hasChildren ? open : undefined}>
      <button
        type="button"
        onClick={() => {
          if (hasChildren) setOpen((v) => !v)
          onSelect?.(node.id)
        }}
        className={cn(
          "flex w-full items-center gap-1.5 rounded-sm px-2 py-1 text-left transition-colors",
          selected
            ? "bg-accent text-foreground"
            : "text-foreground-muted hover:bg-accent/60 hover:text-foreground",
        )}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
      >
        {hasChildren ? (
          <ChevronRight
            className={cn(
              "h-3.5 w-3.5 shrink-0 transition-transform",
              open && "rotate-90",
            )}
          />
        ) : (
          <span className="h-3.5 w-3.5 shrink-0" />
        )}
        {node.icon && (
          <span className="flex h-3.5 w-3.5 items-center justify-center text-foreground-muted [&>svg]:h-3.5 [&>svg]:w-3.5">
            {node.icon}
          </span>
        )}
        <span className="truncate">{node.label}</span>
      </button>
      {hasChildren && open && (
        <ul role="group" className="flex flex-col">
          {node.children!.map((child) => (
            <TreeViewNode
              key={child.id}
              node={child}
              level={level + 1}
              defaultExpandedIds={defaultExpandedIds}
              selectedId={selectedId}
              onSelect={onSelect}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

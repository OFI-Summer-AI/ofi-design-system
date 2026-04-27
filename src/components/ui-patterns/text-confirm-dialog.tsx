import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export interface TextConfirmDialogProps {
  trigger: React.ReactNode
  title: string
  description?: React.ReactNode
  confirmText: string
  confirmLabel?: string
  cancelLabel?: string
  onConfirm?: () => void
}

export function TextConfirmDialog({
  trigger,
  title,
  description,
  confirmText,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
}: TextConfirmDialogProps) {
  const [value, setValue] = React.useState("")
  const [open, setOpen] = React.useState(false)
  const matches = value === confirmText

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o)
        if (!o) setValue("")
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="space-y-2">
          <Label htmlFor="confirm-text">
            Type <span className="font-mono">{confirmText}</span> to confirm
          </Label>
          <Input
            id="confirm-text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
          />
        </div>
        <DialogFooter>
          <Button type="outline" onClick={() => setOpen(false)}>
            {cancelLabel}
          </Button>
          <Button
            type="danger"
            disabled={!matches}
            onClick={() => {
              onConfirm?.()
              setOpen(false)
            }}
          >
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

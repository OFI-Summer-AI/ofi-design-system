import * as React from "react"
import { Plus, Trash2 } from "lucide-react"
import {
  useFieldArray,
  type ArrayPath,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form"
import { FormField, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export interface KeyValueFieldArrayProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>
  name: ArrayPath<TFieldValues>
  keyFieldName: string
  valueFieldName: string
  keyPlaceholder?: string
  valuePlaceholder?: string
  addLabel?: string
  removeLabel?: string
  createEmptyRow: () => Record<string, unknown>
}

export function KeyValueFieldArray<TFieldValues extends FieldValues>({
  control,
  name,
  keyFieldName,
  valueFieldName,
  keyPlaceholder,
  valuePlaceholder,
  addLabel = "Add",
  removeLabel = "Remove",
  createEmptyRow,
}: KeyValueFieldArrayProps<TFieldValues>) {
  const { fields, append, remove } = useFieldArray({ control, name })

  return (
    <div className="flex flex-col gap-2">
      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-col gap-1">
          <div className="flex items-start gap-2">
            <div className="flex-1 flex flex-col gap-1">
              <FormField
                control={control}
                name={
                  `${name}.${index}.${keyFieldName}` as Path<TFieldValues>
                }
                render={({ field: f }) => (
                  <FormControl>
                    <Input {...f} placeholder={keyPlaceholder} />
                  </FormControl>
                )}
              />
              <FormField
                control={control}
                name={
                  `${name}.${index}.${keyFieldName}` as Path<TFieldValues>
                }
                render={() => <FormMessage />}
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <FormField
                control={control}
                name={
                  `${name}.${index}.${valueFieldName}` as Path<TFieldValues>
                }
                render={({ field: f }) => (
                  <FormControl>
                    <Input {...f} placeholder={valuePlaceholder} />
                  </FormControl>
                )}
              />
              <FormField
                control={control}
                name={
                  `${name}.${index}.${valueFieldName}` as Path<TFieldValues>
                }
                render={() => <FormMessage />}
              />
            </div>
            <Button
              type="outline"
              size="tiny"
              icon={<Trash2 />}
              aria-label={removeLabel}
              onClick={() => remove(index)}
            />
          </div>
        </div>
      ))}
      <div>
        <Button
          type="default"
          size="tiny"
          icon={<Plus />}
          onClick={() => append(createEmptyRow() as never)}
        >
          {addLabel}
        </Button>
      </div>
    </div>
  )
}

export interface KeyValueRow {
  [key: string]: unknown
}

export interface KeyValueValidationIssue {
  path: (string | number)[]
  message: string
}

export function getKeyValueFieldArrayValidationIssues<T extends KeyValueRow>({
  rows,
  keyFieldName,
  valueFieldName,
  keyRequiredMessage = "Key is required",
  valueRequiredMessage = "Value is required",
}: {
  rows: T[]
  keyFieldName: string
  valueFieldName: string
  keyRequiredMessage?: string
  valueRequiredMessage?: string
}): KeyValueValidationIssue[] {
  const issues: KeyValueValidationIssue[] = []
  rows.forEach((row, i) => {
    const k = String(row[keyFieldName] ?? "").trim()
    const v = String(row[valueFieldName] ?? "").trim()
    if (!k && !v) return
    if (!k)
      issues.push({ path: [i, keyFieldName], message: keyRequiredMessage })
    if (!v)
      issues.push({
        path: [i, valueFieldName],
        message: valueRequiredMessage,
      })
  })
  return issues
}

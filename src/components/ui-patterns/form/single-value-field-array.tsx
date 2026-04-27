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

export interface SingleValueFieldArrayProps<
  TFieldValues extends FieldValues,
> {
  control: Control<TFieldValues>
  name: ArrayPath<TFieldValues>
  valueFieldName: string
  placeholder?: string
  addLabel?: string
  removeLabel?: string
  createEmptyRow: () => Record<string, unknown>
}

export function SingleValueFieldArray<TFieldValues extends FieldValues>({
  control,
  name,
  valueFieldName,
  placeholder,
  addLabel = "Add",
  removeLabel = "Remove",
  createEmptyRow,
}: SingleValueFieldArrayProps<TFieldValues>) {
  const { fields, append, remove } = useFieldArray({ control, name })

  return (
    <div className="flex flex-col gap-2">
      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <FormField
              control={control}
              name={
                `${name}.${index}.${valueFieldName}` as Path<TFieldValues>
              }
              render={({ field: f }) => (
                <>
                  <FormControl>
                    <Input {...f} placeholder={placeholder} />
                  </FormControl>
                </>
              )}
            />
            <Button
              type="outline"
              size="tiny"
              icon={<Trash2 />}
              aria-label={removeLabel}
              onClick={() => remove(index)}
            />
          </div>
          <FormField
            control={control}
            name={`${name}.${index}.${valueFieldName}` as Path<TFieldValues>}
            render={() => <FormMessage />}
          />
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

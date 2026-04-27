import * as React from "react"

export interface ChartContextValue {
  isLoading: boolean
  isDisabled: boolean
}

export const ChartContext = React.createContext<ChartContextValue>({
  isLoading: false,
  isDisabled: false,
})

export function useChart() {
  return React.useContext(ChartContext)
}

import { createContext, useContext } from 'react'

export const ForecastContext = createContext()

export function useMessage() {
  return useContext(ForecastContext)
}
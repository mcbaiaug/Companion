import { createContext, useContext } from 'react'

export const MessageContext = createContext()

export function useMessage() {
  return useContext(MessageContext)
}

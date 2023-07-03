import { ReactNode, createContext } from 'react'

interface OrderContextType {}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProps) {
  return <OrderContext.Provider value={}>{children}</OrderContext.Provider>
}

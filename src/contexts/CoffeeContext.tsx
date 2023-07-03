import { ReactNode, createContext } from 'react'

interface CoffeeContextType {}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface OrderContextProps {
  children: ReactNode
}

export function CoffeeContextProvider({ children }: OrderContextProps) {
  return <CoffeeContext.Provider value={}>{children}</CoffeeContext.Provider>
}

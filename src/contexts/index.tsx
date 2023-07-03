import { ReactNode } from 'react'

import { OrderContextProvider } from './OrderContext'
import { CoffeeContextProvider } from './CoffeeContext'

interface ContextProviderProps {
  children: ReactNode
}

export function ContextProvider({ children }: ContextProviderProps) {
  return (
    <OrderContextProvider>
      <CoffeeContextProvider>{children}</CoffeeContextProvider>
    </OrderContextProvider>
  )
}

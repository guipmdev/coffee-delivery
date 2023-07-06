import { ReactNode } from 'react'

import { OrderContextProvider } from './OrderContext'
import { CoffeeContextProvider } from './CoffeeContext'

interface ContextProvidersProps {
  children: ReactNode
}

export function ContextProviders({ children }: ContextProvidersProps) {
  return (
    <OrderContextProvider>
      <CoffeeContextProvider>{children}</CoffeeContextProvider>
    </OrderContextProvider>
  )
}

import { ReactNode, createContext, useReducer } from 'react'
import { Order, orderReducer } from '../reducers/orders/reducer'
import {
  addNewCoffeeAction,
  removeCoffeeAction,
} from '../reducers/orders/actions'

interface OrderContextType {
  order: Order
  addCoffeeToOrder: (coffeeId: string, quantity: number) => void
  removeCoffeeFromOrder: (coffeeId: string) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProps) {
  const [order, dispatch] = useReducer(orderReducer, {
    coffees: [],
    totalQuantity: 0,
  })

  function addCoffeeToOrder(coffeeId: string, quantity: number) {
    dispatch(addNewCoffeeAction(coffeeId, quantity))
  }

  function removeCoffeeFromOrder(coffeeId: string) {
    dispatch(removeCoffeeAction(coffeeId))
  }

  return (
    <OrderContext.Provider
      value={{ order, addCoffeeToOrder, removeCoffeeFromOrder }}
    >
      {children}
    </OrderContext.Provider>
  )
}

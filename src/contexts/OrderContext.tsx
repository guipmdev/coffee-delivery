import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Order, orderReducer } from '../reducers/orders/reducer'
import {
  addNewCoffeeAction,
  modifyCoffeeQuantityAction,
  removeCoffeeAction,
} from '../reducers/orders/actions'

interface OrderContextType {
  order: Order
  addCoffeeToOrder: (coffeeId: string, quantity: number) => void
  removeCoffeeFromOrder: (coffeeId: string) => void
  modifyCoffeeQuantityInOrder: (
    coffeeId: string,
    modifyAction: 'increase' | 'decrease',
  ) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProps) {
  const [order, dispatch] = useReducer(
    orderReducer,
    {
      coffees: [],
      totalQuantity: 0,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:order-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(order)

    localStorage.setItem('@coffee-delivery:order-state-1.0.0', stateJSON)
  }, [order])

  function addCoffeeToOrder(coffeeId: string, quantity: number) {
    dispatch(addNewCoffeeAction(coffeeId, quantity))
  }

  function modifyCoffeeQuantityInOrder(
    coffeeId: string,
    modifyAction: 'increase' | 'decrease',
  ) {
    dispatch(modifyCoffeeQuantityAction(coffeeId, modifyAction))
  }

  function removeCoffeeFromOrder(coffeeId: string) {
    dispatch(removeCoffeeAction(coffeeId))
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        addCoffeeToOrder,
        modifyCoffeeQuantityInOrder,
        removeCoffeeFromOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

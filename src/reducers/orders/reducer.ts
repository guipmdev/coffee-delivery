import { produce } from 'immer'

import { ActionTypes } from './actions'

interface Coffee {
  id: string
  quantity: number
}

export interface Order {
  coffees: Coffee[]
  totalQuantity: number
}

export type PaymentMethod = 'credit-card' | 'debit-card' | 'money'

export interface OrderPayload extends Order {
  totalPrice: number
  deliveryCost: number
  totalPriceWithDelivery: number
  address: {
    cep: string
    street: string
    number: string
    complement: undefined | string
    neighborhood: string
    city: string
    state: string
  }
  paymentMethod: PaymentMethod
}

type OrderState = Order

export function orderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      const { coffeeId, quantity } = action.payload

      const foundCoffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === coffeeId,
      )

      return produce(state, (draft) => {
        if (foundCoffeeIndex >= 0) {
          draft.coffees[foundCoffeeIndex].quantity += quantity
        } else {
          const newCoffee: Coffee = {
            id: coffeeId,
            quantity,
          }

          draft.coffees.push(newCoffee)
        }

        draft.totalQuantity += quantity
      })
    }

    case ActionTypes.MODIFY_COFFEE_QUANTITY: {
      const { modifyAction, coffeeId } = action.payload

      const foundCoffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === coffeeId,
      )

      if (foundCoffeeIndex < 0) return state

      const quantityModifier = modifyAction === 'increase' ? 1 : -1

      return produce(state, (draft) => {
        draft.coffees[foundCoffeeIndex].quantity += quantityModifier
        draft.totalQuantity += quantityModifier
      })
    }

    case ActionTypes.REMOVE_COFFEE: {
      const { coffeeId } = action.payload

      const foundCoffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === coffeeId,
      )

      if (foundCoffeeIndex < 0) return state

      const { quantity } = state.coffees[foundCoffeeIndex]

      return produce(state, (draft) => {
        draft.totalQuantity -= quantity
        draft.coffees.splice(foundCoffeeIndex, 1)
      })
    }

    case ActionTypes.FINISH_ORDER: {
      const { orderPayload } = action.payload

      console.log(orderPayload) // Just for representation purposes

      return produce(state, (draft) => {
        draft.totalQuantity = 0
        draft.coffees = []
      })
    }

    default:
      return state
  }
}

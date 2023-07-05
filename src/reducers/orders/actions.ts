/* eslint-disable no-unused-vars */

import { OrderPayload } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  MODIFY_COFFEE_QUANTITY = 'MODIFY_COFFEE_QUANTITY',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  FINISH_ORDER = 'FINISH_ORDER',
}

export function addNewCoffeeAction(coffeeId: string, quantity: number) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: { coffeeId, quantity },
  }
}

export function modifyCoffeeQuantityAction(
  coffeeId: string,
  modifyAction: 'increase' | 'decrease',
) {
  return {
    type: ActionTypes.MODIFY_COFFEE_QUANTITY,
    payload: { modifyAction, coffeeId },
  }
}

export function removeCoffeeAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: { coffeeId },
  }
}

export function finishOrderAction(orderPayload: OrderPayload) {
  return {
    type: ActionTypes.FINISH_ORDER,
    payload: { orderPayload },
  }
}

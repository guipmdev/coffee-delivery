/* eslint-disable no-unused-vars */

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  MODIFY_COFFEE_QUANTITY = 'MODIFY_COFFEE_QUANTITY',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
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

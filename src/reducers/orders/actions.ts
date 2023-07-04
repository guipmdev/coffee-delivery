/* eslint-disable no-unused-vars */

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

export function addNewCoffeeAction(coffeeId: string, quantity: number) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: { coffeeId, quantity },
  }
}

export function removeCoffeeAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: { coffeeId },
  }
}

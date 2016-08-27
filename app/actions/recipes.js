import * as types from './types'

export function addRecipe() {
  return {
    type: types.ADD_RECIPE
  }
}

export function removeRecipe() {
  return {
    type: types.REMOVE_RECIPE
  }
}
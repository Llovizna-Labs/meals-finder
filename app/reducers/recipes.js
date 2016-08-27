import createReducer from '../lib/createReducer'
import * as types from '../actions/types'


export const searchedReducers = createReducer([], {})


export const recipeCount = createReducer(0, {
  [types.ADD_RECIPE](state, action){return state + 1},
  [types.REMOVE_RECIPE](state, action){return state - 1},
})
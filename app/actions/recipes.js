import * as types from './types'
import API from '../lib/api'
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

export function fetchRecipes(ingredients) {
  return (dispatch, getState) => {
    console.log(getState())
    const params = [
      `i=${encodeURIComponent(ingredients)}`,
    ].join('&')
    
    return API.get(`/api/?${params}`).then((res) => {
      dispatch(setSearchedRecipes(res))
    }).catch((err) => {
      console.log(err)
    })
  }
}

function setSearchedRecipes(recipes) {
  return {
    type: types.SET_SEARCHED_RECIPES,
    recipes
  }
}
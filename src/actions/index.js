import { ADD_OBJECTIVE, UPDATE_OBJECTIVE, SET_USER } from './types'

export const addObjective = (objective) => {
  return {
    type: ADD_OBJECTIVE,
    payload: {
      objective
    }
  }
}

export const updateObjective = (updatedIndex, updatedObjective) => {
  return {
    type: UPDATE_OBJECTIVE,
    payload: {
      updatedIndex,
      updatedObjective
    }
  }
}

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: {
      user
    }
  }
}

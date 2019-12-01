import { ADD_OBJECTIVE, UPDATE_OBJECTIVE } from './types'

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

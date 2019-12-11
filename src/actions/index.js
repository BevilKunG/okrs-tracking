import { SET_OBJECTIVES,
        ADD_OBJECTIVE,
        UPDATE_OBJECTIVE,
        DELETE_OBJECTIVE,
        SET_USER,
        SET_USER_NAME } from './types'

export const setObjectives = (objectives) => {
  return {
    type: SET_OBJECTIVES,
    payload: {
      objectives
    }
  }
}

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

export const deleteObjective = (deletedIndex) => {
  return {
    type: DELETE_OBJECTIVE,
    payload: {
      deletedIndex
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

export const setUserName = (userName) => {
  return {
    type: SET_USER_NAME,
    payload: {
      userName
    }
  }
}

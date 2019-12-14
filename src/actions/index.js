import { SET_OBJECTIVES,
        ADD_OBJECTIVE,
        UPDATE_OBJECTIVE,
        DELETE_OBJECTIVE,
        SET_USER,
        SET_USER_NAME,
        SET_LOADING,
        SET_DEMO,
        ADD_DEMO,
        UPDATE_DEMO,
        DELETE_DEMO } from './types'

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

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    payload: {
      loading
    }
  }
}

export const setDemo = (objectives) => {
  return {
    type: SET_DEMO,
    payload: {
      objectives
    }
  }
}

export const addDemo = (objective) => {
  return {
    type: ADD_DEMO,
    payload: {
      objective
    }
  }
}

export const updateDemo = (updatedIndex, updatedObjective) => {
  return {
    type: UPDATE_DEMO,
    payload: {
      updatedIndex,
      updatedObjective
    }
  }
}

export const deleteDemo = (deletedIndex) => {
  return {
    type: DELETE_DEMO,
    payload: {
      deletedIndex
    }
  }
}

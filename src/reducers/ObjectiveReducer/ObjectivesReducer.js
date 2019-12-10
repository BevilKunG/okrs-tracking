import { SET_OBJECTIVES, ADD_OBJECTIVE, UPDATE_OBJECTIVE } from '../../actions/types'

export default (state = [], action) => {
  switch(action.type) {
    case SET_OBJECTIVES: return action.payload.objectives
    case ADD_OBJECTIVE: return [...state, action.payload.objective]
    case UPDATE_OBJECTIVE: {
      return [
      ...state.slice(0, action.payload.updatedIndex),
      action.payload.updatedObjective,
      ...state.slice(action.payload.updatedIndex + 1)
      ]
    }
    default: return state
  }
}

import { SET_DEMO, ADD_DEMO, UPDATE_DEMO, DELETE_DEMO } from '../../actions/types'

export default (state = [], action) => {
  switch(action.type) {
    case SET_DEMO: return [...action.payload.objectives]
    case ADD_DEMO: return [...state, action.payload.objective]
    case UPDATE_DEMO: return [
      ...state.slice(0, action.payload.updatedIndex),
      action.payload.updatedObjective,
      ...state.slice(action.payload.updatedIndex + 1)
    ]
    case DELETE_DEMO: return [
      ...state.slice(0, action.payload.deletedIndex),
      ...state.slice(action.payload.deletedIndex + 1)
    ]
    default: return state
  }
}

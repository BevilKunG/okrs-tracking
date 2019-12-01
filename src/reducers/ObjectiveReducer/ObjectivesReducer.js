import { ADD_OBJECTIVE, UPDATE_OBJECTIVE } from '../../actions/types'
import { mockObjective } from './ObjectiveMock'

export default (state = [mockObjective], action) => {
  switch(action.type) {
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

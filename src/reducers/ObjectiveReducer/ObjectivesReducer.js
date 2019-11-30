import { ADD_OBJECTIVE } from '../../actions/types'
import { mockObjective } from './ObjectiveMock'

export default (state = [mockObjective], action) => {
  switch(action.type) {
    case ADD_OBJECTIVE: return [...state, action.objective]
  }
  return state
}

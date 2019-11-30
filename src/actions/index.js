import { ADD_OBJECTIVE } from './types'

export const addObjective = (objective) => {
  return {
    type: ADD_OBJECTIVE,
    objective
  }
}

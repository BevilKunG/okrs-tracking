import { SET_LOADING } from '../../actions/types'

export default (state = false, action) => {
  switch(action.type) {
    case SET_LOADING: return action.payload.loading
    default: return state
  }
}

import { SET_USER } from '../../actions/types'

export default (state = null, action) => {
  switch(action.type) {
    case SET_USER: return action.payload.user
    default: return state
  }
}

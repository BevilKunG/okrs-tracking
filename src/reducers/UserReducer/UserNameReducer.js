import { SET_USER_NAME } from '../../actions/types'

export default (state = '', action) => {
  switch(action.type) {
    case SET_USER_NAME: return action.payload.userName
    default: return state
  }
}

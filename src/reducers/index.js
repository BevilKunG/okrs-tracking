import { combineReducers } from 'redux'
import userReducer from './UserReducer/UserReducer'
import userNameReducer from './UserReducer/UserNameReducer'
import objectivesReducer from './ObjectiveReducer/ObjectivesReducer'

export default combineReducers({
  user: userReducer,
  userName: userNameReducer,
  objectives: objectivesReducer
})

import { combineReducers } from 'redux'
import userReducer from './UserReducer/UserReducer'
import objectivesReducer from './ObjectiveReducer/ObjectivesReducer'

export default combineReducers({
  user: userReducer,
  objectives: objectivesReducer
})

import { combineReducers } from 'redux'
import userReducer from './UserReducer/UserReducer'
import userNameReducer from './UserReducer/UserNameReducer'
import objectivesReducer from './ObjectiveReducer/ObjectivesReducer'
import loadingReducer from './LoadingReducer/LoadingReducer'
import demoReducer from './DemoReducer/DemoReducer'

export default combineReducers({
  user: userReducer,
  userName: userNameReducer,
  objectives: objectivesReducer,
  loading: loadingReducer,
  demoObjectives: demoReducer
})

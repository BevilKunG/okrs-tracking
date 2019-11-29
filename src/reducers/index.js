import { combineReducers } from 'redux'
import objectivesReducer from './ObjectiveReducer/ObjectivesReducer'

export default combineReducers({
  objectives: objectivesReducer
})

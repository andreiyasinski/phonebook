import { combineReducers } from 'redux'
import records from './records'
import addFormVisibilityFilter from './addFormVisibilityFilter'

const phoneBookApp = combineReducers({
  records,
  addFormVisibilityFilter
})

export default phoneBookApp
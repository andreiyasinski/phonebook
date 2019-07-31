import { combineReducers } from 'redux'
import records from './records'
import formVisibilityFilter from './formVisibilityFilter'

const phoneBookApp = combineReducers({
  records,
  formVisibilityFilter
})

export default phoneBookApp
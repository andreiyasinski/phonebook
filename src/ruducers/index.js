import { combineReducers } from 'redux';
import records from './records';
//import addFormVisibilityFilter from './addFormVisibilityFilter'

const phoneBookApp = combineReducers({
  records
})

export default phoneBookApp
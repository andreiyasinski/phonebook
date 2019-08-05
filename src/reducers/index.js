import { combineReducers } from 'redux';
import records from './records.reducer';
//import addFormVisibilityFilter from './addFormVisibilityFilter'

const phoneBookApp = combineReducers({
  records
})

export default phoneBookApp
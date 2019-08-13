import { combineReducers } from 'redux';
import editingRecord from './editingRecord.reducer';
import records from './records.reducer';

const phoneBookApp = combineReducers({
  editingRecord,
  records
})

export default phoneBookApp
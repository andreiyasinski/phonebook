import { ADD_RECORD, DELETE_RECORD, EDIT_RECORD } from '../actions';

const records = (state = [], action) => {
  switch (action.type) {
    case ADD_RECORD:
      return [
        ...state,
        action.payload
      ]
    case EDIT_RECORD:
      return state.map(record => {
        if(record.id === action.payload.id) {
          return action.payload;
        }
        return record;
      })
    case DELETE_RECORD:
      return state.filter(record => record.id !== action.payload)
    default:
      return state
  }
}

export default records



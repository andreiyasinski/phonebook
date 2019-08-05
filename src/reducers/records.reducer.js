import { ADD_RECORD, DELETE_RECORD } from '../actions';

const records = (state = [], action) => {
  switch (action.type) {
    case ADD_RECORD:
      return [
        ...state,
        action.payload
      ]
    case DELETE_RECORD:
      return state.filter(record => record.id !== action.payload)
    default:
      return state
  }
}

export default records



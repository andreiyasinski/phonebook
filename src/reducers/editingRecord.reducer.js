import { SET_EDITING_RECORD } from '../actions';

const editingRecord = (state = '', action) => {
  switch (action.type) {
    case SET_EDITING_RECORD:
      return action.payload.id
    default:
      return state
  }
}

export default editingRecord